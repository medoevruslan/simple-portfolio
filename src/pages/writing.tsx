import FadeAnimation from "@/components/FadeAnimation";
import Typing from "@/components/Typing";
import Head from "next/head";
import { FC } from "react";

const Writing: FC = () => {

    return <>
        <Head>
            <title>Writing</title>
        </Head>
        <div className="hero__content writing">
            <FadeAnimation className="title">
                <h1>Life journey.</h1>
            </FadeAnimation>
            <div className="recap fit-content">
                <Typing text='It was a long journey that led me to this point.' speed={200} />
            </div>
        </div>
    </>
};

export default Writing;