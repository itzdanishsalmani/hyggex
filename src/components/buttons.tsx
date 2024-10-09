export const BlueButton = () => {
    return (
        <div>
            <button className="bg-primaryColor font-jeju text-sm text-white border border-primaryColor py-2 px-6 rounded-md">Sign-up</button>
        </div>
    )
}

export const WhiteButton = () => {
    return (
        <div>
            <button className="bg-white font-jeju text-sm text-primaryColor border border-primaryColor py-2 px-6 rounded-md">Login</button>
        </div>
    )
}

// poppins
export const StartLearningButton = () => {

    return (
        <div>
            <button className="flex font-poppins justify-center items-center bg-buttonBlue w-[180px] py-2 text-white text-base font-medium rounded-lg gap-3">
                <div>Start Learning</div> 
                <img src="arrow.svg" alt="" />
                  </button>
        </div>
    )
}
//poppins
export const BookDemoButton = () => {
    return (
        <div>
            <button className="bg-bgDemoButton font-poppins text-textDemoButton w-[180px] py-2 text-base font-medium rounded-lg">Book a Demo</button>
        </div>
    )
}
