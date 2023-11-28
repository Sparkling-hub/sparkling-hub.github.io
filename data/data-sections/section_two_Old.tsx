import Services from "../../components/services"
import React from 'react';


const header =
  <h1 className="flex items-center justify-center">
    <span className="color-primary-light mx-4">We </span> <span className="text-black font-medium">Provide</span> <br />
  </h1>


const content = <Services />


const element = {
  content: content,
  header: header,
}
export default element