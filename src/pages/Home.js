import React from 'react';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <img src="../../../han.jpeg" alt="Han Jang" style={{ width: '150px', height: '150px' }} />
      <p>Research Interests: [Your Research Interests Here]</p>
      <div>
        <h2>About Me</h2>
        <p>[Brief Introduction]</p>
        <h2>Experience</h2>
        <p>[List Your Experiences Here]</p>
        <h2>Conferences</h2>
        <p>[List Relevant Conferences Here]</p>
        <h2>Publications</h2>
        <p>[List Your Publications Here]</p>
      </div>
    </div>
  );
}

export default Home;
