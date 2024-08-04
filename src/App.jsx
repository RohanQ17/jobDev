import {Route , createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./Layouts/MainLayout";

import JobsPages from "./pages/JobsPages";
import JobPage,{singleJobLoader} from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";


const App = () => {
  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
     <Route index element ={<HomePage/>}/> {/* any route that wraps in layout follows the layout */}
     <Route path ='/jobs' element={<JobsPages/>}/>
     <Route path = '/jobs/:id' element={<JobPage/>} loader={singleJobLoader} deleteJob={deleteJob}/> {/**colon makes it dynamic */}
     <Route path='/addJob' element={<AddJobPage addJobSubmit={addJob}/>}/>
    </Route>
    )
  );
  return(
    <RouterProvider router={router}/>
  );
};

export default App;
