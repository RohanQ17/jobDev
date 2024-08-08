import { useState, useEffect } from "react";
import Spninners from "./Spninners";
import JobListing from "./JobListing";
const JobsListing = ({ isHome = true }) => {
  const apiUrl = isHome? "https://jobsdjango.onrender.com/jobs?_limit=3/":"https://jobsdjango.onrender.com/jobs/";
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {            {/* useeffect more like sideeffect when components  */}
    const fetchjobs = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        const pip = await fetch ('https://jobsdjango.onrender.com/jobs/')
        
        setJobs(data);
      } catch(error) {
          console.log(error);
      }
      finally{
        setLoading( false);
      }
    };
    fetchjobs();
  }, []);

  
  
  return (
    <div>
      <section className=" m-8  px-8 py-8 rounded-lg shadow-[0_1px_35px_17px] shadow-cyan-700 shadow- backdrop-blur-md">
      
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-sans font-bold text-white mb-6 text-center">
            Browse Jobs
          </h2>
          
          
            {/*jobs listings dynamically from json*/}
            {loading? (<Spninners/>):(
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
            </div>)
            } 
            
          </div>
        
      </section>
    </div>
  );
};

export default JobsListing;
