// import React from 'react';

import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/checkOutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelects from "../../hooks/useSelects";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK_ID);

const Payment = () => {
    const [classes] = useSelects();
    // const total = classes.reduce((sum, item) => sum + item.price, 0);
    const total = classes.reduce((sum, item) => sum + item.price, 0);
    // const price = parseFloat(total.toFixed(2));
    console.log(total);
    return (
        <div className="w-full px-40">
            <div className="text-center mb-6">
                <h2 className="text-4xl font-medium">Payment Section</h2>
                <p>Payments Here</p>
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={total}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;