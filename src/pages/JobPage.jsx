import { useParams, useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const job = useLoaderData();
  const onDeleteClick = (jobId) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this listing?'
    );

    if (!confirm) return;

    deleteJob(jobId);

    toast.success('Job deleted successfully');

    navigate('/jobs');
  };
  

  return (
    <section className="w-full mx-auto  p-8">
      <style>{"body { background-color: #0a2541; }"}</style>
      <div className="grid sm:grid-rows-1  md:grid-rows-3 md:grid-flow-col gap-5 ">
        <div className="row-span-1  bg-slate-200  sm:col-span-1 md:col-span-2 rounded-xl ">
          <p className="m-3 font-sans text-lg font-semibold text-gray-500">
            {job.type}
          </p>
          <h1 className="m-3 font-sans text-3xl font-semibold">{job.title}</h1>
          <h2 className="m-3 font-sans text-yellow-600">{job.location}</h2>
        </div>
        <div className="row-span-2  bg-slate-200 rounded-xl sm:col-span-1 md:col-span-2 ">
          <h1 className="m-3 font-sans text-xl font-semibold text-blue-800">
            Job Description
          </h1>
          <p className="m-3 font-sans text-xl ">{job.description}</p>
          <h1 className="mx-3 mt-5 font-sans text-xl font-semibold text-blue-800">
            Salary
          </h1>
          <h2 className="m-3 font-sans text-yellow-600">{job.salary}</h2>
        </div>
        <div className="row-span-3  md:col-span-1 bg-slate-200 rounded-xl ">
          <h2 className="m-3 font-sans text-lg font-semibold text-yellow-600">
            Comapany Info
          </h2>
          <h1 className="m-3 font-sans text-3xl font-semibold">
            { job.company.name }
          </h1>
          <p className="font-sans m-3 text-xl">{job.company.description}</p>
          <h2 className="mt-3 mx-3 font-sans text-blue-800 text-lg ">
            Contact Us
          </h2>
          <p className="font-sans ml-3 text-xl inline-block text-gray-600">
            {job.company.contactEmail}
          </p>
          <p className="font-sans ml-3 text-xl inline-block text-gray-600">
            {job.company.contactPhone}
          </p>
          <br />
          <div className="flex-col justify-center">
            <button className=" mx-auto block mt-10   bg-pahe px-8 py-3 text-white rounded-md font-sans font-semibold hover:scale-110 duration-150">
              Apply Here
            </button>
            <button onClick={() => onDeleteClick(job.id)}
            className=" mx-auto mb-1 block mt-6   bg-gray-900 px-8 py-3 text-white rounded-md font-sans font-semibold hover:scale-110 duration-150">
              Delete Job
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

const singleJobLoader = async ({ params }) => {
  const res = await fetch(`https://jobs-django.vercel.app/jobs/${params.id}`);
  const data = await res.json();
  const datasingle = Array.isArray(data) ? data[0] : data;
  return datasingle;
};

export { JobPage as default, singleJobLoader };
