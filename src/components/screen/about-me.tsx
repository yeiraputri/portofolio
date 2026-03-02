import Content from "../common/content";

const timeline = [
  {
    title: "Education",
    subtitle: "Universitas Indonesia — Information Systems",
    meta: "2021-2025",
  },
  {
    title: "Internships",
    subtitle: "Various roles in multiple companies",
    meta: "Dashboards + automation",
  },
  {
    title: "Now",
    subtitle: "Seeking BI / Data Analyst / Business Analyst roles",
    meta: "Jakarta • Open to opportunities",
  },
];

export default function AboutMe() {
  return (
    <Content>
      <div className="flex items-center justify-center min-h-screen w-full px-6 lg:px-0">
        <div className="shadow-xl border border-gray-300 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-stretch gap-10 h-fit w-full max-w-5xl">

          <div className="lg:w-1/3 w-full rounded-2xl border border-gray-200 p-6 lg:p-7">
            <div className="font-bold lg:text-[58px] text-[40px] text-primaryBlue leading-none">
              Hi!
            </div>

            <div className="mt-8">
              <div className="text-sm font-semibold text-gray-700 mb-4">
                Quick timeline
              </div>

              <ol className="relative border-l border-gray-300 pl-2 space-y-6">
                {timeline.map((item, idx) => (
                  <li key={idx} className="relative">
                    <span className="absolute -left-[2px] top-1.5 h-4 w-4 rounded-full bg-white border-2 border-primaryBlue" />

                    <div className="space-y-1 ml-6">
                      <div className="text-sm font-semibold text-gray-900">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-700">
                        {item.subtitle}
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.meta}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex flex-wrap gap-2">
                <a
                  href="#projects"
                  className="px-4 py-2 rounded-xl border border-gray-300 text-sm text-gray-800"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full text-gray-800">
            <div className="text-lg lg:text-xl font-semibold mb-4">
              About me
            </div>

            <div className="text-justify text-base lg:text-lg leading-relaxed space-y-4">
              <p>
                I am an Information System fresh graduate from Universitas Indonesia.
                I have a keen interest in data analysis, business intelligence, and business analysis.
              </p>
              <p>
                My educational background has given me extensive knowledge about data in general
                (how to interpret it, how to obtain information from data, how to process data to gain insights, etc).
                I have completed several projects and gained hands-on experience through internships across multiple companies.
              </p>
            </div>

          </div>
        </div>
      </div>
    </Content>
  );
}