import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-slate-100 px-6 text-center text-slate-950">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-normal text-blue-700">
          Reusable visual editor foundation
        </p>
        <h1 className="text-5xl font-black leading-tight">
          Elementor-like Page Builder
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Build pages from structured JSON with reusable widgets, responsive
          controls, local persistence, history, and a renderer that can run
          outside the editor.
        </p>
      </div>
      <Link
        className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
        href="/editor"
      >
        Open Editor
      </Link>
    </main>
  );
}
