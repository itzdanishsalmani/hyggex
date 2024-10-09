import { StartLearningButton,BookDemoButton } from "./buttons";

export const HeroSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-[100px] mt-[90px] grid grid-cols-2">

{/* column1 */}
      <div className="mr-16">

        <div className="flex gap-[25px] text-sm text-threeImageText font-medium">
          <div className="flex gap-2">
            <img src="student.svg" alt="" />
            Students
          </div>
          <div className="flex gap-2">
            <img src="teacher.svg" alt="" />
            Teachers
          </div>
          <div className="flex gap-2">
            <img src="parent.svg" alt="" />
            Parents
          </div>
        </div>

        {/* poppins */}
        <div className="mt-6 text-5xl text-darkBlue font-extrabold tracking-wide leading-snug">
                <div className="flex gap-4">
          <div>Beyond</div>
          <div className="flex flex-col justify-center items-center">  
                <div>Learning,</div>
                <div><img src="line.svg" alt="" /></div>
                </div>
          </div>
           Becoming.
        </div>

        {/* roboto */}
        <div className="mt-6 text-xl text-textLightBlue font-medium leading-6 text-justify">
          Say goodbye to stressful study sessions. With Hyggex's AI-powered
          learning paths, you can improve your grades and well-being in less
          time, with less stress.
        </div>

{/* poppoins */}
        <div className="mt-[60px] flex justify-start gap-4">
          <StartLearningButton />
          <BookDemoButton />
        </div>

      </div>
      {/* column1 */}

{/* column2 */}
      {/* <div style={{backgroundImage:"url('/child.png')",backgroundSize:"cover"}}> */}

      <div className="relative w-full h-screen bg-cover bg-center">

  {/* Rectangle 1 */}
  <div className="absolute top-10 left-10 w-32 h-48 overflow-hidden border-4 border-white">
    <div className="w-full h-full bg-no-repeat" style={{backgroundImage:"url('/child.png')", backgroundPosition: "-50px -50px"}}></div>
  </div>
  
  {/* Rectangle 2 */}
  <div className="absolute top-10 right-10 w-32 h-48 overflow-hidden border-4 border-white">
    <div className="w-full h-full bg-no-repeat" style={{backgroundImage:"url('/child.png')", backgroundPosition: "-150px -50px"}}></div>
  </div>

  {/* Rectangle 3 */}
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-48 h-32 overflow-hidden border-4 border-white">
    <div className="w-full h-full bg-no-repeat" style={{backgroundImage:"url('/child.png')", backgroundPosition: "-100px -100px"}}></div>
  </div>

</div>



    </div>
  );
};
