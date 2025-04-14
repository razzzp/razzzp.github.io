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

