
import StartupAssistings from "@/components/startup-assistings"

const header =
    <h2 className="p-4">
        <div className=" text-5xl mb-8 text-black font-light mx-auto w-fit ">

            <span className="color-primary-dark font-bold">Assisting you</span>{' '}
            all the way through
        </div>
        <div className="flex-col justify-center text-lg w-fit m-auto px-14">
            <div className="text-center text-black font-normal pb-4">
                While the MVP marks the starting line, it is not the finish line.
                It is the foundational groundwork imperative for a successful future.
                Our approach in developing an MVP keeps your future in
                mind and its stability as a core value ensuring a sound foundation that eases subsequent development.
            </div>
            <div className="text-center text-black font-normal px-40 pb-20">
                From this point onwards it is on you and your dream to lead the way,
                we offer our support and guidance, serving as your technological partner
                or consultant as you navigate the different stages of growth.
            </div>
        </div>

    </h2>

const content = <StartupAssistings />

const element = {
    content: content,
    header: header,

    background: 'bg-color-primary-light',
    index: 4,

}
export default element