import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';


const CheckOut = ({ price }) => {

    const stripe = useStripe();
    const elements = useElements()
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [Error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [proccesing, setProccesing] = useState(false);
    const [transactionId, setTransactionId] = useState();


    useEffect(() => {

        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                // console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })

    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error)
            setError(error.message)
        }
        else {
            setError('')
            console.log('paymentmethod', paymentMethod);
        }

        setProccesing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {

                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent);
        setProccesing(false);
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            //TODO: next step

        }

    }
    return (
        <>
            <form className='w-2/3 mx-auto mb-52' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-outline btn-primary w-1/4 mx-auto mt-5' type="submit" disabled={!stripe || !clientSecret || proccesing}>
                    Pay
                </button>
            </form>
            {Error && <p className='text-red-500'>{Error}</p>}
            {transactionId && <p className='text-success'>Transaction Compelete With TransactionId: {transactionId}</p>}
        </>
    );
};

export default CheckOut;