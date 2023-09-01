/** @format */

import styled from 'styled-components';
import { device } from '../../Devices';
export const Container = styled.div`
  padding: 10rem 17rem;
  height: 100vh;
  background-color: white;
    @media ${device.laptop}{
      padding: 5rem 10rem;
  }
  @media ${device.tablet}{
      padding: 3.5rem 4.5rem;
  }
  @media ${device.mobileL}{
      padding: 2rem 4rem;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5rem;
  border-bottom: 1px solid #999999;

  @media ${device.laptop}{
     flex-wrap: wrap;
     gap: 1rem;
  }
`;
export const FooterElement = styled.div`
  p {
    color: #0061df;
    font-size: 1rem;
    font-weight: 700;
    padding-bottom: 0.5rem;
  }
  li {
    list-style: none;
    color: #999;
    font-size: 1rem;
    font-weight: 500;
    padding-bottom: 0.5rem;
  }
  a {
    display: block;
    color: #0061df;
    margin-bottom: 1rem;
  }
  button {
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 0.5rem;
    border-radius: 0.25rem;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
    img {
      width: 0.75rem;
      height: 0.9375rem;
      color: white;
    }
    p {
      color: white;
    }
  }
`;

export const FooterInfo = styled.div`
  padding-top: 3rem;
  h1 {
    color: #0061df;
    font-size: 1rem;
  }
  p {
    color: #999;
    font-size: 1.125rem;
    font-weight: 700;
    padding: 0 0 0.6rem 0;
  }
`;

export const SocialMedia = styled.div`
  padding: 0.4rem 0;
  img {
    width: 2rem;
    height: 2rem;
    padding-right: 0.8rem;
  }
`;

export const ProfetionalMedia = styled.div`
  padding: 0 0 0.4rem 0;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  img {
    width: 0.87275rem;
    height: 1.55581rem;
    flex-shrink: 0;
  }
  p {
    color: #999;
    font-size: 1.125rem;
    font-weight: 400;
  }
`;
