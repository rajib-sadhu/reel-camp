import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {

    const { user } = useAuth();


    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [axiosSecure] = useAxiosSecure();

    const onSubmit = data => {

        console.log(data.classImage[0]);

        const formData = new FormData();
        console.log('before formData-', formData)
        formData.append('image', data.classImage[0]);
        console.log('after append formData-', formData)

        Swal.fire({
            // icon: 'success',
            imageUrl: 'https://media4.giphy.com/media/KG4PMQ0jyimywxNt8i/giphy.gif?cid=ecf05e47lkefr2ktk7962z6d7wi6o3aqmradxp1zl53k57dj&ep=v1_gifs_search&rid=giphy.gif&ct=g',
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: 'Custom image',
            title: 'add item loading...',
            showConfirmButton: false,
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        })


        axios.post(img_hosting_url, formData)
            .then(res => res.data)
            .then(imgResponse => {
                // console.log('image Res:-',imgResponse)
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { className, instructorName, instructorEmail, price, availableSeats, category } = data;
                    const newItem = {
                        className,
                        instructorName,
                        instructorEmail,
                        instructorStatus: 'pending',
                        availableSeats,
                        image: imgURL,
                        price,
                        category,
                        instructorImage:user.photoURL
                    }
                    console.log(newItem);

                    axiosSecure.post(`/classes`, newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.close();
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Menu added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                        .catch(error => {
                            throw new Error(error.message);
                        })
                }
            })

    };
    console.log(errors);

    return (
        <div className="px-10 mx-auto mt-10">


            <div className="">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full" >

                    <div className="flex justify-between gap-5">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Instructor Name*</span>
                            </label>
                            <input defaultValue={user?.displayName} readOnly type="text" placeholder="Instructor Name" className="input input-bordered w-full"
                                {...register("instructorName", { required: true })}
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Instructor Email*</span>
                            </label>
                            <input defaultValue={user?.email} readOnly type="text" placeholder="Instructor Email" className="input input-bordered w-full"
                                {...register("instructorEmail", { required: true })}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Class Name*</span>
                            </label>
                            <input type="text" placeholder="Class Name" className="input input-bordered w-full"
                                {...register("className", { required: true })}
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Class image*</span>
                            </label>
                            <input type="file" className=""
                                {...register("classImage", { required: true })} />
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="number" placeholder="Price" className="input input-bordered w-full"
                                {...register("price", { required: true })}
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Available Seats*</span>
                            </label>
                            <input type="number" placeholder="Available Seats" className="input input-bordered w-full"
                                {...register("availableSeats", { required: true })}
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input defaultValue='NA' type="text" placeholder="Category" className="input input-bordered w-full"
                                {...register("category")}
                            />
                        </div>
                    </div>
                    <div className="grid place-content-center">
                        <input type="submit" value="Add Item" className="btn btn-accent btn-sm mt-4 mx-auto text-center" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-right text-red-600">
                                {
                                    errors.className?.type === 'required' ||
                                        errors.classImage?.type === 'required' ||
                                        errors.price?.type === 'required' ||
                                        errors.availableSeats?.type === 'required'
                                        ?
                                        'Please fill all fields'
                                        :
                                        ''
                                }
                            </span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;