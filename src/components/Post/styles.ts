import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  background: black;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  & + & {
    margin-top: 2rem;
  }

  @media(max-width: 900px) {
    > span {
      display: none;
    }
  }
`

export const PostContent = styled.div`
  max-width: 54rem;

  background: #1d2226;
  padding: 2rem 2rem 1.5rem;

  border-radius: 4px;

  > header {
    /* padding: 2rem 2rem 1.5rem; */
    border-bottom: 1px solid black;
    padding-bottom: 1.5rem;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    > span:first-child {
      display: none;
      width: 4rem;
      height: 4rem;
    }

    > span:last-child {
      color: white;

      font-weight: 700;
      font-size: 1.8rem;
      text-transform: lowercase;
      font-style: italic;

      letter-spacing: 0.2px;
    }

    @media(max-width: 900px) {
      > span:first-child {
        display: inline-block;
      }
    }
  }

  /* > button {
    margin-top: 2rem;
    background: 0;
    border: 0;
    color: white;

    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
  } */
`

export const PostInfo = styled.div`
  border: 0;
  background: 0;
  
  color: white;
  text-align: left;
  /* padding: 1.5rem 2rem 2rem; */
  margin-top: 1.5rem;

  > h2 {
    font-weight: 500;
    margin-bottom: 1.3rem;
   
    &::first-letter {
      text-transform: uppercase;
    }
  }

  > p {
    &::first-letter {
      text-transform: uppercase;
    }
  } 
`

export const ButtonsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  > button {
    
    background: 0;
    border: 0;
    color: white;

    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
  } 

  button {
    &:hover {
      svg {
        color: purple;
      }
    }
  }
`