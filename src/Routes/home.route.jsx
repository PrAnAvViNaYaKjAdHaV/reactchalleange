
import Herosection from "../components/hero_section/herosection.component"
import Works from "../components/work/work.component"
import Swipers from '../components/swiper/swiper.component'
import HomeDetails from "../components/home_details/homedetails.component"
export default function Home() {
    return (
        <>
            <Herosection />
            <Works />
            <Swipers />
            <HomeDetails />
        </>
    )
}
