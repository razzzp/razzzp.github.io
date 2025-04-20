
"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { experiences, Position, Project, projects } from "./data";
import { GiExpandedRays } from "react-icons/gi";

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


function Expandable(props:{children?: ReactNode}){
  const [expanded, setExpanded] = useState(false)
  return (
      <div 
        className={"overflow-hidden text-ellipsis text-warp transition-[max-height]" +
          (expanded ? " max-h-[2000px]" : " max-h-[200px]")
        }
        onMouseDown={()=>setExpanded(!expanded)}
        >
        {props.children}
      </div> 
  )
}


function PositionComp(props: {pos: Position}) {
  return (
    <>
    <li>
      <div className="font-bold">{props.pos.title}</div>
      <div className="pl-7 text-neutral-content">
        <ul className="list-disc list-outside">
          {props.pos.content}
        </ul>
      </div>
    </li>
    </>
  )
}


function ExperienceTimeline() {
  return (
    <>
    <ul className="timeline timeline-snap-icon max-sm:timeline-compact timeline-vertical">
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
              <Expandable>
              <ul>
              {
                exp.positions.map((pos, pidx)=> {
                  return <PositionComp pos={pos}  key={pidx} />
                })
              }
              </ul>
              </Expandable>
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
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li className="mr-5 shrink-0 text-xs">
                  <a className="block hover:text-slate-200" href="https://github.com/razzzp" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                  <span className="sr-only">GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                  </a>
                </li>
                <li className="mr-5 shrink-0 text-xs">
                  <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/muhammadrazif/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                  <span className="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                  </a>
                </li>
                {/* 
                  TODO
                  <li className="mr-5 shrink-0 text-xs">
                  <a className="block hover:text-slate-200" href="" target="_blank" rel="noreferrer noopener" aria-label="Instagram (opens in a new tab)" title="Instagram">
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path></svg>
                  </a>
                </li> */}
                </ul>
            {/* <button className="btn btn-primary w-50">Get in touch</button> */}
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
