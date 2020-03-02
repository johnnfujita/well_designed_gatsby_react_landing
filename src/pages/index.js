import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"

import staticdata from "../../staticdata.json";
import Cell from "../components/Cell"
import styled from "styled-components"
const IndexPage = () => {return (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Kick out eavesdroppers from your Life</h1>
        <p>Buy privatly using asynchronous hopping payment gateways or Respected CryptoCurrency.</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="36" />
          <img src={require('../images/logo-figma.png')} width="36" />
          <img src={require('../images/logo-studio.png')} width="30" />
          <img src={require('../images/logo-framer.png')} width="30" />
          <img src={require('../images/logo-react.png')} width="30" />
          <img src={require('../images/logo-swift.png')} width="30" />
        </div>
        <Wave />

      </div>
      </div>
      <div className="Cards">
        <h2>Signatary Platforms</h2>
        <div className="CardGroup">   
          <Card title="Olkeey" text="Event Agency" image={require("../images/wallpaper2.jpg")} />
          <Card title="Microappollis" text="City of MicroApps" image={require("../images/wallpaper.jpg")} />
          <Card title="Oykos" text="Always Home" image={require("../images/wallpaper3.jpg")} />
        </div>  
      </div>
      <Section
        image={require("../images/wallpaper2.jpg")}
        logo={require("../images/logo-react.png")}
        title="Microappollis"
        text="A all in one App, for you to purchase all the services, from a massage, a guitar lesson, to a mango at the street, or a construction service for your house."
      />
      <SectionCaption>Microappolis - Available apps</SectionCaption>
        <SectionCellGroup>{staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
       ))}
        </SectionCellGroup>
    
  </Layout>
)
        }
export default IndexPage;

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4B4 !important;
  text-align: flex-start;
  padding: 0 0 0 36px;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 12px;
  padding: 28px;
  
  @media (max-width: 740px) {
    grid-template-columns: repeat(1, 1fr);
  }


`