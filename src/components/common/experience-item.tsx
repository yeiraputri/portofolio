import Image from "next/image";

export default function ExperienceItem({
  imageSrc = "/images/logo-kompas.png",
  altText = "Company logo",
  imageWidth = 400,
  imageHeight = 400,

  company = "Harian Kompas",
  position = "Dashboard Web Intern",
  date = "May 2024 - Present",

  children,
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="lg:w-full w-full lg:px-0 px-12 flex flex-col items-center justify-center space-y-6 ">
        <div className="flex flex-row space-x-[10vw] rounded-xl  p-6 ">
          <div className="relative h-32 w-48 overflow-hidden bg-background">
            <Image
              src={imageSrc}
              alt={altText}
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="flex flex-col items-center pt-4  px-4">
            <p className="lg:text-lg text-md">{company}</p>
            <p className="lg:text-lg text-md">{position}</p>
            <p className="lg:text-lg text-md">{date}</p>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}
