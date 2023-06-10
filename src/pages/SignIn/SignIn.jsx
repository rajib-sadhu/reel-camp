
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../assets/signin-image.svg'
import Social from '../Shared/Social/Social';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const SignIn = () => {


    const { signIn } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        // console.log('user login', data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                Swal.fire({
                    title: `<p> Welcome back ${user.displayName} </p>`,
                    // position: 'top-end',
                    icon: 'success'
                });
                navigate(from, { replace: true });
                navigate("/")
                reset();
            })

    }



    return (
        <div className='bg-base-200'>
            <h1 className="text-5xl font-bold text-center pt-10">Login now!</h1>
            <div className="hero min-h-[38rem] mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="">
                        <img src={image} className='w-[40rem]' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                <label className="label">
                                    <p className="label-text text-right text-red-600">
                                        {errors.email?.type === 'required' && 'Email is required'}
                                    </p>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name="password" className="input input-bordered"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                />
                                <label className="label">
                                    <p className="label-text text-right text-red-600">
                                        {errors.password?.type === 'required' && 'Password is required'}
                                        {errors.password?.type === 'minLength' && 'Password must be 6 characters'}
                                        {errors.password?.type === 'maxLength' && 'Password must be less than 20 characters'}
                                        {errors.password?.type === 'pattern' && 'Password must have one Uppercase one lower case, one number and one special character.'}
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="m-5" >
                            <div>
                                <Social />
                            </div>
                            <div className='text-center mt-3'>
                                <p>Do not have any account? <Link to='/signUp' className='text-blue-700 underline' >Create now</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;