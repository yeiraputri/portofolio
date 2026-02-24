"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import Content from "@/components/common/content";
import PageTitle from "@/components/common/page-title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Project = {
  title: string;
  imageSrc: string;
  description: string;
  techStack: string[];
  link: string;
  isExternal?: boolean;
};

export default function ProjectsCarousel() {
  const plugin = useRef(
    Autoplay({
      delay: 2600,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const projects: Project[] = [
    {
      title: "Capital Bikeshare Pattern",
      imageSrc: "/projects/bikeshare/1.png",
      description:
        "Analyze urban mobility patterns to optimize bike-sharing services and enhance user experience.",
      techStack: ["Python", "Tableau"],
      link: "/projects/capital-bikeshare-pattern",
    },
    {
      title: "Telco Understanding Customer Preferences and Usage Patterns",
      imageSrc: "/projects/telco/1.png",
      description:
        "Understand factors contributing to churn and predict churn events to support retention strategies.",
      techStack: ["Python"],
      link: "/projects/telco",
    },
    {
      title: "Understanding Lego Sets Popularity",
      imageSrc: "/projects/lego/lego.jpg",
      description:
        "Exploratory data analysis (EDA) on LEGO datasets to uncover trends and insights.",
      techStack: ["SQL", "Python"],
      link: "/projects/lego",
    },
    {
      title: "Bangkit Academy Project",
      imageSrc: "/experience/bangkit/1.jpg",
      description:
        "End-to-end ML capstone: model development, evaluation, and integration into an app concept.",
      techStack: ["Python", "TensorFlow", "Machine Learning", "Data Visualization"],
      link: "https://www.canva.com/design/DAGIR85BXak/KdBYn2ZvkOcS0WKIocPv8w/view?utm_content=DAGIR85BXak&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h03dc30a9e2#21",
      isExternal: true,
    },
  ];

  return (
    <Content>
      <PageTitle params={{ title: "Projects" }} />

      <div className="px-6 md:px-12">
        <div className="relative">
          <Carousel
            plugins={[plugin.current]}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 py-4">
              {projects.map((project, idx) => {
                const CardInner = (
                  <Card className="h-full overflow-hidden border bg-white/70 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="w-full border-b bg-muted/20">
                        <AspectRatio ratio={16 / 9}>
                          <Image
                            src={project.imageSrc}
                            alt={project.title}
                            fill
                            className="object-contain p-3"
                            unoptimized
                          />
                        </AspectRatio>
                      </div>

                      <div className="p-5 flex flex-col gap-3 flex-1">
                        <div>
                          <h2 className="text-lg md:text-xl font-semibold leading-snug">
                            {project.title}
                          </h2>
                          <p className="mt-2 text-sm md:text-base text-muted-foreground line-clamp-3">
                            {project.description}
                          </p>
                        </div>

                        <div className="mt-auto pt-2 flex flex-wrap gap-2">
                          {project.techStack.map((t) => (
                            <Badge key={t} variant="secondary" className="font-normal">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );

                return (
                  <CarouselItem
                    key={idx}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    {project.isExternal ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="block h-full"
                      >
                        {CardInner}
                      </a>
                    ) : (
                      <Link href={project.link} className="block h-full">
                        {CardInner}
                      </Link>
                    )}
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious className="left-2 md:-left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="right-2 md:-right-2 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </Content>
  );
}