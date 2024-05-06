import React from 'react';
import '../App.css'; // Adjust the path as necessary
import picture1 from './han.jpeg'

function Publications() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
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
    <div style={{ flex: '2' }}>
      <h2>Publications</h2>
      <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }}></hr> {/* Lighter and more transparent HR */}
      <ul>
        <li>Publication 1</li>
        <li>Publication 1</li>
      </ul>
    </div>
    <div style={{ flex: '1' }}> {/* Right side empty space */}</div>
  </div>
  );
}

export default Publications;
