import React from 'react';
import styled from 'styled-components';
const Footer = ({data, children}) => {
   
    return (
        <FooterGroup style={{"maxWidth": "100vw"}}>
            <Text>Tweet "Prototype and build apps with React and Swift. New courses by @MengTo"</Text>
            <Button>Olkeey</Button>
            <LinkGroup>
            {data.allContentfulLink.edges.map(edge => (
                <a style={{"padding": "0 50px 0px 50px"}} href={edge.node.url} key={edge.node.id}>{edge.node.label}</a>
            ))}
            </LinkGroup>
            <Credits>{children}</Credits>
        </FooterGroup>
    )
}
export default Footer

const FooterGroup = styled.div`
background: #F1F3F5;
display: grid;
grid-gap: 10px;
padding: 50px 0;
position: relative;
z-index: 101;
overflow-x: hidden;
`

const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    @media (max-width: 500px) {
        width: 300px;
        font-size: 16px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        
    }
`
const Button = styled.button`
background: linear-gradient(102.24deg, #EE4800 0%, #F41133 100%);
box-shadow: 0px 5px 10px rgba(101, 41, 255, 0.15);
border-radius: 30px;
display: flex;
align-items: center;
justify-content: center;
color: white;
border: none;
padding: 16px 60px;
font-weight: 600;
font-size: 18px;
width: 120px;
margin: auto auto;
transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

&:hover {
    box-shadow: 0 10px 20px rgba(0,0,0, 0.15);
    transform: translateY(-2px);
    cursor: pointer;
}

@media (max-width: 500px) {
        width: 50vw;
        font-size: 16px;
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: center;
        align-items: center;
        position: relative;
    }

`

const LinkGroup = styled.div`
    width: 100%;
    margin: 50px auto;
    padding: 0 auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    /*border-bottom: 1px solid rgba(0,0,0,0.1);
*/

@media (max-width: 500px) {
        width: 100vw;
        font-size: 16px;
        grid-gap: 10px;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
    }
    a {
        color: #486791;
        transition: 0.8s;
        font-weight: 400;
        font-size: 18px;
    }
    a:hover {
        color: black;
        transform: scale(1.01);
    }
`

const Credits = styled.div`
color: #486791;
max-width: 500px;
margin: 0 auto;
padding: 0 20px;

`