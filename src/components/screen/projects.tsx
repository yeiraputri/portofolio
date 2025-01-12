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
} from "@/components/ui/carousel";

export default function ProjectsCarousel() {
  // const plugin = useRef(Autoplay({ delay: 100 }));

  const projects = [
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
        "Understand the factors contributing to customer churn and predict future churn events, which can help in devising more effective customer retention strategies.",
      techStack: ["Python"],
      link: "/projects/telco",
    },
    {
      title: "Understanding Lego Sets Popularity",
      imageSrc: "/projects/lego/lego.jpg",
      description:
        "Conducted exploratory data analysis (EDA) on the LEGO dataset to uncover trends and insights.",
      techStack: ["SQL", "Python"],
      link: "/projects/lego",
    },
  ];

  return (
    <Content>
      <PageTitle params={{ title: "Projects" }} />
      <div className="px-12">
        <Carousel
          // plugins={[plugin.current]}
        >
          <CarouselContent className="flex h-full gap-4 px-2 py-4 ">
            {projects.map((project, idx) => (
              <CarouselItem key={idx} className="basis-1/3 h-[60vh]">
                <Link href={project.link}>
                  <div className="bg-white shadow-lg hover:shadow-xl transition-shadow p-4 rounded cursor-pointer h-full flex flex-col">
                    <div className="relative w-full h-80 mb-4">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        fill
                        className="object-fill rounded"
                      />
                    </div>
                    <div className="mt-auto">
                      <h2 className="text-xl font-bold mb-2">
                        {project.title}
                      </h2>
                      <p className="text-gray-600 mb-2 line-clamp-3">
                        {project.description}
                      </p>
                      <p className="text-sm text-gray-500 mt-auto">
                        <span className="font-semibold">Tech Stack:</span>{" "}
                        {project.techStack.join(", ")}
                      </p>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Content>
  );
}
