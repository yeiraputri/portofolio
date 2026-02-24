"use client"

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

import Content from "../common/content"
import PageTitle from "../common/page-title"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel"

import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"

type ExperienceData = {
  logoSrc: string
  company: string
  position: string
  date: string

  summary: string
  stack: string[]

  impact: {
    title: string
    items: string[]
  }[]
}

function ExperienceDetails({
  summary,
  stack,
  impact,
}: Pick<ExperienceData, "summary" | "stack" | "impact">) {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        {impact.map((block) => (
          <div key={block.title} className="rounded-xl bg-muted/10 p-4">
            <p className="text-sm font-bold">{block.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground/90">
              {block.items.map((it, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" />
                  <span className="leading-relaxed">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-lg leading-relaxed">{summary}</p>

      <div className="flex flex-wrap gap-2">
        {stack.map((s) => (
          <Badge key={s} variant="secondary" className="font-normal">
            {s}
          </Badge>
        ))}
      </div>
    </div>
  )
}

function ExperienceCard({ exp }: { exp: ExperienceData }) {
  return (
    <Card className="w-full">
      <CardContent className="p-6 space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-24 overflow-hidden rounded-xl border bg-muted/10">
              <Image
                src={exp.logoSrc}
                alt={`${exp.company} logo`}
                fill
                className="object-contain p-2"
                unoptimized
              />
            </div>

            <div className="min-w-0">
              <p className="text-lg font-semibold leading-tight">{exp.company}</p>
              <p className="text-sm text-muted-foreground">{exp.position}</p>
            </div>
          </div>

          <Badge variant="secondary" className="w-fit font-normal">
            {exp.date}
          </Badge>
        </div>
        <ExperienceDetails summary={exp.summary} stack={exp.stack} impact={exp.impact} />
      </CardContent>
    </Card>
  )
}

export default function Experience() {
  const plugin = useRef(Autoplay({ delay: 2500 }))

  const experiences: ExperienceData[] = [
    {
      logoSrc: "/images/logo-novo.png",
      company: "Novo Nordisk",
      position: "Data Analyst Intern",
      date: "June 2025 - Dec 2025",
      impact: [
        { title: "What I worked on", items: ["Finance reporting", "Cross-division workflows", "Automation"] },
        { title: "Tools & methods", items: ["Snowflake + Excel", "Power BI dashboards", "Power Automate / Power Apps"] },
        { title: "Outcome", items: ["Faster reporting cycles", "Better visibility for stakeholders", "More standardized processes"] },
      ],
      summary:
        "Improved finance reporting and cross-division workflows by transforming and validating data in Snowflake/Excel, building interactive Power BI dashboards, and automating routine processes with Power Automate and Power Apps.",
      stack: ["Power BI", "Snowflake", "Power Automate", "Power Apps"],
    },
    {
      logoSrc: "/images/logo-app.png",
      company: "Asia Pulp & Paper",
      position: "Business Analyst Intern",
      date: "Aug 2024 - Dec 2024",
      impact: [
        { title: "What I worked on", items: ["Credit limit & Term Of Payment process", "Dashboard reporting", "Web feature enhancement"] },
        { title: "Tools & methods", items: ["Requirement analysis", "Power BI reporting", "Process documentation"] },
        { title: "Outcome", items: ["Clearer workflows", "Improved monitoring"] },
      ],
      summary:
        "Supported finance process improvements and reporting by translating business needs into streamlined workflows and intuitive dashboards.",
      stack: ["Power BI", "Excel/Sheets", "Requirements", "Web"],
    },
    {
      logoSrc: "/images/logo-kompas.png",
      company: "Harian Kompas",
      position: "Dashboard Web Intern",
      date: "May 2024 - Aug 2024",
      impact: [
        { title: "What I worked on", items: ["Dashboard development", "Data cleaning"] },
        { title: "Tools & methods", items: ["Google Sheets", "Tableau", "Looker Studio"] },
        { title: "Outcome", items: ["More reliable data", "Clearer insights", "More usable dashboards"] },
      ],
      summary:
        "Built dashboards and cleaned datasets to ensure accurate reporting and clear, interactive storytelling for stakeholders.",
      stack: ["Google Sheets", "Tableau", "Looker Studio", "Data Cleaning"],
    },
    {
      logoSrc: "/images/logo-bangkit.png",
      company: "Bangkit Academy",
      position: "Machine Learning Cohort",
      date: "Feb 2024 - Jul 2024",
      impact: [
        { title: "What I worked on", items: ["ML coursework", "Capstone model", "Deployment-ready workflow"] },
        { title: "Tools & methods", items: ["Python", "TensorFlow", "Evaluation + iteration"] },
        { title: "Outcome", items: ["End-to-end ML pipeline practice", "Deliverable capstone model", "Stronger ML fundamentals"] },
      ],
      summary:
        "Completed an intensive machine learning program and built an end-to-end model for a real-world application.",
      stack: ["Python", "TensorFlow", "Machine Learning", "Data Visualization"],
    },
    {
      logoSrc: "/images/logo-svara.png",
      company: "PT Svara Inovasi Indonesia",
      position: "Data Analyst Intern",
      date: "Sep 2023 - Jan 2024",
      impact: [
        { title: "What I worked on", items: ["Observability dashboards", "Data workflow automation", "Analytics support"] },
        { title: "Tools & methods", items: ["Kibana", "Python", "Elastic Stack"] },
        { title: "Outcome", items: ["More accessible insights", "Smoother processing workflow", "Better team visibility"] },
      ],
      summary:
        "Improved data workflows and observability by building dashboards and automations for analytics operations.",
      stack: ["Python", "Elastic Stack", "Kibana", "Data Analysis"],
    },
  ]

  return (
    <Content>
      <PageTitle params={{ title: "Experience" }} />

      <div className="relative flex-1">
        <Carousel plugins={[plugin.current]} className="h-full flex justify-center">
          <CarouselContent className="h-full">
            {experiences.map((exp) => (
              <CarouselItem
                key={`${exp.company}-${exp.position}-${exp.date}`}
                className="min-h-[87vh] w-full max-w-[calc(100%-6rem)] overflow-y-auto"
              >
                <div className="mx-auto w-full max-w-[1200px] px-4 py-6">
                  <ExperienceCard exp={exp} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 z-20" />
          <CarouselNext className="right-4 top-1/2 -translate-y-1/2 z-20" />
        </Carousel>
      </div>
    </Content>
  )
}