import { BlueButton, WhiteButton } from "./buttons";
export const NavBar = () => {
  return (
<div className="max-w-[1440px] mx-auto shadow-md">
<div className="flex justify-between items-center px-[100px] h-[68px]">

      <div>
        <img src="logo.svg" alt="logo" width={200}/>
      </div>

      <div className="flex gap-[16px] text-primaryColor text-md font-medium">
        <span>Learn</span>
        <span>Practice</span>
        <span>Assessments</span>
      </div>

      <div className="flex gap-[16px]">
        <span><WhiteButton /></span>
        <span><BlueButton /></span>
      </div>

    </div>
    </div>
  );
};
