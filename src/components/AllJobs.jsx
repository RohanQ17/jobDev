
import { Link } from "react-router-dom";
const AllJobs = () => {
  return (
    <div>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          to="/jobs"
          className="block bg-bground font-semibold text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          Discover all Jobs
        </Link>
      </section>
    </div>
  );
};

export default AllJobs;
