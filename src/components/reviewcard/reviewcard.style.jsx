/** @format */

import Styled from 'styled-components';
import { device } from '../../Devices';
export const Container = Styled.div`
    width:100%;
    height:100%;
    border-radius: 3.125rem;
    background: #FFF;
    box-shadow: 0px 10px 80px -40px rgba(0, 0, 0, 0.25);
    display:flex;
    flex-direction: column;
    padding:4rem;
p{
    padding:2.4rem 0;
    color: #13131A;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2rem; /* 133.333% */
}
 @media ${device.laptop}{
     padding:2rem;
      p{
        padding:1rem 0;
        font-size:1rem;
      }
 }

  @media ${device.mobileL}{
     padding:2rem;

      p{
        padding:0.4rem 0;
        font-size:1rem;
      }
 }
`;

export const Profile = Styled.div`
    display: flex;
    align-items:center;
    gap: 1.5rem;
    img{
        width: 5.625rem;
        height: 5.625rem;
    }
    h1{
        color: #0061DF;
        font-family: Inter;
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2rem; /* 114.286% */
        letter-spacing: -0.0525rem;

    }
    p{
        color: #999;
        font-family: Inter;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2rem; /* 133.333% */
        letter-spacing: -0.015rem;
        padding:0 0 1rem 0;
    }
     @media ${device.laptop}{
        gap:1rem;
        img{
            width: 3.625rem;
        }
        h1{
            font-size: 1.2rem;
        }
        p{
            font-size:1rem
        }
    }
     @media ${device.mobileL}{
        gap:0.5rem;
        img{
            width: 2.625rem;
        }
        h1{
            font-size: 1rem;
           line-height:0;
            
        }
        p{
            font-size:.9rem
        }
    }
`;
