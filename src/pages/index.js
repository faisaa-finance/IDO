/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import {Helmet} from "react-helmet";

export default function Home() {
  return (
    
  <>
  
  <Head>
    <meta charSet="utf-8" />
    <meta name="author" content="Faisaa Network" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content="" />
    <meta name="robots" content="index, follow" />
    <meta name="keywords" content="comma-separated list of keywords" />
    <meta name="apple-mobile-web-app-capable" content="yes" />

    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0b2aff" />
    <meta name="msapplication-TileColor" content="#ff9635" />
    <meta name="theme-color" content="#ff9635" />
    <link rel="canonical" href="https://faisaa.finance" />
    <link rel="shortcut icon" href="/favicon.ico" />
    
    <title>Faisaa - A fully web3 driven ecosystem on CORE</title>
    {/* Bundle and Base CSS */}
    
    </Head>
    
    {/* Preloader */}
    {/* <div className="preloader">
      <span className="spinner spinner-round" />
    </div> */}
    {/* JavaScript */}
    <div className="nk-wrap">
      <header
        className="nk-header page-header is-transparent is-sticky is-shrink"
        id="header"
      >
        {/* Header @s */}
        <div className="header-main">
          <div className="header-container header-container-s1">
            <div className="header-wrap">
              {/* Logo @s */}
              <div
                className="header-logo logo "
                data-animate="fadeInDown"
                data-delay=".65"
              >
                <a href="./" className="logo-link">
                  <img
                    className="logo-dark"
                    src="images/logo.png"
                    srcSet="images/logox2.png"
                    alt="logo"
                  />
                  <img
                    className="logo-light"
                    src="images/logo-full-white-f.png"
                    srcSet="images/logo-full-white-f.png"
                    alt="logo"
                  />
                </a>
              </div>
              {/* Menu Toogle @s */}
              <div className="header-nav-toggle">
                <a
                  href="#"
                  className="navbar-toggle"
                  data-menu-toggle="header-menu"
                >
                  <div className="toggle-line">
                    <span />
                  </div>
                </a>
              </div>
              {/* Menu @s */}
              <div className="header-navbar header-navbar-s1">
                <nav
                  className="header-menu justify-content-between"
                  id="header-menu"
                >
                  <ul
                    className="menu  remove-animation"
                    data-animate="fadeInDown"
                    data-delay=".75"
                  >
                    <li className="menu-item">
                      <a className="menu-link nav-link" href="#about">
                        About
                      </a>
                    </li>
                    <li className="menu-item">
                      <a className="menu-link nav-link" href="#why">
                        Why
                      </a>
                    </li>
                    <li className="menu-item">
                      <a className="menu-link nav-link" href="#tokensale">
                        Token IDO
                      </a>
                    </li>
                    <li className="menu-item">
                      <a className="menu-link nav-link" href="#roadmap">
                        Roadmap
                      </a>
                    </li>
                    <li className="menu-item">
                      <a className="menu-link nav-link" href="#partners">
                        Partners
                      </a>
                    </li>
                    <li className="menu-item">
                      <a className="menu-link nav-link" href="#faqs">
                        Faqs
                      </a>
                    </li>
                  </ul>
                  <ul
                    className="menu-btns align-items-center  remove-animation"
                    data-animate="fadeInDown"
                    data-delay=".85"
                  >
                    <li className="language-switcher language-switcher-s1 toggle-wrap">
                      <a className="toggle-tigger" target="_blank" href="https://faisaa-finance.translate.goog/?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en-US&_x_tr_pto=wapp">
                        English
                      </a>
                      {/* <ul class="toggle-class toggle-drop toggle-drop-left drop-list drop-list-sm">
                                      <li><a href="#">French</a></li>
                                      <li><a href="#">Chinese</a></li>
                                      <li><a href="#">Hindi</a></li>
                                  </ul> */}
                    </li>
                    <li>
                      <a
                        href="#"
                        className="btn btn-md btn-round btn-outline btn-auto btn-primary"
                      >
                        <span>Join IDO</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="btn btn-md btn-round btn-outline btn-auto btn-primary"
                      >
                        <span>Buy FAISAA</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* .header-navbar @e */}
            </div>
          </div>
        </div>
        {/* .header-main @e */}
        {/* Banner @s */}
        <div className="header-banner bg-theme-grad-alt">
          <div className="nk-banner">
            <div className="banner banner-fs banner-single banner-with-token-box-s1">
              <div className="ui-shape ui-shape-header ui-shape-light" />
              <div className="banner-wrap">
                <div className="container">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-sm-10 col-md-10 col-xl-9">
                      <div className="banner-caption tc-light text-center">
                        <div
                          className="cpn-title "
                          data-animate="fadeInUp"
                          data-delay="1.25"
                        >
                          <h2 className="title title-xl-s2 title-semibold">
                            Disrupt the status quo,
                            <br />
                            Embrace a Decentralized Economy
                          </h2>
                        </div>
                        <div className="cpn-text cpn-text-center">
                          <p
                            className="lead "
                            data-animate="fadeInUp"
                            data-delay="1.35"
                          >
                            The token that assures endless possibilities with
                            Atomic Swaps for Trustless P2P Trading
                          </p>
                        </div>
                        <div className="cpn-btns">
                          <ul
                            className="btn-grp justify-content-center "
                            data-animate="fadeInUp"
                            data-delay="1.45"
                          >
                            <li>
                              <a
                                href="#"
                                className="btn btn-md btn-round btn-with-icon btn-light"
                              >
                                <span>Join IDO</span>
                                <em className="icon fas fa-angle-double-right" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://docs.faisaa.finance/"
                                className="btn btn-md btn-round btn-with-icon btn-light"
                              >
                                <span>White Paper</span>
                                <em className="icon fas fa-angle-double-right" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* .col */}
                  </div>
                  {/* .row */}
                </div>
                <div
                  className="banner-social-wrap text-center "
                  data-animate="fadeIn"
                  data-delay="1.55"
                >
                  <ul className="banner-social banner-social-vertical">
                  <li>
                      <a href="https://discord.gg/T8bFqEW8KZ">
                        <em className="fab fa-discord" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/FaisaaNetwork">
                        <em className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/faisaaofficial/">
                        <em className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/faisaa-finance">
                        <em className="fab fa-github" />
                      </a>
                    </li>
                    
                    <li>
                      <a href="https://medium.com/@faisaanetwork">
                        <em className="fab fa-medium-m" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="nk-ovm mask-b mask-contain-bottom" />
          </div>
          {/* .nk-banner */}
          <div
            className="token-box token-box-s1 "
            data-animate="fadeInUp"
            data-delay="1.65"
          >
            <div className="container">
              <div className="row no-gutters justify-content-center">
                <div className="col-xl-4 col-md-5">
                  <div className="token-countdown-wrapper split split-left split-md-left">
                    <h5 className="title-sm">
                      IDO will be live on 28th April 2023
                    </h5>
                    <h6>IDO ends in 6 Hours</h6>
                    <div
                      className="countdown-small countdown-s3 countdown"
                      data-date="2023/04/28"
                      data-day-text="D"
                      data-hour-text="H"
                      data-min-text="M"
                      data-sec-text="S"
                    />
                  </div>
                </div>
        
                <div className="col-xl-6 col-md-7">
                  <div className="token-status token-status-s1 bg-theme tc-light text-left split split-right split-md-right">
                    <h5 className="title-sm">Initital DEX Offering</h5>
                    <div className="progress-bar progress-bar-s1">
                      <div
                        className="progress-percent progress-percent-s1 bg-theme-grad-alt"
                        data-percent={30}
                      />
                    </div>
                    <div className="progress-points">
                      <span>1M Sold</span> <span>25M Sold</span>
                    </div>
                  </div>
                </div>
           
              </div>
          
            </div>
         
          </div>
          
          <div id="particles-bg" className="particles-container particles-bg" />
        </div>
        <div className="gap-5x" />
        <div className="gap-10x d-md-none" />
        <div className="gap-5x d-sm-none" />
    
      </header>
      <main className="nk-pages">
        <section className="section bg-white pb-0 ov-h" id="about">
          <div className="container">
            {/* Block @s */}
            <div className="nk-block nk-block-about text-center">
              <div className="row justify-content-center gutter-vr-30px">
                <div className="col-lg-10">
                  <div className="section-head section-head-about">
                    <h2
                      className="title fw-6 "
                      data-animate="fadeInUp"
                      data-delay=".1"
                    >
                      <span
                        style={{ fontFamily: '"League Spartan", sans-serif' }}
                      >
                        FAISAA
                        <span style={{ color: "#000" }}>
                          {" "}
                          IS OPEN TO EVERYONE
                        </span>
                      </span>
                    </h2>
                    <h4
                      className="lead  fadeInUp"
                      data-animate="fadeInUp"
                      data-delay=".1"
                    >
                      A complete decentralised web3-driven ecosystem on{" "}
                      <span style={{ color: "#fd9500" }}>CORE</span>
                    </h4>
                    <p
                      className="fw-4 tc-dark "
                      data-animate="fadeInUp"
                      data-delay=".2"
                    >
                      The native token of the{" "}
                      <span style={{ color: "#0b2aff!important" }}>
                        FaisaaX,
                      </span>{" "}
                      the first AMM powered DEX with Atomic Swap protocol built
                      on CoreDAO. CORE’s novel Satoshi Plus Consensus Mechanism
                      delivers the composability of an EVM compatible blockchain
                      with the unparalleled security and decentralization of
                      Bitcoin, all with incredibly low fees.
                    </p>
                  </div>
                </div>
                {/* .col */}
                <div className="col-lg-8">
                  <div
                    className="nk-block fadeInUp"
                    data-animate="fadeInUp"
                    data-delay=".3"
                  >
                    <img src="images/FaisaaX.gif" alt="FaisaaX - Automated Market Maker DEX on CoreDAO Blockchain" />
                  </div>
                </div>
                {/* .col */}
              </div>
              {/* .row */}
            </div>
            {/* .block @e */}
          </div>
        </section>
        <section className="section bg-light" id="why">
          <div className="background-shape bs-reverse" />
          <div className="container">
            <div className="section-head section-head-s9 wide-sm">
              <h6
                className="title title-xs title-s1 tc-primary  fadeInUp"
                data-animate="fadeInUp"
                data-delay=".1"
                style={{ visibility: "visible", animationDelay: "0.1s" }}
              >
                POWERED BY COREDAO BLOCKCHAIN
              </h6>
              <h2
                className="title  fadeInUp"
                data-animate="fadeInUp"
                data-delay=".2"
                style={{ visibility: "visible", animationDelay: "0.2s" }}
              >
                Faisaa Protocol
              </h2>
              <p
                className=" fadeInUp"
                data-animate="fadeInUp"
                data-delay=".3"
                style={{ visibility: "visible", animationDelay: "0.3s" }}
              >
                $FAISAA is the token that assures endless possibilities. A
                project built by the community for the community. The project
                aims to facilitate decentralised finance to its users by
                utilising the latest blockchain CoreDAO.
              </p>
            </div>
            <div className="nk-block">
              <div className="row gutter-vr-40px justify-content-center">
                <div className="col-lg-4 col-md-4">
                  <div
                    className="feature feature-s8 feature-s8-alt feature-center card card-full-lg card-md  fadeInUp"
                    data-animate="fadeInUp"
                    data-delay=".4"
                    style={{ visibility: "visible", animationDelay: "0.4s" }}
                  >
                    <div className="feature-icon feature-icon-lg feature-icon-lg-s2">
                      <img src="images/icons/icon-h.png" alt="feature" />
                    </div>
                    <div className="feature-text feature-text-s8">
                      <h4 className="title title-sm title-thin title-s5">
                        <span>FaisaaX</span>
                        <span>AMM-Powered DEX with P2P Atomic Swaps</span>
                      </h4>
                      <p>
                        The first automated market maker (AMM) built for the
                        CoreDAO blockchain with a Atomic Swap Protocol for P2P
                        Traders. FaisaaX is committed in establishing a strong
                        foundation with our native token, $FAISAA, as a
                        governance token, diverse farms, a built in bridge and
                        community-driven service.
                      </p>
                      <a href="#" className="link link-primary link-feature-s1">
                        <em className="link-icon icon-circle icon-circle-md ti ti-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div
                    className="feature feature-s8 feature-s8-alt feature-center card card-full-lg card-md  fadeInUp"
                    data-animate="fadeInUp"
                    data-delay=".5"
                    style={{ visibility: "visible", animationDelay: "0.5s" }}
                  >
                    <div className="feature-icon feature-icon-lg feature-icon-lg-s2">
                      <img src="images/icons/icon-j.png" alt="feature" />
                    </div>
                    <div className="feature-text feature-text-s8">
                      <h4 className="title title-sm title-thin title-s5">
                        <span>FaisaaWallet</span>
                        <span>A fully non-custodial Web3 Wallet</span>
                      </h4>
                      <p>
                        With social/email login, users create a non-custodial,
                        multi-chain smart contract in two clicks—without needing
                        to download anything or worry about seed phrases. This
                        all-in-one wallet offers trading, yeild farming &amp;
                        staking features along with the P2P crypto-fiat
                        exchange.
                      </p>
                      <a href="#" className="link link-primary link-feature-s1">
                        <em className="link-icon icon-circle icon-circle-md ti ti-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div
                    className="feature feature-s8 feature-s8-alt feature-center card card-full-lg card-md  fadeInUp"
                    data-animate="fadeInUp"
                    data-delay=".6"
                    style={{ visibility: "visible", animationDelay: "0.6s" }}
                  >
                    <div className="feature-icon feature-icon-lg feature-icon-lg-s2">
                      <img src="images/icons/icon-i.png" alt="feature" />
                    </div>
                    <div className="feature-text feature-text-s8">
                      <h4 className="title title-sm title-thin title-s5">
                        <span>FaisaaPAD</span>
                        <span>A fair project Incubator Launchpad</span>
                      </h4>
                      <p>
                        A platform for conducting IDOs to raise finance for new
                        for web3 projects. FaisaaPAD provides cryptocurrency
                        projects with a means to distribute tokens and raise
                        liquidity via Initial DEX Offering (IDO) and Private
                        Sales.
                      </p>
                      <a href="#" className="link link-primary link-feature-s1">
                        <em className="link-icon icon-circle icon-circle-md ti ti-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center pdt-r">
                <ul
                  className="btn-grp  fadeInUp"
                  data-animate="fadeInUp"
                  data-delay=".7"
                  style={{ visibility: "visible", animationDelay: "0.7s" }}
                >
                  <li>
                    <a
                      href="https://docs.faisaa.finance/"
                      className="btn btn-md btn-outline btn-grad on-bg-light"
                    >
                      Read Whitepaper
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* // */}
        <section className="section bg-white" id="whys">
          <div className="ui-shape ui-shape-s1" />
          <div className="container">
            {/* Block @s */}
            <div className="nk-block nk-block-about">
              <div className="row align-items-center gutter-vr-30px">
                <div className="col-lg-5 text-center text-lg-left">
                  <div className="nk-block-text">
                    <h2
                      className="title title-semibold "
                      data-animate="fadeInUp"
                      data-delay=".1"
                    >
                      FaisaaX - AMM powered DEX building the first P2P Protocol for the CoreDAO Blockchain.
                    </h2>
                    <h2
                      className="tc-dark "
                      data-animate="fadeInUp"
                      data-delay=".2"
                    >
                      <strong>
                        Experience instant trades and trustless Atomic Swaps for
                        P2P with FaisaaX
                      </strong>
                    </h2>
                    <p
                      className=""
                      data-animate="fadeInUp"
                      data-delay=".3"
                    >
                      FaisaaX is building a unique Atomicswap Protocol for the CoreDAO Blockchain. Atomicswaps is a decentralized
                      and trustless trading mechanism that allows users to
                      exchange different cryptocurrencies or tokens without the
                      need for a centralized exchange.
                    </p>
                    <p
                      className=""
                      data-animate="fadeInUp"
                      data-delay=".4"
                    >
                      Joining the Faisaa Network, users can enjoy the benefits
                      of a secure and scalable blockchain protocol that provides
                      unprecedented levels of transparency, flexibility, and
                      accessibility. Our goal is to create a vibrant ecosystem
                      of decentralized applications that can transform the way
                      we live, work, and interact with one another.
                    </p>
                  </div>
                </div>
                {/* .col */}
                <div className="col-lg-7">
                  <div
                    className="nk-block-img nk-block-img-s2 text-center text-lg-left "
                    data-animate="fadeInUp"
                    data-delay=".5"
                  >
                    <img src="images/bg-body.gif" alt="" />
                  </div>
                </div>
                {/* .col */}
              </div>
              {/* .row */}
            </div>
            {/* .block @e */}
          </div>
        </section>
        {/* // */}
        {/* // */}
        <section className="bg-theme section tc-light ov-h" id="tokensale">
          {/* Block @s */}
          <div className="nk-block nk-block-token mgb-m30">
            <div className="section-head text-center wide-auto">
              <h4
                className="title title-semibold "
                data-animate="fadeInUp"
                data-delay=".1"
              >
                IDO Details
              </h4>
            </div>
            <div className="tokdis-list">
              <div className="container">
                <div className="row text-center text-lg-left">
                  <div className="col-md">
                    <div
                      className="tokdis-item "
                      data-animate="fadeInUp"
                      data-delay=".2"
                    >
                      <span>Tokens Offered</span>
                      <h5>25 M</h5>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-md">
                    <div
                      className="tokdis-item "
                      data-animate="fadeInUp"
                      data-delay=".3"
                    >
                      <span>Soft Cap</span>
                      <h5>$6.6 M</h5>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-md">
                    <div
                      className="tokdis-item "
                      data-animate="fadeInUp"
                      data-delay=".4"
                    >
                      <span>Hard Cap</span>
                      <h5>$25 M</h5>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-lg-4">
                    <div
                      className="tokdis-item "
                      data-animate="fadeInUp"
                      data-delay=".5"
                    >
                      <span>Tokens Distributed</span>
                      <h5>Fair Distribution</h5>
                    </div>
                  </div>
                  {/* .col */}
                </div>
                {/* .row */}
              </div>
            </div>
          </div>
          {/* .block @e */}
          {/* .section-tokensale */}
          <div className="nk-ovm shape-n" />
        </section>
        {/* // */}
        <section className="bg-white ov-h section">
          <div className="ui-shape ui-shape-s3" />
          {/* Section Head @s */}
          {/* Block @s */}
          <div className="nk-block nk-block-token">
            <div className="container">
              <div className="nk-block">
                <div className="row">
                  <div className="col-lg-12">
                    <h3
                      className="sub-heading-s2  fadeInUp"
                      data-animate="fadeInUp"
                      data-delay=".1"
                      style={{ visibility: "visible", animationDelay: "0.1s" }}
                    >
                      Token Allocation
                    </h3>
                    <div
                      className="token-bar-chart  fadeInUp"
                      data-animate="fadeInUp"
                      data-delay=".2"
                      style={{ visibility: "visible", animationDelay: "0.2s" }}
                    >
                      <div
                        className="token-bar-item tbic1"
                        data-percent={30}
                        style={{ width: "50%" }}
                      >
                        <div className="token-bar-txt">
                          <span>50%</span>
                          <span>Yield farming &amp; Staking</span>
                        </div>
                      </div>
                      <div
                        className="token-bar-item tbic2"
                        data-percent={20}
                        style={{ width: "20%" }}
                      >
                        <div className="token-bar-txt">
                          <span>25%</span>
                          <span>Initial DEX Offering (IDO)</span>
                        </div>
                      </div>
                      <div
                        className="token-bar-item tbic3"
                        data-percent={15}
                        style={{ width: "15%" }}
                      >
                        <div className="token-bar-txt">
                          <span>10%</span>
                          <span>Public Sale</span>
                        </div>
                      </div>
                      <div
                        className="token-bar-item tbic4"
                        data-percent={13}
                        style={{ width: "8%" }}
                      >
                        <div className="token-bar-txt">
                          <span>8%</span>
                          <span>DAO Treasury</span>
                        </div>
                      </div>
                      <div
                        className="token-bar-item tbic5"
                        data-percent={10}
                        style={{ width: "5%" }}
                      >
                        <div className="token-bar-txt">
                          <span>5%</span>
                          <span>Team</span>
                        </div>
                      </div>
                      <div
                        className="token-bar-item tbic6"
                        data-percent={7}
                        style={{ width: "2%" }}
                      >
                        <div className="token-bar-txt">
                          <span>1.5%</span>
                          <span>Community</span>
                        </div>
                      </div>
                      <div
                        className="token-bar-item tbic7"
                        data-percent={5}
                        style={{ width: "0.5%" }}
                      >
                        <div className="token-bar-txt">
                          <span>0.5%</span>
                          <span>Airdrop</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* .section-tokensale */}
          </div>
        </section>
        <section className="section bg-theme tc-light ov-h" id="roadmap">
          <div className="container">
            <div className="section-head text-center wide-auto-sm">
              <h4
                className="title title-semibold "
                data-animate="fadeInUp"
                data-delay=".1"
              >
                Roadmap
              </h4>
              <p className="" data-animate="fadeInUp" data-delay=".2">
                <b>Faisaa Network's Strategic Roadmap.</b>
                <br />
                DeFi is a living construct, so staying up to date is crucial.{" "}
              </p>
            </div>
            <div className="nk-block">
              <div className="row justify-content-center">
                <div className="col-xl-12">
                  <div
                    className="roadmap-all mgb-m50 "
                    data-animate="fadeInUp"
                    data-delay=".3"
                  >
                    <div className="roadmap-wrap roadmap-wrap-done roadmap-wrap-s1 mb-0">
                      <div className="row no-gutters">
                        <div className="col-lg">
                          <div className="roadmap roadmap-s1 roadmap-done text-lg-center">
                            <div className="roadmap-step roadmap-step-s1">
                              <div className="roadmap-head roadmap-head-s1">
                                <span className="roadmap-time roadmap-time-s1">
                                  2022 Q4
                                </span>
                                <span className="roadmap-title roadmap-title-s1">
                                  Core Development
                                </span>
                              </div>
                              <ul className="roadmap-step-list roadmap-step-list-s1">
                                <li>Concept &amp; Branding</li>
                                <li>AMM DEX-Beta CORE Testnet</li>
                                <li>P2P Atomic Swaps-Beta</li>
                                <li>Whitepaper &amp; Roadmap</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg">
                          <div className="roadmap roadmap-s1 roadmap-current text-lg-center">
                            <div className="roadmap-step roadmap-step-s1">
                              <div className="roadmap-head roadmap-head-s1">
                                <span className="roadmap-time roadmap-time-s1">
                                  2023 Q1
                                </span>
                                <span className="roadmap-title roadmap-title-s1">
                                  Testnet to Mainnet
                                </span>
                              </div>
                              <ul className="roadmap-step-list roadmap-step-list-s1">
                                <li>FaisaaX Mainnet Launch</li>
                                <li>$FAISAA Community Airdrop</li>
                                <li>$FAISAA IDO &amp; Public Sale</li>
                                <li>
                                  Security Audit by{" "}
                                  <a href="https://www.certik.com/">
                                    <b>Certik</b>
                                  </a>{" "}
                                  &amp;{" "}
                                  <a href="https://armors.io/">
                                    <b>Armors</b>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg">
                          <div className="roadmap roadmap-s1 text-lg-center">
                            <div className="roadmap-step roadmap-step-s1">
                              <div className="roadmap-head roadmap-head-s1">
                                <span className="roadmap-time roadmap-time-s1">
                                  2023 Q2
                                </span>
                                <span className="roadmap-title roadmap-title-s1">
                                  User Acquisition
                                </span>
                              </div>
                              <ul className="roadmap-step-list roadmap-step-list-s1">
                                <li>Cross-chain Bridge</li>
                                <li>P2P Atomic Swap v2</li>
                                <li>FaisaaPAD IDO Platform</li>
                                <li>$PAW rebase token launch</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg">
                          <div className="roadmap roadmap-s1 text-lg-center">
                            <div className="roadmap-step roadmap-step-s1">
                              <div className="roadmap-head roadmap-head-s1">
                                <span className="roadmap-time roadmap-time-s1">
                                  2023 Q3
                                </span>
                                <span className="roadmap-title roadmap-title-s1">
                                  Ecosystem Development
                                </span>
                              </div>
                              <ul className="roadmap-step-list roadmap-step-list-s1">
                                <li>DAO Initiated</li>
                                <li>FAISAA Wallet</li>
                                <li>Security Audit V2</li>
                                <li>Fahi NFT Marketplace</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="roadmap-wrap roadmap-wrap-s1 mb-0">
                      <div className="row flex-row-reverse no-gutters">
                        <div className="col-lg">
                          <div className="roadmap roadmap-s1 text-lg-center">
                            <div className="roadmap-step roadmap-step-s1">
                              <div className="roadmap-head roadmap-head-s1">
                                <span className="roadmap-time roadmap-time-s1">
                                  2023 Q4
                                </span>
                                <span className="roadmap-title roadmap-title-s1">
                                  Merchant Payment Solutions
                                </span>
                              </div>
                              <ul className="roadmap-step-list roadmap-step-list-s1">
                                <li>FaisaaPAY Payment Solution</li>
                                <li>FaisaaPAY Launch on TESTNET</li>
                                <li>Merchant Secured Protocol</li>
                                <li>Testing Payment Gateways</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg">
                          <div className="roadmap roadmap-s1 text-lg-center">
                            <div className="roadmap-step roadmap-step-s1">
                              <div className="roadmap-head roadmap-head-s1">
                                <span className="roadmap-time roadmap-time-s1">
                                  2024 Q1
                                </span>
                                <span className="roadmap-title roadmap-title-s1">
                                  FAISAA Mass Adoption
                                </span>
                              </div>
                              <ul className="roadmap-step-list roadmap-step-list-s1">
                                <li>FaisaaPAY launch on Mainnet</li>
                                <li>Integratig more FIAT currencies for P2P</li>
                                <li>Partnerships with other Projects</li>
                                <li>Community-focused events</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nk-ovm shape-n" />
        </section>
        {/* // */}
        {/* // */}
        <section className="section bg-white" id="faqs">
  <div className="ui-shape ui-shape-s6" />
  <div className="container">
    {/* Section Head @s */}
    <div className="section-head text-center wide-auto-sm">
      <h4
        className="title title-semibold animated fadeInUp"
        data-animate="fadeInUp"
        data-delay=".1"
        style={{ visibility: "visible", animationDelay: "0.1s" }}
      >
        Frequently asked questions
      </h4>
      <p
        className="animated fadeInUp"
        data-animate="fadeInUp"
        data-delay=".2"
        style={{ visibility: "visible", animationDelay: "0.2s" }}
      >
        Check out our FAQs for further information regarding the IDO event.
      </p>
    </div>
    {/* .section-head @e */}
    {/* Block @s */}
    <div className="nk-block">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <ul
            className="nav tab-nav tab-nav-btn tab-nav-grad pdb-m justify-content-center animated fadeInUp"
            data-animate="fadeInUp"
            data-delay=".1"
            style={{ visibility: "visible", animationDelay: "0.1s" }}
          >
            <li>
              <a
                className="active"
                data-toggle="tab"
                href="#general-questions-07"
              >
                General
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#ico-questions-07" className="">
                Pre-IDO &amp; IDO
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#tokens-sales-07" className="">
                Token
              </a>
            </li>
          </ul>
          <div className="gap-1x" />
        </div>
        {/* .col */}
        <div className="col-lg-10">
          <div
            className="tab-content animated fadeInUp"
            data-animate="fadeInUp"
            data-delay=".2"
            style={{ visibility: "visible", animationDelay: "0.2s" }}
          >
            <div
              className="tab-pane fade active show"
              id="general-questions-07"
            >
              <div className="accordion accordion-faq" id="faq-24">
                <div className="accordion-item accordion-item-s2 bg-white current">
                  <h5
                    className="accordion-title accordion-title-sm"
                    data-toggle="collapse"
                    data-target="#faq-24-1"
                  >
                    {" "}
                    What is an IDO?{" "}
                    <span className="accordion-icon accordion-icon-s2" />
                  </h5>
                  <div
                    id="faq-24-1"
                    className="collapse show"
                    data-parent="#faq-24"
                  >
                    <div className="accordion-content">
                      <p>
                        An IDO (Initial DEX Offering) is a fundraising method
                        for cryptocurrency projects, in which tokens are sold
                        directly to investors through a decentralized exchange.
                        This allows projects to raise capital and create
                        liquidity for their tokens, while giving investors a
                        chance to invest in promising projects at an early
                        stage.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item accordion-item-s2 bg-white">
                  <h5
                    className="accordion-title accordion-title-sm collapsed"
                    data-toggle="collapse"
                    data-target="#faq-24-2"
                  >
                    {" "}
                    What is the FAISAA token?{" "}
                    <span className="accordion-icon accordion-icon-s2" />
                  </h5>
                  <div id="faq-24-2" className="collapse" data-parent="#faq-24">
                    <div className="accordion-content">
                      <p>
                        FAISAA is a cryptocurrency token built on the CoreDAO
                        Blockchain. It is the native token of the FaisaaX DEX,
                        an Automated Martket Maker with Atomic Swap Protocol for
                        Trustless &amp; Secure P2P Trading.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item accordion-item-s2 bg-white">
                  <h5
                    className="accordion-title accordion-title-sm collapsed"
                    data-toggle="collapse"
                    data-target="#faq-24-3"
                  >
                    {" "}
                    How many FAISAA tokens are being offerd for the IDO?{" "}
                    <span className="accordion-icon accordion-icon-s2" />
                  </h5>
                  <div id="faq-24-3" className="collapse" data-parent="#faq-24">
                    <div className="accordion-content">
                      <p>
                        A total of 25 million FAISAA tokens will be offered in
                        the IDO.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="ico-questions-07">
              <div className="accordion accordion-faq" id="faq-25">
                <div className="accordion-item accordion-item-s2 bg-white">
                  <h5
                    className="accordion-title accordion-title-sm collapsed"
                    data-toggle="collapse"
                    data-target="#faq-25-1"
                  >
                    {" "}
                    Is there a minimum investment amount?{" "}
                    <span className="accordion-icon accordion-icon-s2" />
                  </h5>
                  <div id="faq-25-1" className="collapse" data-parent="#faq-25">
                    <div className="accordion-content">
                      <p>
                        Since we are here to build a serious and committed
                        community, a minimum investment amount of 100 USDT and a
                        maximum investment amount of 10,000 USDT is enforced for
                        the 25 Million FAISAA Tokens offered for the IDO.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item accordion-item-s2 bg-white current">
                  <h5
                    className="accordion-title accordion-title-sm"
                    data-toggle="collapse"
                    data-target="#faq-25-2"
                    aria-expanded="true"
                  >
                    {" "}
                    How can I participate in the FAISAA IDO event?{" "}
                    <span className="accordion-icon accordion-icon-s2" />{" "}
                  </h5>
                  <div
                    id="faq-25-2"
                    className="collapse show"
                    data-parent="#faq-25"
                    style={{}}
                  >
                    <div className="accordion-content">
                      <p>
                        Connect your Wallet to faisaa.finance on CoreDAO Mainnet
                        and and head to the IDO page and commit $USDT to
                        participate on the IDO.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item accordion-item-s2 bg-white">
                  <h5
                    className="accordion-title accordion-title-sm collapsed"
                    data-toggle="collapse"
                    data-target="#faq-25-3"
                    aria-expanded="false"
                  >
                    {" "}
                    What is the purpose of FAISAA??{" "}
                    <span className="accordion-icon accordion-icon-s2" />
                  </h5>
                  <div
                    id="faq-25-3"
                    className="collapse"
                    data-parent="#faq-25"
                    style={{}}
                  >
                    <div className="accordion-content">
                      <p>
                        The purpose of FAISAA is to create a decentralized
                        currency that can be used for transactions and
                        investments. It aims to provide a secure, transparent,
                        and accessible alternative to traditional fiat
                        currencies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item accordion-item-s2 bg-white">
                  <h5
                    className="accordion-title accordion-title-sm collapsed"
                    data-toggle="collapse"
                    data-target="#faq-25-4"
                  >
                    {" "}
                    What is the exchange rate for the FAISAA tokens?{" "}
                    <span className="accordion-icon accordion-icon-s2" />
                  </h5>
                  <div id="faq-25-4" className="collapse" data-parent="#faq-25">
                    <div className="accordion-content">
                      <p>
                        The exchange rate of the FAISAA Token offered on IDO is
                        0.66 USDT per token.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item accordion-item-s2 bg-white">
                  <h5
                    className="accordion-title accordion-title-sm"
                    data-toggle="collapse"
                    data-target="#faq-25-5"
                  >
                    {" "}
                    How will the FAISAA tokens be distributed?{" "}
                    <span className="accordion-icon accordion-icon-s2" />
                  </h5>
                  <div
                    id="faq-25-5"
                    className="collapse show"
                    data-parent="#faq-26"
                  >
                    <div className="accordion-content">
                      <p>
                        The FAISAA tokens will be distributed fairly among
                        investors who participate in the IDO based on the amount
                        of USDT they invest and will be available to CLAIM your
                        $FAISAA Tokens 1 HR (One-Hour) after the IDO Event.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tokens-sales-07">
              <div className="accordion accordion-faq" id="faq-26">
                <div className="accordion-item accordion-item-s2 bg-white current">
                  <h5
                    className="accordion-title accordion-title-sm"
                    data-toggle="collapse"
                    data-target="#faq-26-1"
                    aria-expanded="true"
                  >
                    {" "}
                    Where can I trade FAISAA tokens?{" "}
                    <span className="accordion-icon accordion-icon-s2" />
                  </h5>
                  <div
                    id="faq-26-1"
                    className="collapse show"
                    data-parent="#faq-26"
                    style={{}}
                  >
                    <div className="accordion-content">
                      <p>
                        FAISAA tokens can be traded on a range of decentralized
                        exchanges (DEXs), such as Uniswap, LfgSwap and
                        PancakeSwap
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item accordion-item-s2 bg-white">
                  <h5
                    className="accordion-title accordion-title-sm collapsed"
                    data-toggle="collapse"
                    data-target="#faq-26-2"
                    aria-expanded="false"
                  >
                    {" "}
                    What is the roadmap for FAISAA?{" "}
                    <span className="accordion-icon accordion-icon-s2" />
                  </h5>
                  <div
                    id="faq-26-2"
                    className="collapse"
                    data-parent="#faq-26"
                    style={{}}
                  >
                    <div className="accordion-content">
                      <p>
                        The FAISAA team has a comprehensive roadmap that
                        includes the launch of additional DeFi services, such as
                        yield farming and staking, as well as partnerships with
                        other projects in the DeFi space..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item accordion-item-s2 bg-white">
                  <h5
                    className="accordion-title accordion-title-sm collapsed"
                    data-toggle="collapse"
                    data-target="#faq-26-3"
                    aria-expanded="false"
                  >
                    {" "}
                    What is the long-term vision for FAISAA?{" "}
                    <span className="accordion-icon accordion-icon-s2" />
                  </h5>
                  <div
                    id="faq-26-3"
                    className="collapse"
                    data-parent="#faq-26"
                    style={{}}
                  >
                    <div className="accordion-content">
                      <p>
                        The long-term vision for FAISAA is to become a leading
                        DeFi platform that provides users with a range of
                        financial services in a secure, decentralized manner.
                        The FAISAA team is committed to building a sustainable
                        and community-driven project that benefits all users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .col */}
      </div>
      {/* .row */}
    </div>
    {/* .block @e */}
  </div>
