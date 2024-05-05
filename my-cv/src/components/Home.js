import React from 'react';

function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ flex: '1' }}>
        <img src="your-image-url.jpg" alt="Your Name" style={{ maxWidth: '100px' }} />
        <p>Your Address</p>
      </div>
      <div style={{ flex: '2' }}>
        <h1>Welcome!</h1>
        <p>Here is a brief introduction about myself...</p>
        <h2>Experience</h2>
        <p>Details about your experience...</p>
        <h2>Publications</h2>
        <p>Highlight some publications...</p>
        <h2>Education</h2>
        <p>Information on your education...</p>
        <h2>Research Interest</h2>
        <p>Discuss your research interests...</p>
      </div>
    </div>
  );
}

export default Home;
