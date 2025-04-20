import { ReactNode } from "react";

export type Project = {
  title: string;
  content: ReactNode;
  githubUrl: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Breathe.io",
    content: (
      <>
        <p className="text-neutral-content font-sans">
          Breathe.io is a platform offering air quality monitoring and insights, designed for both individuals and businesses. 
          It includes features like real-time alerts, detailed air quality reports, and environmental recommendations.
        </p>
      </>
    ),
    githubUrl: "https://github.com/h8-breathe-io/breathe-io",
    tags: ["Go", "Echo", "PostgreSQL", "gRPC", "Xendit", "Mailtrap", "Open-Meteo API"],
  },
  {
    title: "Car Rental Management App Backend",
    content: (
      <>
        <p className="text-neutral-content">
          Backend for a Car Rental Management Application.<br />
          Provide features to manage the business’ car fleet, allow users to make rental bookings, 
          make payments and notify important events to users by email.
        </p>
      </>
    ),
    githubUrl: "https://github.com/razzzp/h8-p2-finalproj",
    tags: ["Go", "Echo", "PostgreSQL", "GORM", "Xendit", "Google SMTP", "Testify"],
  },
  {
    title: "LSP (Language Server Protocol) Server for a Domain Specific Language",
    content: (
      <>
        <p className="text-neutral-content">
          Lexer, Parser and LSP Server for a Domain Specific Language using Rust.<br />
          Implemented Linter/Analyzer to check for programming rules, provide Goto Definition, Auto-complete and other features<br />
          Utilized multi-threading to allow analysis of projects containing 50,000+ source files.
        </p>
      </>
    ),
    githubUrl: "https://github.com/razzzp/gold-lang-lsp",
    tags: ["Rust", "LSP", "Multi-threading"],
  },
  {
    title: "Dog Kennel Monitoring System",
    content: (
      <>
        <p className="text-neutral-content">
          Modular dog kennel monitoring system that can measure the temperature and humidity of dog kennels in real time. <br />
          Designed the system for easy implementation in a dog shelter environment and scalable up to hundreds of kennels.
        </p>
      </>
    ),
    githubUrl: "",
    tags: ["C++", "Qt"],
  },
];

export type Position = {
  title: string,
  content?: ReactNode 
}

export type Experience  = {
  title: string;
  content?: ReactNode;
  location: string;
  startDate: Date;
  endDate?: Date;
  positions: Position[]
}

export const experiences : Experience[] = [
  {
    title: "Sea Labs",
    location: "Jakarta, Indonesia",
    startDate: new Date(2025,2),
    positions: [
      {
        title: "Software Engineer",
        content: (
          <>
            <li>Backend Homepage</li>
          </>
        )
      }
    ]
  },
  {
    title: "IDEMIA",
    location: "Jakarta, Indonesia",
    startDate: new Date(2022,1),
    endDate: new Date(2025,1),
    positions: [
      {
        title: "Software Development Engineer III",
        content: (
          <>
              <li>Designed and reviewed software architecture documents.</li>
              <li>Led project initiation, analyzing requirements, architecture, and new technologies.</li>
              <li>Ensured development team readiness through knowledge sharing and training.</li>
              <li>Oversaw project execution in collaboration with testers, product owners, and stakeholders.</li>
          </>
        )
      },
      {
        title: "Software Development Engineer II",
        content: (
          <>
              <li>Lead development teams with up to 7 members (developers & testers) to deliver 38 features.</li>
              <li>Achieved &gt; 90% on time delivery.</li>
              <li>Took up product owner roles for several features.</li>
              <li>Through exploration of new methods, was able to cut development time in half for 1 feature.</li>
              <li>Contributed to feature design & architectures.</li>
              <li>Perform code reviews to ensure quality and maintainability of code pushed to production.</li>
              <li>Developed code analyzer to reduce code review time, by automatically checking programming rules.</li>
              <li>Held knowledge sharing sessions and mentoring to increase team knowledge.</li>
              <li>Contributed to the decrease of 40% issues found in production.</li>
          </>
        )
      },
      {
        title: "Software Development Engineer I",
        content: (
          <>
              <li>12 Features developed with &gt;90% on time delivery, and &gt;85% first time right.</li>
              <li>38 Bugs resolved with &gt;90% meeting SLA.</li>
              <li>10 improvement ideas proposed &amp; implemented.</li>
          </>
        )
      }
    ]
  },
  {
    title: "TimeTec Cloud Sdn Bhd",
    location: "Malaysia",
    startDate: new Date(2017,7),
    endDate: new Date(2017,9),
    positions: [
      {
        title: "Intern",
        content: (
          <>
            <li>Tested biometric products and ensured that they function according to the company’s standards.</li>
            <li>Troubleshooted and repaired faulty devices.</li>
            <li>Compiled reports showing all the updated features available in the company’s product listing, to ensure clarity in the documentation.</li>
          </>
        )
      }
    ]
  }
] 