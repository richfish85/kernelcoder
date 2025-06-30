'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faBrain,
  faLock,
  faCog,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';

export default function SellingPoints() {
  const points = [
    { icon: faLaptopCode, text: 'Hands-on from the first minute' },
    { icon: faBrain, text: 'Learn why it works, not just what to type' },
    { icon: faLock, text: 'Safe command sandbox – practice without fear' },
    { icon: faCog, text: 'Languages covered: Bash, C, Assembly (with more coming)' },
    { icon: faUserSecret, text: 'For future hackers, engineers & makers' },
  ];

  return (
    <section className="py-12" aria-labelledby="selling-heading">
      <h2
        id="selling-heading"
        className="mb-8 text-center text-2xl font-bold tracking-tight"
      >
        Why KernelCoder?
      </h2>
      <div className="mx-auto max-w-5xl grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {points.map(({ icon, text }) => (
          <div
            key={text}
            className="flex items-start gap-3 rounded-lg bg-gray-100 p-4 shadow-sm dark:bg-gray-800"
          >
            <FontAwesomeIcon icon={icon} className="text-xl mt-1" aria-hidden="true" />
            <p className="font-sans leading-snug">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
