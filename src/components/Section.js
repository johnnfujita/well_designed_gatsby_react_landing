import React from 'react';
import styled from 'styled-components';
import Wave from './Wave';


const Section = props => {
    return (
        <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
            <SectionLogo src={props.logo}/>
            <SectionTitleGroup>
                <SectionTitle>{props.title}</SectionTitle>
                <SectionText>{props.text}</SectionText>
            </SectionTitleGroup>
        </SectionGroup>
    )
}

export default Section;

const SectionGroup = styled.div`
    background: url(${props => props.image});
    height: 720px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    align-items: center;
    justify-content: center;
    position: relative;
`

const SectionLogo = styled.img`
    align-self: end;
    width: 128px;
    margin: 0 auto;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);


    @media (max-width: 640px) {
        width: 80px;
    }
`


const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 32px;
    grid-gap: 16px;
    grid-template-rows: auto 100%;
    position: relative;
    z-index: 2;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`


const SectionTitle = styled.h3`
    color: white;
    font-size: 40px;
    margin: auto 0;
    line-height: 20px;
    position: relative;
    z-index: 2;

    @media (max-width: 640px) {
        font-size: 32px;
    }
`


const SectionText = styled.p`
    color: white;
    position: relative;
    z-index: 2;
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
    z-index: 0;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
    z-index: 0;
`