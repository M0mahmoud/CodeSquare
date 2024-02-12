import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import { listPosts } from "./action";

export default async function Home() {
  const data = await listPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ModeToggle />
      </div>
      <h1 className="text-2xl font-semibold text-blue-700">CoderSquares</h1>
      <div>
        {data.posts.map((post) => (
          <Link
            key={post.id}
            className="border border-blue-500 py-2 px-3"
            href={post.url}
          >
            {post.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
