import IMaps from "@/interface/IMaps";
import React from 'react';

const header =
	<h1 className='h-24'>
		<span>
			<strong className='color-primary-light'>World Map</strong>
		</span>
	</h1>


const image =
<svg id="EU" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 900" className="item-map w-auto m-auto text-dark-gray relative svg-map  max-w-full duration-700 opacity-100 scale-100">
 <g className="layer">
 
 </g>
 <g id="Switzerland" className="office_point">
    <ellipse className="block" cx="515.7" cy="388.9" fill="#285c5c" rx="3" ry="3" stroke="#285c5c"/>
    <circle className="block" cx="515.7" cy="388.9" fill="none" r="6" strokeWidth="1" stroke="transparent"/>
    <ellipse className="hidden" cx="515.7" cy="388.9" fill="#FF0000"  rx="3" ry="3" stroke="#FF0000"/>
    <circle className="hidden" cx="515.7" cy="388.9" fill="none" r="6" strokeWidth="1" stroke="#FF0000"/>
 </g>
 <g id="UK Office" className="office_point">
    <ellipse className="block" cx="418.55" cy="301.05" fill="#285c5c" rx="3" ry="3" stroke="#285c5c"/>
    <circle className="block" cx="418.55" cy="301.05" fill="none" r="6" strokeWidth="1" stroke="transparent"/>
    <ellipse className="hidden" cx="418.55" cy="301.05" fill="#FF0000"  rx="3" ry="3" stroke="#FF0000"/>
    <circle className="hidden" cx="418.55" cy="301.05" fill="none" r="6" strokeWidth="1" stroke="#FF0000"/>
 </g>
 <g id="UK_partner" className="office_point">
    <ellipse className="block" cx="424.65" cy="286.65" fill="#3498db" rx="3" ry="3" stroke="#3498db"/>
    <circle className="block" cx="424.65" cy="286.65" fill="none" r="6" strokeWidth="1" stroke="transparent"/>
    <ellipse className="hidden" cx="424.65" cy="286.65" fill="#FF0000"  rx="3" ry="3" stroke="#FF0000"/>
    <circle className="hidden" cx="424.65" cy="286.65" fill="none" r="6" strokeWidth="1" stroke="#FF0000"/>
 </g>
 <g id="Ukraine" className="office_point">
    <ellipse className="block" cx="780.55" cy="363.95" fill="#285c5c" rx="3" ry="3" stroke="#285c5c"/>
    <circle className="block" cx="780.55" cy="363.95" fill="none" r="6" strokeWidth="1" stroke="transparent"/>
    <ellipse className="hidden" cx="780.55" cy="363.95" fill="#FF0000"  rx="3" ry="3" stroke="#FF0000"/>
    <circle className="hidden" cx="780.55" cy="363.95" fill="none" r="6" strokeWidth="1" stroke="#FF0000"/>
 </g>
 <g id="Tunis1" className="office_point">
    <ellipse className="block" cx="522.85" cy="541.25" fill="#285c5c" rx="3" ry="3" stroke="#285c5c"/>
    <circle className="block" cx="522.85" cy="541.25" fill="none" r="6" strokeWidth="1" stroke="transparent"/>
    <ellipse className="hidden" cx="522.85" cy="541.25" fill="#FF0000"  rx="3" ry="3" stroke="#FF0000"/>
    <circle className="hidden" cx="522.85" cy="541.25" fill="none" r="6" strokeWidth="1" stroke="#FF0000"/>
 </g>
 <g id="Tunis2" className="office_point">
    <ellipse className="block" cx="522.85" cy="541.25" fill="#285c5c" rx="3" ry="3" stroke="#285c5c"/>
    <circle className="block" cx="522.85" cy="541.25" fill="none" r="6" strokeWidth="1" stroke="transparent"/>
    <ellipse className="hidden" cx="522.85" cy="541.25" fill="#FF0000"  rx="3" ry="3" stroke="#FF0000"/>
    <circle className="hidden" cx="522.85" cy="541.25" fill="none" r="6" strokeWidth="1" stroke="#FF0000"/>
 </g>

 


</svg>

const officeCardsData = [
    {
		title: "Tunis Office 1:",
        city: "Ariana",
		adress1: "Pôle Technologique",
		state: "Ariana ",
		country: "Tunisia",
		index: "2083",
        id:"Tunis1",
        top: "",
        pointColor: "bg-primary-dark",
	},
	{
		title: "Tunis Office 2:",
        city: "Ariana",
		adress1: "Rue André Ampère",
		state: "Ariana 2083",
		country: "Tunisia",
		index: "2083",
        id:"Tunis2",
        top: "",
        pointColor: "bg-primary-dark",
	},
    {
        title: "Switzerland Headquarter",
        city: "Lugano",
        adress1: "Via Cattedrale 7",
        state: "Lugano",
        country: "Switzerland",
        index: "6900",
        id: "Switzerland",
        top: "top-0",
        pointColor: "bg-primary-dark",
    },
    {
        title: "Ukraine Office",
        city: "Zaporizhzhia",
        adress1: "Haharina St, 3",
        state: "Zaporizhzhia, Zaporiz&rsquo;ka oblast&rsquo;",
        country: "Ukraine",
        index: "69061",
        id: "Ukraine",
        top: "top-0",
        pointColor: "bg-primary-dark",
    },
    {
        title: "UK Office",
        city: "London",
        adress1: "16-18 Montagu Place",
        state: "London",
        country: "United Kingdom",
        index: "W1H 2BQ",
        id: "UK Office",
        top: "top-0",
        pointColor: "bg-primary-dark",
    },
    {
        title: "Partner's Office / UK office",
        city: "Cambridge",
        adress1: "St John's Innovation Centre",
        state: "Cambridge",
        country: "United Kingdom",
        index: "CB4 0WS",
        id: "UK_partner",
        top: "top-0",
        pointColor: "bg-partner-office-color",
    },
]

const element: IMaps = {

	name: "World",
	header: header,
	image: image,
	id: "world_all",
	officeCards: officeCardsData,
	
}

export default element