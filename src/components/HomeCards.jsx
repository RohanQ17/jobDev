import Cards from "./Cards";
import { Link } from "react-router-dom";
const HomeCards = () => {
  return (
    <div>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Cards>
              <h2 className="text-2xl font-bold">For Developers</h2>
              <p className="mt-2 mb-4">
                Browse our React jobs and start your career today
              </p>
              <Link
                to="/jobs"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 hover:scale-110 duration-150"
              >
                Browse Jobs
              </Link>
            </Cards>
            <Cards bg='bg-blue-100'>
              <h2 className="text-2xl font-bold">For Employers</h2>
              <p className="mt-2 mb-4">
                List your job to find the perfect developer for the role
              </p>
              <Link
                to="/addJob"
                className="inline-block bg-pahe px-6 py-2 text-white rounded-md font-sans font-semibold hover:scale-110 duration-150"
              >
                Add Job
              </Link>
            </Cards>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCards;
