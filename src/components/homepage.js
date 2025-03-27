import React, { useState, useEffect, useRef } from "react";
import "./homepage.css";

const words = ["Sirawit Sriprathumwong", "Student at KMUTNB"];

export default function Homepage() {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);

                if (charIndex + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                if (charIndex > 0) {
                    setText(currentWord.slice(0, charIndex - 1));
                    setCharIndex((prev) => prev - 1);
                } else {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex]);

    return (
        <section className="text" id='home'>
            <div className="text-container" data-aos="fade-right" data-aos-duration="1200">
                <h1>
                    Hi, I am{" "}
                    <span style={{ fontWeight: "bold", color: "#0088cc" }}>{text}</span>
                    <span style={{ color: "#0088cc" }}>|</span>
                </h1>
                <div className="text-container2" data-aos="fade-up" data-aos-delay="300">
                    <p className="intro-text">Hello, my name is <span className="highlight">Sirawit Sriprathumwong (Palm).</span></p>  
                    <p className="bio-text">I am currently a second-year student at <span className="highlight">King Mongkut's University of Technology North Bangkok (KMUTNB)</span>, majoring in Electronics and Communication Technology (ECT).</p>  
                    <p className="passion-text">I have a passion for <span className="highlight">coding and website development.</span></p>  
                    <p className="goal-text">I enjoy learning new skills and constantly improving my abilities in web development and programming. 🤖</p>
                </div>
            </div>
        </section>
    );
}
