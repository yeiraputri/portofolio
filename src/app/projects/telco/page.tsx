import ProjectTitle from "@/components/common/project-title";
import SectionTitle from "@/components/common/section-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function TelcoPage() {
  return (
    <div className="">
      <div className="mx-auto max-w-[60vw] px-4 py-8">
        <ProjectTitle params={{ title: "Capital Bikeshare Pattern" }} />

        <div className="flex flex-row space-x-4 justify-center mt-4 mb-8">
          <Button>
            <Link href="https://colab.research.google.com/drive/1fszBX6B8her2_3HNBPpzCs0a0jijgxKP">
              Python Code
            </Link>
          </Button>

          <Button>
            <Link href="https://www.canva.com/design/DAF4RqsRx1Y/GvKbt6kAIYEBE0iszOasIA/view">
              Presentation
            </Link>
          </Button>
        </div>

        <div className="text-gray-800 leading-relaxed">
          <SectionTitle params={{ title: "Background" }} />
          <p className="text-lg mt-4">
            Telco's data from a fictional telecommunications company. It
            includes various customer attributes and aims to track customer
            retention by indicating which customers have left the service within
            the last month.
          </p>

          <SectionTitle params={{ title: "Objective" }} />
          <p className="text-lg mt-4">
            Understand the factors contributing to customer churn and predict
            future churn events, which can help in devising more effective
            customer retention strategies.
          </p>

          <SectionTitle params={{ title: "Methodology" }} />
          <p className="text-lg mt-4">
            The data is from the Telco dataset I was doing data cleaning,
            segmentation, classification, prediction, and clustering, also
            creating recommendations.
          </p>

          <SectionTitle params={{ title: "Result" }} />
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-6">
            I performed multiple analyses during this project. Below are some
            key snippets illustrating my exploratory data analysis,
            segmentation, and clustering insights:
          </p>


          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700 leading-relaxed mt-4">
            <li>
              <strong>Data Cleaning:</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  Found numerous missing values; handled them via mean/median
                  imputation.
                </li>
                <li>
                Outliers were present but deemed insignificant, thus they remained unchanged.
                </li>
              </ul>
            </li>

            <li>
              <strong>Exploratory Data Analysis (EDA):</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  Observed that payment methods varied by gender and
                  senior-citizen status, with electronic checks dominating among
                  these groups.
                </li>
                <li>
                  Found a 0.21 correlation between customer tenure and all
                  service types.
                </li>
                <li>Phone service users had the highest average tenure.</li>
              </ul>
            </li>

            <li>
              <strong>Segmentation:</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  Customers with partners often used internet service plus
                  device protection.
                </li>
                <li>
                  Customers without partners mostly used only internet service.
                </li>
                <li>
                  Customers not using phone service typically had no partners,
                  didn’t use tech support, and had lower monthly charges (under
                  50).
                </li>
                <li>
                  Marketing via SMS was more common for higher monthly-charge
                  customers.
                </li>
              </ul>
            </li>

            <li>
              <strong>Classification:</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  Using the "Contract" column, random undersampling was applied and achieved an F1 macro average of{" "}
                  <strong>0.67739</strong>.
                </li>
                <li>
                  Identified <strong>21 columns</strong> as crucial for sending
                  contract offers.
                </li>
              </ul>
            </li>

            <li>
              <strong>Prediction:</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  Gradient boosting was applied to predict monthly charges with an{" "}
                  <strong>R-squared of 0.86010</strong>.
                </li>
                <li>
                  All columns contributed to the model’s predictive power.
                </li>
              </ul>
            </li>

            <li>
              <strong>Clustering:</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  Using PCA Created <strong>16 clusters</strong> with an approximate
                  accuracy of <strong>0.9497</strong>.
                </li>
                <li>
                  Clusters differed by monthly charges, number of dependents,
                  and marketing approaches (cold calls, emails, SMS).
                </li>
              </ul>
            </li>

            <li>
              <strong>Visualization:</strong>
              <span className="ml-1">
                Developed multiple visual dashboards and plots to highlight each
                segment’s distinct characteristics.
              </span>
            </li>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-semibold mb-2">Snippet 1</p>
              <Image
                src="/projects/telco/1.png"
                alt="Telco Analysis Snippet 1"
                width={900}
                height={600}
                className="rounded shadow-md w-full h-auto mb-2"
              />
              <p className="text-gray-600 text-sm">
                Payment method preferences by gender and seniority.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">Snippet 2</p>
              <Image
                src="/projects/telco/2.png"
                alt="Telco Analysis Snippet 2"
                width={900}
                height={600}
                className="rounded shadow-md w-full h-auto mb-2"
              />
              <p className="text-gray-600 text-sm">
                Top Marketing Technique Combinations
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">Snippet 3</p>
              <Image
                src="/projects/telco/3.png"
                alt="Telco Analysis Snippet 3"
                width={900}
                height={600}
                className="rounded shadow-md w-full h-auto mb-2"
              />
              <p className="text-gray-600 text-sm">
                Correlation of Tenure and Number of Services used
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">Snippet 4</p>
              <Image
                src="/projects/telco/4.png"
                alt="Telco Analysis Snippet 4"
                width={900}
                height={600}
                className="rounded shadow-md w-full h-auto mb-2"
              />
              <p className="text-gray-600 text-sm">
                Heatmap of Cluster
              </p>
            </div>
          </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
