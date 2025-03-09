import React from "react";
import './homepage.css';

export default function Homepage({ scrollToProjects }) {
    return (
        <section className="text">
            <h1>HI I am Sirawit Sriprathumwong</h1>
            <p>I am study at KMUTNB</p>
            <button className="btn" onClick={scrollToProjects}>
                See My Project
            </button>
        </section>
    );
}