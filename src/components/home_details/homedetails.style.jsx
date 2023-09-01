/** @format */

import styled from 'styled-components';
import { device } from '../../Devices';
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Main = styled.div`
  width: 74.75rem;
  height: 28.8125rem;
  border-radius: 3.125rem;
  background: rgba(242, 242, 242, 0.5);
  backdrop-filter: blur(50px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media ${device.laptop} {
    width: 50rem;
    height: 28rem;
  }
  @media ${device.tablet} {
    padding: 1rem;
  }

  @media ${device.mobileL} {
    width: 30rem;
    height: 18rem;
  }
`;

export const MainDetials = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  .fist {
    font-size: 2rem;
    font-weight: 700;
    color: #13131a;
  }
  .second {
    color: #0061df;
    font-size: 3rem;
    font-weight: 700;
  }
  p {
    color: #13131a;
    font-size: 1.5rem;
    font-weight: 400;
  }
  @media ${device.laptop} {
     .first{
      font-size: 1.5rem;
        font-weight: 600;
     }
     .second {
      font-size:2rem;
        font-weight: 600;
     }
  }
`;
