import { Link } from "react-router-dom";
import useClasses from "../../Hooks/useClasses";
import Swal from "sweetalert2";


const ManageClasses = () => {
    const [classes] = useClasses([]);

    const handleApproved = (item) => {

        //TODO:connect with backend
        console.log('connecded', item)
        fetch(`https://summer-camp-server-chi.vercel.app/users/admin/${item._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount) {
                            
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Make Admin Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })

        }
    const handleDenied = (id) => {
            console.log('denied', id)
        }
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
                                    <th className="text-xl">Status</th>
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
                                        <p>Seats: {item?.availableSeats}</p>
                                    </td>
                                    <td>

                                        <p>{item?.status}</p>
                                    </td>
                                    <th>
                                        <Link>
                                            <button onClick={() => handleApproved(item)} className="btn">
                                                Approved
                                            </button>
                                            <br></br>
                                            <button onClick={() => handleDenied(item._id)} className="btn mt-2 tracking-[.31em]">
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