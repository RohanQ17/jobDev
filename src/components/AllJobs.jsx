
import { Link } from "react-router-dom";
const AllJobs = () => {
  return (
    <div>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          to="/jobs"
          className="block bg-pahe font-semibold hover:bg-hoverpahe text-white text-center py-4 px-6 rounded-xl hover:text-gray-300"
        >
          Discover all Jobs
        </Link>
      </section>
    </div>
  );
};

export default AllJobs;
