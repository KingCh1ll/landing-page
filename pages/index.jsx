import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from "next/script";

import { HiOutlineNewspaper, HiOutlineLink, HiX, HiOutlineExclamation, HiOutlineFolder, HiOutlineMenuAlt2, HiOutlineFire, HiOutlineCode } from 'react-icons/hi';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

import config from '../config';

import "bootstrap/dist/css/bootstrap.min.css";

export default function Render() {
    const [width, setWidth] = useState()
    useEffect(() => {
        setInterval(() => {
            if (window.innerWidth == width) return;
            setWidth(window.innerWidth);
        }, 400)

        import("bootstrap/dist/js/bootstrap");
    });

    return (
        <>
            <Head>
                <title>{config.meta.title}</title>
                <link rel="manifest" href={config.meta.manifest} />
                <link rel="shortcut icon" type="image/x-icon" href={config.meta.logo} />
                <meta property="description" content={config.meta.description} />
                <meta property="keywords" content={config.meta.keywords.join(", ").toLowerCase()} />

                <meta name="twitter:title" content={config.meta.title} />
                <meta name="twitter:description" content={config.meta.description} />
                <meta name="twitter:site" content={config.meta.site} />
                <meta name="twitter:card" content="summary" />

                <meta property="og:title" content={config.meta.title} />
                <meta property="og:description" content={config.meta.description} />
                <meta property="og:image" content={config.meta.logo} />

                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <link rel="canonical" href={config.meta.site} />
                <link href="https://use.fontawesome.com/releases/v6.1.0/css/all.css" rel="stylesheet" />
            </Head>
            <section className="container-sm" id="features" style={{ padding: "5rem 0", maxWidth: "700px" }}>
                <div style={{ background: "#000d2b", borderRadius: "15px", padding: "30px", fontFamily: "Rubik, sans-serif" }}>
                    <div style={{ paddingTop: "1rem", paddingBottom: "3rem" }}>
                        <div style={{ color: "white", fontSize: "24px", display: "inline-grid", justifyContent: "center", width: "100%" }}>
                            <img src={`/images/users/kingch1ll.png`} height={200} width={200} alt="logo" style={{ borderRadius: "50%", border: "5px solid #ffeb3b", margin: "auto" }} />
                            <h1 style={{ display: "inline", textAlign: "center", paddingTop: "10px", fontWeight: "600" }}>{config.name}</h1>
                            <h2 style={{ display: "inline", textAlign: "center", fontSize: 18, padding: 10 }}>{config.description}</h2>
                            <div style={{ justifyContent: "space-evenly", display: "flex", width: "250px", margin: "auto" }}>
                                <a href="https://twitter.com/KingCh1ll" style={{ color: "white" }}>
                                    <i className="fab fa-twitter" style={{ fontSize: "22px" }}></i>
                                </a>
                                <a href="https://github.com/KingCh1ll" style={{ color: "white" }}>
                                    <i className="fab fa-github" style={{ fontSize: "22px" }}></i>
                                </a>
                                <a href="https://discord.com/users/571811686617710592" style={{ color: "white" }}>
                                    <i className="fab fa-discord" style={{ fontSize: "22px" }}></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UCvOB4pLdL7V4FmPdyNdfFeQ" style={{ color: "white" }}>
                                    <i className="fab fa-youtube" style={{ fontSize: "22px" }}></i>
                                </a>
                                <a href="https://open.spotify.com/artist/anx4tm5z1m6lpg1ulxfbmxele" style={{ color: "white" }}>
                                    <i className="fab fa-spotify" style={{ fontSize: "22px" }}></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ paddingTop: "8rem", paddingBottom: "3rem" }}>
                        <div style={{ backgroundColor: "rgb(0, 10, 35)", maxWidth: "575px", margin: "auto", padding: "20px", borderRadius: "20px" }}>
                            <h1 className="aos-init aos-animate" style={{ fontWeight: "600", color: "rgba(255, 255, 255, 1)", textAlign: "center" }} data-aos="zoom-in">👋 About Me</h1>
                            <div className="aos-init aos-animate" style={{ color: "rgba(255, 255, 255, 1)", textAlign: "center" }} data-aos="zoom-in">
                                <p className="aos-init aos-animate" style={{ fontSize: "17px" }} data-aos="zoom-in">Hi, I'm KingCh1ll! I'm a passionate <strong>Software Engineer</strong>, living in the <strong>United States</strong>! I love making <strong>websites</strong> and <strong>Discord bots</strong>.</p>
                                <h2 className="aos-init aos-animate" style={{ fontWeight: "600", color: "rgba(255, 255, 255, 1)", textAlign: "center" }} data-aos="zoom-in">🪄 Languages</h2>
                                <div style={{ fontSize: "17px", marginBottom: "1em" }}>
                                    <p className="aos-init aos-animate" data-aos="zoom-in" style={{ marginBottom: "0" }}>• JavaScript</p>
                                    <p className="aos-init aos-animate" data-aos="zoom-in" style={{ marginBottom: "0" }}>• Lua (Roblox Edition)</p>
                                    <p className="aos-init aos-animate" data-aos="zoom-in" style={{ marginBottom: "0" }}>• Html, Css, Scss</p>
                                </div>
                                <h2 className="aos-init aos-animate" style={{ fontWeight: "600", color: "rgba(255, 255, 255, 1)", textAlign: "center" }} data-aos="zoom-in">📇 Contact</h2>
                                <p className="aos-init aos-animate" style={{ fontSize: "17px" }} data-aos="zoom-in">If you want to contact me, you can join my <a href="https://discord.gg/PPtzT8Mu3h">Discord server</a>.</p>
                            </div>
                        </div>
                    </div>

                    {/* <div style={{ paddingTop: "1rem", paddingBottom: "3rem" }}>
                        {user?.activities?.map((activity) => (
                            <div key={activity.applicationId} className="aos-init aos-animate" style={{ maxWidth: "575px", margin: "auto", color: "rgb(255, 255, 255)", background: "rgb(0, 10, 35)", margin: "auto", borderRadius: "20px", padding: "20px" }} data-aos="zoom-in">
                                <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                                    {activity.name}
                                    <small style={{ marginInlineStart: "10px", color: "grey", fontSize: "small" }}>{activity.name.toLowerCase().includes("music") ? "Listening" : (activity.name.toLowerCase().includes(`youtube`) ? 'Watching' : (activity.name.toLowerCase().includes(`code`) ? "Developing" : (activity.name.toLowerCase().includes("github") ? 'Browsing' : 'Playing')))}</small>
                                </span>
                                <div style={{ display: "flex" }}>
                                    <div style={{ position: "relative", marginTop: "6px" }}>
                                        {activity.assets.large.image ?
                                            <img src={activity.assets.large.image} title={activity.details} alt={activity.details} className="img-fluid" style={{ height: "80px", borderRadius: "6px" }} />
                                            : <></>
                                        }
                                        {activity.assets.small.image ?
                                            <img src={activity.assets.small.image} title={activity.name} alt={activity.name} className="img-fluid" style={{ position: "absolute", height: "28px", top: "62px", left: "66px", borderRadius: "6px", backgroundColor: "rgb(32, 29, 36)", borderRadius: "10px", outline: "rgb(32, 29, 36) solid 0.2rem" }} />
                                            : <></>
                                        }
                                    </div>
                                    <div style={{ marginTop: "14px", marginLeft: "8px", fontFamily: "Rubik, sans-serif" }}>
                                        <span style={{ display: "flex" }}>
                                            <HiOutlineFolder style={{ minHeight: 22, minWidth: 22, marginInlineEnd: "5px" }} />
                                            {activity.details}
                                        </span>
                                        <span style={{ display: "flex" }}>
                                            <HiOutlineMenuAlt2 style={{ minHeight: 22, minWidth: 22, marginInlineEnd: "5px" }} />
                                            {activity.state}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> */}

                    {config.projects?.map(card => (
                        <div key={card.name} className="aos-init aos-animate" style={{ maxWidth: "575px", margin: "auto", color: "rgb(255, 255, 255)", background: "rgb(0, 10, 35)", margin: "15px auto 15px auto", borderRadius: "20px", padding: "20px" }} data-aos="zoom-in">
                            <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                                {card.name}
                                {card.bot === true ?
                                    <span style={{ backgroundColor: "rgb(88, 101, 242)", fontFamily: "sans-serif", fontSize: "14px", padding: "2px 6px 2px 6px", borderRadius: "4px", marginLeft: "5px" }}>
                                        <svg aria-label="Verified Bot" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2">
                                            <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor"></path>
                                        </svg>
                                        BOT
                                    </span>
                                    : <></>
                                }
                                <small style={{ marginInlineStart: "10px", color: "grey", fontSize: "small" }}>{card.role}</small>
                            </span>
                            <div style={{ display: "flex" }}>
                                <div style={{ position: "relative", marginTop: "6px" }}>
                                    <img src={card.image} title={card.name} alt={card.name} style={{ height: "80px", borderRadius: "6px" }} />
                                </div>
                                <div style={{ marginTop: "14px", marginLeft: "8px", fontFamily: "Rubik, sans-serif" }}>
                                    <span style={{ display: "flex" }}>
                                        <HiOutlineFolder style={{ minHeight: 22, minWidth: 22, marginInlineEnd: "5px" }} />
                                        {card.description}
                                    </span>
                                    <span style={{ display: "flex" }}>
                                        <i className="fa-solid fa-link" style={{ fontSize: "medium", marginInlineEnd: "5px" }}></i>
                                        <a href={card.link}>{card?.linkName ? card.linkName : card.link.split("https://")[1]}</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container mt-5">
                    <div className="row text-white justify-content-center mt-3 pb-3">
                        {/* Legal */}
                        <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
                            <h5 className="text-capitalize fw-bold">Projects</h5>
                            <hr className="bg-white d-inline-block mb-4" style={{ width: "60px", height: "2px" }} />
                            <ul className="list-inline campany-list">
                                <li><Link href="https://www.sparkv.tk/">SparkV</Link></li>
                            </ul>
                        </div>
                    </div>
                    <hr style={{ color: "gray" }} />
                    <div className="py-4 text-center text-white" style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ textAlign: "start" }}>
                            © 2021-2022 <Link href="https://www.ch1ll.tk/">KingCh1ll</Link>. Illustrations by <Link href="https://storyset.com/technology">Storyset</Link> and <Link href="https://undraw.co/">Undraw</Link>
                        </div>
                        <div style={{ justifyContent: "space-evenly", display: "flex", width: "200px" }}>
                            <Link href="https://twitter.com/KingCh1ll" passHref>
                                <a><i className="fab fa-twitter" style={{ fontSize: "22px" }}></i></a>
                            </Link>
                            <Link href="https://github.com/KingCh1ll" passHref>
                                <a><i className="fab fa-github" style={{ fontSize: "22px" }}></i></a>
                            </Link>
                            <Link href="https://discord.com/users/571811686617710592" style={{ color: "white" }} passHref>
                                <a><i className="fab fa-discord" style={{ fontSize: "22px" }}></i></a>
                            </Link>
                            <Link href="https://www.youtube.com/channel/UCvOB4pLdL7V4FmPdyNdfFeQ" style={{ color: "white" }} passHref>
                                <a><i className="fab fa-youtube" style={{ fontSize: "22px" }}></i></a>
                            </Link>
                            <Link href="https://open.spotify.com/artist/anx4tm5z1m6lpg1ulxfbmxele" style={{ color: "white" }} passHref>
                                <a><i className="fab fa-spotify" style={{ fontSize: "22px" }}></i></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>

            <Link href="#top">
                <a className="shadow button-secondary rounded-circle" style={{ position: "fixed", width: "3rem", height: "3rem", right: "1.875rem", bottom: "1.875rem", zIndex: "9999" }}>
                    <span style={{ color: "#fff", fontSize: "1rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <i className="fas fa-angle-up"></i>
                    </span>
                </a>
            </Link>
        </>
    );
};
