// import React from "react";

// const Services = () => {
//   return (
//     <div>
//       <style>{`
//         body {
//           margin: 0;
//           font-family: 'Segoe UI', sans-serif;
//         }

//         .services-banner {
//           height: 400px;
//           background-image: url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80');
//           background-size: cover;
//           background-position: center;
//           background-repeat: no-repeat;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           color: white;
//         }

//         .services-banner::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background-color: rgba(0, 0, 0, 0.6);
//         }

//         .services-heading {
//           position: relative;
//           z-index: 1;
//           font-size: 3rem;
//           font-weight: bold;
//         }

//         .services-section {
//           background-color: #f9f2ff;
//           padding: 50px 20px;
//           text-align: center;
//         }

//         .services-section h2 {
//           color: #4b00b3;
//           font-size: 32px;
//           margin-bottom: 40px;
//         }

//         .services-cards {
//           display: flex;
//           justify-content: center;
//           gap: 20px;
//           flex-wrap: wrap;
//         }

//         .service-card {
//           background-color: #f1d6f7;
//           padding: 30px;
//           border-radius: 16px;
//           width: 300px;
//           box-shadow: 0 4px 6px rgba(0,0,0,0.1);
//         }

//         .service-card:nth-child(3) {
//           background-color: #bcb8f7;
//         }

//         .service-icon {
//           font-size: 40px;
//           margin-bottom: 20px;
//         }

//         .service-title {
//           font-size: 20px;
//           font-weight: bold;
//           margin-bottom: 10px;
//         }

//         .service-desc {
//           font-size: 15px;
//           color: #444;
//           margin-bottom: 15px;
//         }

//         .service-card ul {
//           list-style-type: disc;
//           padding-left: 20px;
//           text-align: left;
//           color: #222;
//         }

//         .service-card ul li {
//           margin-bottom: 6px;
//           font-size: 14px;
//         }
//       `}</style>

//       {/* Banner */}
//       <section className="services-banner">
//         <h1 className="services-heading">Our Services</h1>
//       </section>

//       {/* Services */}
//       <section className="services-section">
//         <h2>We offer a wide range of creative services</h2>
//         <div className="services-cards">

//           {/* App Development */}
//           <div className="service-card">
//             <div className="service-icon">📱</div>
//             <div className="service-title">App Development</div>
//             <div className="service-desc">
//               Innovative app development services designed to create engaging, high-performance applications.
//             </div>
//             <ul>
//               <li>Native iOS App Development</li>
//               <li>Native Android App Development</li>
//               <li>Cross-Platform App Development</li>
//               <li>Progressive Web App Development</li>
//               <li>App Testing & QA</li>
//               <li>Maintenance & Upgrades</li>
//             </ul>
//           </div>

//           {/* Web Development */}
//           <div className="service-card">
//             <div className="service-icon">🌐</div>
//             <div className="service-title">Web Development</div>
//             <div className="service-desc">
//               Responsive websites with AI-powered chatbots and advanced functionality for automation.
//             </div>
//             <ul>
//               <li>Custom Website Design & Dev</li>
//               <li>AI Chatbot Integration</li>
//               <li>Voice Bot Development</li>
//               <li>E-commerce Development</li>
//               <li>CMS & Optimization</li>
//               <li>Maintenance & Support</li>
//             </ul>
//           </div>

