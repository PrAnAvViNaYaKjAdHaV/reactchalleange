/** @format */
import { Container, Title } from './swiper.style';
import Star from '../../assets/BigStar.svg'
import Reviewcard from '../reviewcard/reviewcard.component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
export default function Swipers() {

    return (
        <Container>
            <Title>
                <h1>Don’t take our word for it. Take theirs...</h1>
                <p>Listen to what our customers have to say.</p>
                <img src={Star} alt="" />
            </Title>
            <Swiper
                spaceBetween={80}
                slidesPerView={'auto'}
                centeredSlides={true}
                grabCursor={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className='Swiper_container'
            >
                <SwiperSlide className='swiper_container'>
                    <Reviewcard />
                </SwiperSlide >
                <SwiperSlide className='swiper_container'>
                    <Reviewcard />
                </SwiperSlide>
                <SwiperSlide className='swiper_container'>
                    <Reviewcard />
                </SwiperSlide>
                <SwiperSlide className='swiper_container'>
                    <Reviewcard />
                </SwiperSlide >
                <SwiperSlide className='swiper_container'>
                    <Reviewcard />
                </SwiperSlide>
                <SwiperSlide className='swiper_container'>
                    <Reviewcard />
                </SwiperSlide>
            </Swiper>

        </Container>
    );
}
