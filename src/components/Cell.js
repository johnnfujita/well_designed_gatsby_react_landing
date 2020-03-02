import React from 'react'
import styled from 'styled-components'

const Cell = props => (
    
    <CellGroup>
        <CellImage image={props.image}> </CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
    )

export default Cell


const CellGroup = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-columns: 60px auto;
    grid-column-gap: 18px;
    align-items: center;
    :hover {
        cursor: pointer;
    }

    
`

const CellImage = styled.div`
    width: 48px;
    height: 48px;
    background: black;
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.2), -1px -1px 3px rgba(255,255,255, 1);
`

const CellTitle = styled.div`
font-size: 22px;
font-weight: 400;
border-bottom: 1px solid rgba(0,0,0,0.1);
padding: 30px 0;
`