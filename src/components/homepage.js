import React, { useState, useEffect } from "react";
import "./homepage.css";
import { Link } from "react-scroll";

const words = ["Sirawit Sriprathumwong", "Student at KMUTNB"];

export default function Homepage() {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

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
        <section className="text" id = 'home'>
            <h1>
                Hi, I am{" "}
                <span style={{ fontWeight: "bold", color: "#0088cc" }}>{text}</span>
                <span style={{ color: "#0088cc" }}>|</span>
            </h1>
            <button className="btn"> 
                DOWNLOAD RESUME
            </button>
        </section>
    );
}
