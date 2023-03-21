import React from 'react'
import Layout from '../components/Layout'
import GlobalStyle from '../assets/css/GlobalStlye'
import styled from 'styled-components'

const products = () => {
  return (
    <Layout>
    <GlobalStyle />
    <Wrapper>
    <div className="products-container">
      <div className="products-center">
        products
      </div>
    </div>
    </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
.products-container {
  height: calc(100vh - 200px);
}
.products-center {
  width: 90%;
  margin: 0 auto;
}
`

export default products