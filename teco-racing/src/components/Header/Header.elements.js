import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
width:100%;
position: sticky;
border-bottom: 0.4rem #003399 solid;
`

export const Wrapper = styled.div`
max-width: 1100px;
display: flex;
margin: auto;
justify-content: space-between;
gap: 2rem;
`

export const LogoContainer = styled.div`
`
export const LogoImg = styled.img`
width:150px;
margin: 0.2rem;
@media screen and ( max-width:  990px ) {
width: 100px;
}
`

export const Menu = styled.ul`
width: 100%;
list-style: none;
color: #000 ;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
@media screen and ( max-width:  990px ) {
    display: ${({ open }) => open ? "flex" : "none"};
    width: 100%;
    top: 115px;
    position: absolute;
    padding: 0px;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease-out;
    background-color: #003399;
    z-index: 1 ;
    height: 100vh;
    overflow: hidden;
}
`

export const MenuItem = styled.li`
padding: 1.5rem;
`

export const MenuLink = styled(Link)`
color: #000 !important;
text-decoration: none;
`

export const MenuItemLink = styled.a`
text-decoration: none;
font-size: 1.3rem;
transition: all 0.6s ease;
&:hover{
    color: #FC0100 !important;
    text-decoration: underline;
    transition: all 0.6s ease;

}
@media screen and ( max-width:  990px ) {
    color: #fff !important;
}
`
export const MobileIcon = styled.div`
display: none;
@media screen and ( max-width:  990px ) {
    display: flex;
    align-items: center;
    svg{
        fill: #003399;
        margin-right: 0.5rem;
        font-size: 2rem;
    }
}
`