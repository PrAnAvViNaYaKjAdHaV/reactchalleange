/** @format */

import styled from 'styled-components';
import { device } from '../../Devices';
export const Container = styled.div`
  height: 100vh;
  padding: 8rem 18rem;
  @media ${device.laptop}{
     padding: 8rem;
  }
    @media ${device.mobileL}{
     padding: 2rem;
  }
`;

export const PageDetails = styled.div`
  h1 {
    color: #13131a;
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
  }
  p {
    color: #13131a;
    text-align: center;
    font-size: 1.5rem;;
    font-weight: 400;
    padding-bottom:3rem;
  }

    @media ${device.laptop}{
      h1{
        font-size: 2.5rem;
      }
      p{
        font-size: 1rem;
      }
  }
    @media ${device.mobileL}{
             h1{
        font-size: 1.2rem;
      }
      p{
        font-size:.8rem;
      }
  }
`;

export const Homes = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap:1rem;
   overflow: scroll;
   max-height:100%;
   &::-webkit-scrollbar{
    display:none;
   }
`