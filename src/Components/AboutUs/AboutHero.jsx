import React from 'react';
import './AboutHero.css';
import ecellLogo from '../../assets/ecelllogostraight.svg';
import tri1 from '../../assets/tri1.svg';
import tri2 from '../../assets/tri2.svg';
import tri3 from '../../assets/tri3.svg';
const AboutHero = () => {
        return (
                <section className="about-hero">
                        <div className="Mesh1" />
                        <div className="Mesh2" />
                        <div className="Mesh3" />
                        <div className="Mesh4" />
                        <div className="Mesh5" />
                        <div className="Mesh6" />
                        <div className="Mesh7" />
                        <div className="Mesh8" />
                        <div className="Mesh9" />
                        <div className="Mesh10" />
                        <div className="Mesh11" />
                        <div className="Mesh12" />
                        <div className="Mesh13" />
                        <div className="Mesh14" />
                        <div className="Mesh15" />
                        <div className="Mesh16" />
                        <div className="triangles">
                                <img src={tri1} alt="Triangle 1" className="tri1" />
                                <img src={tri2} alt="Triangle 2" className="tri2" />
                                <img src={tri3} alt="Triangle 3" className="tri3" />
                        </div> {/* Hero Content */}
                        <div className="about-content">
                                <div className="text-section">
                                        <div className="maintext" style={{ width: '100%', justifyContent: 'flex-end', display: 'flex', flexDirection: 'column', color: '#ECEAF4', fontSize: 92, textTransform: 'uppercase', wordWrap: 'break-word' }}>ABOUT US</div>
                                        <div className="subtext" style={{ width: '100%', height: '100%', color: 'rgba(236, 234, 244, 0.80)', fontSize: 20, fontWeight: '400', wordWrap: 'break-word' }}>A Tribe of Doers, Thinkers, and Change makers.</div> </div>
                                <div className="card-stack">
                                        <div className='card1'>
                                                <img src={ecellLogo} alt="E-Cell Logo" />
                                        </div>
                                        <div className='card2'>
                                                <img src={ecellLogo} alt="E-Cell Logo" />
                                        </div>
                                        <div className='card3'>
                                                <img src={ecellLogo} alt="E-Cell Logo" />
                                        </div>
                                </div>
                        </div>
                </section>
        );
}; export default AboutHero;