
import { Link } from 'react-router-dom';
import image from '../../assets/signup-image.svg'

const SignUp = () => {
    return (
        <div className='bg-base-200'>
            <h1 className="text-5xl font-bold text-center pt-10">Create account now!</h1>
            <div className="hero min-h-[38rem]">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="">
                        <img src={image} className='w-[40rem]' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <div className='flex input input-bordered' >
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Male</span>
                                            <input type="radio" name="gender" value="M" className="radio checked:bg-red-500 ms-1" />
                                        </label>
                                    
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Female</span>
                                            <input type="radio" name="gender" value="F" className="radio checked:bg-blue-500 ms-1" checked />
                                        </label>
                                    
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Others</span>
                                            <input type="radio" name="gender" value="O" className="radio checked:bg-green-500 ms-1" checked />
                                        </label>
                                   
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" placeholder="confirm password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Create Account</button>
                            </div>
                            <div className='text-center mt-3'>
                                <p>Already have an account? <Link to='/signIn' className='text-blue-700 underline' >Sign ip</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;