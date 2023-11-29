import React from 'react';

import dataJobs from '../../data/data-jobs'

const Section = () => {

  
  return (
    <div class="container wow fadeInUp"  >


          {dataJobs.map((job, index) => (
            <div class="col-sm-12 col-md-6">
              <div class="vertical_line">
                <div class="circle_bottom"></div>
              </div>
              <div class="info_vertical">
                <div className='bid'>{job.bid}</div>
                {job.head}
              </div>
              <div class="service-01 job-content ">
                {/* <div class="head-service-01">
                  <i class="fa fa-cubes"></i>
                </div> */}
                <div class="">
             <p>     <strong>
                  {job.text}
                  {job.salary}</strong></p>
                  <div style={{paddingBottom:'5%',paddingTop: '3%'}}><a href="/jobs/pm-intern" class="button">SEE FULL JOB DESCRIPTION</a></div>               </div>
              </div>
            </div>))}
        </div>




  )

}
export default Section;
