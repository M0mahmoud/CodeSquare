async function getData() {
  const res = await fetch("http://localhost:8000/v1/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log("data:", data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-semibold text-blue-700">CoderSquares</h1>
    </main>
  );
}
