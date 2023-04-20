

import config from '../../config';

export default function Header({ name, desc }) {
  return (<Head>
    <title>{`${name ? `${name} | ` : ""}${config.meta.title}`}</title>

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
    <link rel="manifest" href="/site.webmanifest?v=2" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg?v=2" color={"#001037"} />
    <link rel="shortcut icon" href="/favicon.ico?v=2" />
    <meta name="theme-color" content={"#001037"} />

    <meta name="image" content={config.meta.logo} />
    <meta name="description" content={`${desc ? `${desc} ` : ""}${`${desc ? `${desc} ` : ""}${config.meta.description}`}`} />
    <meta name="author" content={"Ch1llDev"} />
    <meta name="keywords" content={config.meta.keywords.join(", ").toLowerCase()} />
    <meta name="robots" content={"all"} />

    <meta name="twitter:title" content={config.meta.title} />
    <meta name="twitter:description" content={`${desc ? `${desc} ` : ""}${config.meta.description}`} />
    <meta name="twitter:image" content={config.meta.logo} />
    <meta name="twitter:creator" content={"Ch1llDev"} />
    <meta name="twitter:site" content={"https://ch1ll.dev/"} />
    <meta name="twitter:card" content={"summary"} />
{/* 
    <meta name="og:title" content={config.meta.title} />
    <meta name="og:description" content={`${desc ? `${desc} ` : ""}${config.meta.description}`} /> */}
    {/* <meta property="og:image" content={config.meta.logo} /> */}
    {/* <meta property="og:locale" content={"en_US"} /> */}

    <meta name="viewport" content={"width=device-width, initial-scale=1"} />
    <link rel="canonical" href={"https://ch1ll.dev/"} />
    </Head>);
}