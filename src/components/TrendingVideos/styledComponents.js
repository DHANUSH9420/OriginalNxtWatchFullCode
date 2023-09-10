import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding-left: 25px;
  }
`
export const TrendingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const TrendingTitleIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-left: 20px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  justify-items: center;
`
export const TrendingText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
`
export const TrendingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
