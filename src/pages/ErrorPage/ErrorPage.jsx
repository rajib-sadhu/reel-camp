
import { useNavigate, useRouteError } from 'react-router-dom';
import Lottie from 'lottie-react';
import errorImg from '../../assets/error.json';

const ErrorPage = () => {

    const error = useRouteError();
    const navigate = useNavigate();
    console.log(error)


    return (
        <div className='flex flex-col items-center md:mt-5 space-y-5'>
            <div className='md:w-1/4 w-1/2 mt-16'>
            <Lottie animationData={errorImg} />
            </div>
            <div className='text-center border-2 border-red-500 md:px-10 px-2 py-5 md:text-xl text-sm font-semibold'>
                <h1>Error {error.status} </h1>
                <p>Error message: {error.statusText} </p>
            </div>
            <div className=''>
                <button 
                className='bg-red-500 px-5 py-1 rounded-2xl font-semibold text-white'
                onClick={()=>navigate('/')}
                >Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;