import Banner from '../img/banner.svg'
import Avatar from '../img/avatar.svg'
import styled from "styled-components";

const ProfileStyle = styled.div`
    width: 100%;
    height: 392px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    background: ${props => props.theme.color.gradient};
    padding: 20px;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const BannerStyle = styled.img`
    width: 100%;
    height: 116px;
`

const Profile = ({ user }) => {
    return <ProfileStyle>
        <Container>
            <BannerStyle src={Banner} alt="Banner" />
        </Container>
    </ProfileStyle>
}

export default Profile