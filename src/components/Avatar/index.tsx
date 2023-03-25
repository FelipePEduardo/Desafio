import { User } from 'phosphor-react'
import { AvatarContainer, AvatarFallback } from "./styles"

export function Avatar() {
  return (
    <AvatarContainer>
      <AvatarFallback >
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )  
}