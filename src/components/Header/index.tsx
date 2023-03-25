import { NavLink } from "react-router-dom";
import { Button, HeaderContainer, HeaderContent, Logo } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent >
        <Logo>
          <NavLink to='/'>Blog</NavLink>
        </Logo>

        <Button>
          <div></div>
        </Button>
      </HeaderContent>
    </HeaderContainer>
  )
}