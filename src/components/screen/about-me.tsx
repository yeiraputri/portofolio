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
          I’m in my final year majoring in Information Systems at the University of Indonesia. I have a keen interest in data analysis, business intelligence, and data science. 
          My educational background has given me extensive knowledge about data in general (how to interpret it, how to obtain information from data, how to process data to gain insights, etc). 
          I have already completed several projects and have interned at multiple place. 
          </div>
        </div>
      </div>
    </Content>
  );
}
