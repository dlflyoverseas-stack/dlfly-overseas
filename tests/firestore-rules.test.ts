import { readFileSync } from "node:fs";
import { beforeAll, afterAll, beforeEach, describe, it } from "vitest";
import {
  initializeTestEnvironment,
  assertFails,
  assertSucceeds,
  type RulesTestEnvironment,
} from "@firebase/rules-unit-testing";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  setDoc,
  Timestamp,
  where,
  updateDoc,
  deleteDoc,
  setLogLevel,
} from "firebase/firestore";
let environment: RulesTestEnvironment;
const article = {
  title: "Test study planning article",
  slug: "test-study-planning",
  excerpt: "A complete and useful summary for this test article.",
  body: "A practical preparation guide with enough content to explain a complete study planning process for students.",
  category: "Study abroad",
  coverUrl: "/images/dlfly-study.jpg",
  published: true,
  createdAt: Timestamp.now(),
  updatedAt: Timestamp.now(),
};
beforeAll(async () => {
  setLogLevel("silent");
  environment = await initializeTestEnvironment({
    projectId: "demo-dlfly-overseas",
    firestore: { rules: readFileSync("firestore.rules", "utf8"), host: "127.0.0.1", port: 8080 },
  });
});
afterAll(async () => {
  await environment?.cleanup();
});
beforeEach(async () => {
  await environment.clearFirestore();
});
function admin(
  email = "dlflyoverseas@gmail.com",
  verified = true,
  provider: "google.com" | "password" = "google.com",
) {
  return environment
    .authenticatedContext(email, {
      email,
      email_verified: verified,
      firebase: { sign_in_provider: provider },
    })
    .firestore();
}
describe("Firestore content protection", () => {
  it("allows the approved admin to create, edit and delete content", async () => {
    const target = doc(admin(), "articles", article.slug);
    await assertSucceeds(setDoc(target, article));
    await assertSucceeds(updateDoc(target, { title: "Updated study planning article" }));
    await assertSucceeds(deleteDoc(target));
  });
  it("blocks other accounts, unverified email and non-Google authentication", async () => {
    for (const db of [
      admin("other@gmail.com"),
      admin(undefined, false),
      admin(undefined, true, "password"),
      environment.unauthenticatedContext().firestore(),
    ])
      await assertFails(setDoc(doc(db, "articles", article.slug), article));
  });
  it("publishes only approved content and keeps drafts private", async () => {
    await environment.withSecurityRulesDisabled(async (context) => {
      await setDoc(doc(context.firestore(), "articles", article.slug), article);
      await setDoc(doc(context.firestore(), "articles", "draft-article"), {
        ...article,
        slug: "draft-article",
        published: false,
      });
    });
    const publicDb = environment.unauthenticatedContext().firestore();
    await assertSucceeds(getDoc(doc(publicDb, "articles", article.slug)));
    await assertFails(getDoc(doc(publicDb, "articles", "draft-article")));
    await assertSucceeds(
      getDocs(query(collection(publicDb, "articles"), where("published", "==", true), limit(100))),
    );
    await assertFails(getDocs(collection(publicDb, "articles")));
    await assertSucceeds(getDoc(doc(admin(), "articles", "draft-article")));
  });
  it("rejects malformed documents and mismatched article URLs", async () => {
    await assertFails(setDoc(doc(admin(), "articles", "wrong-url"), article));
    await assertFails(
      setDoc(doc(admin(), "articles", article.slug), {
        ...article,
        coverUrl: "javascript:alert(1)",
      }),
    );
    await assertFails(
      setDoc(doc(admin(), "articles", article.slug), { ...article, injected: "extra-field" }),
    );
  });
  it("wires gallery images, video embeds and public settings with admin-only writes", async () => {
    const db = admin();
    await assertSucceeds(
      setDoc(doc(db, "gallery", "image"), {
        title: "Campus image",
        imageUrl: "/images/dlfly-study.jpg",
        alt: "Students on a university campus",
        caption: "Study planning",
        published: true,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      }),
    );
    await assertSucceeds(
      setDoc(doc(db, "videos", "video"), {
        title: "Video guide",
        youtubeUrl: "https://youtu.be/dQw4w9WgXcQ",
        description: "Helpful video",
        published: false,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      }),
    );
    const settings = {
      logoUrl: "",
      address: "Office appointment by phone",
      mapsEmbedUrl: "https://www.google.com/maps?q=DLFLY&output=embed",
      ga4Id: "",
      clarityId: "",
      searchConsoleVerification: "",
    };
    await assertSucceeds(setDoc(doc(db, "settings", "site"), settings));
    await assertSucceeds(
      getDoc(doc(environment.unauthenticatedContext().firestore(), "settings", "site")),
    );
    await assertFails(setDoc(doc(admin("other@gmail.com"), "settings", "site"), settings));
  });
});
