import styled from "styled-components"

const ButtonStyle = styled.button`
    background-color: ${props => props.theme.color.pink};
    padding: 9px 14px;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    font-family: "TT Commons Medium";
`

const Button = ({ children }) => {
    return <ButtonStyle>{children}</ButtonStyle>
}

export default Button