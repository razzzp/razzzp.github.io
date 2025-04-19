
"use client";

import { PropsWithChildren, ReactNode, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { experiences, Position, Project, projects } from "./data";

function NavItemUnderline(props: {text: string,link: string, key:number}){
  return (<li className="mr-3"><a className="underline
    decoration-transparent underline-offset-[10px] decoration-2
    transition-all ease-in
    hover:decoration-inherit hover:underline-offset-8 " href={props.link} >{props.text}</a></li>)
}

function NavItemBracket(props:{text:string, link:string}){
  const [hover, setHover] = useState(false)

  const text = hover ? `[ ${props.text} ]` : props.text
  return <li className="px-2 min-w-40 text-center font-mono">
    <a onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} href={props.link}>{text}</a>
  </li>
}

function NavBar(props: {items : {text: string,link: string}[]}){
  return (
    <>
      <nav className="sticky top-0 py-4 px-20 bg-base-300 z-1">
        <ul className="flex justify-center">
          {
            props.items.map((item, idx) => {
              return <NavItemBracket text={item.text} link={item.link} key={idx}/>
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
    <section className="min-h-screen w-full">
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

function CollapsibleFloatingButton(props:{items:{text:string, link:string}[]}){
  const [open, setOpen] = useState(false)
  return (
    <>
    <div className="fixed bottom-6 right-6 z-50">
      <div className="dropdown dropdown-top dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-circle btn-primary shadow-lg"
          onClick={()=>setOpen(!open)}
        >
          {open ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
        </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-44 space-y-1}`}
          >
            {
              props.items.map((item,idx)=>{
                return <li key={idx}>
                  <Link href={item.link}>
                    {item.text}
                  </Link>
                </li>
              })
            }
          </ul>
      </div>
    </div>
    </>
  )
}

function dispDate(date: Date): string{
  return date.toLocaleString("en-US", { month: "short", year: "numeric" });
}

function PositionComp(props: {pos: Position}) {
  return (
    <>
    <li>
      <div className="font-bold">{props.pos.title}</div>
      <div className="text-neutral-content">
        {props.pos.content}
      </div>
    </li>
    </>
  )
}

function ExperienceTimeline() {
  return (
    <>
    <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
    {
      experiences.map((exp,idx,arr)=>{
        return (
          <li key={idx}>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start"><time className="font-mono italic">{dispDate(exp.startDate)}{exp.endDate? `- ${dispDate(exp.endDate)}`: " - Current"}</time></div>
            <div className="timeline-end mb-10">                      
              <div className="text-lg font-black font-mono">{exp.title}</div>
              <ul>
              {
                exp.positions.map((pos, pidx)=> {
                  return <PositionComp pos={pos}  key={pidx} />
                })
              }
              </ul>
            </div>
            <hr className={idx != arr.length-1 ?  "bg-secondary" : ""}/>
          </li>
        )
      })
    }
    </ul>
    </>
  )
}

export default function Home() {
  return (
    <>
      <NavBar items={[
        {text: "Projects", link: "#projects"},
        {text: "Experience", link: "#experience"},
        {text: "Education", link: "#education"},
        {text: "Contact", link: "#contact"},
        ]}/>
      <main className="flex flex-col items-center justify-center bg-base-300 text-base-content px-15 md:px-30">
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
          <h2 className="text-4xl pd-4 pt-8 font-mono">Experience</h2>
          <ExperienceTimeline />
        </FullPaddedSection>

        <FullPaddedSection secId="education">
          <h2 className="text-4xl pd-4 pt-8" id="education">Education</h2>
          <div className="py-4">
            <h3 className="text-2xl text-primary">Hacktiv8</h3>
            <h4 className="font-bold">Go Backend</h4>
          </div>

          <div className="py-4">
            <h3 className="text-2xl text-primary">University of Nottingham</h3>
            <h4 className="font-bold">MEng Electrical and Electronic Engineering</h4>
          </div>
        </FullPaddedSection>

        <FullPaddedSection secId="contact">
          <h2 className="text-4xl pd-4 pt-8" id="contact">Contact</h2>
          TODO
        </FullPaddedSection>

        {/* Floating Collapsible Menu */}
        <CollapsibleFloatingButton items={
          [
            {text:"About Me", link:"#aboutme"},
            {text:"Blogs", link:""},
            {text:"Portfolio", link:""},
          ]
        }/>
        </main>
    </>
  );
}
