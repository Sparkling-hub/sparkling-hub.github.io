import InteracticeMaps from "@/components/interactice-maps";
import React from 'react';

const header = (
    <h2 className="text-center absolute left-[55%] mx-5 bottom-[65%]">
        <div className="text-primary-darkTeal text-[52px] pt-12 font-semibold pb-24">Sparkling’s presence <br />
        in<span className="text-primary-yellow"> Europe </span> and <span className="text-primary-yellow">North Africa </span></div> 
    </h2>
);

const content = (
    <InteracticeMaps />   
);


const element = {
    content: content,
    header: header,
    id: 'maps',
    index: 5,

    
    margin_bottom: 'mb-12',
    padding_bottom: "pb-12"
};
export default element;