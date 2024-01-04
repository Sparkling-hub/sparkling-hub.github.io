

import Manifest from "@/components/manifest"
const header =
    <div className="text-center mt-12 mb-12 leading-7 w-2/3 mx-auto">
        <h2 className="text-5xl m-4">
            <strong className="text-teal-500 font-bold">
                Agile
            </strong>
            with a kick
        </h2>
        <p className="text-center">
            As passionate believers in the agile manifesto we champion iterative development, embracing retrospectives,
            nurturing genuine knowledge sharing and transparent communication.
            These values fuel our synergy and allows us to deliver greater products.
        </p>
    </div>
const content = <Manifest />

const element = {
    content: content,
    header: header,

    background: 'bg-color-primary-light',
    index: 4,

}
export default element