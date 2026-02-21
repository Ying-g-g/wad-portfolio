"use client";
import {useEffect, useRef, useState} from "react";

export default function Home() {
    //typing animation
  useEffect(() => {
    const fullText = "Chloe Tan You Tian";
    let currentIndex = 0;

    function type() {
      const typingTextElement = document.getElementById("typing-text");
      if (typingTextElement) {
        typingTextElement.textContent = fullText.slice(0, currentIndex);
        currentIndex++;
        if (currentIndex <= fullText.length) {
          setTimeout(type, 150);
        }
      }
    }

    type();
  }, []);

  //toggle project details
  const [visibleProject, setVisibleProject] = useState<{[key: string]: boolean}>({});
  function projectToggle(projectId: string) {
    setVisibleProject((prev) => ({...prev, [projectId]: true}));
  };

  return (
    <>
        <section id="home">
            <nav>
                <ul>
                    <li>
                      <a href="#home"
                      onClick={(e) => {e.preventDefault();
                        document.querySelector("#home")?.scrollIntoView({behavior: "smooth"});
                      }}>Home</a></li>
                    <li>
                      <a href="#about"
                      onClick={(e) => {e.preventDefault();
                        document.querySelector("#about")?.scrollIntoView({behavior: "smooth"});
                      }}>About me</a></li>
                    <li>
                      <a href="#project"
                      onClick={(e) => {e.preventDefault();
                        document.querySelector("#project")?.scrollIntoView({behavior: "smooth"});
                      }}>Project</a></li>
                    <li>
                      <a href="#contact"
                      onClick={(e) => {e.preventDefault();
                        document.querySelector("#contact")?.scrollIntoView({behavior: "smooth"});
                      }}>Contact</a></li>
                </ul>
            </nav>
            <div className="home-wrapper">
                <div className="home-image-left">
                    <img src="/profile.jpg" alt="Profile image"/>
                </div>

                <div className="home-right-wrapper">
                    <div className="home-text-right-top">
                        <h1>Hi, I'm</h1>
                        <h2 id="typing-text">Chloe Tan You Tian</h2>
                        <h3>Welcome to my portfolio website!</h3>
                    </div>

                    <div className="home-button-right-btm">
                        <button onClick={()=>document.querySelector("#about")?.scrollIntoView({behavior: "smooth"})}>About me</button>
                        <button onClick={()=>document.querySelector("#project")?.scrollIntoView({behavior: "smooth"})}>My project</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="about">
            <div className="about-wrapper">
                <div className="about-text-left">
                    <h2>Hello there!</h2>
                    <p>I am a Year 3 Multimedia Computing student at Universiti Malaysia Sarawak (UNIMAS), 
                        passionate about combining functional code with exceptional user experience.</p>
                    <br/>
                    <p>With a foundation in Java Programming and HCI, 
                        I focus on user-centric design and UI/UX principles. 
                        I am expanding my skills in Computer Game Design, Web, 
                        and Mobile App Development, aiming to transform 
                        complex technical requirements into intuitive, engaging, 
                        and interactive digital solutions.</p>
                </div>

                <div className="about-image-right">
                    <img src="/decoration.gif" alt="Decoration image"/>
                </div>
            </div>
        </section>

        <section id="project">
            <h2>My Project Gallery</h2>
            <div className="project-horizontal-wrapper">
                <div className="project-wrapper">
                <div className="project-top">
                    <img src="/project-uiux.jpg" alt="UIUX Project Image"/>
                </div>
                <div className="project-bottom">
                    <div className="project-bottom-text">
                        <h3>Kuching ART App Prototype Design</h3>
                        <p>Design a digital prototype of Kuching ART mobile app using Figma.</p>
                    </div>

                    <div className="project-bottom-extra-text">
                        <div style={{display: visibleProject["p1-details"] ? "block" : "none"}} id="p1-details">
                            <p>Year: 2024 - 2025</p>
                            <p>Group project</p>
                        </div>
                    </div>

                    <div className="project-bottom-btn">
                        <button onClick={()=>projectToggle("p1-details")}>View project details</button>
                    </div>
                </div>
            </div>

            <div className="project-wrapper">
                <div className="project-top">
                    <img src="/project-mad.jpg" alt="Mobile Application Development Project Image"/>
                </div>
                <div className="project-bottom">
                    <div className="project-bottom-text">
                        <h3>Herb Info Mobile Application Development</h3>
                        <p>Develop a mobile app of herb's information using Android Studio.</p>
                    </div>
                      
                    <div className="project-bottom-extra-text">
                        <div id="p2-details" style={{"display": visibleProject["p2-details"] ? "block" : "none"}}>
                            <p>Year: 2025</p>
                            <p>Individual project</p>
                        </div>
                    </div>

                    <div className="project-bottom-btn">
                        <button onClick={()=>projectToggle("p2-details")}>View project details</button>
                    </div>
                </div>
            </div>

            <div className="project-wrapper">
                <div className="project-top">
                    <img src="/project-db.jpg" alt="Database Cooncept and Design Image"/>
                </div>
                <div className="project-bottom">
                    <div className="project-bottom-text">
                        <h3>Car Rental System Database Application</h3>
                        <p>Create a simple database application for the ZoomRentals company.</p>
                    </div>

                    <div className="project-bottom-extra-text">
                        <div id="p3-details" style={{"display": visibleProject["p3-details"] ? "block" : "none"}}>
                            <p>Year: 2025</p>
                            <p>Group project</p>
                        </div>
                    </div>

                    <div className="project-bottom-btn">
                        <button onClick={()=>projectToggle("p3-details")}>View project details</button>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <section id="contact">
            <div className="contact-wrapper">
                <div className="contact-left">
                    <img src="/deco2.gif" alt="Contact decoration image"/>
                </div>

                <div className="contact-right">
                    <h2>Get <span className="special-text">in touch</span></h2>
                    <div className="contact-text">
                        <p className="bold-text">Email:</p>
                        <a href="mailto:98491@siswa.unimas.my">98491@siswa.unimas.my</a>
                        <br/>
                        <p className="bold-text">Contact number:</p>
                        <p>016-9762549</p>
                    </div>
                </div>
            </div>
        </section>

        <footer id="footer">
            <p>Website developed by Tay Yao Yee</p>
        </footer>
    
        <script src="script.js"></script>
    </>
  );
}
