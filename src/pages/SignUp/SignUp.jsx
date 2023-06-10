import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/signup-image.svg';
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import Social from "../Shared/Social/Social";
// import app from "../../firebase/firebase.config";
import loadingAnimation from '../../assets/loading-animation.gif';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const SignUp = () => {

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const { createUser, addNamePhoto } = useContext(AuthContext);

    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);



        const formData = new FormData();
        console.log('before formData-', formData)
        formData.append('image', data.photoURL[0]);
        console.log('after append formData-', formData)

        Swal.fire({
            // icon: 'success',
            imageUrl: loadingAnimation,
            imageWidth: 250,
            imageHeight: 150,
            imageAlt: 'Custom image',
            title: 'Creating User...',
            showConfirmButton: false,
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        })

        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageRes => {
                console.log(imageRes)
                if (imageRes.success) {
                    const imgURL = imageRes.data.display_url;
                    const { name, email, password, gender } = data;
                    const newUser = { name, email, photoURL: imgURL, password, gender }


                    createUser(newUser.email, newUser.password)
                        .then(result => {
                            const loggedUser = result.user;
                            addNamePhoto(loggedUser, newUser.name, newUser.image)
                                .then(() => {
                                    console.log('User Created Successfully')
                                    const saveUser = { name: newUser.name, email: newUser.email, photoURL: newUser.photoURL, gender: newUser.gender, role: 'student' }

                                    fetch(`http://localhost:5000/users`, {
                                        method: 'POST',
                                        headers: {
                                            'content-type': 'application/json'
                                        },
                                        body: JSON.stringify(saveUser)
                                    })
                                        .then(res => res.json())
                                        .then(data => {

                                            if (data.insertedId) {
                                                reset();
                                                navigate("/")
                                                Swal.close();

                                                Swal.fire({
                                                    icon: 'success',
                                                    title: `Account create successfully ${saveUser?.name} `,
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                })

                                            }
                                        })
                                })
                        })

                }
            })
            .catch(err => console.log(err))


    };


    return (
        <div className='bg-base-200'>
            <h1 className="text-5xl font-bold text-center pt-10">Create account now!</h1>
            <div className="hero min-h-[38rem] mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="">
                        <img src={image} className='w-[40rem]' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered"
                                    {...register("name", { required: true })}
                                />
                                <label className="label">
                                    <p className="label-text text-right text-red-600">
                                        {errors.name?.type === 'required' && 'Name is required'}
                                    </p>
                                </label>
                            </div>
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
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="file" className="file-input file-input-bordered w-full max-w-xs"
                                    {...register("photoURL", { required: true })}
                                />
                                <label className="label">
                                    <p className="label-text text-right text-red-600">
                                        {errors.photoURL?.type === 'required' && 'Photo is required'}
                                    </p>
                                </label>
                            </div>
                            {/* TODO : Add User Gender */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <div className='flex input input-bordered' >
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Male</span>
                                        <input type="radio" name="gender" value="M" className="radio checked:bg-red-500 ms-1"
                                            {...register("gender", { required: true })}
                                        />
                                    </label>

                                    <label className="label cursor-pointer">
                                        <span className="label-text">Female</span>
                                        <input type="radio" name="gender" value="F" className="radio checked:bg-blue-500 ms-1"
                                            {...register("gender", { required: true })}
                                        />
                                    </label>

                                    <label className="label cursor-pointer">
                                        <span className="label-text">Others</span>
                                        <input type="radio" name="gender" value="O" className="radio checked:bg-green-500 ms-1"
                                            {...register("gender", { required: true })}
                                        />
                                    </label>
                                </div>
                                <label className="label">
                                    <p className="label-text text-right text-red-600">
                                        {errors.gender?.type === 'required' && 'Gender is required'}
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" placeholder="confirm password" name="confirmPassword" className="input input-bordered"
                                    {...register("confirmPassword",
                                        {
                                            required: true,
                                            validate: (value) => value === watch('password') || 'Passwords do not match'
                                        })}
                                />
                                <label className="label">
                                    <p className="label-text text-right text-red-600">
                                        {errors.confirmPassword?.type === 'required' && 'Please Confirm the password'}
                                        {errors.confirmPassword && errors.confirmPassword.message}
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Create Account</button>
                            </div>
                        </form>
                        <div className="m-5" >
                            <div>
                                <Social />
                            </div>
                            <div className='text-center mt-3'>
                                <p>Already have an account? <Link to='/signIn' className='text-blue-700 underline' >Sign in</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;