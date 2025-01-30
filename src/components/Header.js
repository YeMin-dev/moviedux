import React from "react";
import '../styles.css';

export default function Header() {
    return (
        <div className="header">
             <img className="logo" src="logo.png" alt="moviedux"/>
             <h2 className="sub-title">It's time for popcorn! Let's find your next movie here.</h2>
        </div>
    );
}