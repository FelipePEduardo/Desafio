import styled from "styled-components";

export const Container = styled.div`
  max-width: 54rem;
  width: 100%;

  margin: 0 auto;
  padding: 10rem 2rem;

  h3 {
    font-weight: 500;
    margin-bottom: 1.3rem;
  }
`

export const PostContainer = styled.section`
  margin-bottom: 2rem;

  > div {
    background:  #1d2226;
    padding: 2rem;
    border-radius: 6px;

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
  }
`

export const CommentsContainer = styled.section`
  > div {
    background: #1d2226;
    border-radius: 8px;
  }

  > button {
    width: 100%;
    margin-top: 2rem;
    padding: 1rem;

    border: 0;
    border-radius: 4px;
    cursor: pointer;

    font-weight: 500;

    &:hover {
      background: #3c4345;
      color: white;

      transition: 0.1s;
    }
  }
`