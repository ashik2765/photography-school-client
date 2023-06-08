import { useEffect, useState } from "react";
import InstructorCart from "../../Shared/InstructorCart/InstructorCart";


const PopularInstractor = () => {
    const [instractor, setInstractor] = useState([])
    useEffect(() => {
        fetch('instructor.json')
            .then(res => res.json())
            .then(data => {
                const PopularInstructors = data.filter(item => item.category === "popular")
                setInstractor(PopularInstructors)
            })
    }, [])
    return (
        <div className="container mx-auto py-4">
        <h1 className="text-2xl font-semibold mb-4">Photography Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {instractor.map(item => <InstructorCart
                key={item._id}
                item={item}
            ></InstructorCart>)}
        </div>
    </div>
    );
};

export default PopularInstractor;