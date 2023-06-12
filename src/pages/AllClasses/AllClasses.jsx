import { Parallax } from 'react-parallax';
import useClass from '../../hooks/useClass';
import ClassCard from '../../components/ClassCard/ClassCard';

const AllClasses = () => {

    const [classes] = useClass();

    return (
        <div className=''>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={'https://i.ibb.co/fQk0Dxq/man-recording-studio-music-production.jpg'}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className='h-[20rem] flex items-center justify-center'>
                    <div className='bg-white bg-opacity-80 text-black w-1/2 py-10 text-center uppercase text-4xl font-semibold'>
                        <h1>All Classes: {classes.length} </h1>
                    </div>
                </div>
            </Parallax>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-10 my-10 md:px-40' >
                {
                    classes.map(item=><ClassCard key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default AllClasses;