import React from 'react'
import Layout from '../components/sign-in-page/layout'
import Form from '../components/sign-in-page/form'
import { graphql } from 'gatsby'
import Image from '../components/image'
import Logo from '../components/hero-section/icons/logo'
import TextTitle from '../components/text-title'
import styles from '../styles/sign-in-page/form.module.css'
import TextBody from '../components/text-body'
import SocialButton from '../components/sign-in-page/social-button'
import Facebook from '../components/sign-in-page/icons/facebook'
import Twitter from '../components/sign-in-page/icons/twitter'
import GitHub from '../components/sign-in-page/icons/github'
import Divider from '../components/sign-in-page/divider'
import Input from '../components/sign-in-page/input'

const SignIn = ({ data }) => (
  <Layout>
    <Form>
      <Logo />
      <TextTitle className={styles.title}>Sign in to your account</TextTitle>
      <div className={styles.trial}>
        <TextBody>Or</TextBody>
        <TextBody className={styles.blue}>
          start your 14-day free trial
        </TextBody>
      </div>
      <TextBody className={styles.grayText}>Sign in with</TextBody>
      <div className={styles.socialButtonSection}>
        <SocialButton>
          <Facebook />
        </SocialButton>
        <SocialButton>
          <Twitter />
        </SocialButton>
        <SocialButton>
          <GitHub />
        </SocialButton>
      </div>
      <Divider />
      <TextBody className={styles.grayText}>Email Address</TextBody>
      <Input />
      <TextBody className={styles.grayText}>Password</TextBody>
      <Input pass />
    </Form>
    <Image img={data.file.childImageSharp.fluid} alt="an architecture" />
  </Layout>
)

export default SignIn

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "sign-in-page-image.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
