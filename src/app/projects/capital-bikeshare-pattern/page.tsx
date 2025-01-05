import ProjectTitle from "@/components/common/project-title";
import SectionTitle from "@/components/common/section-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function CapitalBikeSharePage() {
  return (
    <div className="">
      <div className="mx-auto max-w-[60vw] px-4 py-8">
        <ProjectTitle params={{ title: "Capital Bikeshare Pattern" }} />

        <div className="flex flex-row space-x-4 justify-center mt-4 mb-8">
          <Button>
            <Link href="https://colab.research.google.com/drive/1D_3GC5P9e0KyJ0aUX3MZCuOESnM9l-Pg">
              Python Code
            </Link>
          </Button>

          <Button>
            <Link href="https://public.tableau.com/app/profile/yeira.nandika/viz/bike_17174722277240/Dashboard1?publish=yes">
              Dashboard
            </Link>
          </Button>
        </div>

        <div className="text-gray-800 leading-relaxed">
          <SectionTitle params={{ title: "Background" }} />
          <p className="text-lg mt-4">
            The bike-sharing dataset is a collection of usage records of Capital
            BikeShare DC. It includes a wide array of records stretching from
            2011 to 2012, capturing the dynamics of bike-sharing usage across
            different seasons and weather conditions.
          </p>

          <SectionTitle params={{ title: "Objective" }} />
          <p className="text-lg mt-4">
            Analyze urban mobility patterns to optimize bike-sharing services
            and enhance user experience.
          </p>

          <SectionTitle params={{ title: "Methodology" }} />
          <p className="text-lg mt-4">
            The data is from the bike-sharing dataset, covering the period from
            2011 to 2012. I was engaged in data cleaning, creating segmentation,
            and building a dashboard to visualize usage patterns and trends.
          </p>

          <SectionTitle params={{ title: "Result" }} />

          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700 leading-relaxed mt-4">
            <li>
              <strong>Data Cleaning:</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>No missing values found in the dataset.</li>
                <li>Label encoded for years 2011 and 2012.</li>
              </ul>
            </li>

            <li>
              <strong>Exploratory Data Analysis (EDA):</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>Hourly bike rentals on weekdays peak during rush hours.</li>
                <li>Warm temperatures (20–30 °C) see higher rental rates.</li>
                <li>
                  From January onward, monthly bike rentals can drop to around
                  −20 on average.
                </li>
                <li>
                  Rentals are more common in clear/mist weather than rain or
                  snow.
                </li>
              </ul>
            </li>

            <li>
              <strong>User Segmentation:</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  Registered users rise consistently, whereas casual users have
                  a different pattern.
                </li>
                <li>
                  In Q1 2013, user growth does not remain strictly
                  linear—variations occur monthly.
                </li>
              </ul>
            </li>

            <li>
              <strong>Prediction (Count):</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  Used gradient boosting to predict daily rental count
                  (R-squared = 0.896).
                </li>
                <li>
                  Key columns: season, year, month, working day, weather,
                  temperature, humidity, windspeed.
                </li>
              </ul>
            </li>

            <li>
              <strong>Visualization:</strong>
              <span className="ml-1">
                Created multiple visuals for each characteristic to illustrate
                rental patterns and user segmentation.
              </span>
            </li>
          </ul>

          {/* Single Image Snippet */}
          <div className="mt-6">
            <p className="font-semibold mb-2">
              Snippet 1: BikeShare Visualization
            </p>
            <Image
              src="/projects/bikeshare/1.png"
              alt="BikeShare Analysis Visualization"
              width={900}
              height={600}
              className="rounded shadow-md w-full h-auto mb-2"
            />
            <p className="text-gray-600 text-sm">
              An example of the BikeShare analysis, illustrating
              temperature-based rental trends and usage patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
