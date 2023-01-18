import Image from 'next/image';
import React from 'react'
import * as s from "./Hero.module.scss"
import img from "../../../Images/hero/abstract-1.png"

const Hero = () => {
  return (
    <section className={s.hero__section}>
      <div className={`${s.hero__container} container`}>
        <div className={s.left}>
          <Image src={img} alt="hero img" property={true} />
        </div>
        <div className={s.middle}>
          <h1 className={s.hero__section__title}>
            Make Management Way More Easier Than Ever
          </h1>

          <p className={s.hero__section__description}>
            The online collaborative management platform to bring more
            efficiency and performace
          </p>

          <div className={s.hero__section__btn}></div>
        </div>

        <div className={s.right}>
          <Image src={img} alt="hero img" property={true} />
        </div>
      </div>
    </section>
  );
}

export default Hero