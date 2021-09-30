import Lottie from 'react-lottie';
import * as animationData from '../../jsonFiles/restart.json';

function Restart(){

    const defaultOptions={
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return(
        <div>
            <Lottie
                options={defaultOptions}
                height={100}
                marginTop={20}
                width={100}
            />
        </div>
    )
}

export default Restart;