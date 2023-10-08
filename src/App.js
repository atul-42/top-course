import React, { useEffect, useState } from "react";
import { filterData, apiUrl } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterCriteria, setFilterCriteria] = useState(filterData[0].title);
  // let filname = null;

  // const getFilterName = (filterName) => {
  //   setFilterCriteria(filterName);
  // }

  const fetchData = async ()=>{
    setLoading(true);
    try{
      const res = await fetch(apiUrl);
      const output = await res.json();
      // console.log(output);
      setCourses(output.data);
      // console.log(courses);
    }
    catch(err){
      toast.error("Something went wrong");
      // console.log(err);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData} filterCriteria={filterCriteria} setFilterCriteria={setFilterCriteria} /> {/*getFilterName={getFilterName} />*/}
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? <Spinner /> : <Cards courses={courses} filterName={filterCriteria}/>
            // <Cards courses={courses} />
          }
        </div>
      </div>
    </div>
  );
};


export default App;