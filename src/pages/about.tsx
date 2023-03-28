import Divider from "@/components/Divider";
import FadeAnimation from "@/components/FadeAnimation";
import Head from "next/head";
import { FC } from "react";

const About: FC = () => {

    return <>
        <Head>
            <title>About</title>
        </Head>
        <div className="hero__content about">
            <FadeAnimation className="title title-main">
                <h1>About me.</h1>
            </FadeAnimation>
            <FadeAnimation className="recap" delay={100}>
                <p>
                    Thanks to my technical and entrepreneur background I can quickly integrate tasks and business
                    processes. I am open to all new possibilities that can both enhance an enterprise and increase
                    my own experience. My knowledge of electronics helps me go more deeply into the programming and
                    learning of algorithms and the basic principles of coding.
                </p>
            </FadeAnimation>

            <Divider delay={130} />

            <FadeAnimation className="recap" delay={130}>
                <h3 className="title">Education :</h3>
                <p>2000-2004 Kiev Technical School of Transport Building Management. Department: Surveying.</p>
            </FadeAnimation>

            <Divider delay={300} />

            <FadeAnimation className="recap" delay={150}>
                <h3 className="title">Languages :</h3>
                <ul className="recap__list li__bullet-off">
                    <li>&lt;Ukrainian className=&quot;native&quot; /&gt;</li>
                    <li>&lt;Russian className=&quot;native&quot; /&gt;</li>
                    <li>&lt;English className=&quot;pre-intermediate&quot; /&gt;</li>
                </ul>
            </FadeAnimation>

            <Divider delay={400} />

            <FadeAnimation className="recap" delay={170}>
                <h3 className="title">Common knowledege :</h3>
                <ul className="recap__list li__bullet-off">
                    <li>Business manedgement</li>
                    <li>Principles of electronic circuits</li>
                    <li>Camera and lens service</li>
                    <li>Video and photo shooting/ editing</li>
                </ul>
            </FadeAnimation>
        </div>
    </>
};

export default About;

