import React from "react";

const Gallery = () => {
    return (
        <>
            <section id="gallery" className="pt-36 pb-10 font-quick">
                <div className="font-quick font-semibold text-2xl mb-3 lg:text-3xl lg:pt-5 text-center">
                    <h2>Gallery</h2>
                </div>
                <div className="container ">
                    <div className="mt-10 p-2 grid grid-cols-2 gap-2 rounded-lg md:grid-cols-4 md:p-4">
                        <div className="grid-card group">
                            <div className="grid-img">
                                <img
                                    src="https://source.unsplash.com/600x480/?film"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grid-card group md:col-start-3">
                            <div className="grid-img">
                                <img
                                    src="https://source.unsplash.com/600x480/?people"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grid-card group">
                            <div className="grid-img">
                                <img
                                    src="https://source.unsplash.com/600x480/?computer"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grid-card group">
                            <div className="grid-img">
                                <img
                                    src="https://source.unsplash.com/600x480/?food-drink"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grid-card group">
                            <div className="grid-img">
                                <img
                                    src="https://source.unsplash.com/600x480/?textures-patterns"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grid-card group md:col-start-4">
                            <div className="grid-img">
                                <img
                                    src="https://source.unsplash.com/600x480/?wallpapers"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
