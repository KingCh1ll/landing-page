"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from 'next/navigation';
import NextImage from "next/image";
import { toast } from "react-toastify";

import { session } from "../../../(components)/user";
import css from "../app.module.css";

export default function Render() {
    const { user } = session();

    const searchParams = useSearchParams();
    const router = useRouter();

    const [fetching, setFetching] = useState(false);
    let code = searchParams.get("code");

    useEffect(() => {
        if (user) return router.push("/");
        if (!code) return;
        if (fetching === true) return;
        setFetching(true);

        fetch(`/api/sessions?code=${code}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        }).then(async res => {
            const data = await res.json();
            if (res.status !== 200) {
                setTimeout(() => router.push("/"), 100);
                return toast.error(`Uh oh! An error occured while logging in. ${data.message}`);
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("profile", data.profile ? JSON.stringify(data.profile) : null);
            localStorage.setItem("uid", data.profile.id);
            localStorage.setItem("custom", data.customId);
            setTimeout(() => router.push("/"), 100);
        })
    });

    return (<>
        <div className={css["container"]}>
            <NextImage src={"/logo.png"} alt={"Logo"} width={125} height={125} style={{ margin: "auto", position: "absolute", left: 0, right: 0, top: 0, bottom: 0, borderRadius: "15%" }} />
            <h2>{code !== null ? "Authorizing..." : "Auth Failed"}</h2>
        </div>
    </>);
}

