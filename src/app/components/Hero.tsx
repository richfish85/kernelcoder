'use client';
import { useState, useEffect } from 'react';

export default function Hero() {
  const taglines = [
    'We teach how it works, not just what to type.',
    'Learn low-level programming the smart way.',
    'Try real commands in real sandboxes. No lectures. No fluff.',
    'Your path from beginner to bit-level mastery starts here.',
    'Hack the kernel, step by step.',
    'Hands-on labs for C, Bash, and Assembly.',
    'Build a solid foundation for systems programming.',
    'Grow from newbie to pro with focused practice.',
    'Interactive lessons that go beyond theory.',
    'Master the tools every developer should know.'
  ];

  const [index, setIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [signup, setSignup] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(id);
  }, [taglines.length]);

  return (
    <section className="relative flex flex-col md:flex-row min-h-screen items-center justify-center p-8 gap-8">
      <div className="w-full md:w-1/2 space-y-6 text-left">
        <div className="h-24 relative overflow-hidden">
          {taglines.map((line, i) => (
            <p
              key={line}
              className={`font-mono text-3xl whitespace-nowrap absolute inset-0 flex items-center transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            >
              {line}
            </p>
          ))}
        </div>
        <p className="text-lg font-sans">A modern playground for Bash, C, and Assembly learners.</p>
      </div>
      <div className="w-full md:w-1/2 relative flex flex-col items-center justify-center">
        <img src="/hero_right_bottom.jpeg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-70 blur-sm" />
        <img src="/hero_right_top.png" alt="Terminal sandbox example" className="relative z-10 shadow-xl" />
        <button
          onClick={() => setShowForm(true)}
          className="relative z-20 mt-4 rounded-md px-6 py-3 font-medium text-black bg-[#FDD835] hover:bg-[#e6c62f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Try It Now
        </button>
        <span className="relative z-20 text-sm mt-2">No account required</span>
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowForm(false)}>
            <div className="bg-background text-foreground p-6 rounded-md shadow-lg w-80" onClick={(e) => e.stopPropagation()}>
              <div className="flex mb-4 border-b border-gray-200">
                <button
                  onClick={() => setSignup(false)}
                  className={`flex-1 p-2 ${!signup ? 'border-b-2 border-[#FDD835]' : ''}`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setSignup(true)}
                  className={`flex-1 p-2 ${signup ? 'border-b-2 border-[#FDD835]' : ''}`}
                >
                  Sign Up
                </button>
              </div>
              <form className="space-y-4">
                <label className="block">
                  <span className="sr-only">Email</span>
                  <input type="email" placeholder="Email" className="w-full rounded border border-gray-300 p-2 bg-transparent" />
                </label>
                <label className="block">
                  <span className="sr-only">Password</span>
                  <input type="password" placeholder="Password" className="w-full rounded border border-gray-300 p-2 bg-transparent" />
                </label>
                <div className="flex items-center gap-2">
                  <input id="remember" type="checkbox" className="rounded" />
                  <label htmlFor="remember" className="text-sm">Remember Me</label>
                </div>
                <button type="submit" className="w-full rounded-md px-4 py-2 bg-[#FDD835] text-black hover:bg-[#e6c62f]">
                  {signup ? 'Get Started' : 'Continue'}
                </button>
                <a href="#" className="block text-sm text-right underline">Forgot Password</a>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
