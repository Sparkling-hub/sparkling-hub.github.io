


const header =
    <h2 className="text-5xl mx-auto w-fit mt-12 mb-28">
        How{" "}
        <span className="text-teal-500 font-medium">We Work</span>

    </h2>

const content = <div className="we-work-container relative my-10 h-auto flex flex-col">
    <div className="arrow absolute left-[-4rem]">
        <img src='/img/consulting/arrow_consulting.svg' className=' h-[500px] w-auto' alt="we-work" />
    </div>
    <ul className="h-auto flex flex-col justify-around text-xl font-light  h-[100%]">
        <li className="ml-28 ml-8 mb-8 h-16 xl:w-[70%] max-w-[600px] w-fullrounded-full bg-color-primary-light-light "><div className=" h-[20%] h-full w-full pl-8 pt-2 pb-3">Analyse the issue and its roots.</div></li>
        <li className="ml-48  ml-8 mb-10 max-w-[600px] h-16 xl:w-[70%] max-w-[600px] w-fullrounded-full bg-color-primary-light-light "><div className="rounded-full bg-color-primary-light-light pl-8 pt-2 pb-3">Evaluate the technical architecture of the project.</div></li>
        <li className="ml-64 mb-9 xl:w-[70%] max-w-[600px] w-fullh-16 rounded-full bg-color-primary-light-light "><div className="rounded-full bg-color-primary-light-light pl-8 pt-2 pb-3">Plan a solution with your company tailoring it to its needs.</div></li>
        <li className="ml-48 mb-8 xl:w-[70%] max-w-[600px] w-fullh-16 rounded-full bg-color-primary-light-light "><div className="rounded-full bg-color-primary-light-light pl-8 pt-2 pb-3">Implement new changes in the ecosystem and iterate if needed.</div></li>
        <li className=" ml-28 mb-0 xl:xl:w-[70%] max-w-[600px] w-fullw-full h-16 rounded-full bg-color-primary-light-light "><div className="rounded-full bg-color-primary-light-light pl-8 pt-2 pb-3">Keep it working! Supporting you also once the project is finished. Always ready to help.</div></li>
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