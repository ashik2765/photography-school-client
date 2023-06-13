import { useContext } from "react";
import { AuthContext } from "../../../Provider/Authprovider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";


const ClassesCart = ({ item }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();
    const { name, image, description, price,availableSeats, _id }= item;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleAddtoCart = (item) => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { classId: _id, name, image, price, email: user.email }
            fetch('https://summer-camp-server-chi.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)

            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-start',
                            icon: 'success',
                            title: 'course add to the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login first!!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={image} alt="Image" className="w-full h-72" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <p>{price}</p>
                <p>Available Seat: {availableSeats}</p>

                <div className="card-actions justify-end">
                    <button
                        disabled={isAdmin || isInstructor}
                        onClick={() => handleAddtoCart(item)} className="btn btn-primary">Selected</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCart;