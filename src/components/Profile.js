import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../img/banner.png'
import Banner2 from '../img/banner2.png'
import Avatar from '../img/avatar.png'
import LogoLight from '../img/LogoLight.svg'
import Instagram from '../img/instagram.svg'
import Rocket from '../img/rocket.svg'
import Facebook from '../img/facebook.svg'
import Youtube from '../img/youtube.svg'
import Copy from '../img/copy.svg'
import Add from '../img/add.svg'
import Addwhite from '../img/addwhite.svg'
import styled from "styled-components";
import Button from './Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const userData = {
    name: "Hellen Jummy",
    address: "0x3b38a52998a4b742c",
    avatar: Avatar,
    banner: Banner,
}

const ProfileStyle = styled.div`
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: black;
    background: ${props => props.theme.color.gradient};
`

const Holder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    flex: 6;
`

const SectionContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    height: 100%;
    max-height: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 1440px;
    gap: 10px;
    position: relative;
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
    flex-wrap: wrap;
`

const SpecificSearch = styled(SectionContainer)`
    background: url(${Banner2}) no-repeat 100% 100%;
    background-position: center center;
    object-fit: fill;
    background-size: 100% 110px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    border: none;
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

const FooterSection = styled(SectionContainer)`
    background: ${props => props.theme.color.footer};
    border-bottom :1px rgba(255,255,255,0.06) solid;
    padding-bottom: 50px;
    padding: 20px;
    max-width: 100%;
    flex: 2;
    >div{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        max-width: 1440px;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
    }
`

const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    flex: 1;
    p{
        color: white;
        font-size: 10px;
        font-family: "TT Commons Medium";
    }
    @media (max-width: 768px) {
        min-width: 25%;
    }
    max-width: 300px;
`

const FooterLink = styled(Link)`
    color: white;
    font-size: 10px;
    font-family: "TT Commons Medium";
    ${props => props.selected && `
        padding-bottom: 5px;
        border-bottom: 1px ${props.theme.color.pink} solid;
        color: ${props.theme.color.pink};
    `}
`
const SocialImg = styled.img`
    width: 26px;
    height: 26px;
    border-radius: 6px;
    background-color: #2f2f2f;
`

const SocialContainer = styled.div`
    display: flex;
    gap: 10px;
`

const ButtonHolder = styled.div`
    flex: 3;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 768px) {
        display: none;
    }
`

const FooterBottom = styled(FooterSection)`
    >div{
        gap: 10px;
    }
    p{
        color: white;
        font-size: 10px;
        font-family: "TT Commons Medium";
    }
    button{
        max-width: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        padding: 10px 30px;
        img{
            width: 15px;
            height: 15px;
        }
    }
    flex: 4;
    max-height: 84px;
`
const Number = styled.p`
    color: ${props => props.theme.color.pink} !important;
    font-size: 10px !important;
    font-family: "TT Commons Bold" !important;
    text-align: left;
`

const Bottom = styled.div`
    max-height: 100px;
    min-height: 100px;
    background: #191919;
    display: flex;
    justify-content: center;
    flex: 2;
    width: 100%;
    padding: 15px 20px;
    >div{
        max-width: 1440px;
        width: 100%;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: flex-start;
        >div{
            display: flex;
            gap: 10px;
            a:not(:first-child){
                padding-left: 10px;
                border-left: 1px rgba(255,255,255,0.6) solid;
            }
        }
        p{
            color: rgba(255,255,255,0.4);
            font-size: 10px;
            font-family: "TT Commons Regular";
        }
    }
`

const shorten = (str, length) => {
    if (str.length > length) {
        return str.substring(0, length) + "..."
    }
    return str
}

