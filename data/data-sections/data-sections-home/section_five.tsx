import InteracticeMaps from "@/components/interactice-maps";
import React from 'react';

const header = (
    <h2 className="text-center">
        <div className="text-black text-5xl pt-12 pb-24">Sparkling’s presence in<span className="color-primary-light"> Europe </span> and <span className="color-primary-light"> North Africa</span></div> 
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

    background: 'bg-color-primary-light',
    margin_bottom: 'mb-12',
    padding_bottom: "pb-12"
};
export default element;