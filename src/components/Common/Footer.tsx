import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const FooterDiv = styled.div`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const Footer: FunctionComponent = function () {
  const handleClick = () => {
    window.location.href = 'https://github.com/seonghoho'
  }
  return (
    <FooterWrapper>
      <FooterDiv onClick={handleClick}>
        © 2024 Developer ChoiSeongho. All Rights Reserved.
      </FooterDiv>
    </FooterWrapper>
  )
}

export default Footer
