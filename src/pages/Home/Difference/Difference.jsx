
import diffImage from '../../../assets/difference-image.svg'
// import texture from '../../../assets/texture.jpg'

import instructor from '../../../assets/icons/instructor.png'
import student from '../../../assets/icons/students.png'
import video from '../../../assets/icons/video.png'

const Difference = () => {
    return (
        <div className='px-32 py-20 my-20 grid grid-cols-2 bg-cover bg-center bg-gradient-to-l from-slate-500'  >
            <div>
                <img className='w-full h-[30rem] object-contain' src={diffImage} alt="" />
            </div>
            <div className='flex flex-col gap-20 ' >
                <h3 className='text-5xl font-semibold ' >Why is our <span className='text-red-400'>difference</span></h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi vero officiis quo doloremque, blanditiis quas dolorum reprehenderit, suscipit laborum debitis perspiciatis impedit praesentium excepturi, corporis quae ex. Maiores, hic a!
                </p>
                <div className='flex justify-between text-white' >
                    <div className='flex items-center gap-5 bg-slate-800 p-3 rounded-md'>
                        <div className='w-16 p-3 bg-slate-500 rounded-full' >
                            <img src={instructor} alt="" />
                        </div>
                        <div>
                            <h3 className='text-3xl font-semibold' >50</h3>
                            <p>Instructors</p>
                        </div>
                    </div>
                    
                    <div className='flex items-center gap-5 bg-slate-800 p-3 rounded-md'>
                        <div className='w-16 p-3 bg-slate-500 rounded-full' >
                            <img src={student} alt="" />
                        </div>
                        <div>
                            <h3 className='text-3xl font-semibold' >320+</h3>
                            <p>Students</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 bg-slate-800 p-3 rounded-md'>
                        <div className='w-16 p-3 bg-slate-500 rounded-full' >
                            <img src={video} alt="" />
                        </div>
                        <div>
                            <h3 className='text-3xl font-semibold' >500</h3>
                            <p>Videos</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Difference;