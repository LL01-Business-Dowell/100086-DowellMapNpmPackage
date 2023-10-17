

export default function MySurveys() {
    return (
        <>
            <div className="relative md:ml-64">
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <div className="relative md:pt-32 pb-32 pt-12 ">
                        <div className="mx-4 items-center flex justify-between flex-wrap">
                            <h1 className=" text-[#737373] text-3xl font-bold pt-1 pb-3 no-underline">
                                DoWell Surveys
                            </h1>
                            <h6 className=" text-[#288437] text-sm font-bold pb-0 no-underline">
                                Samantha will do surveys in 150000 locations worldwide
                            </h6>

                        </div>

                        <div className="h-1 mx-4 bg-[#A6A6A6]"></div>

                        <div className="mt-4 flex flex-wrap">
                            <div className="w-full xl:w-4/12 px-4">
                                <div className="sm:col-span-3">

                                    <div className="mt-2">
                                        <select id="country" name="country" autoComplete="country-name" className="block font-bold text-white w-full border-0 py-1.5 shadow-sm   sm:max-w-xs sm:text-sm sm:leading-6 bg-[#FF3131] outline-none ">
                                            <option>Select country</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">

                                    <div className="mt-2">
                                        <select id="country" name="country" autoComplete="country-name" className="block font-bold text-white w-full border-0 py-1.5 shadow-sm  sm:max-w-xs sm:text-sm sm:leading-6 bg-[#FF3131] outline-none">
                                            <option>Select location</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full xl:w-4/12 px-4 ">
                                <div className="sm:col-span-3">

                                    <div className="mt-2 ">
                                        <h6 className="h-8 p-1 text-center font-bold text-white text-sm bg-[#FF3131]">
                                            Select distance from center of location
                                        </h6>

                                    </div>
                                </div>
                                <div className="sm:col-span-3">

                                    <div className="mt-2 items-center flex justify-between flex-wrap">
                                        <div className="relative mb-4 flex flex-wrap items-stretch">
                                            <span
                                                className="flex items-center px-1 py-[0.25rem] font-bold text-center text-white text-sm bg-[#FF3131]"
                                            >From</span>
                                            <input
                                                type="text"
                                                className="relative m-0 block w-24 flex-auto bg-[#D9D9D9] px-3 py-[0.25rem] outline-none"
                                                placeholder="Meters" />
                                        </div>
                                        <div className="relative mb-4 flex flex-wrap items-stretch">
                                            <span
                                                className="flex items-center px-1 py-[0.25rem] font-bold text-center text-white text-sm bg-[#FF3131]"
                                            >From</span>
                                            <input
                                                type="text"
                                                className="relative m-0 block w-24 flex-auto bg-[#D9D9D9] px-3 py-[0.25rem] outline-none"
                                                placeholder="Meters" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full xl:w-4/12 px-4">
                                <div className="mt-2">
                                    <select id="country" name="country" autoComplete="country-name" className="h-[72px] block font-bold text-white w-full border-0  shadow-sm  sm:max-w-xs sm:text-sm sm:leading-6 bg-[#FF3131] outline-none">
                                        <option>Select category</option>
                                        <option>Workflow Ai</option>
                                        <option>Living labs Maps</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </>
    );
}
