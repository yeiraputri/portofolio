import ProjectTitle from "@/components/common/project-title";
import SectionTitle from "@/components/common/section-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function LegoPage() {
  return (
    <div className="">
      <div className="mx-auto max-w-[60vw] px-4 py-8">
        <ProjectTitle params={{ title: "Lego Sets Popularity" }} />

        <div className="flex flex-row space-x-4 justify-center mt-4 mb-8">
          <Button>
            <Link href="https://www.datacamp.com/datalab/w/17e29049-d1f6-4f81-93f6-c1319235fa1e/edit">
              Python and SQL code
            </Link>
          </Button>
        </div>

        <div className="text-gray-800 leading-relaxed">
          <SectionTitle params={{ title: "Background" }} />
          <p className="text-lg mt-4">
            The LEGO dataset consists of comprehensive information on LEGO sets,
            including themes, parts, and years of release. The goal is to
            explore the evolution of LEGO themes, identify trends in popularity,
            and provide insights into the most iconic sets and parts.
          </p>

          <SectionTitle params={{ title: "Objective" }} />
          <p className="text-lg mt-4">
            Analyze LEGO set trends, part usage, and popular themes to uncover
            historical patterns and product evolution.
          </p>

          <SectionTitle params={{ title: "Methodology" }} />
          <p className="text-lg mt-4">
            The data is from the LEGO dataset where I performed exploratory data
            analysis (EDA) to uncover trends, analyze themes, and identify
            patterns in LEGO set releases over time.
          </p>

          <SectionTitle params={{ title: "Result" }} />
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-6">
            I performed exploratory data analysis and Visualization insights:
          </p>

          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700 leading-relaxed mt-4">
            <li>
              <strong>Exploratory Data Analysis (EDA):</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  Calculated the average number of LEGO sets released per year,
                  identifying an average of 177 sets annually.
                </li>
                <li>
                  Analyzed the average number of LEGO parts produced each year,
                  revealing an average of 28,698 parts.
                </li>
                <li>
                  Identified the 5 most popular LEGO part colors, with black
                  being the most common.
                </li>
                <li>Found that 6.3% of all LEGO parts are transparent.</li>
                <li>
                  Discovered the 5 rarest LEGO bricks, mostly consisting of
                  specialized electric components.
                </li>
              </ul>
            </li>

            <li>
              <strong>Visualization:</strong>
              <span className="ml-1">
                Developed a visual bar chart to highlight the yearly growth and
                trends in the average number of LEGO parts produced.
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <p className="font-semibold mb-2">Snippet 1: Lego Average Parts</p>
          <Image
            src="/projects/lego/1.png"
            alt="BikeShare Analysis Visualization"
            width={900}
            height={600}
            className="rounded shadow-md w-full h-auto mb-2"
          />
          <p className="text-gray-600 text-sm">
            Bar Chart illustrating yearly growth and trends in the average
            number of LEGO parts produced.
          </p>
        </div>
      </div>
    </div>
  );
}
