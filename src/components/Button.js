import styled from "styled-components"

const ButtonStyle = styled.button`
    background-color: ${({ theme, sm, selected }) => (!sm || selected) ? theme.color.pink : "transparent"};
    padding: 9px 14px;
    border-radius: ${({ theme, sm, selected }) => sm ? "20px" : "5px"};
    color: white;
    font-size: 14px;
    font-family: "TT Commons Medium";
    border: ${({ selected, sm }) => sm ? "1px solid rgba(255,255,255,0.2)" : "none"};
    transition: all 0.2s ease-in-out;
`

const Button = ({ children, sm, selected, onClick }) => {
    return <ButtonStyle onClick={onClick} sm={sm} selected={selected}>{children}</ButtonStyle>
}

export default Button