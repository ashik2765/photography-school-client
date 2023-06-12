import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';


const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements()
    const [Error, setError] = useState('');
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
            <button className='btn btn-outline btn-primary w-1/4 mx-auto mt-5' type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
        {Error && <p className='text-red-500'>{Error}</p>}
        </>
    );
};

export default CheckOut;