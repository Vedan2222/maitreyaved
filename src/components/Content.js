import React, { useState } from 'react';
import './Content.css';
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import Chatbot from './Chatbot';

const Content = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    const handleImageClick = (imageNumber) => {
        setSelectedImage(imageNumber);
        setIsExpanded(!isExpanded);
    };

    const handlePrevImage = (e) => {
        e.stopPropagation();
        setSelectedImage(selectedImage === 1 ? 3 : selectedImage - 1);
    };

    const handleNextImage = (e) => {
        e.stopPropagation();
        setSelectedImage(selectedImage === 3 ? 1 : selectedImage + 1);
    };

    const getImageTitle = (imageNumber) => {
        switch(imageNumber) {
            case 1:
                return {
                    title: "Miroku (Maitreya) in meditation, gilt bronze figure, Japanese, Asuka period, 7th century; in the Cleveland Museum of Art",
                    subtitle: "The Cleveland Museum of Art, John L. Severance Fund, 1950.86 (CC0 1.0)"
                };
            case 2:
                return {
                    title: "Seated bodhisattva Maitreya, bronze with traces of gilding, China, Northern Zhou dynasty, 577–581 ce; in the Brooklyn Museum, New York.",
                    subtitle: "Photograph by Katie Chao. Brooklyn Museum, New York, gift of the Asian Art Council, 88.93 Creative Commons Attribution ShareAlike 2.0 (Generic)"
                };
            case 3:
                return {
                    title: "Maitreya Buddha Statue",
                    subtitle: "Ancient Buddhist Temple"
                };
            default:
                return { title: "", subtitle: "" };
        }
    };

    return (
        <div className="content-wrapper">
            <button 
                className="chatbot-trigger"
                onClick={() => setIsChatbotOpen(true)}
            >
                Ask any question
            </button>

            {isExpanded && (
                <div className="fullscreen-overlay" onClick={() => handleImageClick(null)}>
                    <button className="nav-button prev" onClick={handlePrevImage}>←</button>
                    <button className="nav-button next" onClick={handleNextImage}>→</button>
                    <h2 className="expanded-image-title1">
                        {getImageTitle(selectedImage).title}
                    </h2>
                    <h1 className="expanded-image-title2">
                        {getImageTitle(selectedImage).subtitle}
                    </h1>
                    <img
                        src={selectedImage === 1 ? img1 : selectedImage === 2 ? img2 : img3}
                        alt="Maitreya Statue"
                        className="main-image expanded"
                    />
                </div>
            )}

            <main className={`content ${isExpanded ? "hidden-content" : ""}`}>
                <section id="introduction">
                    <h2>Introduction</h2>
                    
                    <div className="content-block">
                        <div className="image-row">
                            <img
                                src={img1}
                                alt="Maitreya Statue"
                                className="main-image"
                                onClick={() => handleImageClick(1)}
                            />
                            
                        </div>
                        <p>
                            <strong>Maitreya</strong>, in Buddhist tradition, the future 
                            <a href="/buddha" onClick={(e) => e.preventDefault()}>Buddha</a>,
                            presently a bodhisattva residing in the Tushita heaven, who will 
                            <a href="/descend" onClick={(e) => e.preventDefault()}>descend</a> to earth to preach anew the <em>dharma</em> ("law")
                            when the teachings of Gautama Buddha have completely decayed. Maitreya is the
                            earliest <a href="/bodhisattva" onClick={(e) => e.preventDefault()}>bodhisattva</a> around whom a cult developed and is mentioned
                            in scriptures from the 3rd century <strong>CE</strong>. He was accepted by all
                            schools of <a href="/buddhism" onClick={(e) => e.preventDefault()}>Buddhism</a> and is still the only bodhisattva generally
                            honoured by the <a href="/theravada" onClick={(e) => e.preventDefault()}>Theravada</a> tradition.
                        </p>
                    </div>

                    <div className="content-block">
                        <div className="image-pair">
                            <img
                                src={img2}
                                alt="Maitreya Statue"
                                className="main-image"
                                onClick={() => handleImageClick(2)}
                            />
                            <img
                                src={img3}
                                alt="Maitreya Statue"
                                className="main-image"
                                onClick={() => handleImageClick(3)}
                            />
                        </div>
                        <p>
                            The name Maitreya is derived from the Sanskrit maitrī ("friendliness"). In Pali the name becomes Metteyya, in Chinese Milefo, in Japanese Miroku, and in Mongolian Maidari; in Tibetan the bodhisattva is known as Byams-pa ("Kind," or "Loving"). His worship was especially popular from the 4th to the 7th century, and his images are found throughout the Buddhist world; many of them beautifully convey his characteristic air of expectancy and promise. He is represented in painting and sculpture both as a bodhisattva and as a buddha, and he is frequently depicted seated in European fashion or with his ankles loosely crossed.
                        </p>
                    </div>
                </section>

                <section id="references">
                    <h2>References & Edit History</h2>
                    <p>Last Updated: Dec 3, 2024</p>
                </section>

                <section id="topics">
                    <h2>Related Topics</h2>
                    <ul>
                        <li><a href="/buddhism" onClick={(e) => e.preventDefault()}>Buddhism</a></li>
                        <li><a href="/eschatology" onClick={(e) => e.preventDefault()}>Eschatology</a></li>
                    </ul>
                </section>
            </main>

            <Chatbot 
                isOpen={isChatbotOpen} 
                onClose={() => setIsChatbotOpen(false)}
            />
        </div>
    );
};

export default Content;
