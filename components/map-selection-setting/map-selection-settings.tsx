


import IMapSelectionSettings from "@/interface/IMapSelectionSettings";

const countries = [
	// { name: "Asia", id: "AI" },
	{ name: "Africa", id: "AF" },
	{ name: "Europe", id: "EU" },
	// { name: "Australia", id: "OC" },
	// { name: "South America", id: "SA" },
	// { name: "North America", id: "NA" },
]

const MapSelectionSettings: React.FC<IMapSelectionSettings> = ({ currentMap, hovered, activeOfficePoint, ChangeMap, setHovered, setActiveOfficePoint }) => {

	const handleClick = (e: any) => {

		ChangeMap(e)

	};
	
	return (
		<div className="col-span-3 flex flex-col relative">
			<div className="border-l-2 border-primary-dark pl-12">
				<div className="gh-2 pt-global duration-300">
					<div >
						<div className="mb-12 text-center "><p className="text-2xl font-medium">See locations</p>
							<div className="flex gap-4 flex-wrap group mt-8">

								{countries.map((country) => (
									<button key={country.id} id={country.id == currentMap?.id ? 'world' : country.id} className={`btn duration-200 !flex gap-2 items-center light hover:bg-primary-light-light mx-4 p-4 font-medium ${country.id == currentMap?.id ? 'bg-primary-light-light active' : 'bg-primary-dark'}`} onClick={handleClick} >{country.name}
										<span className={` ${country.id == currentMap?.id ? '' : 'hidden'}`} >
											<div className="content-center icon-wrap child:h-4 child:w-4" rel="icon">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M20 12L4 12" stroke="currentColor" strokeWidth="2"></path>
												</svg>
											</div>
										</span>
										<span className={`${country.id == currentMap?.id ? 'hidden' : ''}`} >
											<div className="content-center icon-wrap child:h-4 child:w-4" rel="icon">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M12 4L12 20" stroke="currentColor" strokeWidth="2"></path>
													<path d="M20 12L4 12" stroke="currentColor" strokeWidth="2"></path>
												</svg>
											</div>
										</span>
									</button>
								))
								}

							</div>
						</div>
					</div>
				</div>

			</div>
			{
				currentMap ? <div className={`text-center text-4xl font-medium pb-12 border-l-2 border-primary-dark pl-12`}> {currentMap.name}</div> : ""
			}

			<div className={`grid grid-cols-2  lg:grid-cols-2 max-lg:gap-x-global max-lg:gap-y-4 border-l-2 border-primary-dark pl-12`}>
				{currentMap?.officeCards?.map((card) =>
					<button
						key={card.id}
						className={`lg:block btn duration-200 col-span-1 ml-8 p-4 text-xl text-left font-medium !p-0 !bg-transparent !pb-4 hover:!text-primary-light lg:opacity-100 
									${hovered === card.id ? 'text-primary-light' : ''} ${activeOfficePoint === card.id ? 'text-white' : ''} `}
						onMouseEnter={() => setHovered(card.id)}
						onMouseLeave={() => setHovered(null)}
						onClick={() => setActiveOfficePoint(card.id)}
					>

						{card.city}
					</button>
				)}
			</div>



		</div>

	);
};

export default MapSelectionSettings;
