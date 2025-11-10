import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer style={styles.footer}>

      <div style={styles.info}>
        <p>
          <strong>Architect Abuzar Plasterwala</strong><br />
          XAR Workshop LLP
        </p>
        <br />
        <p>
          <strong>Registered Address</strong><br />
          B-8/41A, Khira Nagar, Santacruz (West), Mumbai - 400054
        </p>
        <p>
        </p>
      </div>

      <div
        style={{
          ...styles.social,
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
        }}
      >
        <a href="" style={styles.btn}>
          <i className="fab fa-youtube" style={styles.i}></i> YouTube
        </a>
        <a href="" style={styles.btn}>
          <i className="fab fa-twitter" style={styles.i}></i> Twitter
        </a>
        <a href="" style={styles.btn}>
          <i className="fab fa-linkedin" style={styles.i}></i> Linkedin
        </a>
        <a href="" style={styles.btn}>
          <i className="fab fa-github" style={styles.i}></i> Instagram
        </a>
      </div>

      <div style={styles.copyright}>
        &copy; {new Date().getFullYear()} All rights reserved by <strong>XAR Workshop LLP</strong>. <br />
        Developed by <a href="https://mayurport.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none', fontWeight: '600' }}>Mayur Rathod</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '2em',
    backgroundColor: '#f9f9f9',
    color: '#333',
    fontSize: '14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  course: {
    marginBottom: '10px',
  },
  info: {
    lineHeight: '1.6',
  },
  social: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid grey',
    borderRadius: '8px',
    padding: '10px 16px',
    textDecoration: 'none',
    color: 'black',
    fontWeight: '500',
    fontSize: '14px',
    transition: 'background-color 0.2s ease',
  },
  i: {
    marginRight: '8px',
    fontSize: '16px',
  },
  head: {
    color: 'black',
    fontSize: '18px',
  },
  part: {
    color: 'grey',
    textDecoration: 'none',
  },
  copyright: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '13px',
    color: '#666',
  },
};

export default Footer;
