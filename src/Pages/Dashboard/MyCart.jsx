import { FaTrashAlt, FaWallet} from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCart = () => {
    const [cart,refetch] = useCart();

    // const total = cart.reduce((sum, item) => parseFloat(item.price) + sum, 0)
    const handleDelete = (item) => {
        console.log(item)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://summer-camp-server-chi.vercel.app/carts/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0){
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Course is deleted.',
                                'success'
                            )
                        }
                })
                
            }
        })

    }

    return (
        <div className="w-full">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => <tr
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
                            <td>${item.price}</td>
                            <th>
                                <Link to={`mycart/${item._id}`}>
                                <button className="btn"><FaWallet />Pay</button>
                                </Link>
                            </th>
                            <th>
                                <button onClick={() => handleDelete(item)} className="btn"><FaTrashAlt /></button>
                            </th>
                        </tr>)}


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;