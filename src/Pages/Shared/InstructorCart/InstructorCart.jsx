import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";


const InstructorCart = ({ item }) => {
    const { name, taken_class, description, ratings, image, email } = item;

    //only for button disable when admin and instructor loggedIn
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={image} alt="Image" className="w-full h-80" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <small>{email}</small>
                <p>{description}</p>
                <p>{taken_class}</p>
                <p>{ratings}</p>
                <div className="card-actions justify-end">
                    <button
                        disabled={isAdmin || isInstructor}
                        className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCart;