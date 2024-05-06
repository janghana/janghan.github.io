import React from 'react';
import '../App.css'; // Adjust the path as necessary
import picture1 from './han.jpeg'

function Home() {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ flex: '1' }}> {/* Left side content */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '50px' }}>
        <img src={picture1} width = '200px'/>
          <h2 style={{ marginBottom: '0.5em' }}>Han Jang</h2>
          <p style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
            Undergraduate Research Student
          </p>
          <p style={{ textAlign: 'center', margin: '0 0 20px 0', fontWeight: 'normal' }}>
            Computer Vision, Medical Imaging
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', fontSize: '12px' }}>
            <p style={{ margin: '5px 0' }}><i className="fas fa-map-marker-alt"></i> &nbsp; Daejeon, Republic of Korea</p>
            <p style={{ margin: '5px 0' }}><i className="fab fa-github"></i> &nbsp;<a href="https://github.com/janghana" target="_blank" rel="noopener noreferrer" className="advisor-link">GitHub</a></p>
            <p style={{ margin: '5px 0' }}><i className="fas fa-graduation-cap"></i> <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="advisor-link">Google Scholar</a></p>
          </div>
        </div>
      </div>
      <div style={{ flex: '2' }}> {/* Middle content */}
        <h2>About Me</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }}></hr> {/* Lighter and more transparent HR */}
        <p>I'm an undergraduate research student with a profound interest in Human Research. I am studying Computer Science and Artificial Intelligence at the undergraduate level, and recently, my primary research focus has been on Computer Vision and Probabilistic Generative Modeling, Medical Imaging, Bioinformatics. Through my research, I aim to benefit humanity. In the future, I aspire to pursue graduate studies and engage in research that provides tangible assistance to people.</p>
        <br/>
        <h2>Research Interest</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }}></hr> {/* Lighter and more transparent HR */}
          <ul>
            <li><strong>Machine Learning</strong></li><br/>
            <li><strong>Computer Vision</strong></li><br/>
            <li><strong>Medical Imaging</strong></li>
            </ul>
        <br/>
        <h2>Experience</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }}></hr> {/* Lighter and more transparent HR */}
          <div className="timeline">
          {/* NanoCellect Biomedical */}
          <div className="timeline-item">
            {/* <div className="timeline-icon"></div> */}
            <div className="timeline-content">
              <h3>NanoCellect Biomedical</h3>
              <p><strong>Machine Learning Engineer</strong>, April 2024 - Present</p>
              <p>Research Focus: Cell Image Analysis, Cell Classification</p>
            </div>
          </div>
          {/* Seoul National University Hospital */}
          <div className="timeline-item">
            {/* <div className="timeline-icon"></div> */}
            <div className="timeline-content">
              {/* <h3>Seoul National University Hospital</h3>
              <p><strong>Undergraduate Research Student</strong>, Jun. 2024 - Present</p>
              <p>Research Focus: Computer Vision, Medical Imaging</p> */}
              {/* <p>Advised by Professor <a href="https://aai.seoultech.ac.kr/department/prof/?togo=list&menu=76089&profidx=02685" target="_blank" rel="noopener noreferrer" className="advisor-link">Ki Hwan Choi</a></p> */}
            </div>
          </div>

          {/* Seoul National University of Science and Technology */}
          <div className="timeline-item">
            {/* <div className="timeline-icon"></div> */}
            <div className="timeline-content">
              <h3>Seoul National University of Science and Technology (SEOULTECH)</h3>
              <p><strong>Undergraduate Research Student</strong>, Dec. 2023 - Present</p>
              <p>Research Focus: Computer Vision, Medical Imaging, Probabilistic Generative Modeling(CT, MRI)</p>
              <p>Advised by Professor <a href="https://aai.seoultech.ac.kr/department/prof/?togo=list&menu=76089&profidx=02685" target="_blank" rel="noopener noreferrer" className="advisor-link">Ki Hwan Choi</a></p>
            </div>
          </div>
          {/* Korea Institute of Science and Technology */}
          <div className="timeline-item">
            {/* <div className="timeline-icon"></div> */}
            <div className="timeline-content">
              <h3>Korea Institute of Science and Technology (KIST)</h3>
              <p><strong>Research Intern</strong>, Jun. 2023 - Dec. 2023</p>
              <p>Research Focus: Computer Vision, Medical Imaging, 3D Segmentation(CT), 3D Classification(MRI)</p>
              <p>Advised by Professor <a href="https://aai.seoultech.ac.kr/department/prof/?togo=list&menu=76089&profidx=02685" target="_blank" rel="noopener noreferrer" className="advisor-link">Ki Hwan Choi</a></p>
            </div>
          </div>

          {/* Institute for Basic Science */}
          <div className="timeline-item">
            {/* <div className="timeline-icon"></div> */}
            <div className="timeline-content">
              <h3>Institute for Basic Science (IBS)</h3>
              <p><strong>Undergraduate Research Student</strong>, Feb. 2023 - Jun. 2023</p>
              <p>Research Focus: Cognitive Neuroscience, Predictive Coding Theory, Predictive Coding Network</p>
              <p>Advised by Professor <a href="https://www.ibs.re.kr/kor/sub05_02_07.do?partCode=04" target="_blank" rel="noopener noreferrer" className="advisor-link">Lee Joon Kim</a></p>
            </div>
          </div>

          <div className="timeline-item">
            {/* <div className="timeline-icon"></div> */}
            <div className="timeline-content">
              <h3>Institute for Basic Science (IBS)</h3>
              <p><strong>Undergraduate Research Student</strong>, Feb. 2023 - Jun. 2023</p>
              <p>Research Focus: Cognitive Neuroscience, EEG (electroencephalography) experiment</p>
              <p>Advised by Professor <a href="https://www.ibs.re.kr/kor/sub05_02_07.do?partCode=04" target="_blank" rel="noopener noreferrer" className="advisor-link">Lee Joon Kim</a></p>
            </div>
          </div>
        </div>
        <br/>
        <h2>Education</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }}></hr> {/* Lighter and more transparent HR */}
        <div className="timeline">
        <div className="timeline-item">
        {/* <div className="timeline-icon"></div> */}
        <div className="timeline-content">
        <h3>Chungnam National University (CNU)</h3>
        <p><strong>Bachelor’s degree</strong>, Mar. 2019 - Present</p>
        <p>The Division of Computer Convergence</p>
        </div>
        </div>
        </div>
      </div>
      <div style={{ flex: '1' }}> {/* Right side empty space */}</div>
    </div>
  );
}

export default Home;
