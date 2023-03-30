import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const LayoutLanding = (props) => {
    return (
        <>
            <Navigation />
            <div className="container mx-auto py-10">{props.children}</div>
            <Footer />
        </>
    );
};

export default LayoutLanding;
