import "../scss/bootstrap.scss";
import GSNavbar from "../components/navbar";

export default function MyApp({Component, pageProps}) {
    return <>
        <GSNavbar/>
        <Component {...pageProps} />
    </>;
};
