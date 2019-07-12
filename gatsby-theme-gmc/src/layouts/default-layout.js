import React from 'react'
import { css, Global } from "@emotion/core"
import { Container, Layout, Main } from "theme-ui"
import Card from 'gatsby-theme-components/src/elements/card'
import Header from 'gatsby-theme-components/src/components/header'
import Footer from 'gatsby-theme-components/src/components/footer'

const DefaultLayout = ({children}) => {
  return (
    <Layout>
      <Global
        styles={css`
          body {
            margin: 0;
            max-width: 100vw;
            overflow-x: hidden;
          }
        `}
      />
      <Header>The header</Header>
      <Main>
        <Card>I am a card</Card>
        <Container>{children}</Container>
      </Main>
      <Footer>The Footer</Footer>
    </Layout>
  )
}

export default DefaultLayout
