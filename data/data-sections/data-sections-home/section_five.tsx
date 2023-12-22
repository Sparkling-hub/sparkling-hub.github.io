import InteracticeMaps from "@/components/interactice-maps";
import Button from "../../../components/button";
import React from 'react';



const header = (
    <h1 className="section_one">
        <div className="text-black">Sparkling is a <span className="color-primary-light">global </span> company</div>
    </h1>
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