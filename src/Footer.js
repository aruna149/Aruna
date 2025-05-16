// import React from "react";

// const FooterSection = () => {
//   const styles = {
//     wrapper: { backgroundColor: "black", fontFamily: "Poppins, sans-serif" },
//     title: { textAlign: "center", fontSize: "2rem", fontWeight: "700", padding: "2rem 0 1rem", color: "#0c1833" },
//     partnersRow: { backgroundColor: "#cbd0db", display: "flex", justifyContent: "center", gap: "2rem", alignItems: "center", padding: "1.5rem 1rem", flexWrap: "wrap" },
//     partnerLogo: { height: "50px", objectFit: "contain", filter: "grayscale(100%)", transition: "filter 0.3s ease" },
//     footer: { backgroundColor: "#f8f9fc", padding: "4rem 2rem 2rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", rowGap: "2rem", position: "relative" },
//     footerCol: { flex: "1", minWidth: "220px" },
//     logo: { height: "70px", marginBottom: "1rem" },
//     heading: { fontWeight: "600", fontSize: "1.2rem", marginBottom: "1rem", color: "black" },
//     list: { listStyle: "none", padding: "0", margin: "0" },
//     listItem: { margin: "0.4rem 0", fontSize: "1rem", color: "#333" },
//     text: { margin: "0.4rem 0", fontSize: "1rem", color: "#333" },
//     icons: { display: "flex", marginTop: "1rem", gap: "15px" },
//     icon: { fontSize: "1.3rem", color: "#0c1833", cursor: "pointer", transition: "color 0.3s" },
//     whatsapp: { position: "absolute", right: "2rem", bottom: "2rem", height: "50px", cursor: "pointer" },
//   };

//   return (
//     <div style={styles.wrapper}>
//       <h2 style={styles.title}>Associated With</h2>
//       <div style={styles.partnersRow}>
//         <img src="/Images/boostmysites.png" alt="Boost My Sites" style={styles.partnerLogo} />
//         <img src="/Images/technext.png" alt="Technext Solutions" style={styles.partnerLogo} />
//         <img src="/Images/venteskraft.png" alt="Venteskraft" style={styles.partnerLogo} />
//         <img src="/Images/quantumsoft.png" alt="Quantumsoft" style={styles.partnerLogo} />
//       </div>

//       <div style={styles.footer}>
//         <div style={styles.footerCol}>
//           <img src="/Images/aiwebx-logo.png" alt="AI WebX Logo" style={styles.logo} />
//         </div>

//         <div style={styles.footerCol}>
//           <h3 style={styles.heading}>Our Services</h3>
//           <ul style={styles.list}>
//             <li style={styles.listItem}>Web Development</li>
//             <li style={styles.listItem}>App Development</li>
//             <li style={styles.listItem}>AI & ML Development</li>
//             <li style={styles.listItem}>Blockchain Solutions</li>
//             <li style={styles.listItem}>Cloud Computing Services</li>
//             <li style={styles.listItem}>VR & AR Development</li>
//           </ul>
//         </div>

//         <div style={styles.footerCol}>
//           <h3 style={styles.heading}>Contact Info</h3>
//           <p style={styles.text}><i className="fa fa-envelope"></i> info@aiwebx.in</p>
//           <p style={styles.text}><i className="fa fa-phone"></i> +91 63013 50318</p>
//           <p style={styles.text}><i className="fa fa-map-marker"></i> 10-47 Ambedkar Nagar, Jawaharnagar,<br />Turmalagiri, Hyderabad - 500087</p>
//           <div style={styles.icons}>
//             <i className="fab fa-facebook-f" style={styles.icon}></i>
//             <i className="fab fa-instagram" style={styles.icon}></i>
//             <i className="fab fa-linkedin-in" style={styles.icon}></i>
//             <i className="fab fa-twitter" style={styles.icon}></i>
//           </div>
//         </div>

//         <img src="/Images/whatsapp-icon.png" alt="WhatsApp" style={styles.whatsapp} />
//       </div>
//     </div>
//   );
// };

