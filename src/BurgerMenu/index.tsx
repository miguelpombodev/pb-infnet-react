import { StyledBurger, StyledCloseMenu, StyledMenu } from "./style"

type BurgerMenuProps = {
  openMenu: boolean,
  setOpenMenuByBurger: React.Dispatch<React.SetStateAction<boolean>>
}

interface BurgerMenuOptionsProps {
  children: React.ReactNode,
  openMenu: boolean,
}


export function BurgerMenu ({ openMenu, setOpenMenuByBurger }: BurgerMenuProps) {
  return (
    <>
      { openMenu ? 
        (<StyledCloseMenu onClick={() => {setOpenMenuByBurger(false)}}>
          <div />
          <div />
          <div />
        </StyledCloseMenu> )
        :
        (<StyledBurger onClick={() => {setOpenMenuByBurger(true)}}>
          <div />
          <div />
          <div />
        </StyledBurger>)
      }
    </>
  )
}

export function BurgerMenuOptions({ openMenu, children }: BurgerMenuOptionsProps) {

  return (
    <>
      {
        openMenu && 
        <StyledMenu>
          { 
            children
          }
        </StyledMenu>
      }
    </>
  )
}
