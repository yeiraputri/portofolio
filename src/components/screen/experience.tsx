"use client"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

import Content from "../common/content"
import ExperienceItem from "../common/experience-item"
import PageTitle from "../common/page-title"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel"

export default function Experience() {
  const plugin = useRef(Autoplay({ delay: 2000 }))

  return (
    <Content>
      <PageTitle params={{ title: "Experience" }} />

      <div className="relative flex-1">
        <Carousel 
          plugins={[plugin.current]}
          className="h-full flex items-center justify-center" 
        >
          {/* The Slide Container */}
          <CarouselContent className="h-full">
            {/* Slide 1 */}
            <CarouselItem className="h-[87vh] w-full max-w-[calc(100%-6rem)]">
              <ExperienceItem
                imageSrc="/images/logo-app.png"
                altText="Company logo"
                imageWidth={400}
                imageHeight={400}
                company="Asia Pulp & Paper"
                position="Business Analyst Intern"
                date="Aug 2024 - Dec 2024"
              >
                <div className="flex flex-col items-center justify-center space-y-6 mx-auto max-w-[1000px]">
                  <Image
                    src="/experience/kompas/1.png"
                    alt="kompas"
                    width={800}
                    height={600}
                    unoptimized
                    className="w-full h-auto object-contain"
                  />
                  <p className="text-lg">
                  Streamlined Financial Credit Limit and Term of Payment (TOP) processes, improved data analysis with Power BI dashboards, 
                  and enhanced website security by developing a secure change password feature.
                  </p>
                </div>
              </ExperienceItem>
            </CarouselItem>

            {/* Slide 2 */}
            <CarouselItem className="h-[87vh] w-full max-w-[calc(100%-6rem)]">
              <ExperienceItem
                imageSrc="/images/logo-kompas.png"
                altText="Company logo"
                imageWidth={400}
                imageHeight={400}
                company="Harian Kompas"
                position="Dashboard Web Intern"
                date="May 2024 - Aug 2024"
              >
                <div className="flex flex-col items-center justify-center space-y-6 mx-auto max-w-[1000px]">
                  <Image
                    src="/experience/kompas/1.png"
                    alt="kompas"
                    width={800}
                    height={600}
                    unoptimized
                    className="w-full h-auto object-contain"
                  />
                  <p className="text-lg">
                  Performed data cleaning in Google Sheets to ensure accurate dashboards and created interactive visual dashboards using 
                  Tableau and Looker Studio to uncover trends effectively.
                  </p>
                </div>
              </ExperienceItem>
            </CarouselItem>

            {/* Slide 3 */}
            <CarouselItem className="h-[87vh] w-full max-w-[calc(100%-6rem)]">
              <ExperienceItem
                imageSrc="/images/logo-bangkit.png"
                altText="Company logo"
                imageWidth={400}
                imageHeight={400}
                company="Bangkit Academy"
                position="Machine Learning Cohort"
                date="Feb 2024 - Jul 2024"
              >
                <div className="flex flex-col items-center justify-center space-y-6 mx-auto max-w-[700px] max-h-[500px]">
                  <Image
                    src="/experience/bangkit/1.jpg"
                    alt="bangkit"
                    width={800}
                    height={600}
                    unoptimized
                    className="w-full h-auto object-contain"
                  />
                  <p className="text-lg">
                  Completed coursework in data analytics, machine learning, and TensorFlow development, including Python data analysis,
                  data visualization, and mathematics for machine learning. Built a machine learning model for the Cultivitea app, 
                  designed to detect tea plant diseases.
                  </p>
                </div>
              </ExperienceItem>
            </CarouselItem>

            {/* Slide 4 */}
            <CarouselItem className="h-[87vh] w-full max-w-[calc(100%-6rem)]">
              <ExperienceItem
                imageSrc="/images/logo-svara.png"
                altText="Company logo"
                imageWidth={400}
                imageHeight={400}
                company="PT Svara Inovasi Indonesia"
                position="Data Analyst Intern"
                date="Sep 2023 - Jan 2024"
              >
                <div className="flex flex-col items-center justify-center space-y-6 mx-auto max-w-[1000px]">
                  <Image
                    src="/experience/svara/1.png"
                    alt="kompas"
                    width={800}
                    height={600}
                    unoptimized
                    className="w-full h-auto object-contain"
                  />
                  <p className="text-lg">
                  Developed Kibana visualizations to enhance radio data analysis and communication and program Python 
                  scripts for Elasticstack integration to streamline data processing workflows.
                  </p>
                </div>
              </ExperienceItem>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 z-20" />
          <CarouselNext className="right-4 top-1/2 -translate-y-1/2 z-20" />
        </Carousel>
      </div>
    </Content>
  )
}