// export default FooterSection;
import React from 'react';

const App = () => {
  return (
    <>
      <style>{`
        /* Footer Styles */
        .footer {
          background-color: #101010;
          color: #fff;
          padding: 40px 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: space-between;
        }

        .footer-column {
          flex: 1 1 22%;
          min-width: 200px;
        }

        .footer-section h3 {
          margin-bottom: 10px;
          font-size: 18px;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-section ul li {
          margin-bottom: 8px;
        }

        .footer-section input[type="email"] {
          width: 100%;
          padding: 8px;
          margin-top: 10px;
          margin-bottom: 10px;
          border: none;
          border-radius: 4px;
        }

        .footer-section button {
          padding: 8px 12px;
          border: none;
          background-color: #007BFF;
          color: white;
          border-radius: 4px;
          cursor: pointer;
        }

        .footer-section .social-media ul {
          display: flex;
          gap: 10px;
          padding: 0;
        }

        .footer-section .social-media ul li {
          font-size: 14px;
          color: #fff;
          background: #444;
          padding: 6px 10px;
          border-radius: 4px;
        }

        .cookie-disclaimer {
          margin-top: 20px;
          text-align: center;
          font-size: 14px;
          opacity: 0.8;
          padding: 10px 0;
          border-top: 1px solid #333;
        }

        /* Chat Widget Styles */
        .chat-widget {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 250px;
          background-color: #ffffff;
          border: 1px solid #ccc;
          border-radius: 12px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          overflow: hidden;
          z-index: 1000;
        }

        .chat-header {
          background-color: #007BFF;
          color: white;
          padding: 10px;
          font-weight: bold;
          font-size: 16px;
        }

        .chat-body {
          padding: 10px;
          font-size: 14px;
          color: #333;
        }

        .chat-button {
          width: 100%;
          padding: 10px;
          border: none;
          background-color: #28a745;
          color: white;
          font-size: 16px;
          cursor: pointer;
          border-radius: 0 0 12px 12px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .row {
            flex-direction: column;
          }
          .footer-column {
            flex: 1 1 100%;
          }
        }
      `}</style>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-column">
              <section className="footer-section">
                <h3>Services</h3>
                <ul>
                  <li>SEO</li>
                  <li>Social Media Marketing</li>
                  <li>UI/UX</li>
                  <li>Website Design</li>
                  <li>Mobile Application Development</li>
                  <li>Shopify Website Development</li>
                  <li>Manual Testing Services</li>
                  <li>Automation Testing Services</li>
                </ul>
              </section>
            </div>
            <div className="footer-column">
              <section className="footer-section">
                <h3>Industries</h3>
                <ul>
                  <li>Education</li>
                  <li>Health Care</li>
                  <li>Retail & E-Commerce</li>
                  <li>Renewable Energy</li>
                  <li>All</li>
                </ul>
              </section>
            </div>
            <div className="footer-column">
              <section className="footer-section">
                <h3>Platforms</h3>
                <ul>
                  <li>Microsoft Services</li>
                  <li>AWS</li>
                  <li>Google Cloud</li>
                  <li>WordPress</li>
                  <li>Magento</li>
                  <li>Office 365 & Teams</li>
                </ul>
              </section>
            </div>
            <div className="footer-column">
              <section className="footer-section">
                <h3>Subscribe To Our Newsletter</h3>
                <p>To get the latest news and updates.</p>
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button type="submit">SUBSCRIBE</button>
                </form>
              </section>
              <section className="footer-section social-media">
                <ul>
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Instagram</a></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        <div className="cookie-disclaimer">
          <p>We use cookies to give you the best experience. Read our Cookie Policy and Privacy Policy.</p>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="chat-widget">
        <div className="chat-header">Hey there!</div>
        <div className="chat-body">How may I help you today?</div>
        <button className="chat-button">Chat Now</button>
      </div>
    </>
  );
};

export default App;


