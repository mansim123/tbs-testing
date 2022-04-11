import * as React from "react"
import "../css/style.scss";
import HeaderSection from '../components/header';
import HeroSection from '../components/hero';
import MainSection from '../components/main';
import FooterSection from '../components/footer';

// markup
const IndexPage = () => {
  return (
    <main className="pageStyles">
      <HeaderSection></HeaderSection>
      <HeroSection></HeroSection>
      <MainSection></MainSection>
      <FooterSection></FooterSection>
    </main>
  )
}

export default IndexPage