//           {/* CRM Development */}
//           <div className="service-card">
//             <div className="service-icon">💻</div>
//             <div className="service-title">CRM Development</div>
//             <div className="service-desc">
//               Tailored CRM services to enhance customer relationships and manage data efficiently.
//             </div>
//             <ul>
//               <li>CRM Customization</li>
//               <li>Third-Party Integration</li>
//               <li>CRM Migration & Data Mgmt</li>
//               <li>Implementation & Deployment</li>
//               <li>Support & Troubleshooting</li>
//               <li>Training & Consulting</li>
//             </ul>
//           </div>
//           {/* CRM Development */}
//           <div className="service-card">
//             <div className="service-icon">💻</div>
//             <div className="service-title">CRM Development</div>
//             <div className="service-desc">
//               Tailored CRM services to enhance customer relationships and manage data efficiently.
//             </div>
//             <ul>
//               <li>CRM Customization</li>
//               <li>Third-Party Integration</li>
//               <li>CRM Migration & Data Mgmt</li>
//               <li>Implementation & Deployment</li>
//               <li>Support & Troubleshooting</li>
//               <li>Training & Consulting</li>
//             </ul>
//           </div>
//           {/* CRM Development */}
//           <div className="service-card">
//             <div className="service-icon">💻</div>
//             <div className="service-title">CRM Development</div>
//             <div className="service-desc">
//               Tailored CRM services to enhance customer relationships and manage data efficiently.
//             </div>
//             <ul>
//               <li>CRM Customization</li>
//               <li>Third-Party Integration</li>
//               <li>CRM Migration & Data Mgmt</li>
//               <li>Implementation & Deployment</li>
//               <li>Support & Troubleshooting</li>
//               <li>Training & Consulting</li>
//             </ul>
//           </div>
//           {/* CRM Development */}
//           <div className="service-card">
//             <div className="service-icon">💻</div>
//             <div className="service-title">CRM Development</div>
//             <div className="service-desc">
//               Tailored CRM services to enhance customer relationships and manage data efficiently.
//             </div>
//             <ul>
//               <li>CRM Customization</li>
//               <li>Third-Party Integration</li>
//               <li>CRM Migration & Data Mgmt</li>
//               <li>Implementation & Deployment</li>
//               <li>Support & Troubleshooting</li>
//               <li>Training & Consulting</li>
//             </ul>
//           </div>
//           {/* CRM Development */}
//           <div className="service-card">
//             <div className="service-icon">💻</div>
//             <div className="service-title">CRM Development</div>
//             <div className="service-desc">
//               Tailored CRM services to enhance customer relationships and manage data efficiently.
//             </div>
//             <ul>
//               <li>CRM Customization</li>
//               <li>Third-Party Integration</li>
//               <li>CRM Migration & Data Mgmt</li>
//               <li>Implementation & Deployment</li>
//               <li>Support & Troubleshooting</li>
//               <li>Training & Consulting</li>
//             </ul>
//           </div>
//           {/* CRM Development */}
//           <div className="service-card">
//             <div className="service-icon">💻</div>
//             <div className="service-title">CRM Development</div>
//             <div className="service-desc">
//               Tailored CRM services to enhance customer relationships and manage data efficiently.
//             </div>
//             <ul>
//               <li>CRM Customization</li>
//               <li>Third-Party Integration</li>
//               <li>CRM Migration & Data Mgmt</li>
//               <li>Implementation & Deployment</li>
//               <li>Support & Troubleshooting</li>
//               <li>Training & Consulting</li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;

import React from "react";
import { motion } from 'framer-motion';
import { BrainCircuit, Users, Zap, Rocket } from 'lucide-react';

