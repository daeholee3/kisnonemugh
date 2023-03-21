import React from 'react'
import Layout from '../components/Layout'
import GlobalStyle from '../assets/css/GlobalStlye'
import styled from 'styled-components'

const video = () => {
  return (
    <Layout>
    <GlobalStyle />
    <Wrapper>
    <div className="video-container">
      <div className="video-center">
        video
      </div>
    </div>
    </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
.video-container {
  height: calc(100vh - 200px);
}
.video-center {
  width: 90%;
  margin: 0 auto;
}
`

export default video