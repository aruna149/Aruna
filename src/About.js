// import React from "react";
// const About = () => <div><h2>About Us Page</h2></div>;
// export default About;
import React from 'react';
import { motion } from 'framer-motion';
import {
    BrainCircuit,
    Users,
    Zap,
    Rocket,
    BookOpen,
    Briefcase,
    Compass,
    Lightbulb,
} from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <style>{`
                .about-us-container {
                    margin: 0;
                    padding: 0;
                    font-family: 'Segoe UI', sans-serif;
                    color: #333;
                    background-color: #f9f2ff;
                }

                .banner {
                    height: 300px; /* Decreased height */
                    background-image: url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    color: white;
                    text-align: center;
                    width: 100%; /* Increased width */
                }

                .banner::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background-color: rgba(0, 0, 0, 0.6);
                }

                .banner-heading {
                    position: relative;
                    z-index: 1;
                    font-size: 2.5rem; /* Slightly decreased font-size */
                    font-weight: bold;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
                }

                .intro-section {
                    padding: 3rem 2rem; /* Decreased vertical padding */
                    text-align: center;
                    max-width: 1400px; /* Increased max-width */
                    margin: 0 auto;
                    width: 100%; /* Ensure full width */
                    box-sizing: border-box; /* Include padding in width */
                }

                .intro-section h2 {
                    color: #111827;
                    font-size: 2rem; /* Decreased font-size */
                    margin-bottom: 1rem; /* Decreased margin-bottom */
                    font-weight: 700;
                }

                .intro-section p {
                    font-size: 1.1rem;
                    color: #555;
                    line-height: 1.6; /* Slightly decreased line-height */
                    margin-bottom: 1.5rem; /* Decreased margin-bottom */
                }

                .history-section {
                    background-color: #111827;
                    padding: 3rem 2rem; /* Decreased vertical padding */
                    text-align: center;
                    max-width: 1400px; /* Increased max-width */
                    margin: 0 auto;
                    width: 100%; /* Ensure full width */
                    box-sizing: border-box; /* Include padding in width */
                }

                .history-section h2 {
                    color: #4b00b3;
                    font-size: 2rem; /* Decreased font-size */
                    margin-bottom: 1rem; /* Decreased margin-bottom */
                    font-weight: 700;
                }

                .history-section p {
                    font-size: 1.1rem;
                    color: #555;
                    line-height: 1.6; /* Slightly decreased line-height */
                    margin-bottom: 1.5rem; /* Decreased margin-bottom */
                }

                .history-timeline {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 2rem; /* Decreased margin-top */
                    width: 100%;
                    box-sizing: border-box;
                    padding: 0 1rem;
                }

                .timeline-item {
                    margin-bottom: 1.5rem; /* Decreased margin-bottom */
                    padding: 1.5rem;
                    border-radius: 1rem;
                    background-color: white;
                    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
                    width: 95%; /* Increased width */
                    max-width: 600px; /* Increased max-width */
                    text-align: left;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    box-sizing: border-box;
                }

                .timeline-item:hover {
                    transform: translateY(-0.5rem);
                    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
                }

                .timeline-item h3 {
                    color: #4b00b3;
                    font-size: 1.25rem; /* Decreased font-size */
                    margin-bottom: 0.5rem; /* Decreased margin-bottom */
                    font-weight: 600;
                }

                .timeline-item p {
                    font-size: 1rem;
                    color: #555;
                    line-height: 1.6; /* Slightly decreased line-height */
                }

                .team-section {
                    padding: 3rem 2rem; /* Decreased vertical padding */
                    text-align: center;
                    background-color: #f9f2ff;
                    max-width: 1400px; /* Increased max-width */
                    margin: 0 auto;
                    width: 100%; /* Ensure full width */
                    box-sizing: border-box; /* Include padding in width */
                }

                .team-section h2 {
                    color: #4b00b3;
                    font-size: 2rem; /* Decreased font-size */
                    margin-bottom: 1rem; /* Decreased margin-bottom */
                    font-weight: 700;
                }

                .team-section p {
                    font-size: 1.1rem;
                    color: #555;
                    line-height: 1.6; /* Slightly decreased line-height */
                    margin-bottom: 1.5rem; /* Decreased margin-bottom */
                }

                .team-cards {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 1.5rem; /* Decreased gap */
                    margin-top: 1.5rem; /* Decreased margin-top */
                    width: 100%;
                    box-sizing: border-box;
                    padding: 0 1rem;
                }

                .team-card {
                    background-color: white;
                    padding: 1.5rem; /* Decreased padding */
                    border-radius: 1rem;
                    width: 95%;
                    max-width: 400px; /* Increased max-width */
                    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    box-sizing: border-box;
                    margin-bottom: 1rem;
                }

                .team-card:hover {
                    transform: translateY(-0.5rem);
                    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
                }

                .team-card img {
                    width: 120px; /* Decreased width */
                    height: 120px; /* Decreased height */
                    border-radius: 50%;
                    object-fit: cover;
                    margin-bottom: 1rem; /* Decreased margin-bottom */
                    border: 0.25rem solid #4b00b3;
                }

                .team-card h3 {
                    color: #4b00b3;
                    font-size: 1.25rem; /* Decreased font-size */
                    margin-bottom: 0.5rem; /* Decreased margin-bottom */
                    font-weight: 600;
                }

                .team-card p {
                    font-size: 1rem;
                    color: #555;
                    line-height: 1.6; /* Slightly decreased line-height */
                }

                .culture-section {
                    background-image: linear-gradient(to bottom right, #800080, #00008b);
                    color: white;
                    padding: 3rem 2rem; /* Decreased vertical padding */
                    text-align: center;
                    border-radius: 1rem;
                    margin-top: 1.5rem; /* Decreased margin-top */
                    max-width: 1400px; /* Increased max-width */
                    margin: 0 auto;
                    width: 100%; /* Ensure full width */
                    box-sizing: border-box; /* Include padding in width */
                }

                .culture-section h2 {
                    font-size: 2rem; /* Decreased font-size */
                    font-weight: bold;
                    margin-bottom: 1rem; /* Decreased margin-bottom */
                    background-clip: text;
                    -webkit-background-clip: text;
                    color: transparent;
                    background-image: linear-gradient(to right, #a855f7, #f472b6);
                }

                .culture-section p {
                    font-size: 1.1rem;
                    color: #d1d5db;
                    line-height: 1.6; /* Slightly decreased line-height */
                    margin-bottom: 1.5rem; /* Decreased margin-bottom */
                }

                .culture-values {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 1.5rem; /* Decreased gap */
                    margin-top: 1.5rem; /* Decreased margin-top */
                    width: 100%;
                    box-sizing: border-box;
                    padding: 0 1rem;
                }

                .culture-value {
                    background-color: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(1rem);
                    border-radius: 1rem;
                    padding: 1.5rem; /* Decreased padding */
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
                    width: 95%; /* Increased width */
                    max-width: 400px; /* Increased max-width */
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    text-align: left;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    box-sizing: border-box;
                    margin-bottom: 1rem;
                }

                .culture-value:hover {
                    transform: translateY(-0.5rem);
                    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
                }

                .culture-value-icon {
                    width: 2.5rem; /* Decreased width */
                    height: 2.5rem; /* Decreased height */
                    margin-bottom: 0.75rem; /* Decreased margin-bottom */
                    color: #a855f7;
                }

                .culture-value h3 {
                    font-size: 1.25rem; /* Decreased font-size */
                    font-weight: 600;
                    margin-bottom: 0.5rem; /* Decreased margin-bottom */
                    color: white;
                }

                .culture-value p {
                    color: #d1d5db;
                    font-size: 1rem;
                    line-height: 1.6; /* Slightly decreased line-height */
                    flex-grow: 1;
                }

                @media (max-width: 768px) {
                    .banner-heading {
                        font-size: 2rem; /* Further decreased font-size for small screens */
                    }

                    .intro-section h2,
                    .history-section h2,
                    .team-section h2,
                    .culture-section h2 {
                        font-size: 1.75rem; /* Further decreased font-size for small screens */
                    }

                    .timeline-item {
                        width: 100%;
                        max-width: 100%;
                        padding: 1rem;
                    }
                    .team-card{
                       width: 100%;
                       max-width: 100%;
                       padding: 1rem;
                    }
                    .culture-value{
                        width: 100%;
                        max-width: 100%;
                        padding: 1rem;
                    }
                }
            `}</style>

            {/* Banner Section */}
            <section className="banner">
                <h1 className="banner-heading">About Us</h1>
            </section>

            {/* Introduction Section */}
            <section className="intro-section">
                <h2>Welcome to Deepbrik</h2>
                <p>
                    At Deepbrik, we are more than just a technology company; we are a collective of passionate
                    innovators, dreamers, and problem-solvers dedicated to shaping the future through cutting-edge
                    solutions. With a rich history rooted in creativity and a relentless pursuit of excellence,
                    we have evolved into a dynamic force in the tech industry. Our journey is defined by a commitment
                    to pushing boundaries, embracing challenges, and delivering solutions that empower businesses
                    and enrich lives.
                </p>
            </section>

            {/* History Section */}
            <section className="history-section">
                <h2>Our History</h2>
                <p>
                    Praman Tech was founded on the principles of innovation, integrity, and a deep-seated passion
                    for technology. From our humble beginnings, we have grown exponentially, driven by a vision to
                    redefine the digital landscape. Over the years, we have achieved significant milestones,
                    expanded our expertise, and built lasting partnerships with clients around the globe. Our
                    history is a testament to our resilience, adaptability, and unwavering commitment to delivering
                    excellence.
                </p>
                <div className="history-timeline">
                    <div className="timeline-item">
                        <h3>2010 - Founding</h3>
                        <p>
                            Praman Tech is founded by a group of tech enthusiasts with a vision to revolutionize
                            the industry.
                        </p>
                    </div>
                    <div className="timeline-item">
                        <h3>2015 - Expansion</h3>
                        <p>Expanded our services and client base, establishing ourselves as a key player in the market.</p>
                    </div>
                    <div className="timeline-item">
                        <h3>2020 - Innovation</h3>
                        <p>
                            Launched several innovative products and solutions, garnering industry recognition and
                            awards.
                        </p>
                    </div>
                    <div className="timeline-item">
                        <h3>2023 - Global Reach</h3>
                        <p>
                            Expanded our operations globally, serving clients across diverse sectors and geographies.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="team-section">
                <h2>Our Team</h2>
                <p>
                    Behind every successful project at Praman Tech is a team of dedicated and talented individuals.
                    Our team comprises experts from diverse backgrounds, including software development, AI, design,
                    and business strategy. We foster a culture of collaboration, creativity, and continuous learning,
                    empowering our team members to thrive and excel. Together, we work tirelessly to deliver
                    solutions that exceed expectations and drive meaningful results for our clients.
                </p>
                <div className="team-cards">
                    <div className="team-card">
                        <img
                            src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Team Member 1"
                        />
                        <h3>John Smith</h3>
                        <p>CEO</p>
                    </div>
                    <div className="team-card">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Team Member 2"
                        />
                        <h3>Emily Brown</h3>
                        <p>CTO</p>
                    </div>
                    <div className="team-card">
                        <img
                            src="https://images.unsplash.com/photo-1534528799632-0884e3210765?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Team Member 3"
                        />
                        <h3>Michael Davis</h3>
                        <p>COO</p>
                    </div>
                </div>
            </section>

            {/* Our Culture Section */}
            <section className="culture-section">
                <h2>Our Culture</h2>
                <p>
                    At Praman Tech, we believe that our people are our greatest asset. We have cultivated a culture
                    that celebrates diversity, fosters innovation, and promotes collaboration. Our core values
                    shape everything we do, driving us to pursue excellence, act with integrity, and make a positive
                    impact on the world.
                </p>
                <div className="culture-values">
                    <div className="culture-value">
                        <BrainCircuit className="culture-value-icon" />
                        <h3>Innovation</h3>
                        <p>We embrace creativity and are always looking for new and better ways to do things.</p>
                    </div>
                    <div className="culture-value">
                        <Users className="culture-value-icon" />
                        <h3>Collaboration</h3>
                        <p>We believe in the power of teamwork and working together to achieve common goals.</p>
                    </div>
                    <div className="culture-value">
                        <Zap className="culture-value-icon" />
                        <h3>Integrity</h3>
                        <p>We act with honesty, transparency, and ethical conduct in all our interactions.</p>
                    </div>
                    <div className="culture-value">
                        <Rocket className="culture-value-icon" />
                        <h3>Excellence</h3>
                        <p>We strive for the highest standards of quality and performance in everything we do.</p>
                    </div>
                    <div className="culture-value">
                        <BookOpen className="culture-value-icon"/>
                        <h3>Learning</h3>
                        <p>We are committed to continuous learning and growth, both individually and as an organization.</p>
                    </div>
                    <div className="culture-value">
                        <Briefcase className="culture-value-icon" />
                        <h3>Ownership</h3>
                        <p>We take pride in our work and are accountable for our results.</p>
                    </div>
                    <div className="culture-value">
                        <Compass className="culture-value-icon" />
                        <h3>Customer Focus</h3>
                        <p>We are dedicated to understanding and meeting the needs of our customers.</p>
                    </div>
                    <div className="culture-value">
                       <Lightbulb className="culture-value-icon" />
                        <h3>Passion</h3>
                        <p>We are passionate about technology and its potential to change the world.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;



