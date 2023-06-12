import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Parallax } from 'react-parallax';


const InstructorsPage = () => {

    const { data: instructor = [] } = useQuery({
        queryKey: ['instructor'],
        queryFn: async () => {
            const res = await axios('http://localhost:5000/instructor');
            return res.data;
        }
    })

    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={'https://i.ibb.co/fQk0Dxq/man-recording-studio-music-production.jpg'}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className='h-[20rem] flex items-center justify-center'>
                    <div className='bg-white bg-opacity-80 text-black w-1/2 py-10 text-center uppercase text-4xl font-semibold'>
                        <h1>All Instructors: {instructor.length} </h1>
                    </div>
                </div>
            </Parallax>
            <div className='grid grid-cols-3 my-10' >
                {
                    instructor.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl mx-auto">
                        <figure className="px-10 pt-10">
                            <img src={item?.photoURL} alt="Shoes" className="rounded-xl object-cover h-[20rem] w-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item?.name}</h2>
                            <p>Email: {item?.email} </p>
                           
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default InstructorsPage;