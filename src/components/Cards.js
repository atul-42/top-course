
import Card from "./Card";

const Cards = ({courses, filterName}) => {
    // console.log(courses);

    const getAllCourses = () => {
        // if (Array.isArray(courses)) return courses;
        if (filterName!=="All") return courses[filterName];
        let allCourses = [];
        Object.values(courses).forEach(arr=>{
            arr.forEach(ele=>{
                allCourses.push(ele)
            })
        });
        return allCourses;
    }

    // const getFilteredCourses = (filterName) => {
    //     return courses[filterName];
    // }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getAllCourses().map( (course) => <Card key={course.id} course={course} /> )}
                {/* {console.log(getAllCourses()) */}
            {/* } */}
        </div>
    );
}

export default Cards;