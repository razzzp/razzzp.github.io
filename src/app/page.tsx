
"use client";

import { PropsWithChildren, ReactNode, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Project, projects } from "./data";

function NavItemUnderline(props: {text: string,link: string, key:number}){
  return (<li className="mr-3"><a className="underline
    decoration-transparent underline-offset-[10px] decoration-2
    transition-all ease-in
    hover:decoration-inherit hover:underline-offset-8 " href={props.link} >{props.text}</a></li>)
}

function NavItemBracket(props: {text: string,link: string, idx: number}, ){
  const [hover, setHover] = useState(false)

  const text = hover ? `[ ${props.text} ]` : props.text
  return (
    <li key={props.idx} className="px-2 min-w-40 text-center">
      <a onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} href={props.link}>{text}</a>
    </li>
    )
}

function NavBar(props: {items : {text: string,link: string}[]}){
  return (
    <>
      <nav className="sticky top-0 py-4 px-20 bg-base-300">
        <ul className="flex justify-center">
          {
            props.items.map((item, idx) => {
              const [hover, setHover] = useState(false)

              const text = hover ? `[ ${item.text} ]` : item.text
              return <li key={idx} className="px-2 min-w-40 text-center font-mono">
                <a onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} href={item.link}>{text}</a>
              </li>
            })
          }
        </ul>
      </nav>
    </>
  )
}

function FullPaddedSection(props :{children:ReactNode, secId?: string}) {
  return (
    <>
    <section className="min-h-screen min-w-screen px-30">
        {/* dummy sec for anchor */}
        <div id={props.secId} className="h-4"></div>
        {props.children}
    </section>
    </>
  )
}

function TagsList(props: {tags: string[]}){
  return(
    <>
    <ul>
      {
        props.tags.map((tag, idx, arr)=>{
          return <li key={idx} className="badge badge-secondary mr-2 mb-1">{tag}</li>
        })
      }
    </ul>
    </>
  )
}

function ProjectComp(props:{project:Project}){
  return (
    <>
    <div className="py-4 space-y-4">
    <h3 className="text-2xl pt-4 mb-1 text-primary font-mono">{props.project.title}</h3>
    {props.project.content}
    <a className="link-info block" href={props.project.githubUrl}>Github</a>
    <TagsList tags={props.project.tags}/>
    </div>
    </>
  )
}

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavBar items={[
        {text: "Projects", link: "#projects"},
        {text: "Experience", link: "#experience"},
        {text: "Education", link: "#education"},
        {text: "Contact", link: "#contact"},
        ]}/>
      <main className="flex flex-col items-center justify-center bg-base-300 text-base-content">
        <FullPaddedSection>
          <div className="space-y-4 h-screen flex flex-col justify-center -top-30 relative">
            <h2 className="text-4xl font-mono">Hi 👋,<br/> I'm <span className="font-bold text-primary">Razif</span> </h2>
            <p className="text-xl text-base-content/70">A Software Engineer who is always curious and excited to learn new things</p>
            <button className="btn btn-primary w-50">Get in touch</button>
          </div>
        </FullPaddedSection>

        <FullPaddedSection secId="projects">
          <h2 className="text-4xl pd-4 pt-8 font-mono">Projects</h2>
          {
            projects.map((proj, idx)=>{
              return <ProjectComp project={proj} key={idx}/>
            })
          }
        </FullPaddedSection>

        <FullPaddedSection secId="experience">
          <h2 className="text-4xl pd-4 pt-8">Experience</h2>
          TODO
        </FullPaddedSection>

        <FullPaddedSection secId="education">
          <h2 className="text-4xl pd-4 pt-8" id="education">Education</h2>
          <div className="py-4">
            <h3 className="text-2xl text-primary">Hacktiv8</h3>
            <h4 className="text-secondary-content">Go Backend</h4>
          </div>

          <div className="py-4">
            <h3 className="text-2xl text-primary">University of Nottingham</h3>
            <h4 className="text-secondary-content">MEng Electrical and Electronic Engineering</h4>
          </div>
        </FullPaddedSection>

        <FullPaddedSection secId="contact">
          <h2 className="text-4xl pd-4 pt-8" id="contact">Contact</h2>
          TODO
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
    </main>
    </>
  );
}
