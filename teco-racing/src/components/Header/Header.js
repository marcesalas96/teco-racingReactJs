import { HeaderContainer, LogoContainer, LogoImg, Menu, MenuItem, MenuItemLink, Wrapper, MenuLink, MobileIcon } from "./Header.elements"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from "react"
export const Header = () => {
   const [showMobileMenu, setShowMobileMenu] = useState(false)

   return (
      <HeaderContainer>
         <Wrapper>
            <LogoContainer>
               <MenuLink to={'/'}>
                  <LogoImg src="../images/logoTecoR.png" alt="logo teco racing" />
               </MenuLink>
            </LogoContainer>
            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
               {showMobileMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </MobileIcon>
            <Menu open={showMobileMenu} >
               <MenuItem>
                  <MenuLink to={'/'} onClick={() => setShowMobileMenu(false)}>
                     <MenuItemLink>INICIO</MenuItemLink>
                  </MenuLink>
               </MenuItem>
               <MenuItem>
                  <MenuLink to={'/torneos'} onClick={() => setShowMobileMenu(false)}>
                     <MenuItemLink>TORNEOS</MenuItemLink>
                  </MenuLink>
               </MenuItem>
               <MenuItem>
                  <MenuLink to={'/fotos'} onClick={() => setShowMobileMenu(false)}>
                     <MenuItemLink>FOTOS</MenuItemLink>
                  </MenuLink>
               </MenuItem>
               <MenuItem>
                  <MenuLink to={'/escuela'} onClick={() => setShowMobileMenu(false)}>
                     <MenuItemLink>ESCUELA</MenuItemLink>
                  </MenuLink>
               </MenuItem>
               <MenuItem>
                  <MenuLink to={'/nosotros'} onClick={() => setShowMobileMenu(false)}>
                     <MenuItemLink>NOSOTROS</MenuItemLink>
                  </MenuLink>
               </MenuItem>
            </Menu>

         </Wrapper>
      </HeaderContainer>
   )
}