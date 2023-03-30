import { Carousel } from "flowbite-react";
import React from "react";

const Hero = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 container mx-auto">
            <Carousel slideInterval={5000}>
                <img
                    src="https://source.unsplash.com/gMsnXqILjp4"
                    alt="carousel job"
                />
                <img
                    src="https://source.unsplash.com/fY8Jr4iuPQM"
                    alt="carousel job"
                />
                <img
                    src="https://source.unsplash.com/NbtIDoFKGO8"
                    alt="carousel job"
                />
                <img
                    src="https://source.unsplash.com/vbxyFxlgpjM"
                    alt="carousel job"
                />
                <img
                    src="https://source.unsplash.com/QBpZGqEMsKg"
                    alt="carousel job"
                />
            </Carousel>
        </div>
    );
};

export default Hero;
