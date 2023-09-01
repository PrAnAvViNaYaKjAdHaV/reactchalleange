/** @format */

import styled from 'styled-components';
import { device } from '../../Devices';

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1.2rem 0;
  width: ${(props) => props.width || 100}%;

  input[type='text'] {
    border: none;
    outline: none;
    flex: 1.5;
    padding-left: 1rem;
  }

  @media ${device.laptop} {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0.8rem;
  border-radius: 20px;
`;
