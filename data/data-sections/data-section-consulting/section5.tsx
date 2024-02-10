


const header =
    <h2 className="text-5xl mx-auto w-fit mt-12 mb-28">
        How{" "}
        <span className="text-teal-500 font-medium">We Work</span>

    </h2>

const content = <div className="we-work-container relative my-10 h-auto jystify-ceter flex  flex-col lg:items-start items-center">
    <div className="arrow absolute lg:left-[-4rem]">
        <img src={`/img/consulting/arrow_consulting.svg`} className=' h-[500px] lg:block hidden w-auto' alt="we-work" />
        
    </div>
    <ul className="h-auto flex flex-col lg:justify-around text-2xl font-light justify-center h-[100%] lg:text-start items-center lg:items-start  text-center">
        <li className="lg:ml-20 lg:mt-9 lg:mb-2 my-4 w-fit flex items-center rounded-full  bg-color-primary-light-light  lg:h-[70px] ">  <p className="lg:pr-24 px-8 py-4">Analyse the issue and its roots.</p></li>
        <li className="lg:ml-44  lg:mb-4 w-fit flex items-center my-4  lg:h-[70px] rounded-full  bg-color-primary-light-light"><p className=" px-8 lg:pr-24 py-4">Evaluate the technical architecture of the project.</p></li>
        <li className="lg:ml-60  lg:mb-4 w-fit flex items-center  my-4 lg:h-[70px] rounded-full  bg-color-primary-light-light "><p className=" px-8 lg:pr-24 py-4">Plan a solution with your company tailoring it to its needs.</p></li>
        <li className="lg:ml-44  lg:mb-2 w-fit flex items-center my-4 lg:h-[70px] rounded-full  bg-color-primary-light-light "><p className=" px-8 lg:pr-24 py-4">Implement new changes in the ecosystem and iterate if needed.</p></li>
        <li className="lg:ml-20    w-fit  flex items-center my-4 lg:h-[70px] rounded-full  bg-color-primary-light-light "><p className=" px-8 lg:pr-24 py-4">Keep it working! Supporting you also once the project is finished. Always ready to help.</p></li>
    </ul>
</div>

const element = {
    content: content,
    header: header,

    background: 'bg-color-primary-light',
    index: 5,
    padding_bottom: 'pb-40',
    margin_bottom: 'mb-64'
}
export default element