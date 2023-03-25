import * as Avatar from '@radix-ui/react-avatar'
import styled from "styled-components";

export const AvatarContainer = styled(Avatar.Root)`
  border-radius: 6px;
  display: inline-block;
  width: 6.4rem;
  height: 6.4rem;
  overflow: hidden;
`

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`

export const AvatarFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #323238;
  color: #202024;

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`