const Profile = ({ user }) => {
    const [selected, setSelected] = useState(2);
    const [LinkS, setLinkS] = useState(-1);
    const notify = () => toast.success('Copied to clipboard', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    useEffect(() => {
        console.log(selected)
    }, [selected])
    return <ProfileStyle>
        <Holder>
            <SectionContainer style={{ flex: "3" }} >
                <BannerStyle src={userData.banner} alt="Banner" />
                <AvatarContainer>
                    <img src={userData.avatar} alt="Avatar" />
                </AvatarContainer>
                <UserName>{userData.name}</UserName>
                <AddressContainer onClick={notify}>
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        dark
                    />
                    <Address>{shorten(userData.address, 16)}</Address>
                    <img onClick={() => navigator.clipboard.writeText(userData.address)} src={Copy} alt="" />
                </AddressContainer>
                <EditContainer>
                    <Button>Edit Profile</Button>
                    <img src={Add} alt="" />
                </EditContainer>
            </SectionContainer>
            <SelectionContainer style={{ flex: "1" }}>
                <Button sm onClick={() => setSelected(0)} selected={(selected === 0)}>On Sale</Button>
                <Button sm onClick={() => setSelected(1)} selected={(selected === 1)}>Created</Button>
                <Button sm onClick={() => setSelected(2)} selected={(selected === 2)}>Collectibles</Button>
                <Button sm onClick={() => setSelected(3)} selected={(selected === 3)}>Liked</Button>
                <Button sm onClick={() => setSelected(4)} selected={(selected === 4)}>Following</Button>
                <Button sm onClick={() => setSelected(5)} selected={(selected === 5)}>Followers</Button>
            </SelectionContainer>
            <SectionContainer style={{ border: "0", flex: "3" }}>
                <SpecificSearch>
                    <Link to="/"><img src={LogoLight} alt="logo" /></Link>
                    <p>→</p>
                    <p>Search result for</p>
                    <a href="/">3D</a>
                </SpecificSearch>
            </SectionContainer>
        </Holder>
        <FooterSection>
            <div>
                <FooterColumn>
                    <FooterLink selected={(LinkS === 0)} onClick={() => setLinkS(0)} to="/">Discover</FooterLink>
                    <FooterLink selected={(LinkS === 1)} onClick={() => setLinkS(1)} to="/">Artists</FooterLink>
                    <FooterLink selected={(LinkS === 2)} onClick={() => setLinkS(2)} to="/">Activity</FooterLink>
                </FooterColumn>
                <FooterColumn>
                    <FooterLink selected={(LinkS === 3)} onClick={() => setLinkS(3)} to="/">Featured</FooterLink>
                    <FooterLink selected={(LinkS === 4)} onClick={() => setLinkS(4)} to="/">Art</FooterLink>
                    <FooterLink selected={(LinkS === 5)} onClick={() => setLinkS(5)} to="/">Photography</FooterLink>
                    <FooterLink selected={(LinkS === 6)} onClick={() => setLinkS(6)} to="/">Games</FooterLink>
                    <FooterLink selected={(LinkS === 7)} onClick={() => setLinkS(7)} to="/">Metaverses</FooterLink>
                </FooterColumn>
                <FooterColumn>
                    <FooterLink selected={(LinkS === 8)} onClick={() => setLinkS(8)} to="/">Music</FooterLink>
                    <FooterLink selected={(LinkS === 9)} onClick={() => setLinkS(9)} to="/">Domains</FooterLink>
                    <FooterLink selected={(LinkS === 10)} onClick={() => setLinkS(10)} to="/">Defi</FooterLink>
                    <FooterLink selected={(LinkS === 11)} onClick={() => setLinkS(11)} to="/">Memes</FooterLink>
                    <FooterLink selected={(LinkS === 12)} onClick={() => setLinkS(12)} to="/">18+</FooterLink>
                </FooterColumn>
                <FooterColumn>
                    <FooterLink selected={(LinkS === 13)} onClick={() => setLinkS(13)} to="/">How to sell</FooterLink>
                    <FooterLink selected={(LinkS === 14)} onClick={() => setLinkS(14)} to="/">How to buy</FooterLink>
                    <FooterLink selected={(LinkS === 15)} onClick={() => setLinkS(15)} to="/">Support & Help Center</FooterLink>
                </FooterColumn>
                <FooterColumn>
                    <p >Social:</p>
                    <SocialContainer>
                        <FooterLink to="/"><SocialImg src={Rocket} alt="Facebook" /></FooterLink>
                        <FooterLink to="/"><SocialImg src={Instagram} alt="Facebook" /></FooterLink>
                        <FooterLink to="/"><SocialImg src={Facebook} alt="Facebook" /></FooterLink>
                        <FooterLink to="/"><SocialImg src={Youtube} alt="Facebook" /></FooterLink>
                    </SocialContainer>
                </FooterColumn>
            </div>
        </FooterSection>
        <FooterBottom>
            <div>
                <FooterColumn>
                    <Number>193,232</Number>
                    <p>Artists</p>
                </FooterColumn>
                <FooterColumn>
                    <Number>532,231</Number>
                    <p>Products</p>
                </FooterColumn>
                <FooterColumn>
                    <Number>12,54</Number>
                    <p>Buyers</p>
                </FooterColumn>
                <ButtonHolder>
                    <Button>
                        <img src={Addwhite} alt="logo" />
                        Create
                    </Button>
                </ButtonHolder>
            </div>
        </FooterBottom>
        <Bottom>
            <div>
                <p>Copyright © 2020. NFT</p>
                <div>
                    <FooterLink>Terms of Service</FooterLink>
                    <FooterLink>Privacy Policy</FooterLink>
                </div>
            </div>
        </Bottom>
    </ProfileStyle>
}

export default Profile