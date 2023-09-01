/** @format */

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  p {
    color: #999;
    font-size: 1.125rem;
    font-weight: 500;
    padding: 0.4rem;
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
export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    transform: rotate(${(props) => (props.arrow ? 0 : 180)}deg);
  }
  p {
    color: #0061df;
    font-size: 1.25rem;
    font-weight: 700;
    padding-top: 1.2rem;
  }
`;

export const ItemLink = styled(NavLink)`
  text-decoration: none;
  color: #999;
  font-size: 1.125rem;
  font-weight: 500;
  padding: 0.4rem;
`;

export const MenueItemContainer = styled.div`
   display: flex;
   flex-direction: column;
`