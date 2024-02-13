import ListPosts from "@/components/post/ListPosts";

export default async function Home() {
  return (
    <main className="py-6 sm:px-4">
      <ListPosts />
    </main>
  );
}
