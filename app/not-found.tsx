import NextImage from "next/image";
import Link from "next/link";

import Navbar from "./(components)/navbar";
export default function Render() {
    return (<>
        <Navbar />
        <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "70vh", paddingBottom: "7rem" }}>
            <div style={{ margin: "auto", height: "137.5px" }}>
                <NextImage src={"/images/404.svg"} width={275} height={275} alt={"404 Image"} />
            </div>
            <div style={{ margin: "auto", textAlign: "center" }}>
                <h1 style={{ fontWeight: "600", fontSize: "xx-large" }}>404 - Not Found</h1>
                <p>Sorry, we couldn't find what you were looking for.</p>
                <Link href={"/"}>Home</Link>
            </div>
        </div>
    </>)
}
