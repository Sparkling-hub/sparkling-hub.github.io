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
    curvedClass: 'before:content-curved_medium_without_line before:w-full before:absolute',
    background: 'bg-color-primary-medium',
    margin_bottom: 'mb-12',
    padding_bottom: "pb-12"
};
export default element;