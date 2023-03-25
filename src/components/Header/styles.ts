import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  background: #1d2226 ;
  padding: 2rem;

  border-bottom: 1px solid white;
`

export const HeaderContent = styled.div`
  max-width: 62rem;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  > a {
    font-size: 2.0rem;
    font-weight: bold;
    text-decoration: none;
    color: white;
  }
`

export const Button = styled.button`
  border: 0;
  background: 0;
  position: relative;

  width: 2.4rem;
  height: 3.2rem;

  cursor: pointer;

  > div {
    position: relative;
    width: 100%;
    height: 3px;
    background: white;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    line-height: 0;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      left: 0px;
      height: 3px;
      background: white;
      border-radius: inherit;
      transition: inherit;
      transform-origin: 50% 50%; 

    }

    &::before {
      top: -7px;
    }

    &::after {
      top: 7px;
    }
  }
`