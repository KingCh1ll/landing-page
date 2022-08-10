import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang={"en"}>
        <Head />
        <body>
          {/* Background */}
          <div style={{ position: "fixed", height: "100%", width: "100%", zIndex: "-1" }}>
            <img defer src="/images/blobs.svg" alt="Cool Blob Background" style={{ height: "100%", width: "100%", opacity: ".4", WebkitMaskImage: "linear-gradient(to top, transparent 0%, #fff 100%)", objectFit: "cover" }} />
          </div>
          <ColorModeScript initialColorMode={"dark"} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}