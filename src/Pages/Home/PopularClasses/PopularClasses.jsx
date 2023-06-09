import ClassesCart from '../../Shared/ClassesCart/ClassesCart';
import useClasses from '../../../Hooks/useClasses';


const PopularClasses = () => {

    const [classes] = useClasses();

    const popular = classes.filter(item => item.category === 'popular');

    return (
        <div className="container mx-auto py-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-5 rounded-lg my-5">
                <h2 className="text-3xl font-bold text-white text-center">Our Classes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {popular.map(item => <ClassesCart
                    key={item._id}
                    item={item}
                ></ClassesCart>)}
            </div>
        </div>

    );
};

export default PopularClasses;