
/** @format */

import Ratingstar from '../starrating/star-rating.jsx';
import ProfileImage from '../../assets/ProfileImage.svg'
import { Container, Profile } from './reviewcard.style.jsx';
export default function Reviewcard() {
    return (
        <Container>
            <Ratingstar initialRating={5} />
            <p>
                We felt very fortunate to have Santhosh and the team’s help during a
                recent &quot;long-distance&quot; commercial property purchase. They kept us very
                well informed throughout the process and planned everything to
                perfection. We are very pleased with everything you did for us.
            </p>
            <Profile>
                <img src={ProfileImage} alt="" />
                <div>
                    <h1>Gurvir Sohal</h1>
                    <p>Toronto</p>
                </div>
            </Profile>
        </Container>
    );
}
