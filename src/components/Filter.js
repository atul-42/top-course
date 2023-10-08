
const Filter = ({filterData, filterCriteria, setFilterCriteria}) => {
    return (
        <div className="w-11/12 flex flex-wrap justify-center py-4 space-x-4 mx-auto gap-y-4 max-w-max">
            {
                filterData.map( (data) =>  
                    <button onClick={()=>{setFilterCriteria(data.title)}} key={data.id} className={`text-md px-2 py-1 rounded-md 
                        font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                        ${filterCriteria === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}`}>
                        {data.title}
                    </button>
                )
            }
        </div>
    );
}

export default Filter;