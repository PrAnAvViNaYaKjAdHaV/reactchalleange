/** @format */

import styled from 'styled-components';
import { device } from '../../Devices';

export const Container = styled.div`
  margin-top: 13rem;
  .Swiper_container {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65vh;
  }
  .swiper_container {
    width: 45.8125rem;
    height: 28.875rem;
    filter: blur(4px);
  }
  .swiper-slide-active {
    transform: scale(1.12);
    filter: blur(0px);
  }

  @media ${device.laptop} {
    margin-top: 1rem;
    .swiper_container {
      width: 55%;
      height: 17%;
    }
  }
    @media ${device.mobileL} {
    margin-top: 9rem;
    .swiper_container {
      width: 100%;
      height: 17%;
      padding:.8rem;
    }
    .swiper-pagination{
      bottom: 9rem;
    }
  }
`;

export const Title = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 34%;
  position: relative;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
  }
  img {
    position: absolute;
    top: -6rem;
    left: -21rem;
  }
  @media ${device.laptop} {
    width: 75%;
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.2rem;
    }
    img {
      position: absolute;
      top: -1rem;
      left: -5rem;
      width: 3.5rem;
      height: 3.5rem;
    }
  }
  @media ${device.mobileL} {
    width: 85%;
    h1 {
      font-size: 1.3rem;
    }
    p {
      font-size: 1.1rem;
    }
    img {
      position: absolute;
      top: -3rem;
      left: -1rem;
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;
