'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const size = button.offsetWidth;
    const pos = button.getBoundingClientRect();
    const x = e.clientX - pos.left;
    const y = e.clientY - pos.top;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x - size / 2}px`;
    ripple.style.top = `${y - size / 2}px`;
    ripple.className = 'absolute bg-black/10 rounded-full animate-[ripple_600ms_linear] pointer-events-none';

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

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
    'Master the tools every developer should know.',
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
    <section className="relative flex flex-col md:flex-row min-h-screen items-center justify-between px-6 md:px-12 py-10 gap-8">
      {/* Left Text Content */}
      <div className="w-full md:w-1/2 space-y-6 text-left z-10">
        <h1
          key={index}
          className="text-4xl font-mono text-white transition-opacity duration-500 ease-in-out opacity-100"
        >
          {taglines[index]}
        </h1>
        <p className="text-lg font-sans">A modern playground for Bash, C, and Assembly learners.</p>
      </div>

      {/* Right Visual Stack */}
        {/* Background coder image */}
        <Image
          src="/hero_right_bottom.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute blur-sm inset-0 h-full w-full object-cover opacity-70 rounded-xl"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
        />
<div className="relative w-full md:w-1/2 h-auto flex flex-col items-center justify-end gap-4 md:gap-6 pb-6 md:pb-12 z-0">

        {/* Foreground terminal and CTA */}
        <div className="relative z-10 flex flex-col items-center gap-4 p-4 md:p-8">
          {/* <Image
            src="/hero_right_top.png"
            alt="Terminal sandbox"
            className="absolute bottom-6 left-6 md:bottom-8 md:left-8 w-[512px] md:w-[360px] shadow-2xl rounded-md"
            width={720}
            height={512}
            priority
          /> */}

          <button
            onClick={(e) => {
              handleRipple(e);
              setShowForm(true);
            }}
            className="relative mt-4 rounded-md px-6 py-3 font-medium text-black bg-[#FDD835] hover:bg-[#e6c62f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 btn-ripple"
          >
            Try It Now
          </button>
          <span className="text-sm">No account required</span>
        </div>
      </div>

      {/* Sign In / Sign Up Modal */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowForm(false)}
        >
          <div
            className="bg-background text-foreground p-6 rounded-md shadow-lg w-80"
            onClick={(e) => e.stopPropagation()}
          >
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
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded border border-gray-300 p-2 bg-transparent"
                />
              </label>
              <label className="block">
                <span className="sr-only">Password</span>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded border border-gray-300 p-2 bg-transparent"
                />
              </label>
              <div className="flex items-center gap-2">
                <input id="remember" type="checkbox" className="rounded" />
                <label htmlFor="remember" className="text-sm">
                  Remember Me
                </label>
              </div>
              <button
                type="submit"
                className="w-full rounded-md px-4 py-2 bg-[#FDD835] text-black hover:bg-[#e6c62f]"
              >
                {signup ? 'Get Started' : 'Continue'}
              </button>
              <a href="#" className="block text-sm text-right underline">
                Forgot Password
              </a>
            </form>
          </div>
        </div>
      )}
    </section>
  
  );

}
