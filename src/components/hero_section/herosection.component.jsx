/** @format */

import {
    Container,
    HersectionLeft,
    HerosectionRight,
    HerosectionRightImageBox,
    PolygonImage,
    HerosectionRightImage,
    Vectors,
} from './herosection.style';

import HerosectionImage from '../../assets/herosection1.svg';
import Vector2 from '../../assets/Vector2.svg';
import Vector3 from '../../assets/Vector3.svg';
import Vector4 from '../../assets/Vector4.svg';
import Vector5 from '../../assets/Vector5.svg';
import InputSection from '../Input_section/inputsection.component';
import Polygon from '../../assets/Polygon.svg';
export default function Herosection() {
    return (
        <Container>
            <HersectionLeft>
                <h1>Get an Instant offer and sell your home</h1>
                <InputSection />
                <p>Receive an offer within 24 hours, it’s that simple!</p>
            </HersectionLeft>
            <HerosectionRight>
                <HerosectionRightImageBox>
                    <HerosectionRightImage
                        src={HerosectionImage}
                        alt=""
                    />
                    <PolygonImage
                        src={Polygon}
                        alt=""
                    />
                </HerosectionRightImageBox>
            </HerosectionRight>

            {/* <img src={Vector1} alt="" /> */}
            <Vectors src={Vector2} alt="" />
            <Vectors src={Vector3} alt="" />
            <Vectors src={Vector4} alt="" />
            <Vectors src={Vector5} alt="" />
        </Container>
    );
}
