import React from 'react';
import MyMultileSelect from '../my-multi-select';
import IFilterProps from '@/interface/IFilterProps';



const Filter: React.FC<IFilterProps> = ({  dataJobs, uniqueIds, activeMultiselect, handleLocationChange, deleteItem }) => {

	


	return (
		<div className="filter-container sticky bg-gray-100 ">
			<h3 className="text-center text-3xl mt-10 mb-5 ">Open Position</h3>
			<div className="text-sm">
				<form className="input search m-4 h-9 flex bg-gray-200 rounded-md relative">
					<input name="name" type="text" id="filter_search" placeholder="Search by any keyword" className="w-full h-full bg-gray-200 rounded-md pl-5 " value="" />
					<button className="absolute leading-9 h-full w-2/12  right-0">
						<img src="https://www.kape.com/wp-content/themes/kape/assets/img/search-ico.png" className="w-3 h-3 m-auto" alt="" />
					</button>
				</form>
				
				<MyMultileSelect  	dataJobs={dataJobs} 
									uniqueIds = {uniqueIds}
									activeMultiselect = {activeMultiselect}
									placeholder = "Set Location" 
									handleLocationChange = {handleLocationChange}
									deleteItem = {deleteItem}/>

				<span className="input arrow m-4 h-9 bg-gray-200 leading-8">
					<input name="experience" type="text" placeholder="All departament" className="w-full h-full resize-none rounded-md bg-gray-200 px-5" value="" />
				</span>
			</div>
		</div>      
	
      );
};

export default Filter;
  
	  {/*  <div className={`filter-container sticky bg-gray-100 `}>


     <h3 className='text-center text-3xl mt-10 mb-5 '>Open Position</h3>
          <div className='text-sm'>
            <form className="input search m-4 h-9 flex bg-gray-200 rounded-md relative">
              <Input type="text" placeholder="Search by any keyword" name='name' id="filter_search" value={search.name} classElement='w-full h-full bg-gray-200 rounded-md pl-5 ' onChange={(e) => setSearch({ ...search, name: e.target.value })} />
              <button className='absolute leading-9 h-full w-2/12  right-0'>
                <img src="https://www.kape.com/wp-content/themes/kape/assets/img/search-ico.png" className='w-3 h-3 m-auto' alt="" />
              </button>
              <ListSearch data={dataJobs}/>
            </form>
            <span className='input arrow m-4 h-9 bg-gray-200  leading-8'>
              <Input type="text" placeholder="Set Location" name = 'location' value={search.location} classElement='w-full h-full resize-none rounded-md bg-gray-200 px-5' onChange={(e) => setSearch({ ...search, name: e.target.value })} />
            </span>
            <span className='input arrow m-4 h-9 bg-gray-200 leading-8'>
              <Input type="text" placeholder="All departament" name='experience' value={search.experience} classElement='w-full h-full resize-none rounded-md bg-gray-200 px-5' onChange={(e) => setSearch({ ...search, name: e.target.value })} />
            </span>
          </div> 
        </div>*/}