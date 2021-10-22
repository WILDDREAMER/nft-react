import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../img/banner.png'
import Banner2 from '../img/banner2.png'
import Avatar from '../img/avatar.png'
import LogoLight from '../img/LogoLight.svg'
import Copy from '../img/copy.svg'
import Add from '../img/add.svg'
import styled from "styled-components";
import Button from './Button';

const ProfileStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: black;
    background: ${props => props.theme.color.gradient};
    padding: 20px;
`

const SectionContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 1440px;
    gap: 10px;
    border-bottom :1px rgba(255,255,255,0.06) solid;
`

const BannerStyle = styled.img`
    width: 100%;
    height: 116px;
    object-fit: fill;
    border-radius: 20px;
`
const AvatarContainer = styled.div`
    width: 77px;
    height: 77px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.54);
    margin-top: -38.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 55px;
        height: 55px;
    }
`
const UserName = styled.h1`
    font-size: 15px;
    font-family: "TT Commons Bold";
    color: white;
    text-align: center;
    margin-top: 10px;
`

const AddressContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    img{
        cursor: pointer;
        width: 10px;
        height: 10px;
    }
`

const Address = styled.p`
    color: white;
    font-size: 10px;
    font-family: "TT Commons Regular";
    opacity: 0.2;
`

const EditContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
    img{
        cursor: pointer;
        width: 30px;
        height: 30px;
    }
`
const SelectionContainer = styled(SectionContainer)`
    flex-direction: row;
    justify-content: center;
    height: 120px;
`

const SpecificSearch = styled(SectionContainer)`
    background: url(${Banner2}) no-repeat 100% 100%;
    background-position: center center;
    object-fit: fill;
    background-size: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    >*{
        color: white;
        font-size: 20px;
        font-family: "TT Commons Regular";
    }
    >p{
        :not(:first-child){
            padding-bottom: 10px;
            margin-top: 10px;
        }
    }
    >img{
        width: 20px;
        height: 20px;
    }
    a{
        :not(:first-child){
            color: ${({ theme }) => theme.color.pink};
            border-bottom: 1px ${({ theme }) => theme.color.pink} solid;
        }
    }
`

const Profile = ({ user }) => {
    const [selected, setSelected] = useState(2);
    useEffect(() => {
        console.log(selected)
    }, [selected])
    return <ProfileStyle>
        <SectionContainer >
            <BannerStyle src={Banner} alt="Banner" />
            <AvatarContainer>
                <img src={Avatar} alt="Avatar" />
            </AvatarContainer>
            <UserName>"Hello Jummy"</UserName>
            <AddressContainer>
                <Address>0x3b38a52998a4b7...</Address>
                <img onClick={() => navigator.clipboard.writeText('0x3b38a52998a4b742c')} src={Copy} alt="" />
            </AddressContainer>
            <EditContainer>
                <Button>Edit Profile</Button>
                <img src={Add} alt="" />
            </EditContainer>
        </SectionContainer>
        <SelectionContainer>
            <Button sm onClick={() => setSelected(0)} selected={(selected === 0)}>On Sale</Button>
            <Button sm onClick={() => setSelected(1)} selected={(selected === 1)}>Created</Button>
            <Button sm onClick={() => setSelected(2)} selected={(selected === 2)}>Collectibles</Button>
            <Button sm onClick={() => setSelected(3)} selected={(selected === 3)}>Liked</Button>
            <Button sm onClick={() => setSelected(4)} selected={(selected === 4)}>Following</Button>
            <Button sm onClick={() => setSelected(5)} selected={(selected === 5)}>Followers</Button>
        </SelectionContainer>
        <SpecificSearch>
            <Link to="/search"><img src={LogoLight} alt="logo" /></Link>
            <p>→</p>
            <p>Search result for</p>
            <a href="#">3D</a>
        </SpecificSearch>
    </ProfileStyle>
}

export default Profile