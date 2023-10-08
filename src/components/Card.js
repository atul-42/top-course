
import { useState } from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({course}) => {
    const [like, setLike] = useState(false);
    const clickHandler = () => {
        like ? toast.info("Like Removed") : toast.success("Liked Successfully");
        setLike(!like);
        // like ? toast.success("Liked Successfully") : toast.info("Like Removed");
    }
    return(
        <div className="w-[300px] bg-bgDark rounded-md bg-opacity-90 overflow-hidden">
            <div className="relative">
                <img src={course.image.url} alt={course.image.alt} className="" />
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-1.3rem] grid place-items-center">
                    <button onClick={clickHandler}>
                        {like ? <FcLike fontSize={"1.75rem"} /> : <FcLikePlaceholder fontSize={"1.75rem"} />}
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">{course.description}</p>
            </div>
        </div>
    )
}


export default Card;