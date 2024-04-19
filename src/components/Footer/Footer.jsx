import { InstagramLogo, XLogo, TelegramLogo, YoutubeLogo,TiktokLogo } from "@phosphor-icons/react";

import LogoImg from '../../assets/logo-removebg-preview.png'

import Button from "../Button/Button";

export default function Footer(){



    return(
        <>
            <div className="footer">
                <div className="footer--getAppCta">
                    <div className="footer--getAppCta__content">
                        <h3> Join GeoTopUp Community</h3>

                        <p>
                            You get to know the latest in our ecosystem first
                        </p>

                        <div className="footer--getAppCta__links">
                            <Button type="a" link={`https://www.instagram.com/geotopup`} className="footer--getAppCta__links--link">
                            <InstagramLogo size={32} color="#000" />
                            </Button>

                            <Button type="a" link={`https://www.tiktok.com/@geotopup`} className="footer--getAppCta__links--link">
                            <TiktokLogo size={32} color="#000" />
                            </Button>

                            <Button type="a" link={`https://twitter.com/geotopup`} className="footer--getAppCta__links--link">
                            <XLogo size={32} color="#000" />
                            </Button>

                            <Button type="a" link={`https://t.me/geotopupdata`} className="footer--getAppCta__links--link">
                            <TelegramLogo size={32} color="#000" />
                            </Button>

                            <Button type="a" link={`#`} className="footer--getAppCta__links--link">
                            <YoutubeLogo size={32} color="#000" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer--about">
                <div className="footer--about__left">
                    <div className="footer--about__left--logo">
                        <Button type="a" link={`#`} className="nav--brand nav--container">
                            <img src={LogoImg} alt="Laborich"/>
                            <h1 className="footer--brand"> GeoTopUp Inc</h1>
                        </Button>
                    </div>

                    <div className="footer--about__left--item">
                    <Button type="a" link="#" className="footer--about__left--item--link">
                        Privacy Policy
                    </Button>

                    <Button type="a" link="#" className="footer--about__left--item--link">
                        Terms of Use
                    </Button>
                    </div>
                </div>

                <div className="footer--about__right">
                    <div className="footer--about__right--top">
                        <p> Contact us  <a href="mailto:geotopupng@gmail.com" className="email"> geotopupng@gmail.com </a></p>
                    </div>

                    <div className="footer--about__right--bottom">
                            <p>© 2024 . Powered by GeoTopUp. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}