/** @format */

import Vector1 from '../../assets/Vector1.svg';
import { Container, BigVector, Main, HouseImage, DemoWork, WorkStep, Work } from './work.style';
import House from '../../assets/House.svg';
import HomeDemo from '../../assets/HomeDemo.png';
import PointerImage from '../../assets/PointerLines.svg'
import Check from '../../assets/charm_tick.svg'
const WorkSteps = [
    {
        step: 1,
        fisteLine: 'Request for an offer',
        secondLine:
            'Fill in your property details and get an instant preliminary home value.',
    },
    {
        step: 2,
        fisteLine: 'Schedule an appointment',
        secondLine:
            'Show us your home in-person or virtually and get our offer within 24 hours of the appointment.',
    },
    {
        step: 3,
        fisteLine: 'Sell your house',
        secondLine:
            'Have complete control over your decision. Either accept our offer or list with us.',
    },
];
export default function Works() {
    return (
        <Container>
            <BigVector
                src={Vector1}
                alt=""
            />
            <Main>
                <h1>Let’s See How it Works</h1>
                <p>Here’s how we make it easier to sell your home</p>
                <HouseImage
                    src={House}
                    alt=""
                />
            </Main>
            <DemoWork>
                <img
                    src={HomeDemo}
                    alt=""
                />
                <WorkStep image={PointerImage}>
                    {WorkSteps.map(work =>
                        <Work image={Check} key={work.step}>
                            <p>step{work.step}</p>
                            <h1>{work.fisteLine}</h1>
                            <p>{work.secondLine}</p>
                        </Work>)}
                </WorkStep>
            </DemoWork>
        </Container>
    );
}
