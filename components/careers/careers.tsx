import { useState, useEffect, ChangeEvent } from 'react';
import dataJobs from '../../data/data-jobs';
import JobList from '../job-list';
import Filter from '../filter'
import { getIds } from './search_function/search_function'
import { useDispatch, useSelector } from 'react-redux';

import ICareersProps from '@/interface/ICareersProps';

import {
	selectCareers,
	setFilterPhraze,
	setUniqueIds,
	setActiveLocations,
	setUniqueExp,
	setActivePositions,
	setUniqueWorkmode,
	setActiveWorkmode,
  } from '@/store/redusers/CareersSliceReduser';


  const Careers: React.FC<ICareersProps> = () => {
	const dispatch = useDispatch();
	const {
	  filterPhraze,
	  uniqueIds,
	  activeLocations,
	  uniqueExp,
	  activePositions,
	  uniqueWorkmode,
	  activeWorkmode,
	} = useSelector(selectCareers);
  
	const handleParamsChange = (e: ChangeEvent<HTMLInputElement>, name: string, active: string[]) => {
	  let newValue: string[] = [];
  
	  if (e.target.checked) {
		newValue = [...active, e.currentTarget.id];
	  } else if (!e.currentTarget.checked) {
		newValue = active.filter((value) => value !== e.currentTarget.id);
	  }
  
	  if (name === 'location') {
		dispatch(setActiveLocations(newValue));
	  }
	  if (name === 'exp') {
		dispatch(setActivePositions(newValue));
	  }
	  if (name === 'mode') {
		dispatch(setActiveWorkmode(newValue));
	  }
	};
  
	useEffect(() => {
	  dispatch(setUniqueIds(getIds(dataJobs, 'id')));
	  dispatch(setUniqueExp(getIds(dataJobs, 'nameProf')));
	  dispatch(setUniqueWorkmode(getIds(dataJobs, 'workMode')));
	}, [dataJobs, dispatch]);
  
	const handleFilterPrazeChange = (e: ChangeEvent<HTMLInputElement>) => {
	  dispatch(setFilterPhraze(e.currentTarget.value));
	};
  
	const deleteItem = (e: React.MouseEvent<HTMLSpanElement>, name: string, active: string[]) => {
	  const idToDelete = e.currentTarget.id.toString();
	  const newValue = active.filter((value) => value !== idToDelete);
  
	  if (name === 'location') {
		dispatch(setActiveLocations(newValue));
	  }
	  if (name === 'exp') {
		dispatch(setActivePositions(newValue));
	  }
	  if (name === 'mode') {
		dispatch(setActiveWorkmode(newValue));
	  }
	  e.stopPropagation();
	};
  
	const filteredJobsList = dataJobs
	  .filter((job) => {
		if (!activeLocations.length) return dataJobs;
		return activeLocations.includes(job.id);
	  })
	  .filter((job) => {
		if (!activePositions.length) return dataJobs;
		return activePositions.includes(job.nameProf);
	  })
	  .filter((job) => {
		if (!filterPhraze) return dataJobs;
		return job.namePosition.toLowerCase().includes(filterPhraze.toLowerCase());
	  })
	  .filter((job) => {
		if (!activeWorkmode.length) return dataJobs;
		return activeWorkmode.includes(job.workMode);
	  });
  
	return (
	  <div className='flex relative w-full'>
		<Filter
		  dataJobs={dataJobs}
		  filterPhraze={filterPhraze}
		  activeLocations={activeLocations}
		  uniqueIds={uniqueIds}
		  activePositions={activePositions}
		  uniqueWorkMode={uniqueWorkmode}
		  activeWorkMode={activeWorkmode}
		  uniqueExp={uniqueExp}
		  handleFilterPrazeChange={handleFilterPrazeChange}
		  handleParamsChange={handleParamsChange}
		  deleteItem={deleteItem}
		/>
		<JobList jobs={filteredJobsList} />
	  </div>
	);
  };

export default Careers;
