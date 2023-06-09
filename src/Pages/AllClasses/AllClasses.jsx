import useClasses from '../../Hooks/useClasses';
import ClassesCart from '../Shared/ClassesCart/ClassesCart';

const AllClasses = () => {
    const [classes] = useClasses([]);
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    classes.map(item =><ClassesCart
                    key={item._id}
                    item={item}
                    ></ClassesCart>)
                }
            </div>
        </div>
    );
};

export default AllClasses;