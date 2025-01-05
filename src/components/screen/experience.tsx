"use client";
import Image from "next/image";
import Content from "../common/content";
import ExperienceItem from "../common/experience-item";
import PageTitle from "../common/page-title";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function Experience() {
  const plugin = useRef(Autoplay({ delay: 2000 }));
  return (
    <Content>
      <PageTitle params={{ title: "Experience" }} />

      <div className="flex-1">
        <Carousel plugins={[plugin.current]}>
          <CarouselContent className="h-full">
            <CarouselItem className=" h-[87vh] w-full max-w-[calc(100%-6rem)]">
              <ExperienceItem
                imageSrc="/images/logo-app.png"
                altText="Company logo"
                imageWidth={400}
                imageHeight={400}
                company="Asia Pulp & Paper"
                position="Business Analyst Intern"
                date="Aug 2024 - Dec 2024"
              >
                <div>
                  <p>Image</p>
                </div>
              </ExperienceItem>
            </CarouselItem>
            <CarouselItem className=" h-[87vh] w-full max-w-[calc(100%-6rem)]">
              <ExperienceItem
                imageSrc="/images/logo-kompas.png"
                altText="Company logo"
                imageWidth={400}
                imageHeight={400}
                company="Harian Kompas"
                position="Dashboard Web Intern"
                date="May 2024 - Aug 2024"
              >
                <div className="flex flex-col items-center justify-center space-y-6 ">
                  <Image
                    src="/experience/kompas/1.png"
                    alt="kompas"
                    width="0"
                    height="0"
                    sizes="60vw"
                    className="w-full h-auto  mt-8"
                  />
                  <p className="text-lg">
                    Conducted extensive data preprocessing using SPSS, including
                    cleaning, statistical analysis, and feature engineering to
                    ensure data integrity
                  </p>
                </div>
              </ExperienceItem>
            </CarouselItem>
            <CarouselItem className=" h-[87vh] w-full max-w-[calc(100%-6rem)]">
              <ExperienceItem
                imageSrc="/images/logo-bangkit.png"
                altText="Company logo"
                imageWidth={400}
                imageHeight={400}
                company="Bangkit Academy"
                position="Machine Learning Cohort"
                date="Feb 2024 - Jul 2024"
              >
                <div>
                  <p>Image</p>
                </div>
              </ExperienceItem>
            </CarouselItem>
            <CarouselItem className=" h-[87vh] w-full max-w-[calc(100%-6rem)]">
              <ExperienceItem
                imageSrc="/images/logo-svara.png"
                altText="Company logo"
                imageWidth={400}
                imageHeight={400}
                company="PT Svara Inovasi Indonesia"
                position="Data Analyst Intern"
                date="Sep 2023 - Jan 2024"
              >
                <div className="flex flex-col items-center justify-center space-y-6 ">
                  <Image
                    src="/experience/svara/1.png"
                    alt="svara"
                    width="0"
                    height="0"
                    sizes="60vw"
                    className="w-full max-w-[calc(100%-3rem)] h-auto "
                  />
                  <p className="text-lg text-center">
                    Constructed visualization and data analysis for
                    recommendation system and programmed Python script for
                    Elastic Stack integration.
                  </p>
                </div>
              </ExperienceItem>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </Content>
  );
}
