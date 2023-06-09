
import useIstructors from "../../../Hooks/useIstructors";
import InstructorCart from "../../Shared/InstructorCart/InstructorCart";


const PopularInstractor = () => {
    const [instructors] = useIstructors();

    const popular = instructors.filter(item => item.category === 'popular').slice(0, 6);
    return (
        <div className="container mx-auto py-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500  rounded-lg py-5 my-5 ">
                <h2 className="text-3xl font-bold text-white text-center">Meet Our Instructor</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 ">
                {popular.map(item => <InstructorCart
                    key={item._id}
                    item={item}
                ></InstructorCart>)}
            </div>
        </div>
    );
};

export default PopularInstractor;