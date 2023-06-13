import { useQuery } from "@tanstack/react-query";
import { FaBookReader, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const AllUsers = () => {
    const [axiosSecure]= useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })


    const handleMakeAdmin = (user, role) => {
        fetch(`http://localhost:5000/users/${role}/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    let roleText = '';
                    if (role === 'admin') {
                        roleText = 'Admin';
                    } else if (role === 'instructor') {
                        roleText = 'Instructor';
                    }
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Make ${roleText} Successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    }


    //Make Admin method
    // const handleMakeAdmin = (user) => {
    //     fetch(`http://localhost:5000/users/admin/${user._id}`, {
    //         method: 'PATCH'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.modifiedCount) {
    //                 refetch();
    //                 Swal.fire({
    //                     position: 'top-end',
    //                     icon: 'success',
    //                     title: 'Make Admin Successfully',
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 })
    //             }
    //         })



    // }
    
    return (
        <div className="w-full">
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => <tr
                            key={user._id}
                        >
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user, 'admin')}><FaUserShield /></button>}
                            </td>

                            <td>
                                {user.role === 'Instructor' ? 'Instructor' :
                                    <button onClick={() => handleMakeAdmin(user, 'instructor')}><FaBookReader /></button>}
                            </td>
                        </tr>)}



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;