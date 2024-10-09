import { StartLearningButton, BookDemoButton } from "./buttons";

export const HeroSection = () => {
  return (

    <div className="max-w-[1440px] px-[100px]">

    <div className="mt-[90px] grid grid-cols-2">

      {/* column1 */}
      <div className="mr-16">
        <div className="flex gap-[25px] text-sm text-darkBlue font-medium">
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
              <div>
                <img src="line.svg" alt="" />
              </div>
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
      {/* column1 ends here*/}

      {/* column2 */}
        <div>
          <img src="child.svg" alt="" />
        </div>

      </div>

     
      <div className="bg-bgTrustedBy mt-32 flex relative">
  {/* Text block */}
  <div className="text-md font-bold w-[350px] ">
    <div className="text-primaryColor">
      <p>Trusted by</p>
      <p>the best</p>
    </div>
    <div className="text-textIndustry">in the industry</div>
  </div>

  {/* Scrolling images */}
  <div className="mt-4 px-4 flex overflow-hidden">
    <div className="animate-scroll flex gap-12" style={{ width: 'calc(100% + 250px)' }}>
      <img src="razorpay.svg" alt="" className="w-32 h-16" />
      <img src="startup.svg" alt="" className="w-32 h-16" />
      <img src="vishalakhi.svg" alt="" className="w-32 h-16" />
      <img src="wadhwani.svg" alt="" className="w-32 h-16" />
      <img src="microsoft.svg" alt="" className="w-32 h-16" />
      <img src="hashtagstartup.svg" alt="" className="w-32 h-16" />

      {/* Duplicate images for continuous scroll */}
      <img src="razorpay.svg" alt="" className="w-32 h-16" />
      <img src="startup.svg" alt="" className="w-32 h-16" />
      <img src="vishalakhi.svg" alt="" className="w-32 h-16" />
      <img src="wadhwani.svg" alt="" className="w-32 h-16" />
      <img src="microsoft.svg" alt="" className="w-32 h-16" />
      <img src="hashtagstartup.svg" alt="" className="w-32 h-16" />
    </div>
  </div>
</div>


    </div>
  );
};
