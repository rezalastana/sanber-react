import React from "react";
import Gallery from "../../components/Gallery";
import Hero from "../../components/Hero";

const Home = () => {
    return (
        <>
            <Hero />
            <div className="text-center">
                <h2 className="font-bold text-2xl mt-10 mb-8">
                    TEMPAT PENGEMBANGAN KARIER TERBAIK UNTUKMU
                </h2>
                <p className="text-xl">
                    Buat keputusan terbaik untuk kariermu dan <br /> bangun
                    karier impianmu!
                </p>
            </div>
            <Gallery />
        </>
    );
};

export default Home;
