/** @format */

import styled from 'styled-components';
import { device } from '../../Devices';
export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${device.laptop} {
    flex-direction: column-reverse;
  }
`;
export const HersectionLeft = styled.div`
  padding: 6.5rem;
  width: 45%;
  h1 {
    font-size: 4rem;
  }

  @media ${device.laptop} {
    padding: 1rem;
    width: 85%;
    h1 {
      font-size: 2rem;
      text-align: center;
    }
    p {
      text-align: center;
    }
  }

  @media ${device.tablet} {
    width: 75%;
    h1 {
      font-size: 2rem;
    }
  }
  @media ${device.mobileL} {
    width: 85%;
  }
`;

export const HerosectionRight = styled.div``;
export const HerosectionRightImageBox = styled.div`
  position: relative;

  @media ${device.laptop} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const HerosectionRightImage = styled.img`
  border-radius: 22.303rem 22.303rem 3.125rem 3.125rem;
  border: 2rem solid rgba(0, 97, 223, 0.1);

  @media ${device.laptop} {
    width: 65%;
  }
`;
export const PolygonImage = styled.img`
  position: absolute;
  bottom: 13rem;
  right: -2rem;

  @media ${device.laptop} {
    width: 8rem;
    right: 6rem;
    bottom: 7rem;
  }
  @media ${device.tablet} {
    width: 5rem;
    right: 7rem;
    bottom: 6rem;
  }
  @media ${device.mobileL} {
    width: 3.5rem;
    right: 5rem;
    bottom: 5rem;
  }
`;
export const Vectors = styled.img`
  position: absolute;
  bottom: 6.5rem;
  width: 100%;
  z-index: -100;
`;
export const BigVector = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: -101;
`;
