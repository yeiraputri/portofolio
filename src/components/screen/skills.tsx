"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Content from "../common/content";
import PageTitle from "../common/page-title";

export default function Skills() {
  const plugin = useRef(Autoplay({ delay: 2000 }));

  return (
    <Content>
      <PageTitle params={{ title: "Skills" }} />
      <div className="flex flex-col lg:items-center lg:mx-[20px] lg:my-[230px] mx-6 my-[80px]">
        <div className="flex flex-col  space-y-20 lg:block hidden">
          <div className="flex flex-row justify-center items-center mt-[40px] lg:space-x-20">
            <Image
              src="/skills/excel.png"
              alt="Excel"
              height={200}
              width={200}
            />
            <Image
              src="/skills/python.png"
              alt="Python"
              height={200}
              width={200}
            />
            <Image
              src="/skills/looker.png"
              alt="Looker Studio.js"
              height={200}
              width={200}
            />
            <Image
              src="/skills/powerbi.png"
              alt="Power BI"
              height={200}
              width={200}
            />
            <Image src="/skills/sql.png" alt="SQL" height={200} width={200} />
            <Image
              src="/skills/tableau.png"
              alt="Tabelau"
              height={200}
              width={200}
            />
          </div>
        </div>

        <div className="w-2/3 self-center lg:hidden block">
          <Carousel plugins={[plugin.current]}>
            <CarouselContent className="space-x-20">
              <CarouselItem className="flex flex-col justify-center items-center min-w-[250px] max-w-[250px] min-h-[250px] max-h-[250px] ">
                <Image
                  src="/skills/tableau.png"
                  alt="Tabelau"
                  height={100}
                  width={100}
                />
                <p className={`text-[20px] mt-2 `}>Tableau</p>
              </CarouselItem>
              <CarouselItem className="flex flex-col justify-center items-center min-w-[250px] max-w-[250px] min-h-[250px] max-h-[250px] ">
                <Image
                  src="/skills/powerbi.png"
                  alt="Power BI"
                  height={100}
                  width={100}
                />
                <p className={`text-[20px] mt-2 `}>Power BI</p>
              </CarouselItem>
              <CarouselItem className="flex flex-col justify-center items-center min-w-[250px] max-w-[250px] min-h-[250px] max-h-[250px] ">
                <Image
                  src="/skills/sql.png"
                  alt="SQL"
                  height={100}
                  width={100}
                />
                <p className={`text-[20px] mt-2 `}>SQL</p>
              </CarouselItem>
              <CarouselItem className="flex flex-col justify-center items-center min-w-[250px] max-w-[250px] min-h-[250px] max-h-[250px] ">
                <Image
                  src="/skills/python.png"
                  alt="Python"
                  height={100}
                  width={100}
                />
                <p className={`text-[20px] mt-2 `}>Python</p>
              </CarouselItem>
              <CarouselItem className="flex flex-col justify-center items-center min-w-[250px] max-w-[250px] min-h-[250px] max-h-[250px] ">
                <Image
                  src="/skills/looker.png"
                  alt="Looker Studio.js"
                  height={100}
                  width={100}
                />
                <p className={`text-[20px] mt-2 `}>Looker Studio</p>
              </CarouselItem>

              <CarouselItem className="flex flex-col justify-center items-center min-w-[250px] max-w-[250px] min-h-[250px] max-h-[250px] ">
                <Image
                  src="/skills/excel.png"
                  alt="Excel"
                  height={100}
                  width={110}
                />
                <p className={`text-[20px] mt-2 `}>Excel and Spreadsheet</p>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </Content>
  );
}
