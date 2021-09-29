import StateZero from '../images/1.png';
import StateOne from '../images/2.png';
import StateTwo from '../images/4.png';
import StateThree from '../images/5.png';
import StateFour from '../images/6.png';
import StateFive from '../images/7.png';

function Hangman({ state }) {

    return (

        <div className="container">

            {(() => {

                switch (state) {
                    case 0:
                        return (
                            <img src={StateZero} alt="zero" />
                        )
                    case 1:
                        return (
                            <img src={StateOne} alt="one" />
                        )
                    case 2:
                        return (
                            <img src={StateTwo} alt="two" />
                        )
                    case 3:
                        return (
                            <img src={StateThree} alt="three" />
                        )
                    case 4:
                        return (
                            <img src={StateFour} alt="four" />
                        )
                    case 5:
                        return (
                            <img src={StateFive} alt="five" />
                        )
                    default:
                        return (
                            <img src={StateFive} alt="five2" />
                        )
                }
            })()}
        </div>
    )
}

export default Hangman;