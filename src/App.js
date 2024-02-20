import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="#about-me">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact Form</a>
      </nav>
      <header className="App-header">
        <h1>Eulises Franco</h1>
        <p>Software Engineer | AI | App Developer</p>
      </header>
      {/* Placeholder sections for navigation */}
      <section id="about-me">
        <br></br>
        <br></br>
        <h2>About Me</h2>
        <p>Hello! I'm Eulises Franco, a dedicated and passionate enthusiast of all things technology. My journey into the tech world was driven by an insatiable curiosity about how technology can transform lives,
          businesses, and societies. This curiosity blossomed into a profound interest in emerging technologies and artificial intelligence, 
          fields where innovation is not just about building smarter solutions but reshaping our understanding of what's possible.
        </p>
        <p>  
          From a young age, I was fascinated by the rapid evolution of technology and its potential to solve complex problems. 
          This fascination guided my academic path and professional aspirations, leading me to delve deeply into computer information systems and software engineering.
          My education has not only provided me with a strong technical foundation but has also ignited my passion for artificial intelligence as a transformative tool.
        </p>
        <p>
          My vision for the future is one where technology continually evolves to meet human needs in more intuitive and impactful ways. 
          I am particularly intrigued by the potential of AI to enhance decision-making, automate processes, and create more immersive and personalized experiences. 
          The opportunity to contribute to this evolution excites me, and I am eager to apply my skills in a setting that challenges the boundaries of what technology can achieve.
        </p>
        <p>
          I am seeking an opportunity to join a big company that values innovation, collaboration, and a forward-thinking mindset. 
          I believe that being part of a development team in such an environment will not only allow me to contribute my skills and passion but also provide me with invaluable experiences and learning opportunities. 
          Working alongside like-minded professionals, I am keen to explore new technologies, develop groundbreaking solutions, and make a significant impact in the field of AI and beyond.
        </p>

        <p>
          Let's connect and explore the possibilities of what we can achieve together in the realm of technology and artificial intelligence.
        </p>
      </section>

      <section id="projects">
        <br></br>
        <br></br>
        <h2>Projects</h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-item">
            <img src={`${process.env.PUBLIC_URL}/Project_Ref/Segmentation_Powerlines.jpg`} alt="Semantic Segmentation of vegetation" />
            <p>Project 1 Description</p>
          </div>
          {/* Project 2 */}
          <div className="project-item">
          <img src={`${process.env.PUBLIC_URL}/Project_Ref/Segmentation_Powerlines2.jpg`} alt="Semantic Segmentation of vegetation" />
            <p>Project 2 Description</p>
          </div>
          <div className="project-item">
            <img src={`${process.env.PUBLIC_URL}/Project_Ref/Segmentation_Powerlines3.jpg`} alt="Semantic Segmentation of vegetation" />
            <p>Project 1 Description</p>
          </div>
          {/* Project 3 */}
          <div className="project-item">
            <video controls width="250">
              <source src={`${process.env.PUBLIC_URL}/Project_Ref/VegetationClassificationApp.mp4`} type="video/mp4" />
              Sorry, your browser does not support embedded videos.
            </video>
            <p>Project 2 Description</p>
          </div>
          {/* Project 4 */}
          <div className="project-item">
            <video controls width="250">
              <source src={`${process.env.PUBLIC_URL}/Project_Ref/Qcar_SelfDriving.mp4`} type="video/mp4" />
              Sorry, your browser does not support embedded videos.
            </video>
            <p>Project 2 Description</p>
          </div>
          {/* Project 5 */}
          <div className="project-item">
            <video controls width="250">
              <source src={`${process.env.PUBLIC_URL}/Project_Ref/Qcar_Overtaking.mp4`} type="video/mp4" />
              Sorry, your browser does not support embedded videos.
            </video>
            <p>Project 2 Description</p>
          </div>
          {/* Project 5 */}
          <div className="project-item">
            <video controls width="250">
              <source src={`${process.env.PUBLIC_URL}/Project_Ref/Qcar_HandControl.mp4`} type="video/mp4" />
              Sorry, your browser does not support embedded videos.
            </video>
            <p>Project 2 Description</p>
          </div>
          

          {/* Add more projects as needed */}
        </div>
        
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill-item">C# (3 years)</div>
          <div className="skill-item">Python (3 years)</div>
          <div className="skill-item">HTML & CSS (3 years)</div>
          <div className="skill-item">SQL (2 years)</div>
          <div className="skill-item">Linux</div>
          <div className="skill-item">Linux Terminal</div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">Flask</div>
          <div className="skill-item">OpenCV</div>
          {/* Add more skills as needed */}
        </div>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <div className="contact-section">
          <div className="contact-details">
            <p>Eulises Franco</p>
            <p>(210) 790-9279</p>
            <p>francoeulises@yahoo.com.co</p>
            <a href="https://www.linkedin.com/in/eulises-franco" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </div>
        </div>      
      </section>
    </div>
  );
}

export default App;
