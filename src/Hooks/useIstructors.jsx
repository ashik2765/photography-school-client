import { useEffect, useState } from "react";


const useIstructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
                setLoading(false);
            })
    }, [])
    return [instructors, loading]
};

export default useIstructors;