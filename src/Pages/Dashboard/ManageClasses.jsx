import useClasses from "../../Hooks/useClasses";


const ManageClasses = () => {
    const [classes] = useClasses([]);
    return (
        <div>
            <h1>AllClasses:{classes.length}</h1>
        </div>
    );
};

export default ManageClasses;