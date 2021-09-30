import Lottie from 'react-lottie';
import * as animationData from '../../jsonFiles/games-icon.json';

function GameConsole(){

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
                height={300}
                marginTop={20}
                width={300}
            />
        </div>
    )
}

export default GameConsole;