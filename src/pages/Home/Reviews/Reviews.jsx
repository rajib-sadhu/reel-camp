
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import SectionTitle from '../../../components/SectionTitle';

const Reviews = () => {
    return (
        <div>
            <SectionTitle heading=" reviews" subHeading="Our customers reviews" />
            <div className="my-20 md:px-32 px-5 flex justify-between md:flex-row flex-col gap-8" >
                <div className='md:w-[20rem]'>
                    <div className="flex items-center gap-5">
                        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1688938963~exp=1688939563~hmac=b390274332c29c7f7762bc1142c9c36428a659c4f0bb3f970083fc7ec9c9996b" className="w-20 h-20 rounded-full object-cover" alt="" />
                        <div>
                            <h4 className="text-2xl font-semibold" >David RS</h4>
                            <p className="flex text-lg mt-2 text-yellow-500" >
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                            </p>
                        </div>
                    </div>
                    <p className='mt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae rem repudiandae esse enim accusantium totam est! Deleniti non tempore modi est quaerat. Blanditiis facere consequatur ipsa quas, architecto excepturi.
                    </p>
                </div>
                <div className='w-[20rem]'>
                    <div className="flex items-center gap-5">
                        <img src="https://img.freepik.com/free-photo/portrait-young-man-with-dark-curly-hair_176532-8137.jpg?w=900&t=st=1688939770~exp=1688940370~hmac=b2f04d9dca67ac9f1cef8abbdb712a03a917961891d39dfab56aa41c2f6f6bf4" className="w-20 h-20 rounded-full object-cover" alt="" />
                        <div>
                            <h4 className="text-2xl font-semibold" >Alex Farguson</h4>
                            <p className="flex text-lg mt-2 text-yellow-500" >
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                            </p>
                        </div>
                    </div>
                    <p className='mt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae rem repudiandae esse enim accusantium totam est! Deleniti non tempore modi est quaerat. Blanditiis facere consequatur ipsa quas, architecto excepturi.
                    </p>
                </div>
                <div className='w-[20rem]'>
                    <div className="flex items-center gap-5">
                        <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=900&t=st=1688939792~exp=1688940392~hmac=de4d5941fc19577b54f97df7da1d1a436890dba1cb1a9cf8c9a73ddeedfc9078" className="w-20 h-20 rounded-full object-cover" alt="" />
                        <div>
                            <h4 className="text-2xl font-semibold" >Lisa</h4>
                            <p className="flex text-lg mt-2 text-yellow-500" >
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </p>
                        </div>
                    </div>
                    <p className='mt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae rem repudiandae esse enim accusantium totam est! Deleniti non tempore modi est quaerat. Blanditiis facere consequatur ipsa quas, architecto excepturi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;