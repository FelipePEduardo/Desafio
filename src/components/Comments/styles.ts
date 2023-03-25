import styled from "styled-components";

export const CommentContainer = styled.div`
  width: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`

export const CommentContent = styled.div`
  background: #3c4345;
  
  border-radius: 0px 16px 12px 12px;
  padding: 2rem;

  > header {
    margin-bottom: 1.5rem;

    > span {
      color: white;

      font-weight: 700;
      text-transform: lowercase;
      font-style: italic;

      letter-spacing: 0.2px;
    }
  }

  > span {
    display: inline-block;
    margin-bottom: 1.3rem;

    font-weight: 500;
    font-size: 1.8rem;

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