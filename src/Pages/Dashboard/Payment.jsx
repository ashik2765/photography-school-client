import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
const Payment = () => {
    return (
        <div className="w-full">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-4  rounded-lg my-5 w-full">
                <h2 className="text-3xl font-bold pb-2 text-white text-center">Payment Getway</h2>
            </div>
            <Elements stripe={stripePromise}>
                <CheckOut></CheckOut>
            </Elements>

        </div>
    );
};

export default Payment;