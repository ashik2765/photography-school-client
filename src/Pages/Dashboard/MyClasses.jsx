import useAuth from "../../Hooks/useAuth";
import useClasses from "../../Hooks/useClasses";


const MyClasses = () => {
    const [classes] = useClasses();
    const { user } = useAuth();
    const email = user.email;
    const myclasses = classes.filter((item) => item.email === email);
    
    return (
        <>
            <div className="w-full">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Feedback</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myclasses.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.status}</td>
                                <th>
                                    <p>It is a awsome!!!</p>
                                </th>
                                <th>
                                    <button className="btn">
                                        Update
                                    </button>
                                </th>
                            </tr>)}


                        </tbody>


                    </table>
                </div>
            </div>
        </>
    );
};

export default MyClasses;