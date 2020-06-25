import React, { useState } from 'react'
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
import ImageSection from '../components/sign-in-page/image-section'
import SEO from '../components/seo'
import Checkbox from '../components/sign-in-page/checkbox'
import SignInButton from '../components/sign-in-page/sign-in-button'

const SignIn = ({ data }) => {
  const [rememberChecked, setRememberChecked] = useState(false)

  return (
    <Layout>
      <SEO title="Sign In Page Split Screen" />
      <Form>
        <Logo className={styles.logo} />
        <TextTitle className={styles.title}>Sign in to your account</TextTitle>
        <div className={styles.trial}>
          <TextBody>Or</TextBody>
          <TextBody className={styles.blue}>
            start your 14-day free trial
          </TextBody>
        </div>
        <TextBody className={styles.grayText}>Sign in with</TextBody>
        <div className={styles.socialButtonSection}>
          <SocialButton label="sign in with facebook">
            <Facebook />
          </SocialButton>
          <SocialButton label="sign in with twitter">
            <Twitter />
          </SocialButton>
          <SocialButton label="sign in with github">
            <GitHub />
          </SocialButton>
        </div>
        <Divider />
        <TextBody className={styles.grayText}>Email Address</TextBody>
        <Input type="email" label="email address" />
        <TextBody className={styles.grayText}>Password</TextBody>
        <Input type="password" label="password" />
        <div className={styles.rememberForgot}>
          <Checkbox
            label="Remember me"
            checked={rememberChecked}
            onCheck={() => setRememberChecked(!rememberChecked)}
          />
          <TextBody className={styles.forgot}>Forgot your password?</TextBody>
        </div>
        <SignInButton>Sign in</SignInButton>
      </Form>
      <ImageSection>
        <Image img={data.file.childImageSharp.fluid} alt="an architecture" />
      </ImageSection>
    </Layout>
  )
}

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
