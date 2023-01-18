import React, { useState } from "react";
import * as s from "./Header.module.scss";
import logo from "../../Images/Logo/logo.svg";
import Image from "next/image";
import MobileBar from "@/Images/Icon/mobile__bar";
import {useRouter} from "next/router";
import Link from "next/link";
import {MdOutlineClose} from "react-icons/md"

const Header = () => {

  const {asPath} = useRouter();

  const [mobileMenu, setMobileMenu] = useState(false)

  const handleMobileMenu = () => {
    setMobileMenu((mobileMenu) => !mobileMenu);
  }

  return (
    <header className={s.header}>
      <div className="container">
        <div className="row">
          <div className={s.logo}>
            <Image
              src={logo}
              className={s.logo__img}
              priority={true}
              alt="logo"
            />
          </div>
          <ul className={`${s.nav} ${mobileMenu ? s.nav__open : ""}`}>
            <li className={s.nav__item}>
              <Link
                href="/"
                className={
                  asPath === "/"
                    ? `${s.nav__item__link} ${s.nav__active}`
                    : s.nav__item__link
                }
              >
                Home
              </Link>
            </li>
            <li className={s.nav__item}>
              <Link
                href="/products"
                className={
                  asPath === "/products"
                    ? `${s.nav__item__link} ${s.nav__active}`
                    : s.nav__item__link
                }
              >
                Products
              </Link>
            </li>
            <li className={s.nav__item}>
              <Link
                href="/guidelines"
                className={
                  asPath === "/guidelines"
                    ? `${s.nav__item__link} ${s.nav__active}`
                    : s.nav__item__link
                }
              >
                Guidelines
              </Link>
            </li>
            <li className={s.nav__item}>
              <Link
                href="/review"
                className={
                  asPath === "/review"
                    ? `${s.nav__item__link} ${s.nav__active}`
                    : s.nav__item__link
                }
              >
                Review
              </Link>
            </li>
            <li className={s.nav__close__icon} onClick={handleMobileMenu}>
              <MdOutlineClose size={30} />
            </li>
          </ul>
          <div className={s.btn}>
            <div className="btn__sign__in">
              <Link href="/" className="button">
                Sign In
              </Link>
            </div>
            <div className={s.btn__mobile} onClick={handleMobileMenu}>
              <MobileBar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
