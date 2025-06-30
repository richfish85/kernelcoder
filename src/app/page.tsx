import Link from "next/link";

export default function Home() {
  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center"
    >
      <h1 className="text-4xl font-semibold tracking-tight">KernelCoder</h1>
      <p className="text-lg max-w-prose text-balance">
        Learn from the bottom up. Code from the core.
      </p>
      <Link
          href="/sandbox"
          className="rounded-md bg-foreground text-background px-6 py-3 font-medium hover:bg-opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          Get Started
        </Link>
    </main>
  );
}
