
import { Link } from 'react-router-dom';
import image from '../../assets/signin-image.svg'

const SignIn = () => {
    return (
        <div className='bg-base-200'>
            <h1 className="text-5xl font-bold text-center pt-10">Login now!</h1>
            <div className="hero min-h-[38rem]">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="">
                        <img src={image} className='w-[40rem]' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='text-center mt-3'>
                                <p>Do not have an account? <Link to='/signUp' className='text-blue-700 underline' >Create now</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;