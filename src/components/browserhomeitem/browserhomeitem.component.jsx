/** @format */
import { PropTypes } from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import LeftArrow from '../../assets/leftArrow.svg';
import RightArrow from '../../assets/rightArrow.svg';
import HellowRight from '../../assets/HellowRight.svg';
import HellowLeft from '../../assets/HallowLeft.svg';
import Magnify from '../../assets/magnify.svg';
import Garage from '../../assets/Garage.svg';
import Bath from '../../assets/Bath.svg';
import Bed from '../../assets/Bed.svg';
import {
    Container,
    Details,
    Info,
    MagnifyImage,
    SwiperImages,
    ImageWrapper,
    PropertyInfo,
    ProperyIcons,
    PropertyDetail
} from './browserhomeitem.style';
export default function BrowserHomeItem({ products }) {
    const { id, area, bathrooms, bedrooms, city, list_price, photos } = products;
    const formattedAmount = list_price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <Container
            key={id}
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            HellowRight={HellowRight}
            HellowLeft={HellowLeft}>
            <Swiper
                spaceBetween={80}
                slidesPerView={'auto'}
                centeredSlides={true}
                grabCursor={true}
                navigation={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="Swiper_container">
                {photos &&
                    photos.slice(0, 5).map((photos, i) => (
                        <SwiperSlide
                            className="swiper_container"
                            key={i}>
                            <SwiperImages src={photos} alt='Home Images' />
                        </SwiperSlide>
                    ))}
            </Swiper>
            <Info>
                <Details>
                    <h1>{formattedAmount}</h1>
                    <p>{city},{area}</p>
                </Details>
                <ImageWrapper>
                    <MagnifyImage
                        src={Magnify}
                        alt="Magnify"
                    />
                </ImageWrapper>
            </Info>
            <PropertyInfo>
                <PropertyDetail>
                    <ProperyIcons src={Bed} />
                    <p>{bedrooms}Beds</p>
                </PropertyDetail>
                <PropertyDetail>
                    <ProperyIcons src={Bath} />
                    <p>{bathrooms}Baths</p>
                </PropertyDetail>
                <PropertyDetail>
                    <ProperyIcons src={Garage} />
                    <p>{0}Garage</p>
                </PropertyDetail>
            </PropertyInfo>
        </Container>
    );
}

BrowserHomeItem.propTypes = {
    products: PropTypes.object
};
