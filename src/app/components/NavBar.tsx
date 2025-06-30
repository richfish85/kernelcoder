import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <header className="border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4" aria-label="Main navigation">
        <Link href="/" className="text-lg font-semibold hover:text-blue-500">
          KernelCoder
        </Link>
        <ul className="hidden gap-6 md:flex">
          <li>
            <Link href="#" className="hover:text-blue-500">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-500">
              Catalogue
            </Link>
          </li>
          <li>
            <Link href="/editor" className="rounded-md bg-blue-500 px-3 py-1.5 text-white hover:bg-blue-600">
              Try Demo
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-500 flex items-center gap-1">
              Subjects <FontAwesomeIcon icon={faAngleDown} aria-hidden="true" />
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-500">
              Blog
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <Link href="#" className="hover:text-blue-500">
            Login
          </Link>
          <Link href="#" className="hover:text-blue-500">
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
