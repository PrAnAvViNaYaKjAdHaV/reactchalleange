/** @format */

import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 9rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding: 0.9rem;
  p{
    color: red;
    text-align: center;
    margin-bottom:.9rem;
  }
  input[type="text"] {
    padding:1rem;
    width: 100%;
    height: 4.5rem;
    border-radius:4px;
    margin-bottom:2rem;
  }
`;
