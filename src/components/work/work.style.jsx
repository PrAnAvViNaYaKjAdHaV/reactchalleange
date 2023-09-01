/** @format */

import styled from 'styled-components';
import { device } from '../../Devices';
export const Container = styled.div`
  position: relative;
  height: 100vh;
  padding: 3rem 7rem;
  @media ${device.laptop} {
    padding: 1.5rem 1rem;
  }
`;

export const BigVector = styled.img`
  position: absolute;
  top: -10rem;
  right: 6rem;
  overflow: hidden;
  z-index: -101;
  @media ${device.laptop} {
    right: -1rem;
  }
  @media ${device.mobileL}{
    display: none;
  }
`;
export const Main = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5rem;
  h1 {
    font-size: 2.875rem;
  }
  p {
    font-size: 1.5rem;
    color: #13131a;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media ${device.laptop} {
    margin-bottom: 0;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const HouseImage = styled.img`
  position: absolute;
  top: -4rem;
  right: 6rem;
  @media ${device.laptop} {
    top: -2rem;
    width: 5rem;
    height: 5rem;
    right: 8rem;
  }
  @media ${device.mobileL}{
     top: -5rem;
     right: 3rem;
  }
`;

export const DemoWork = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  gap: 5rem;
  @media ${device.laptop} {
    flex-direction: column;
    gap:0;
    img {
      width: 55%;
    }
  }
  @media ${device.mobileL}{
    img {
      width: 100%;
      height: 35%;
    }
  }
`;
export const WorkStep = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  p {
    width: 65%;
  }
  &::before {
    content: '';
    width: 0.1rem;
    position: absolute;
    background-image: url(${(props) => props.image});
    top: 2rem;
    left: 0;
    height: 75%;
  }
  @media ${device.laptop} {
      width: 45%;
      margin:0 auto;
  }
  @media ${device.mobileL}{
    width: 85%;
  }
`;
export const Work = styled.div`
  padding: 1.9rem 3rem;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: -1rem;
    width: 2.1875rem;
    height: 2.1875rem;
    border-radius: 20px;
    background: #0061df;
    box-shadow: 2px 2px 4px 0px rgba(0, 97, 223, 0.3);
    background-image: url(${(props) => props.image});
    background-size: 1.5rem 1.5rem;
    background-position: center;
    background-repeat: no-repeat;
  }
    @media ${device.laptop} {
      padding:.8rem 2rem;
      h1{
        font-size: 1.4rem;
      }
      p{
        font-size: 1rem;
        width: 85%;
      }
      &::before{
        left:-0.7rem;
        width: 1.5rem;
        height:1.5rem;
        background-size: 1rem 1rem;
      }
  }
`;
