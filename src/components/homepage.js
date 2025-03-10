import React from "react";
import './homepage.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Homepage() {
    const { text } = useTypewriter({
        words: ['Sirawit Sriprathumwong', 'student at KMUTNB', 'Frontend Developer'],
        loop: true,
    });

    return (
        <section className="text">
            <h1>
                Hi I am
                <span style={{fontWeight : 'bold' , color: '#0088cc'}}>
                    {text}
                </span>
                <span style={{color: '#0088cc'}}>
                    <Cursor />
                </span>
            </h1>
        </section>
    );
}