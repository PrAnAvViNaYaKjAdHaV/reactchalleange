/** @format */

import styled from 'styled-components';
import { device } from '../../Devices';
export const Container = styled.div`
  height: 100vh;
  width: 35%;
  background-color: white;
  top: 0;
  left: ${(props) => (props.menue ? 0 : -100)}%;
  position: absolute;
  z-index: 4;
  padding: 2rem;
  p {
    color: black;
  }
   @media ${device.mobileL}{
      width: 100%;
  }
    @media ${device.tablet}{
      width: 50%;
  }
`;

export const MenueSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: #000;
    font-size: 1.125rem;
    font-weight: 700;
  }
`;
