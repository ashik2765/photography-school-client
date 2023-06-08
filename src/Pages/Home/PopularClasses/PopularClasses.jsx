import { useEffect, useState } from 'react';
import ClassesCart from '../../Shared/ClassesCart/ClassesCart';


const PopularClasses = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => {
                const popularClasses = data.filter(item => item.category === 'popular');
                setClasses(popularClasses)
            })
    }, [])
    return (
        <div className="container mx-auto py-4">
            <h1 className="text-2xl font-semibold mb-4">Photography Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {classes.map(item => <ClassesCart
                    key={item._id}
                    item={item}
                ></ClassesCart>)}
            </div>
        </div>

    );
};

export default PopularClasses;