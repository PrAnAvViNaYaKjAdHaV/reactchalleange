/** @format */

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../../Devices';
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6494e0;
  padding: 0.8rem;
  position: relative;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  .logo {
    margin-bottom: 1.01rem;
  }
  @media ${device.mobileL}{
    flex-direction: row-reverse;
    gap: 19rem;
  }
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.9rem;
  @media ${device.tablet}{
    display: none;
  }
`;

export const Nav = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  padding-bottom: 0.3rem;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 20%;
    border-bottom: 2px solid white;
    border-radius: 2px;
    width: 50%;
  }
`;

export const Authentication = styled.div`
   display: flex;
   @media ${device.mobileL}{
    display: none;
   }
`

export const AuthLink = styled(NavLink)`
   text-decoration: none;
   color: white;
`