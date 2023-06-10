import { loadStripe } from "@stripe/stripe-js";
import useEnrollCart from "../../../hooks/useEnrollCart";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {

    const [enrollCart] = useEnrollCart();

    const total = enrollCart.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    const location = useLocation();
    const { state } = location;
    // console.log(state)
    const price = parseFloat(total.toFixed(2));

    return (
        <div>
            <div className="mx-auto">
                <div className="ms-10" >
                    <h1 className=" text-3xl font-bold pb-6 border-b border-b-green-500">Payment Gateway</h1>
                </div>
                <div>

                </div>
                <Elements stripe={stripePromise} >
                    <CheckoutForm price={price} item={state?.item} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;