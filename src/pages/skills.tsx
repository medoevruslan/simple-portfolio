import FadeAnimation from "@/components/FadeAnimation";
import Head from "next/head";
import { FC } from "react";

const Skills: FC = () => (
    <>
        <Head>
            <title>Skills</title>
        </Head>
        <div className="hero__content skills">
            <FadeAnimation className="title title-main">
                <h1>Skills.</h1>
            </FadeAnimation>
            <FadeAnimation className="recap" delay={100}>
                <p>
                    In 2018, I first tasted a cup of Java coffee and have loved the backend ever since.
                </p>
                &nbsp;
                <p>
                    After a lot of research on how the code works in the backend, I decided to spice up my Java
                    coffee with vanilla JavaScript. And that combination of flavors just gave me an incomprehensible
                    thrill that gave me the impetus to move along the fullstack vector.
                </p>
                &nbsp;
                <p>
                    And to spice things up, I also decided to try some old-school PHP, as well as a
                    much-talked-about signature menu from the chefs called Wordpress.
                </p>
            </FadeAnimation>
            <FadeAnimation className="recap" delay={130}>
                <h3 className="title active">Hard skills:</h3>
                <ul className="recap__list">
                    <li>Programming languages: JS, JAVA, PHP (Wordress)</li>
                    <li>Stack: NodeJS, Express, MongoDB, Mongoose, Postrges, Sequelize, React JS, Redux, Apps Scipt
                    </li>
                    <li>Programming concepts: OOP, Aggregation, Composition, Inheritance, Encapsulation,
                        Polymorphysm</li>
                    <li>Patterns of programming: Singleton, Decorator, Strategy, Factory, MVC</li>
                    <li>RDBMS: Postgres, MySQL, MongoDB</li>
                    <li>WEB: HTML5, CSS, SASS</li>
                </ul>
            </FadeAnimation>
            <FadeAnimation className="recap" delay={170}>
                <h3 className="title active">github page:</h3>
                <a href="https://github.com/MedoevRuslan">
                    <span>&lt;a href=&quot;</span>
                    <span className="href">https://github.com/MedoevRuslan</span>
                    <span>&quot;&gt;&lt;/a&gt;</span>
                </a>
            </FadeAnimation>
        </div>
    </>
);

export default Skills;