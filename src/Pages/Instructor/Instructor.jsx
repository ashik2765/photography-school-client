import useClasses from '../../Hooks/useClasses';
import InstructorCart from '../Shared/InstructorCart/InstructorCart';

const Instructor = () => {
    const [classes] = useClasses([]);

    return (
        <div>
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-5 rounded-lg my-5 ">
                <h2 className="text-3xl font-bold text-white text-center">Meet Our Instructors</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    classes.map(item => <InstructorCart
                        key={item._id}
                        item={item}
                    ></InstructorCart>)
                }
            </div>
        </div>
    );
};

export default Instructor;