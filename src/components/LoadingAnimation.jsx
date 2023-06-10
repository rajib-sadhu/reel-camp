
import Lottie from 'lottie-react';

import loadingAnimation from '../assets/green-loading.json';

const LoadingAnimation = () => {
    return <Lottie className="w-[10rem] mx-auto" animationData={loadingAnimation} />;
};

export default LoadingAnimation;