import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import useCart from "../../Hooks/useCart";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
const Payment = () => {
    const { id } = useParams();
    const [cart] = useCart();
    const singleCart = cart.filter((item) => item._id === id);
    const price = singleCart[0]?.price;
    //TODO: if feel any problem on price fraction added parsFloat(price.toFiexd(2))
    
    

    return (
        <div className="w-full">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-4  rounded-lg my-5 w-full">
                <h2 className="text-3xl font-bold pb-2 text-white text-center">Payment Getway</h2>
            </div>
            <Elements stripe={stripePromise}>
                <CheckOut cart={singleCart} price={price}></CheckOut>
            </Elements>

        </div>
    );
};

export default Payment;