const Services = () => {
  return (
    <div>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
        }

        .services-banner {
          height: 400px;
          background-image: url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: white;
        }

        .services-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.6);
        }

        .services-heading {
          position: relative;
          z-index: 1;
          font-size: 3rem;
          font-weight: bold;
        }

        .services-section {
          background-color: #f9f2ff;
          padding: 50px 20px;
          text-align: center;
        }

        .services-section h2 {
          color: #4b00b3;
          font-size: 32px;
          margin-bottom: 40px;
        }

        .services-cards {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .service-card {
          background-color: #f1d6f7;
          padding: 30px;
          border-radius: 16px;
          width: 300px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .service-card:nth-child(3) {
          background-color: #bcb8f7;
        }

        .service-icon {
          font-size: 40px;
          margin-bottom: 20px;
        }

        .service-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .service-desc {
          font-size: 15px;
          color: #444;
          margin-bottom: 15px;
        }

        .service-card ul {
          list-style-type: disc;
          padding-left: 20px;
          text-align: left;
          color: #222;
        }

        .service-card ul li {
          margin-bottom: 6px;
          font-size: 14px;
        }

        .passion-section {
            background-image: linear-gradient(to bottom right, #800080, #00008b); /* From purple-900 to blue-900 */
            color: white;
            padding: 50px 20px;
            text-align: center;
            border-radius: 20px;
            margin-top: 20px;
        }

        .passion-section h2 {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 1rem;
             background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            background-image: linear-gradient(to right, #a855f7, #f472b6);
        }
        .passion-section p{
          font-size: 1rem;
          color: #d1d5db;
          margin-bottom: 2rem;
        }

        .passion-cards {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .passion-card {
          background-color: rgba(255, 255, 255, 0.05); /* white with 5% opacity */
          backdrop-filter: blur(10px); /* Equivalent of backdrop-blur-md */
          border-radius: 1rem; /* rounded-xl */
          padding: 1.5rem; /* p-6 */
          border: 1px solid rgba(255, 255, 255, 0.1); /* border-white/10 */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-lg */
          width: 300px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .passion-card:hover {
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
          transform: scale(1.02);
        }

        .passion-card-icon {
          width: 2rem; /* w-8 */
          height: 2rem; /* h-8 */
          margin-bottom: 1rem; /* mb-4 */
        }

        .passion-card-title {
          font-size: 1.25rem; /* text-xl */
          font-weight: 600;  /* font-semibold */
          margin-bottom: 0.5rem; /* mb-2 */
        }

        .passion-card-desc {
          color: #d1d5db;
          font-size: 1rem;
        }

        .testimonials-section {
          padding: 50px 20px;
          text-align: center;
        }

        .testimonials-section h2 {
          color: #4b00b3;
          font-size: 32px;
          margin-bottom: 40px;
        }

        .testimonial-cards {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .testimonial-card {
          background-color: #f8f8f8;
          padding: 30px;
          border-radius: 16px;
          width: 350px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          text-align: left;
          margin-bottom: 20px;
        }

        .testimonial-card p {
          font-style: italic;
          color: #555;
          margin-bottom: 20px;
        }

        .testimonial-card .author {
          font-weight: bold;
          color: #333;
        }

        .testimonial-card .author-title {
          font-size: 0.9em;
          color: #777;
        }
        .arrows{
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }
        .arrow{
          cursor: pointer;
          font-size: 2rem;
          color: #4b00b3;
        }

        .contact-section {
          background-color: #f0f0f0;
          padding: 50px 20px;
          text-align: center;
        }

        .contact-section h2 {
          color: #4b00b3;
          font-size: 32px;
          margin-bottom: 40px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 auto;
          width: 90%;
          max-width: 600px;
        }

        .contact-form-group {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-bottom: 20px;
          text-align: left;
        }

        .contact-form-group label {
          margin-bottom: 8px;
          font-weight: bold;
          color: #555;
        }

        .contact-form-group input,
        .contact-form-group textarea {
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1em;
          width: 100%;
          box-sizing: border-box;
        }

        .contact-form-group textarea {
          resize: vertical;
          height: 100px;
        }

        .contact-form-group input:focus,
        .contact-form-group textarea:focus {
          outline: none;
          border-color: #4b00b3;
          box-shadow: 0 0 5px rgba(75, 0, 179, 0.3);
        }

        .contact-form button {
          padding: 12px 24px;
          background-color: #4b00b3;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.1em;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-top: 10px;
        }

        .contact-form button:hover {
          background-color: #310062;
        }
        @media (min-width: 768px) {
            .contact-form {
                width: 70%;
            }
            .contact-form-group {
                flex-direction: row;
                justify-content: space-between;
                gap: 20px;
            }
            .contact-form-group label{
                width: 30%;
            }
            .contact-form-group input, .contact-form-group textarea{
                width: 70%;
            }
        }
      `}</style>

      {/* Banner */}
      <section className="services-banner">
        <h1 className="services-heading">Our Services</h1>
      </section>

      {/* Services */}
      <section className="services-section">
        <h2>We offer a wide range of creative services</h2>
        <div className="services-cards">

          {/* App Development */}
          <div className="service-card">
            <div className="service-icon">📱</div>
            <div className="service-title">App Development</div>
            <div className="service-desc">
              Innovative app development services designed to create engaging, high-performance applications.
            </div>
            <ul>
              <li>Native iOS App Development</li>
              <li>Native Android App Development</li>
              <li>Cross-Platform App Development</li>
              <li>Progressive Web App Development</li>
              <li>App Testing & QA</li>
              <li>Maintenance & Upgrades</li>
            </ul>
          </div>

          {/* Web Development */}
          <div className="service-card">
            <div className="service-icon">🌐</div>
            <div className="service-title">Web Development</div>
            <div className="service-desc">
              Responsive websites with AI-powered chatbots and advanced functionality for automation.
            </div>
            <ul>
              <li>Custom Website Design & Dev</li>
              <li>AI Chatbot Integration</li>
              <li>Voice Bot Development</li>
              <li>E-commerce Development</li>
              <li>CMS & Optimization</li>
              <li>Maintenance & Support</li>
            </ul>
          </div>

          {/* CRM Development */}
          <div className="service-card">
            <div className="service-icon">💻</div>
            <div className="service-title">CRM Development</div>
            <div className="service-desc">
              Tailored CRM services to enhance customer relationships and manage data efficiently.
            </div>
            <ul>
              <li>CRM Customization</li>
              <li>Third-Party Integration</li>
              <li>CRM Migration & Data Mgmt</li>
              <li>Implementation & Deployment</li>
              <li>Support & Troubleshooting</li>
              <li>Training & Consulting</li>
            </ul>
          </div>
          {/* CRM Development */}
          <div className="service-card">
            <div className="service-icon">💻</div>
            <div className="service-title">CRM Development</div>
            <div className="service-desc">
              Tailored CRM services to enhance customer relationships and manage data efficiently.
            </div>
            <ul>
              <li>CRM Customization</li>
              <li>Third-Party Integration</li>
              <li>CRM Migration & Data Mgmt</li>
              <li>Implementation & Deployment</li>
              <li>Support & Troubleshooting</li>
              <li>Training & Consulting</li>
            </ul>
          </div>
          {/* CRM Development */}
          <div className="service-card">
            <div className="service-icon">💻</div>
            <div className="service-title">CRM Development</div>
            <div className="service-desc">
              Tailored CRM services to enhance customer relationships and manage data efficiently.
            </div>
            <ul>
              <li>CRM Customization</li>
              <li>Third-Party Integration</li>
              <li>CRM Migration & Data Mgmt</li>
              <li>Implementation & Deployment</li>
              <li>Support & Troubleshooting</li>
              <li>Training & Consulting</li>
            </ul>
          </div>
          {/* CRM Development */}
          <div className="service-card">
            <div className="service-icon">💻</div>
            <div className="service-title">CRM Development</div>
            <div className="service-desc">
              Tailored CRM services to enhance customer relationships and manage data efficiently.
            </div>
            <ul>
              <li>CRM Customization</li>
              <li>Third-Party Integration</li>
              <li>CRM Migration & Data Mgmt</li>
              <li>Implementation & Deployment</li>
              <li>Support & Troubleshooting</li>
              <li>Training & Consulting</li>
            </ul>
          </div>
          {/* CRM Development */}
          <div className="service-card">
            <div className="service-icon">💻</div>
            <div className="service-title">CRM Development</div>
            <div className="service-desc">
              Tailored CRM services to enhance customer relationships and manage data efficiently.
            </div>
            <ul>
              <li>CRM Customization</li>
              <li>Third-Party Integration</li>
              <li>CRM Migration & Data Mgmt</li>
              <li>Implementation & Deployment</li>
              <li>Support & Troubleshooting</li>
              <li>Training & Consulting</li>
            </ul>
          </div>
          {/* CRM Development */}
          <div className="service-card">
            <div className="service-icon">💻</div>
            <div className="service-title">CRM Development</div>
            <div className="service-desc">
              Tailored CRM services to enhance customer relationships and manage data efficiently.
            </div>
            <ul>
              <li>CRM Customization</li>
              <li>Third-Party Integration</li>
              <li>CRM Migration & Data Mgmt</li>
              <li>Implementation & Deployment</li>
              <li>Support & Troubleshooting</li>
              <li>Training & Consulting</li>
            </ul>
          </div>
          
        </div>
      </section>
      {/* Passion Section */}
      <section className="passion-section">
        <h2>The fire that fuels our passion.</h2>
        <p>At Praman Tech, we believe in the power of:</p>
        <div className="passion-cards">
          {/* Creativity Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="passion-card"
          >
            <div className="flex items-center gap-4 mb-4">
              <BrainCircuit className="passion-card-icon text-purple-400" />
              <h3 className="passion-card-title">Creativity.</h3>
            </div>
            <p className="passion-card-desc">
              We dare to dream big and push boundaries, never settling for the ordinary.
            </p>
          </motion.div>

          {/* Collaboration Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="passion-card"
          >
            <div className="flex items-center gap-4 mb-4">
              <Users className="passion-card-icon text-blue-400" />
              <h3 className="passion-card-title">Collaboration.</h3>
            </div>
            <p className="passion-card-desc">
              We thrive on diverse perspectives and believe in the magic of working together.
            </p>
          </motion.div>

          {/* Impact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="passion-card"
          >
            <div className="flex items-center gap-4 mb-4">
              <Zap className="passion-card-icon text-green-400" />
              <h3 className="passion-card-title">Impact.</h3>
            </div>
            <p className="passion-card-desc">
              We&apos;re driven by a desire to make a difference, to create brands that move mountains.
            </p>
          </motion.div>

          {/* Innovation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="passion-card"
          >
            <div className="flex items-center gap-4 mb-4">
              <Rocket className="passion-card-icon text-pink-400" />
              <h3 className="passion-card-title">Innovation.</h3>
            </div>
            <p className="passion-card-desc">
              We stay ahead of the curve, embracing new technologies & trends to keep your brand on top.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What They Say About Us</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              "The AI solutions from Praman Tech have revolutionized our operations. Their expertise and support are invaluable. A truly strategic partner."
            </p>
            <div className="author">Emily T</div>
            <div className="author-title">Operations Manager at Health Innovations Group</div>
          </div>
          <div className="testimonial-card">
            <p>
              "Praman Tech's app development team delivered a seamless, feature-rich application on time and within budget. Fantastic experience overall!"
            </p>
            <div className="author">Aarav Kapoor</div>
            <div className="author-title">Product Manager of Nexus Tech</div>
          </div>
          <div className="testimonial-card">
            <p>
              "Impressed with Praman Tech's creativity in app development. They turned our vision into reality flawlessly. Exceptional service!"
            </p>
            <div className="author">Jessica M</div>
            <div className="author-title">COO of Creative Solutions</div>
          </div>
        </div>
        <div className="arrows">
            <div className="arrow">←</div>
            <div className="arrow">→</div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="contact-section">
        <h2>Ready to ignite your brand's fire? Let's connect!</h2>
        <p>
          At Praman Tech, we believe in the power of collaboration and shared passion. We're not just a team of developers, we're your partners in igniting your brand's unique potential. So, whether you're brimming with ideas or just starting to spark, reach out and let's chat!
        </p>
        <form className="contact-form">
          <div className="contact-form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="contact-form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="contact-form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="contact-form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="contact-form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Services;

