import { Link } from "react-router-dom";
import useClasses from "../../Hooks/useClasses";


const ManageClasses = () => {
    const [classes] = useClasses([]);
    return (
        <>

            <div className="w-full">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            
                            <tr>
                                <th>#</th>
                                <th className="text-xl">Image</th>
                                <th className="text-xl">Title/Instructor Info</th>
                                <th className="text-xl">Price/Seats</th>
                                <th className="text-xl">Approved/Denied</th>
                                <th className="text-xl">Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {classes.map((item, index) => <tr
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
                                <td>
                                    {item.name}
                                    <p>Instructor: {item?.instructor}</p>
                                    <p>Email: {item?.email}</p>
                                </td>
                                <td>
                                    ${item.price}
                                    <p>{item.a}</p>
                                </td>
                                <th>
                                    <Link>
                                        <button className="btn">
                                            Approved
                                        </button>
                                        <br></br>
                                        <button className="btn mt-2 tracking-[.31em]">
                                            Denied
                                        </button>
                                    </Link>
                                </th>
                                <th>
                                    <button className="btn">
                                        Feedback
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

export default ManageClasses;