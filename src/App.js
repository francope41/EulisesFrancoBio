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
      <div className='main-content'>
        
        {/* Placeholder sections for navigation */}
        <section id="about-me">
          <br></br>
          <br></br>
          <h2 className='Subtitle'>About Me</h2>
          
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
          <h1 className='ProjectHeading'>Projects</h1>
            {/* Project 1 */}
            <div className="project-item">
              <h3 className='ProjectTitle'>Object Segmentation for Power Line Inspection</h3>
              <div className="content">
                  <div className="text">
                      <p>
                        The objective of this project was to develop a sophisticated segmentation model capable of identifying vegetation encroachment around power lines. 
                        As demonstrated in the first image, the model successfully categorizes vegetation into three distinct classes. The color green signifies "Clear_Vg," 
                        indicating areas where vegetation is clear of the power lines. Yellow, labeled as "Unsafe_Vg," marks vegetation that is near power lines and needs to be addressed soon. 
                        Lastly, red, designated as "Danger_Vg," highlights vegetation that poses an immediate threat due to its proximity to the power lines and requires urgent attention.
                        <br></br>
                        <br></br>
                        In the second and third images, we showcase an alternate application of the model that detects various components of power lines, including the power lines themselves, 
                        insulators, cross arms, transformers, and power poles, alongside a general detection of vegetation. I spearheaded the labeling process, designed the model architecture, 
                        and managed its deployment on both manned and unmanned drones.
                      </p>
                  </div>
                  <div className="images">
                      <img src={`${process.env.PUBLIC_URL}/Project_Ref/Segmentation_Powerlines.jpg`} alt="Semantic Segmentation of vegetation" />
                      <img src={`${process.env.PUBLIC_URL}/Project_Ref/Segmentation_Powerlines2.jpg`} alt="Semantic Segmentation of vegetation" />
                      <img src={`${process.env.PUBLIC_URL}/Project_Ref/Segmentation_Powerlines3.jpg`} alt="Semantic Segmentation of vegetation" className='centered' />
                  </div>
              </div>
          </div>
          {/* Project 2 */}
          <div className="project-item">
              <h3 className='ProjectTitle'>Image Classification for Vegetation</h3>
              <div className="content">
                  <div className="text">
                      <p>
                        For this project, an Android app was developed using Android Studio and the Kotlin programming language, aimed at classifying types of trees and bushes 
                        into categories such as canopy or understory. I spearheaded the development of the model architecture, choosing to implement a straightforward Convolutional Neural
                        Network (CNN) for its efficacy in image recognition tasks.
                        <br></br>
                        <br></br>
                        The training data for the model was meticulously compiled from publicly available datasets, which my team and I carefully labeled to ensure accuracy and reliability.
                        This foundational work underscored the robustness of our AI model.
                        <br></br>
                        <br></br>
                        In practice, as demonstrated in the accompanying video, the app offers dual functionality: users can either upload images from their device's storage or utilize the 
                        camera in real time to capture new photos for classification. Once an image is processed, the model not only categorizes it as either canopy or understory but also 
                        indicates the specific class of the tree or bush. Importantly, it provides a confidence score for each classification, offering users insight into the model's reliability 
                        for each result.
                        <br></br>
                        <br></br>
                        This project highlights my capabilities in AI model design, data preparation, and application development within a real-world context, showcasing how machine learning 
                        can be effectively integrated into mobile technology.
                      </p>
                  </div>
                  <div className="images">
                    <img src={`${process.env.PUBLIC_URL}/Project_Ref/VegetationClassificationApp.gif`} alt="App for vegetation classification" className='centered'/>
                  </div>
              </div>
          </div>

            {/* Project 3 */}
            <div className="project-item">
            <h3 className='ProjectTitle'>Autonomous Driving</h3>
            <div className="content">
                  <div className="text">
                    <p>
                      This project was dedicated to advancing autonomous driving technologies by developing multiple control systems for the 
                      Quanser Vehicle (<a href="https://www.quanser.com/products/qcar/">Qcar</a>). The vehicle, equipped with a LIDAR 
                      system and a 360-degree camera, provided comprehensive environmental feedback essential for navigation without human intervention.
                      <br></br>
                      <br></br>
                      We utilized a Proportional-Integral-Derivative (PID) controller, leveraging the 360-degree camera to extract critical environmental data. This information facilitated the 
                      calculation of deviations or errors, which were then fed into the controller. The PID system effectively kept the vehicle within its lane by adjusting its steering based on the calculated errors.
                      <br></br>
                      <br></br>
                      Further enhancements included the integration of object detection algorithms that identified pedestrians, animals, other vehicles, and traffic signs. 
                      This enabled the Qcar to adhere to driving regulations autonomously, allowing for safe operations like stopping and collision avoidance when necessary.
                      <br></br>
                      <br></br>
                      The second video demonstrates our preliminary work on an overtaking control system. Although this feature was not fully completed due to time constraints, 
                      significant progress was made in enabling the vehicle to safely overtake other objects on the road.
                    </p>
                </div>
                <div className="images">
                  <img src={`${process.env.PUBLIC_URL}/Project_Ref/Qcar_SelfDriving.gif`} alt="Self Driving Qcar" className='centered'/>
                  <img src={`${process.env.PUBLIC_URL}/Project_Ref/Qcar_Overtaking.gif`} alt="Qcar overtaking" className='centered'/>
                </div>
            </div>
            </div>

            {/* Project 4 */}
            <div className="project-item">
              <h3 className='ProjectTitle'>Hand Gesture Controller</h3>
              <div className="content">
                  <div className="text">
                    <p>
                      This project was centered on developing an innovative remote controller utilizing hand gesture detection technology. By employing the MediaPipe Hand Landmarker from Google,
                      we successfully tracked key points on the hands to create a comprehensive dataset. This dataset defined how various hand signs corresponded to the detected points.
                      <br></br>
                      <br></br>
                      Utilizing a simple Convolutional Neural Network (CNN) structure, we trained the model on this dataset to accurately recognize the hand signs being displayed. 
                      These recognized signs were then converted into commands for operating the Qcar.
                      <br></br>
                      <br></br>
                      As demonstrated in the accompanying video, we achieved seamless control of the vehicle using just hand gestures, showcasing the effectiveness of integrating 
                      advanced gesture recognition technology with real-time vehicle control.
                    </p>
                  </div>
                  <div className="images">
                  <img src={`${process.env.PUBLIC_URL}/Project_Ref/Qcar_HandControl.gif`} alt="Hand gesture controller video" className='centered'/>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="project-item">
              <h3 className='ProjectTitle'>Swarm Algorithm Deployment</h3>
              <div className="content">
                  <div className="text">
                    <p>
                    This project focused on the development and deployment of sophisticated swarm algorithms tailored for formation movement, 
                    obstacle avoidance, and search and secure operations. Utilizing Elisa-3 robots, I spearheaded the deployment of a swarm that could dynamically form letters. 
                    The formation adapted based on the number of robots available, automatically adjusting the points of each letter to accommodate all units involved.
                    <br></br>
                    <br></br>
                    To optimize the robots' path to formation, each robot calculated and moved towards the nearest designated point from its starting location. 
                    This process was governed by a dual repulsion and attraction algorithm—robots were drawn towards their end goals while simultaneously repelling from one another. 
                    This dual-force approach ensured that the robots navigated smoothly and efficiently, achieving the desired formations without any collisions.
                    </p>
                  </div>
                  <div className="images">
                      <img src={`${process.env.PUBLIC_URL}/Project_Ref/April_tag_Detection.png`} alt="April tag detection" />
                      <img src={`${process.env.PUBLIC_URL}/Project_Ref/UTSA_Formation.png`} alt="UTSA Formation" />
                  </div>
              </div>
            </div>

        </section>

        <section id="skills">
          <h2 className='Subtitle'>Skills</h2>
          <div className="skills-list">
            <div className="skill-item">Bilingual English Spanish-Native</div>
            <div className="skill-item">Github</div>
            <div className="skill-item">Systems Administration</div>
            <div className="skill-item">Advanced Troubleshooting Skills</div>
            <div className="skill-item">Collaborative Working</div>
            <div className="skill-item">Continuous Learning</div>
            <div className="skill-item">C# (4 years)</div>
            <div className="skill-item">Python (4 years)</div>
            <div className="skill-item">HTML & CSS (4 years)</div>
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
          <h2 className='Subtitle'>Contact</h2>
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
    </div>
  );
}

export default App;