</section>

        <section className="section bg-theme tc-light" id="partners">
          <div className="container">
            {/* Section Head @s */}
            <div className="section-head text-center wide-auto-sm">
              <h4
                className="title-lg title-semibold "
                data-animate="fadeInUp"
                data-delay=".1"
              >
                Our Partners
              </h4>
            </div>
            {/* .section-head @e */}
            {/* Block @s */}
            <div className="nk-block block-partners">
              <ul className="partner-list partner-list-s2 flex-wrap">
                <li
                  className="partner-logo-s2 "
                  data-animate="fadeInUp"
                  data-delay=".15"
                >
                  <img src="images/partners/1.png" alt="partner" />
                </li>
                <li
                  className="partner-logo-s2 "
                  data-animate="fadeInUp"
                  data-delay=".2"
                >
                  <img src="images/partners/2.png" alt="partner" />
                </li>
                <li
                  className="partner-logo-s2 "
                  data-animate="fadeInUp"
                  data-delay=".25"
                >
                  <img src="images/partners/3.png" alt="partner" />
                </li>
                <li
                  className="partner-logo-s2 "
                  data-animate="fadeInUp"
                  data-delay=".3"
                >
                  <img src="images/partners/4.png" alt="partner" />
                </li>
                
              </ul>
            </div>
            {/* Block @e */}
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="nk-footer bg-theme-grad-alt">
        <section className="section section-l section-footer pb-0 tc-light tc-light-alt bg-transparent ov-h">
          <div className="ui-shape ui-shape-footer ui-shape-light" />
          <div className="container">
            <h2>
              FaisaaX - the DEX that assures security, privacy, and freedom in
              trading.
            </h2>
          </div>
          <section className="section">
            <div className="container">
              <h1>
                <a href="#" style={{ color: "#ff9635" }}>
                  BUY FAISAA
                </a>
              </h1>
            </div>
          </section>
        </section>
        
        
      </footer>
      
    </div>
 
  </>
)
}

