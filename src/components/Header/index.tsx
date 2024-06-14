import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'

import { HeaderContainer, LinkBurgerOptionsContainer, LinkOptionsContainer, SearchInput, SearchInputContainer } from "./style"
import { BurgerMenu, BurgerMenuOptions } from '../../BurgerMenu'

function Header () {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <HeaderContainer>
      <Link to="/"><img src="/logo.png" width={100}/></Link>
      <LinkOptionsContainer>
        <Link to="/">Home</Link>
        <Link to="/posts">Tópicos</Link>
        <a>Grupos</a>
        <a>FAQs</a>
        <a>Conta</a>
      </LinkOptionsContainer>
      <SearchInputContainer>
        <CiSearch size={28}/>
        <SearchInput type="text" placeholder="Buscar"/>
      </SearchInputContainer>
      <BurgerMenu openMenu={openMenu} setOpenMenuByBurger={
        () => {
            setOpenMenu(!openMenu)
          }
        }/>
      <BurgerMenuOptions openMenu={openMenu}>
        <LinkBurgerOptionsContainer>
          <Link to="/">Home</Link>
          <Link to="/posts">Tópicos</Link>
          <a>Grupos</a>
          <a>FAQs</a>
          <a>Conta</a>
        </LinkBurgerOptionsContainer>
      </BurgerMenuOptions>
    </HeaderContainer>
  )
}

export default Header