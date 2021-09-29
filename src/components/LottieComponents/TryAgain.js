import Lottie from 'react-lottie';
import * as animationData from '../../jsonFiles/try-again.json';

function TryAgain (){

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
                height={200}
                marginTop={20}
                width={200}
            />
        </div>
    )
}

export default TryAgain;