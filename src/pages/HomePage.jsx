import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobsListing from "../components/JobsListing";
import AllJobs from "../components/AllJobs"

const HomePage = () => {
  return (
    <>
      <Hero title="Welcome to NHK Jobs" subtitle="Find the Role catered to your own needs"/>
      <HomeCards/>
      <JobsListing/>
      <AllJobs/>
    </>
  )
}

export default HomePage
