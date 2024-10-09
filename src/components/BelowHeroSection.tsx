export const BelowHeroSection = () => {
  return (
    <div className="bg-primaryColor relative max-w-[1440px] px-[100px]">

      <div>
      <img src="image4.svg" alt="" className="absolute top-[160px] left-[160px] w-[62px]" />
      <img src="image5.svg" alt="" className="absolute top-[122px] right-[93px] w-[38px]" />
      <img src="image6.svg" alt="" className="absolute bottom-[325px] right-[153px] w-[101px]" />
      <img src="image7.svg" alt="" className="absolute left-[279px] bottom-[122px] w-[76px]" />

      </div>
      <div className="flex flex-col justify-center items-center mt-2">

        <div className="mt-[160px] font-poppins font-semibold text-[40px] text-white flex">
          <div className="text-custom-gradient">See </div>
          <div className="text-textDemoButton flex flex-col justify-center items-center">
            <div className="px-2"> Adaptive Learning </div>
            <div>
              <img src="yellowLine.svg" alt="" />
            </div>
          </div>
          <div className="text-custom-gradient"> in Action</div>
        </div>

        <div className="mt-[105px] mb-[170px] w-[930px] mx-w-[1024px] h-[500px] rounded-xl bg-white border shadow-lg">
          <div className="flex px-8 py-4">
            <div>
              <img src="redDot.svg" alt="" />
            </div>
            <div>
              <img src="yellowDot.svg" alt="" />
            </div>
            <div>
              <img src="greenDot.svg" alt="" />
            </div>
          </div>
          <div className=" px-6 h-[430px]">
            <iframe
              src="https://www.youtube.com/watch?v=88NJP9j-qNo&list=PLgyJAK8noDUG81VJAP38cF9GVRVKLipmZ"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
