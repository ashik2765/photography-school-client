import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";


const PaymentHistory = () => {
    const [payments, setPayments] = useState([]);
    const { user } = useAuth();
    const email = user.email;

    useEffect(() => {
        fetch('https://summer-camp-server-chi.vercel.app/payments')
            .then(response => response.json())
            .then(data => {
                const EnrolledClasses = data.filter(item => item.email == email)
                setPayments(EnrolledClasses)
            })
            .catch(error => console.log('Error:', error));
    }, []);
    console.log(payments)
    return (
        <div className="w-full">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>TransactionId</th>
                            <th>Price</th>
                            <th>Date/Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((item, index) => <tr
                            key={item._id}
                        >
                            <td>{index + 1}</td>
                            <td>{item.cart[0]?.name}</td>
                            <td><p>TransactionId: {item?.transactionId}</p></td>
                            <td>${item.price}</td>
                            <th>
                               <p>Date: {item?.date}</p>
                            </th>
                        </tr>)}


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;