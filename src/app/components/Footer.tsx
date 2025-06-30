import Link from 'next/link';

export default function Footer() {
  const medium = 'https://medium.com/@richfish85/';
  return (
    <footer className="border-t border-gray-200 bg-gray-100 dark:bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl p-6 grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-sm">
        <div className="space-y-2">
          <h3 className="font-semibold">KernelCoder</h3>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/catalogue">Catalogue</Link></li>
            <li><a href={medium} target="_blank" rel="noopener noreferrer">Articles</a></li>
            <li><Link href="/about">About / Contact</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Explore by Language</h3>
          <ul className="space-y-1">
            <li>Bash</li>
            <li>C</li>
            <li>Assembly</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Explore by Subject</h3>
          <ul className="space-y-1">
            <li>Memory</li>
            <li>Syscalls</li>
            <li>Shells</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">More</h3>
          <ul className="space-y-1">
            <li><Link href="/sitemap">Sitemap</Link></li>
            <li><a href={medium} target="_blank" rel="noopener noreferrer">Medium Posts</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs py-4">&copy; {new Date().getFullYear()} KernelCoder</p>
    </footer>
  );
}

