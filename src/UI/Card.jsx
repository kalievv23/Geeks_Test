import React from 'react'
import styled from 'styled-components';

const Card = ({ name, url }) => {
    console.log(url);
  return (
    <WrapperCard>
        <img src={ url } alt={ name } />
        <span>{ name }</span>
    </WrapperCard>
  )
}

export default Card

const WrapperCard = styled.div`
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 30px;
    border-radius: 10px;
    background-color: #00b3ff;
`