"use client";

import { useState, useEffect } from "react";

import config from "../../config";
import css from "./loading.module.css";

export default function LoadingUi() {
    const [loaded, setLoaded] = useState(false);
    const [done, setDone] = useState(false);
    useEffect(() => {
        setTimeout(() => setLoaded(true), 0.15 * 1000);
        setTimeout(() => setDone(true), 0.5 * 1000);
    });

    return done === false ? (
        <div className={"transition-opacity"} style={{ position: "fixed", top: "0px", left: "0px", width: "100%", height: "100%", background: "#020b16", opacity: loaded === true ? 0 : 1, transitionDuration: "500ms", zIndex: "100000" }}>
            <div style={{ position: "fixed", display: "flex", justifyContent: "center", width: "100%", height: "100%" }}>
                <div className={css["ani-pulse"]} style={{ top: "45%", width: "75px", height: "75px" }}></div>
                <img style={{ position: "absolute", top: "50%", left: "50%", width: "100px", height: "100px", borderRadius: "100%", transform: "translate(-50%, -50%)" }} src={config.logo} alt={"Logo"} />
            </div>
        </div>
    ) : null
}
