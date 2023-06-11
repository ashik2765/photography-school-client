import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
    const handleMakeAdmin=(user)=>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount){
                refetch();
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
                            <td>{ user.role === 'admin' ? 'admin' : <button onClick={()=>handleMakeAdmin(user)}><FaUserShield/></button>}</td>

                            <td><button>Make Instructor</button></td>
                        </tr>)}



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;