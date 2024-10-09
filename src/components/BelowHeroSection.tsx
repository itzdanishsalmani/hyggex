export const BelowHeroSection = () => {
  return (
    <div className="bg-primaryColor max-w-[1440px] px-[100px]">
      <div className="flex flex-col justify-center items-center mt-2">
        {/* poppoins */}
        <div className="mt-[160px] font-semibold text-[40px] text-white flex">
          <div>See </div>
          <div className="text-textDemoButton flex flex-col justify-center items-center">
            <div> Adaptive Learning </div>
            <div>
              <img src="yellowLine.svg" alt="" />
            </div>
          </div>
          <div> in Action</div>
        </div>

        <div className="mt-[105px] mb-[170px] w-[1024px] h-[500px] rounded-xl bg-white border shadow-lg">
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
