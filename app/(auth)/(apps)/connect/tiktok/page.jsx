"use client";

import { useSearchParams } from 'next/navigation';
import NextImage from "next/image";

import css from "../../app.module.css";
export default function Render() {
    const searchParams = useSearchParams();
    let code = searchParams.get("code");

    return (<>
        <div className={css["container"]}>
            <h2>{code !== null ? "Authorization Success" : "No Code Provided"}</h2>
            {code ? (<div style={{ margin: "auto", width: "100%", justifyContent: "center", textAlign: "center" }}>
                <p>Copy the text below and give it to DisPing.</p>
                <code>{code}</code>
            </div>) : null}
            <NextImage src={"/logo.png"} alt={"Logo"} width={125} height={125} style={{ margin: "auto", position: "absolute", left: 0, right: 0, top: 0, bottom: 0, borderRadius: "15%" }} />
        </div>
    </>);
}

