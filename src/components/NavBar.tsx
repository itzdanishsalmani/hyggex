import { BlueButton, WhiteButton } from "./buttons";
export const NavBar = () => {
  return (
<div className="max-w-[1200px] mx-auto">
<div className="flex justify-between items-center">

      <div>
        <img src="logo.png" alt="logo" width={250} />
      </div>

      <div className="space-x-8 text-primaryColor font-medium">
        <span>Learn</span>
        <span>Practice</span>
        <span>Assessments</span>
      </div>

      <div className="flex space-x-4">
        <span><BlueButton /></span>
        <span><WhiteButton /></span>
      </div>

    </div>
    </div>
  );
};
