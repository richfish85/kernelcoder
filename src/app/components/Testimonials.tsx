'use client';
import Image from 'next/image';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Alex J.',
      quote: 'I finally understand what pointers are doing under the hood.',
      img: 'https://i.pravatar.cc/80?img=10',
    },
    {
      name: 'Mia L.',
      quote:
        'The interactive shell taught me more in 1 hour than 3 weeks of online tutorials.',
      img: 'https://i.pravatar.cc/80?img=20',
    },
    {
      name: 'Samir P.',
      quote: 'Wish I had this before my first internship!',
      img: 'https://i.pravatar.cc/80?img=30',
    },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-[#111]" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" className="mb-8 text-center text-2xl font-bold tracking-tight">
        What Learners Say
      </h2>
      <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-3">
        {reviews.map(({ name, quote, img }) => (
          <figure key={name} className="flex flex-col items-center text-center space-y-4">
            <Image
              src={img}
              alt={`Avatar of ${name}`}
              width={64}
              height={64}
              className="h-16 w-16 rounded-full"
            />
            <blockquote className="font-serif italic">“{quote}”</blockquote>
            <figcaption className="font-medium">{name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
