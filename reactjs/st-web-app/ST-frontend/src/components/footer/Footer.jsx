import MainLogo from "../common/MainLogo";

export default function Footer({className}) {
    return (
        <>
        <footer className={`site-main-footer ${className ? className : ""}`}>
            <div className="container">
                <MainLogo image={"/images/soultrove-white-logo.svg"}/>
            </div>
        </footer>
        </>
    )
}