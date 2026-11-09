// Type tests: compiled by `bun run check-types`, never run.
import {
  Notra,
  type CreatePostParams,
  type GeoProject,
  type ListProjectsResult,
  type NotraChatChunk,
  type NotraStream,
} from "../../src/index.js";

const notra = new Notra();

export async function usage(): Promise<void> {
  // No parameters at all.
  const projects: ListProjectsResult = await notra.geo.listProjects();
  const first: GeoProject | undefined = projects.projects[0];
  void first;

  // Optional query parameters may be left out.
  await notra.content.listPosts();
  await notra.content.listPosts({ limit: 10, sort: "asc" });

  // @ts-expect-error path parameters are required
  await notra.content.getPost();
  // @ts-expect-error unknown parameters are rejected
  await notra.content.getPost({ postId: "p", nope: true });
  // @ts-expect-error enums are checked
  await notra.content.listPosts({ sort: "sideways" });

  // The body goes under `body`.
  const body: CreatePostParams["body"] = { title: "Hello", contentType: "changelog" };
  await notra.content.createPost({ body });
  // @ts-expect-error required body fields are checked
  await notra.content.createPost({ body: { title: "Hello" } });
  // @ts-expect-error a required body can't be left out
  await notra.content.createPost({});

  // Streaming endpoints resolve to a typed stream.
  const stream: NotraStream<NotraChatChunk> = await notra.chats.createChat({ body: { message: "Hi" } });
  for await (const chunk of stream) {
    const type: string = chunk.type;
    const delta: string | undefined = chunk.delta;
    void type;
    void delta;
  }

  // Per-request options.
  await notra.geo.listProjects({ signal: AbortSignal.timeout(1000), maxRetries: 0 });
}
