import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Zap, Camera, Layers } from 'lucide-react';
import Navbar from '../components/Navbar';
import ComparisonSlider from '../components/ComparisonSlider';
import beforeImg from '../assets/before.jpg';
import afterImg from '../assets/after.jpg';
import '../styles/landing.css';

export default function LandingPage() {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };
    // ... (keep middle unchanged)
    // ...
    {/* Comparison Section */ }
    <section className="showcase-section">
        <div className="showcase-container">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ padding: '0 2rem' }}
            >
                <ComparisonSlider
                    beforeImage={beforeImg}
                    afterImage={afterImg}
                />
                <p className="hero-subtitle" style={{ marginTop: '2rem', fontSize: '1rem' }}>
                    Drag the slider to see the magic
                </p>
            </motion.div>
        </div>
    </section>

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
    };

    return (
        <div className="landing-page">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-bg-glow" />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="hero-content"
                    >
                        <motion.h1 variants={itemVariants} className="hero-title">
                            Elevate Your Product <br />
                            <span>Photography with AI</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="hero-subtitle">
                            Transform ordinary product shots into professional, high-converting images in seconds. No studio required.
                        </motion.p>

                        <motion.div variants={itemVariants} className="cta-group">
                            <button className="primary-cta" onClick={() => navigate('/app')}>
                                Start Generating <ArrowRight size={20} />
                            </button>
                            <button className="secondary-cta" onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}>
                                How it Works
                            </button>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Trust Section (Moved Up) */}
                <section className="trust-section">
                    <h3 className="trust-title">TRUSTED BY 10,000+ SELLERS ON</h3>
                    <div className="logos-grid">
                        <div className="logo-item">Shopify</div>
                        <div className="logo-item" style={{ opacity: 0.8 }}>Amazon</div>
                        <div className="logo-item">Etsy</div>
                        <div className="logo-item">WooCommerce</div>
                        <div className="logo-item">Wix</div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="showcase-section">
                    <div className="showcase-container">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            style={{ padding: '0 2rem' }}
                        >
                            <ComparisonSlider
                                beforeImage={beforeImg}
                                afterImage={afterImg}
                            />
                            <p className="hero-subtitle" style={{ marginTop: '2rem', marginBottom: '0', fontSize: '1rem', marginLeft: 'auto', marginRight: 'auto' }}>
                                Drag the slider to see the magic
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section id="how-it-works" className="steps-section">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        How It Works
                    </motion.h2>
                    <motion.div
                        className="steps-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.2 } }
                        }}
                    >
                        <StepCard number="01" title="Upload" desc="Upload your raw product photo. Our AI accepts all standard formats." />
                        <StepCard number="02" title="Process" desc="Sit back while our AI works its magic. It only takes a few seconds to deliver studio quality." />
                        <StepCard number="03" title="Sell" desc="Download your 4K studio-quality image and boost your conversion rates." />
                    </motion.div>
                </section>

                {/* Features Section */}
                <section id="features" className="features-section">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                        className="grid"
                    >
                        <FeatureCard
                            icon={<Zap />}
                            title="Instant Results"
                            desc="Get studio-quality photos in seconds, not days. Our AI processes your images lightning fast."
                        />
                        <FeatureCard
                            icon={<Camera />}
                            title="High Definition"
                            desc="Crystal clear 4K resolution output suitable for any e-commerce platform or print media."
                        />
                        <FeatureCard
                            icon={<Layers />}
                            title="Endless Variations"
                            desc="Generate multiple backgrounds and settings from a single product photo automatically."
                        />
                    </motion.div>
                </section>

                <section className="hero-section" style={{ minHeight: '60vh' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Ready to transform your workflow?</h2>
                        <br />
                        <button className="primary-cta" onClick={() => navigate('/app')} style={{ margin: '0 auto' }}>
                            Try AI Shooter Now
                        </button>
                    </motion.div>
                </section>
            </main>

            <footer className="landing-footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2>AI Shooter</h2>
                        <p style={{ color: '#94a3b8' }}>Professional product photography for everyone.</p>
                    </div>
                    <div className="footer-links">
                        <h3>Product</h3>
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">API</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; 2025 AI Shooter. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <motion.div
            className="feature-card"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
        >
            <div className="feature-icon">{icon}</div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-desc">{desc}</p>
        </motion.div>
    );
}

function StepCard({ number, title, desc }) {
    return (
        <motion.div
            className="step-card"
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
            }}
        >
            <div className="step-number">{number}</div>
            <div className="step-content">
                <h3 className="step-title">{title}</h3>
                <p className="feature-desc" style={{ fontSize: '1.1rem' }}>{desc}</p>
            </div>
        </motion.div>
    )
}
