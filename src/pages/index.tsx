import FadeAnimation from "@/components/FadeAnimation";
import Head from "next/head";
import { FC } from "react";

const Home: FC = () => {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className='hero__content home' >
        <FadeAnimation className="title" delay={100}>
          <h2>Hi, I'm Ruslan.</h2>
        </FadeAnimation>
        <FadeAnimation className="title title-main">
          <h1>Junior Fullstack Developer.</h1>
        </FadeAnimation>
        <FadeAnimation className="title" delay={130}>
          <h3 className="title title-subtitle">Understanding the real value of life time.</h3>
          <h3 className="title title-subtitle">I striving to be multidisciplinary developer.</h3>
          <h3 className="title title-subtitle">With high requirement for the quality of development and code
            quality.</h3>
        </FadeAnimation>
        <FadeAnimation className="title" delay={150}>
          <h3>Life for me is how usefool i can be for society.</h3>
        </FadeAnimation>
      </div>
    </>
  )
};

export default Home;