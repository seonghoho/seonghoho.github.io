import styled from '@emotion/styled'
import { css } from '@emotion/react'

const ClockContainer = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid red;
  border-radius: 50%;
  background-color: yellow;
  position: relative;
`

const Logo = styled.div`
  position: absolute;
  margin-top: 60px;
  left: 0;
  right: 0;
  text-align: center;
`

// 숫자판 두는 로직

const getPositionStyle = (position: number) => {
  const radius = 130 // 시계의 반지름 (컨테이너 크기보다 약간 작은 값)
  const center = 150 // 시계의 중심 (컨테이너의 절반)

  // 시계의 각도는 360도이며, 숫자는 12개
  const angle = (position - 3) * (360 / 12) * (Math.PI / 180) // 12시 방향 기준으로 각도 변환

  const x = center + radius * Math.cos(angle) // x 좌표
  const y = center + radius * Math.sin(angle) // y 좌표

  return css`
    left: ${x}px;
    top: ${y}px;
    transform: translate(-50%, -50%); // 숫자의 중심을 맞추기 위해
  `
}

const Number = styled.div<{ position: number }>`
  position: absolute;
  font-size: 20px;
  color: black;
  ${({ position }) => getPositionStyle(position)}
`

const Clock = () => {
  return (
    <div>
      <ClockContainer>
        <Logo>Clock</Logo>
        <Number position={1}>1</Number>
        <Number position={2}>2</Number>
        <Number position={3}>3</Number>
        <Number position={4}>4</Number>
        <Number position={5}>5</Number>
        <Number position={6}>6</Number>
        <Number position={7}>7</Number>
        <Number position={8}>8</Number>
        <Number position={9}>9</Number>
        <Number position={10}>10</Number>
        <Number position={11}>11</Number>
        <Number position={12}>12</Number>
      </ClockContainer>
      <div>시계입니다</div>
    </div>
  )
}

export default Clock
