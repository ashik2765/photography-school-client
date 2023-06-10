import { FaTrashAlt, FaWallet } from "react-icons/fa";
import useCart from "../../Hooks/useCart";


const MyCart = () => {
    const [cart] = useCart();

    const total = cart.reduce((sum, item) => parseFloat(item.price) + sum, 0)

    return (
        <div className="w-full">
            <h1 className="text-red-600">from my cart:{cart.length}</h1>
            <h1 className="text-red-600">from my cart:{total}</h1>

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
                                <button className="btn"><FaWallet />Pay</button>
                            </th>
                            <th>
                                <button className="btn"><FaTrashAlt /></button>
                            </th>
                        </tr>)}


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;