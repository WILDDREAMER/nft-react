import styled from "styled-components"
import Logo from "../img/logo.svg"
import Search from "../img/search.svg"
import { Link } from "react-router-dom"
import Button from "./Button"

const NavBarStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    background-color: ${({ theme }) => theme.color.black};
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
`
const LogoStyle = styled.img`
    width: 31px;
    height: 31px;
`
const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
`
const SearchBar = styled.input`
    width: 359px;
    height: 30px;
    background-color: ${({ theme }) => theme.color.input};
    border-radius: 7px;
    padding: 9px 10px 9px 30px;
    background-size: 15px 15px;
    background-image: url(${Search});
    background-repeat: no-repeat;
    background-position: 10px 8px;
    color: white;
    font-family: "TT Commons Regular";
    ::placeholder {
        color: ${({ theme }) => theme.color.placeholder};
    }
`
const LinkStyle = styled(Link)`
    font-size: 12px;
    font-family: "TT Commons Regular";
    color: white;
`
const NavBar = () => {
    return <NavBarStyle><Container>
        <Main>
            <Link to="/"><LogoStyle src={Logo} alt="NFT" /></Link>
            <SearchBar placeholder="Search" />
            <LinkStyle to="/artworks">Artworks</LinkStyle>
            <LinkStyle to="/Artists">Artists</LinkStyle>
        </Main>
        <Button>Add Wallet</Button>
    </Container>
    </NavBarStyle>
}

export default NavBar