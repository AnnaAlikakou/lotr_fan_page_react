import React from "react";

function Footer() {
    const footerYear = new Date().getFullYear();
    return (
        <footer>
            <div className="footerMain">
            <p>This is a fan page created for educational purposes</p>
            <p>©{footerYear}</p>
            <p>Created by Anna Maria Alikakou</p>                
            </div>
        </footer>
    );
}

export default Footer;