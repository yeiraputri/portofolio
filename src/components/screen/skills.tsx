"use client";

import Image from "next/image";
import Content from "../common/content";
import PageTitle from "../common/page-title";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Skill = {
  name: string;
  icon: string;
  category: "BI" | "Data" | "Automation" | "Analytics";
};

const skills: Skill[] = [
  { name: "Excel / Spreadsheets", icon: "/skills/excel.png", category: "Analytics" },
  { name: "Python", icon: "/skills/python.png", category: "Data" },
  { name: "SQL", icon: "/skills/sql.png", category: "Data" },
  { name: "Power BI", icon: "/skills/powerbi.png", category: "BI" },
  { name: "Tableau", icon: "/skills/tableau.png", category: "BI" },
  { name: "Looker Studio", icon: "/skills/looker.png", category: "BI" },
  { name: "Snowflake", icon: "/skills/snowflake.png", category: "Data" },
  { name: "Power Apps", icon: "/skills/powerapps.png", category: "Automation" },
  { name: "Power Automate", icon: "/skills/powerautomate.png", category: "Automation" },
];

const categoryLabel: Record<Skill["category"], string> = {
  BI: "BI",
  Data: "Data",
  Automation: "Automation",
  Analytics: "Analytics",
};

export default function Skills() {
  return (
    <Content>
      <PageTitle params={{ title: "Skills" }} />
      <div className="px-6 md:px-12 xl:px-16 2xl:px-20 ">
        <div className="mx-auto w-full max-w-screen-2xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-semibold"></h2>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="font-normal">BI</Badge>
              <Badge variant="secondary" className="font-normal">Data</Badge>
              <Badge variant="secondary" className="font-normal">Automation</Badge>
              <Badge variant="secondary" className="font-normal">Analytics</Badge>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {skills.map((skill) => (
              <Card
                key={skill.name}
                className="group border bg-white/70 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border bg-muted/20">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className="object-contain p-2"
                      unoptimized
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-medium leading-tight truncate">{skill.name}</p>
                      <Badge variant="secondary" className="font-normal">
                        {categoryLabel[skill.category]}
                      </Badge>
                    </div>

                    
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </Content>
  );
}