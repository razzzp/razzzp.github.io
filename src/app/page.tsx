
"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";


export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-base-content p-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Hello 👋</h1>
        <p className="text-xl">{"I'm building my personal website with Next.js + Tailwind + DaisyUI"}</p>
        <button className="btn btn-primary">Get in touch</button>
      </div>

      {/* Floating Collapsible Menu */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="dropdown dropdown-top dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle btn-primary shadow-lg"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
          </div>
          {open && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-44 space-y-1"
            >
              <li>
                <Link href="#about" onClick={() => setOpen(false)}>
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#portfolio" onClick={() => setOpen(false)}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#blogs" onClick={() => setOpen(false)}>
                  Blogs
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Dummy Sections
      <section id="about" className="min-h-screen p-8 bg-base-100 mt-10 rounded-box">
        <h2 className="text-2xl font-bold mb-2">About Me</h2>
        <p>Write something interesting about yourself here.</p>
      </section>

      <section id="portfolio" className="min-h-screen p-8 bg-base-100 mt-10 rounded-box">
        <h2 className="text-2xl font-bold mb-2">Portfolio</h2>
        <p>Show off your work or side projects here.</p>
      </section>

      <section id="blogs" className="min-h-screen p-8 bg-base-100 mt-10 rounded-box">
        <h2 className="text-2xl font-bold mb-2">Blogs</h2>
        <p>Share your thoughts, tutorials, or articles.</p>
      </section> */}
    </main>
  );
}
