import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Social = () => {

    const { signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogle = () => {


        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                    Swal.fire({
                        icon: 'success',
                        title: `Hello ${loggedInUser?.displayName}`,
                        text: 'Account create successfully'
                    });
                    navigate(from, { replace: true });
            }

            )
            .catch(err => console.log(err))


    }




    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
                <p className='text-center mb-2' >Sign in with</p>
                <div className="py-3 flex justify-center gap-5 text-3xl bg-base-300 rounded-2xl">
                    <button onClick={handleGoogle} title='Google' className='hover:opacity-70 duration-200' >
                        <FcGoogle />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Social;