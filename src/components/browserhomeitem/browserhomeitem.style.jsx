/** @format */

import styled from 'styled-components';
import { device } from '../../Devices';
export const Container = styled.div`
  width: 26.0625rem;
  height: 31.9375rem;
  border-radius: 0.625rem;
  background: #f7f7f7;
  padding: 0.8rem;
  .Swiper_container{
    height: 65%;
  }
  .swiper-button-prev {
    background-image: url(${(props) => props.HellowLeft});
    background-repeat: no-repeat;
    background-size: contain;
    transition: all 1s;
    &:hover {
      background-image: url(${(props) => props.LeftArrow});
    }
  }

  .swiper-button-next {
    background-image: url(${(props) => props.HellowRight});
    background-repeat: no-repeat;
    background-size: contain;
    transition: all 1s;
    &:hover {
      background-image: url(${(props) => props.RightArrow});
    }
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    content: '';
  }
  @media ${device.laptop}{
    width: 20rem;
    height: 25rem;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  border-bottom: 1px solid #d9d9d9;
`;
export const Details = styled.div`
  h1 {
    padding-bottom: 0.7rem;
  }
  p {
    padding-bottom: 0.7rem;
  }
    @media ${device.laptop}{
      h1{
        font-size: 1.5rem;
      }
      p{
        font-size: 1rem;
      }
  }
`;

export const ImageWrapper = styled.div`
  width: 4.375rem;
  height: 4.375rem;
  background-color: white;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
      @media ${device.laptop}{
      width: 2rem;
      height: 2rem;
  }
`;
export const MagnifyImage = styled.img`
  width: 2rem;
  height: 2rem;
       @media ${device.laptop}{
      width: 1.5rem;
      height: 1.5rem;
  }
`;
export const SwiperImages = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.625rem;
  border: 0;
`;

export const PropertyInfo = styled.div`
display: flex;
justify-content: space-around;
padding: 0.8rem;
`
export const ProperyIcons = styled.img`
`
export const PropertyDetail = styled.div`
display: flex;
justify-content: center;
align-items:center;
`