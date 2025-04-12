
"use client";

import { PropsWithChildren, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

function NavItemUnderline(props: {text: string,link: string, key:number}){
  return (<li className="mr-3"><a className="underline
    decoration-transparent underline-offset-[10px] decoration-2
    transition-all ease-in
    hover:decoration-inherit hover:underline-offset-8 " href={props.link} >{props.text}</a></li>)
}

function NavItemBracket(props: {text: string,link: string, key:number}){
  const [hover, setHover] = useState(false)

  const text = hover ? `[ ${props.text} ]` : props.text
  return (<li className="px-2 min-w-40 text-center"><a onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="underline
    decoration-transparent underline-offset-[10px] decoration-2
    transition-all ease-in" href={props.link}>{text}</a></li>)
}

function NavBar(props: {items : {text: string,link: string, key:number}[]}){
  return (
    <>
      <nav className="top-0 inset-x-0 fixed py-4 px-4 bg-base-300 min-w-screen">
        <ul className="flex justify-center">
          {
            props.items.map((item) => {
              return <NavItemBracket text={item.text} link={item.link} key={item.key}/>
            })
          }
        </ul>
      </nav>
    </>
  )
}

function FullPaddedSection(props :PropsWithChildren) {
  return (
    <>
    <section className="h-screen px-30">
        {props.children}
    </section>
    </>
  )
}

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavBar items={[
        {text: "Projects", link: "#projects", key:1},
        {text: "Experience", link: "#experience", key:2},
        {text: "About Me", link: "#aboutme", key:3},
        {text: "Contact", link: "#contacts", key:4},
        ]}/>
      <main className="min-h-screen flex flex-col items-center justify-center bg-base-300 text-base-content">
        <FullPaddedSection>
          <div className="space-y-4 h-full flex flex-col justify-center">
            <h2 className="text-4xl">Hi 👋,<br/> I'm <span className="font-bold text-primary">Razif</span> </h2>
            <p className="text-xl text-base-content/70">A Software Engineer who is always curious and excited to learn new things</p>
            <button className="btn btn-primary col-2">Get in touch</button>
          </div>
        </FullPaddedSection>

        <FullPaddedSection>
          <h2 className="text-4xl pd-4 pt-8">Projects</h2>
          <div className="py-4">
            <h3 className="text-2xl pb-2 pt-4">Project 1</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente at soluta maxime perspiciatis nam, et, harum porro atque vero quas esse distinctio pariatur modi nihil illo reiciendis voluptatem rerum necessitatibus?</p>
          </div>
        </FullPaddedSection>

        <FullPaddedSection>
          <h2 className="text-4xl pd-4 pt-8">Education</h2>
          <div className="py-4">
            <h3 className="text-2xl pb-2 pt-4">Hacktiv8</h3>
            <h5>Go Backend</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente at soluta maxime perspiciatis nam, et, harum porro atque vero quas esse distinctio pariatur modi nihil illo reiciendis voluptatem rerum necessitatibus?</p>
          </div>
          <div className="py-4">
            <h3 className="text-2xl pb-2 pt-4">University of Nottingham</h3>
            <h5>MEng Electrical and Electronic Engineering</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente at soluta maxime perspiciatis nam, et, harum porro atque vero quas esse distinctio pariatur modi nihil illo reiciendis voluptatem rerum necessitatibus?</p>
          </div>
        </FullPaddedSection>

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
    </>
  );
}
