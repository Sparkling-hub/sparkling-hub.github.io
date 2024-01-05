


const header =
    <h2 className="flex-col items-center  text-6xl mt-24">
        <div className="flex justify-center">
            <span className="text-black ">How </span>
            <span className="color-primary-light mx-4 font-medium">We Work</span>
        </div>
    </h2>

const content = <div className="we-work-container relative my-10 h-96">
                    <div className="arrow absolute h-96">
                        <img src='/img/consulting/arrow_consulting.png' className="h-96" alt="we-work" />
                    </div>
                    <ul className="h-96 flex flex-col justify-around">
                        <li className="pl-32 "><span className="rounded-full bg-color-primary-light-light pl-8 pr-32 pt-2 pb-3">Analyse the issue and its roots.</span></li>
                        <li className="pl-48"><span className="rounded-full bg-color-primary-light-light pl-8 pr-32 pt-2 pb-3">Evaluate the technical architecture of the project.</span></li>
                        <li className="pl-64"><span className="rounded-full bg-color-primary-light-light pl-8 pr-32 pt-2 pb-3">Plan a solution with your company tailoring it to its needs.</span></li>
                        <li className="pl-48"><span className="rounded-full bg-color-primary-light-light pl-8 pr-32 pt-2 pb-3">Implement new changes in the ecosystem and iterate if needed.</span></li>
                        <li className="pl-32"><span className="rounded-full bg-color-primary-light-light pl-8 pr-32 pt-2 pb-3">Keep it working! Supporting you also once the project is finished. Always ready to help.</span></li>
                    </ul>
                </div>

const element = {
    content: content,
    header: header,
    curvedClass: 'before:content-curved_white_without_line before:w-full before:absolute',
    background: 'bg-color-primary-light',
    index: 5,
    padding_bottom: 'pb-40',
    margin_bottom: 'mb-64'
}
export default element