'use client';

export default function SellingPoints() {
  const points = [
    { icon: '✅', text: 'Hands-on from the first minute' },
    { icon: '🧠', text: 'Learn why it works, not just what to type' },
    { icon: '🔒', text: 'Safe command sandbox \u2013 practice without fear' },
    {
      icon: '⚙️',
      text: 'Languages covered: Bash, C, Assembly (with more coming)',
    },
    { icon: '🧑\u200d💻', text: 'For future hackers, engineers & makers' },
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
            <span className="text-2xl" aria-hidden="true">{icon}</span>
            <p className="font-sans leading-snug">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
