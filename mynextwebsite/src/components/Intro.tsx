'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Intro() {
  const [typedText, setTypedText] = useState('');
  const textToType = "Full Stack Developer 🖥️ & Server Administrator 🛠️";
  const typingSpeed = 100;

  useEffect(() => {
    // Check if we've shown the typing effect before
    const hasShownTyping = localStorage.getItem('hasShownTyping');
    
    if (hasShownTyping) {
      // If we've shown it before, just set the full text immediately
      setTypedText(textToType);
      return;
    }

    let currentIndex = 0;
    setTypedText('');
    const typingInterval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setTypedText(textToType.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Mark that we've shown the typing effect
        localStorage.setItem('hasShownTyping', 'true');
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="rounded-2xl bg-white p-8 shadow dark:bg-black dark:shadow-dark">
      <div className="relative mb-8 h-56 w-56 overflow-hidden rounded-xl mx-auto">
        <Image
          src="/assets/img/profile.png"
          alt="Duhon Young"
          width={224}
          height={224}
          className="h-full w-full object-cover object-top scale-x-[-1]"
        />
      </div>

      <div className="mt-8">
        <h3 className="text-3xl font-semibold dark:text-light text-center">Duhon Young 👋</h3>
        <p className="mt-3 text-xl text-primary text-center">
          {typedText} <span className="animate-blink">|</span>
        </p>

        {/* CTA buttons */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="https://calendly.com/dmyproduct/30min"
            className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary px-4 py-2 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Zm10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6" />
            </svg>
            <span>Book A Call</span>
          </a>
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText('dmyproduct@gmail.com');
              // You might want to add a toast notification here
            }}
            className="inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-4 py-2 font-medium text-dark transition hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-light/70 dark:hover:bg-dark dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z" />
              <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
            </svg>
            <span>Copy Email</span>
          </button>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex-1 flex items-center justify-center gap-4">
            {/* X (formerly Twitter) */}
            <a
              href="https://x.com/n0hud"
              className="text-slate-600 transition hover:text-[#1DA1F2] focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:text-slate-500 dark:hover:text-[#1DA1F2]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
            {/* SoundCloud */}
            <a
              href="https://soundcloud.com/yungg_soull"
              className="text-slate-600 transition focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:text-slate-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 300"
                fill="currentColor"
                className="h-6 w-6 transition hover:fill-[#FF5500]"
              >
                <path d="M72.83,218.485h18.207V103.832c-6.828,1.93-12.982,5.435-18.207,10.041 C72.83,113.874,72.83,218.485,72.83,218.485z M36.415,140.921v77.436l1.174,0.127h17.033v-77.682H37.589 C37.589,140.803,36.415,140.921,36.415,140.921z M0,179.63c0,14.102,7.338,26.328,18.207,33.147V146.52 C7.338,153.329,0,165.556,0,179.63z M109.245,218.485h18.207v-109.6c-5.444-3.396-11.607-5.635-18.207-6.5V218.485z M253.73,140.803h-10.242c0.519-3.168,0.847-6.382,0.847-9.705c0-32.182-25.245-58.264-56.388-58.264 c-16.896,0-31.954,7.775-42.287,19.955v125.695h108.07c20.747,0,37.589-17.388,37.589-38.855 C291.319,158.182,274.477,140.803,253.73,140.803z" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/NoHudd"
              className="text-slate-600 transition hover:text-[#3b3b3b] focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:text-slate-500 dark:hover:text-[#3b3b3b]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 transition"
              >
                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@n0hud"
              className="text-slate-600 transition hover:text-[#FF0000] focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:text-slate-500 dark:hover:text-[#FF0000]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 transition"
              >
                <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022ZM10 15.5l6-3.5-6-3.5v7Z" />
              </svg>
            </a>
          </div>
          {/* Submit a Ticket Button */}
          <a
            href="https://pep.dmyproduct.biz"
            className="text-slate-600 transition hover:text-black focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:text-slate-400 dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition stroke-current h-5 w-5"
              style={{ transform: 'rotate(315deg)' }}
            >
              <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
              <path d="M13 5v2" />
              <path d="M13 17v2" />
              <path d="M13 11v2" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
} 