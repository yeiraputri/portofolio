import Content from "../common/content";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function AboutMe() {
  return (
    <Content>
      <div className="flex items-center justify-center min-h-screen w-full px-12 lg:px-0">
        
        <div className="shadow-xl border border-gray-300 rounded-3xl p-4 py-24 flex flex-col lg:flex-row items-center gap-4 h-fit max-w-[80vw]">
          
          <div className="lg:w-1/3 w-full flex flex-col items-center justify-center">
            <div className="font-bold lg:text-[58px] text-[32px] text-primaryBlue">Hi!</div>
            <Avatar className="lg:h-60 lg:w-60 h-[300px] w-[300px] bg-clip-border">
              <AvatarFallback>CN</AvatarFallback>
              <AvatarImage src="/images/yeira.jpg" />
            </Avatar>
          </div>

          <div className="lg:w-2/3 w-full text-justify text-lg lg:pr-[7vw]">
            I&apos;m a Final Year Information Systems student at the Universitas
            Indonesia with a strong passion for data analysis and data science. My
            academic background has equipped me with a thorough understanding of
            data—from interpreting and processing information to extracting
            insights for decision-making.
            <br />
            <br />
            I&apos;ve completed several hands-on projects and interned as a data
            analyst, allowing me to apply my knowledge in real-world settings.
            Currently, I&apos;m honing my skills in machine learning through the
            Bangkit Academy while interning as a Dashboard Web developer at Harian
            Kompas. I&apos;m excited to keep expanding my expertise and contribute
            innovative data solutions wherever I can.
          </div>
        </div>
      </div>
    </Content>
  );
}
