
"use client";

import { PropsWithChildren, ReactNode, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

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
              return <li key={idx} className="px-2 min-w-40 text-center">
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
            <h2 className="text-4xl">Hi 👋,<br/> I'm <span className="font-bold text-primary">Razif</span> </h2>
            <p className="text-xl text-base-content/70">A Software Engineer who is always curious and excited to learn new things</p>
            <button className="btn btn-primary w-50">Get in touch</button>
          </div>
        </FullPaddedSection>

        <FullPaddedSection secId="projects">
          <h2 className="text-4xl pd-4 pt-8">Projects</h2>
          <div className="py-4 space-y-4">
            <h3 className="text-2xl pt-4 mb-1 text-primary">Breathe.io</h3>
            <p className="text-neutral-content">Breathe.io is a platform offering air quality monitoring and insights, designed for both individuals and businesses. 
              It includes features like real-time alerts, detailed air quality reports, and environmental recommendations.</p>
            <a className="link-info block" href="https://github.com/h8-breathe-io/breathe-io">Github</a>
            <TagsList tags={
              [
                "Go","Echo","PostgreSQL","gRPC","Xendit","Mailtrap", "Open-Meteo API"
              ]
            }/>
          </div>

          <div className="py-4 space-y-4">
            <h3 className="text-2xl pt-4 mb-1 text-primary">Car Rental Management App Backend</h3>
            <p className="text-neutral-content">Backend for a Car Rental Management Application.<br/>
              Provide features to manage the business’ car fleet, allow users to make rental bookings, 
              make payments and notify important events to users by email.</p>
            <a className="link-info block" href="https://github.com/razzzp/h8-p2-finalproj">Github</a>
            <TagsList tags={
              [
                "Go","Echo","PostgreSQL","GORM","Xendit","Google SMTP","Testify"
              ]
            }/>
          </div>

          <div className="py-4 space-y-4">
            <h3 className="text-2xl pt-4 mb-1 text-primary">LSP (Language Server Protocol) Server for a Domain Specific Language</h3>
            <p className="text-neutral-content">Lexer, Parser and LSP Server for a Domain Specific Language using Rust.<br/>
              Implemented Linter/Analyzer to check for programming rules, provide Goto Definition, Auto-complete and other features<br/>
              Utilized multi-threading to allow analysis of projects containing 50,000+ source files.</p>
            <a className="link-info block" href="https://github.com/razzzp/gold-lang-lsp">Github</a>
            <TagsList tags={
              [
                "Rust","LSP","Multi-threading"
              ]
            }/>
          </div>

          <div className="py-4 space-y-4">
            <h3 className="text-2xl pt-4 mb-1 text-primary">Dog Kennel Monitoring System</h3>
            <p className="text-neutral-content">Modular dog kennel monitoring system that can measure the temperature and humidity of dog kennels in real time. <br/>
              Designed the system for easy implementation in a dog shelter environment and scalable up to hundreds of kennels.</p>
            {/* <a className="link-info block" href="https://github.com/razzzp/gold-lang-lsp">Github</a> */}
            <TagsList tags={
              [
                "C++","Qt"
              ]
            }/>
          </div>
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
