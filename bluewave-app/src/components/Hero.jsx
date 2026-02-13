import React from 'react';
import './Hero.css';
import SplitText from './SplitText';

const Hero = () => {
    return (
        <section className="hero-container">
            {/* Background Layer */}
            <video
                className="hero-video-bg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/videos/ship-hero-poster.jpg"
            >
                <source src="/videos/ship-hero-section-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="hero-overlay"></div>

            {/* Content */}
            <div className="hero-content">
                <div className="hero-headline">
                    <SplitText
                        text="We Don’t Just Audit."
                        className=""
                        delay={50}
                        duration={1.2}
                        ease="power3.out"
                        splitType="words"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-50px"
                    />
                    <br />
                    <SplitText
                        text="We Safeguard Maritime Excellence."
                        className=""
                        delay={50}
                        duration={1.2}
                        ease="power3.out"
                        splitType="words"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-50px"
                    />
                </div>

                <SplitText
                    text="43+ Years of Command Experience in Global Tanker Operations, Safety Leadership, and Regulatory Compliance."
                    className="hero-subheadline"
                    delay={30}
                    duration={1}
                    ease="power2.out"
                    splitType="words"
                    from={{ opacity: 0, y: 20 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-50px"
                />

                <div className="hero-cta-group">
                    <a href="#consultation" className="btn btn-primary">
                        Request Consultation
                    </a>
                    <a href="#services" className="btn btn-secondary">
                        Explore Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
