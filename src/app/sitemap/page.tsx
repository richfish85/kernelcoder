import Link from 'next/link';

export default function SitemapPage() {
  const medium = 'https://medium.com/@richfish85/';
  return (
    <main id="main" className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Sitemap</h1>
      <ul className="list-disc ml-6 space-y-1">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/catalogue">Catalogue</Link></li>
        <li>
          <a href={medium} target="_blank" rel="noopener noreferrer">
            Articles
          </a>
        </li>
        <li><Link href="/about">About / Contact</Link></li>
      </ul>
      <h2 className="text-xl font-semibold">Explore by:</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <h3 className="font-semibold">Languages</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>Bash</li>
            <li>C</li>
            <li>Assembly</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Subjects</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>Memory</li>
            <li>Syscalls</li>
            <li>Shells</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Articles</h3>
          <a href={medium} target="_blank" rel="noopener noreferrer" className="underline">
            Medium Posts
          </a>
        </div>
      </div>
    </main>
  );
}

