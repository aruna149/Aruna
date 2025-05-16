// import React from "react";


// const Home = () => {
//   return (
//     <>
//       <div
//       className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
//       style={{
//         backgroundImage:
//           "url(https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
//       }} // Replace with a relevant image URL, or use the provided one.
//     >
//       <div className="container mx-auto px-4 py-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: 'easeInOut' }}
//           className="text-center"
//         >
//           <h1
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4
//                        bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
//           >
//             Welcome to Praman Tech
//           </h1>
//           <p
//             className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto
//                        bg-gradient-to-r from-gray-300 to-gray-400 text-transparent bg-clip-text"
//           >
//             EMPOWERING GROWTH WITH CUTTING-EDGE AI SOLUTIONS
//           </p>
//           <p className="text-md sm:text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
//             Begin your AI-powered transformation journey with Praman Tech. Our
//             innovative IT services ensure you stay ahead in a competitive market.
//           </p>
//           <button
//             // variant="default"
//             // size="lg"
//             className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 active:scale-95"
//           >
//             Explore Our Solutions
//           </button>
//         </motion.div>
//       </div>
//     </div>
//      <header className="hero flex flex-col md:flex-row items-center justify-between p-8 bg-gray-900 text-white">
//       <div className="text max-w-xl">
//         <span className="tag text-sm uppercase tracking-widest text-blue-400 mb-2 inline-block">
//           IT Services
//         </span>
//         <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
//           Deepbrik - Powering the Future with Intelligent Solutions
//         </h1>
//         <p className="text-lg md:text-xl mb-6">
//           Harness the full potential of Artificial Intelligence, Blockchain, and Cloud Computing to revolutionize your business processes.
//         </p>
//         <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded transition duration-300">
//           Get Started
//         </button>
//       </div>
//       <div className="image mt-8 md:mt-0 md:ml-8">
//       <img
//   src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   alt="Robot"
//   className="w-full max-w-md"
// /> 
//       </div>
//     </header>
//     </>

// //       
//     </></div>
// //     </header>

// //       {/* Services Section */}
// //       <section className="services-section">
// //         <h3 className="section-subtitle">Our Services</h3>
// //         <h2 className="section-title">We Provide the Best IT Solution Services</h2>
// //         <p className="section-desc">
// //           At AI WebX, we offer a full range of advanced technology services designed to empower businesses with scalable, intelligent, and secure solutions.
// //         </p>

// //         <div className="services-grid">
// //           <div className="service-card">
// //             <img src="https://img.icons8.com/ios/100/web.png" alt="Web Development" />
// //             <h3>Web Development</h3>
// //             <p>
// //               Building websites using code, design, and content for user-friendly online experiences.
// //             </p>
// //             <a href="#">Know More »</a>
// //           </div>

// //           <div className="service-card">
// //             <img src="https://img.icons8.com/ios/100/mobile.png" alt="App Development" />
// //             <h3>App Development</h3>
// //             <p>
// //               Creating mobile applications using code, design, and user-centered features.
// //             </p>
// //             <a href="#">Know More »</a>
// //           </div>

// //           <div className="service-card">
// //             <img src="https://img.icons8.com/ios/100/artificial-intelligence.png" alt="AI & ML" />
// //             <h3>AI & ML Development</h3>
// //             <p>
// //               Building intelligent systems that learn from data to automate tasks and solve problems.
// //             </p>
// //             <a href="#">Know More »</a>
// //           </div>

// //           <div className="service-card">
// //             <img src="https://img.icons8.com/ios/100/blockchain-technology.png" alt="Blockchain" />
// //             <h3>Blockchain Solutions</h3>
// //             <p>
// //               Building decentralized applications using code, design, and user-friendly features.
// //             </p>
// //             <a href="#">Know More »</a>
// //           </div>
          
// // {/* Industries Section */}
// // <section className="industries-section">
// //   <h2 className="industries-title">Industries We Serve</h2>
// //   <p className="industries-subtitle">
// //     We cater to a wide range of industries, delivering tailored AI and tech solutions to meet specific needs:
// //   </p>

// //   <div className="industries-grid">
// //     <div className="industry-card">
// //       <h3>Healthcare</h3>
// //       <p>
// //         Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.
// //       </p>
// //     </div>
// //     <div className="industry-card">
// //       <h3>E-commerce & Retail</h3>
// //       <p>
// //         Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.
// //       </p>
// //     </div>
// //     <div className="industry-card">
// //       <h3>Finance & Banking</h3>
// //       <p>
// //         Streamlining processes with AI, blockchain, and machine learning for fraud detection, risk assessment, and smarter investment strategies.
// //       </p>
// //     </div>
// //     <div className="industry-card">
// //       <h3>Energy</h3>
// //       <p>
// //         Optimizing energy management, forecasting, and sustainability with IoT and data-driven AI solutions.
// //       </p>
// //     </div>
// //     <div className="industry-card">
// //       <h3>Real Estate</h3>
// //       <p>
// //         Revolutionizing property management, investment decisions, and customer engagement with AI and predictive analytics.
// //       </p>
// //     </div>
// //     <div className="industry-card inactive">
// //       <h3>Manufacturing</h3>
// //       <p>
// //         Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.
// //       </p>
// //     </div>
// //   </div>
// // </section>
// // {/* Process Section */}
// // <section className="process-section">
// //   <h3 className="section-subtitle highlight">How We Build Your Success</h3>

// //   <div className="process-grid">
// //     {[
// //       {
// //         title: "Requirements Gathering",
// //         desc: "We engage with stakeholders to gather comprehensive project requirements and understand their goals through collaborative discussions.",
// //         icon: "https://img.icons8.com/ios/100/task.png",
// //         step: "01",
// //       },
// //       {
// //         title: "Design & Planning",
// //         desc: "Our team crafts a user-centric design and creates a detailed project plan, outlining the architecture, timelines, and deliverables.",
// //         icon: "https://img.icons8.com/ios/100/blueprint.png",
// //         step: "02",
// //       },
// //       {
// //         title: "Development",
// //         desc: "Our skilled developers bring your vision to life, leveraging modern technologies to build a secure and scalable product that meets all specifications.",
// //         icon: "https://img.icons8.com/ios/100/code--v1.png",
// //         step: "03",
// //       },
// //       {
// //         title: "Testing",
// //         desc: "We subject your product to rigorous testing to ensure flawless performance across all devices, identifying and resolving any issues before launch.",
// //         icon: "https://img.icons8.com/ios/100/inspection.png",
// //         step: "04",
// //       },
// //       {
// //         title: "Support",
// //         desc: "Our commitment extends beyond launch, providing ongoing maintenance and support to keep your product thriving in the ever-evolving digital landscape.",
// //         icon: "https://img.icons8.com/ios/100/handshake.png",
// //         step: "05",
// //       },
// //     ].map((item, index) => (
// //       <div key={index} className="process-card">
// //         <img src={item.icon} alt={item.title} className="process-icon" />
// //         <h4>{item.title}</h4>
// //         <p>{item.desc}</p>
// //         <span className="step-number">{item.step}</span>
// //       </div>
// //     ))}
// //   </div>
// // </section>
// // {/* About Section */}
// // <section className="about-section">
// //   <div className="about-container">
// //     {/* Left Side */}
// //     <div className="about-image-wrapper">
// //       <img
// //         src="https://images.unsplash.com/photo-1590650046871-92c887180603" // Replace with your actual image URL or import
// //         alt="About Us"
// //         className="about-image"
// //       />
// //       <div className="experience-box">
// //         <h2>2+</h2>
// //         <h4>Years of Experience</h4>
// //         <p>The trusted choice for your software development solutions</p>
// //       </div>
// //     </div>

// //     {/* Right Side */}
// //     <div className="about-content">
// //       <h4 className="section-subtitle highlight">About Company</h4>
// //       <h2 className="about-title">
// //         Our Vision: Empowering Global Businesses with Intelligent Technology
// //       </h2>
// //       <p className="about-description">
// //         At AI WebX, we are committed to delivering innovative AI, Machine
// //         Learning, and Blockchain solutions that help businesses adapt and excel
// //         in an increasingly complex and competitive marketplace.
// //       </p>
// //       <button className="about-btn">Know More About Us</button>
// //     </div>
// //   </div>
// // </section>

// // <section className="contact-section">
// //       <div className="contact-left">
// //         <h2>Get in touch with us</h2>
// //         <p>
// //           We are always open to discuss your project, improve your online
// //           presence
// //         </p>

// //         <form className="contact-form">
// //           <label htmlFor="name">Name</label>
// //           <input type="text" id="name" placeholder="Full Name" />

// //           <label htmlFor="email">Email</label>
// //           <input type="email" id="email" placeholder="Email Address" />

// //           <label htmlFor="subject">Subject</label>
// //           <input type="text" id="subject" placeholder="Enter Subject" />

// //           <label htmlFor="message">Message</label>
// //           <textarea id="message" placeholder="Enter Message" rows="5"></textarea>

// //           <button type="submit">Submit</button>
// //         </form>
// //       </div>

// //       <div className="contact-right">
// //         <img
// //           src="/images/handshake.jpg"
// //           alt="Contact Visual"
// //           className="contact-image"
// //         />
// //       </div>
// //     </section>



// //         </div>
// //       </section>
//   );
// };

// export default Home;
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Users, Zap, Rocket } from 'lucide-react';


const Services = () => {
  return (
    <>
      {/* Hero Section 1 */}
{/* <div
  className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=2070&q=80https://images.unsplash.com/photo-1581091870622-2c8b207e6ede?auto=format&fit=crop&w=2070&q=80https://images.unsplash.com/photo-1622486361580-96e95f94d2c8?auto=format&fit=crop&w=2070&q=80https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=2070&q=80https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-117808.jpg?semt=ais_hybrid&w=740https://www.freevector.com/uploads/vector/preview/31661/FreeVectorTechnology_Artificial_Intelligence_BackgroundWW0622_generated.jpg)",
  }}
>
  <div
    className="container mx-auto px-4 py-10 text-left"
    style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}
  >
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
        Intelligent Tech. Real Results.
      </h1>
      <div className="rounded-lg max-w-3xl">
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-4">
          Scalable AI Solutions Built for Growth
        </p>
        <p className="text-md sm:text-lg text-white mb-8">
          At Praman Tech, we design next-gen AI-driven platforms that automate,
          optimize, and scale your business potential. Join the future of intelligent enterprise.
        </p>
      </div>
      <button
        className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 active:scale-95"
      >
        Explore AI Services
      </button>
    </motion.div>
  </div>
</div> */}

<header
  className="hero flex flex-col md:flex-row items-center justify-between p-8 bg-gray-900 text-white"
  style={{ minHeight: '40vh' }}
>
  <div className="text max-w-xl">
    <span className="tag text-sm uppercase tracking-widest text-blue-400 mb-2 inline-block">
      Future-Ready Tech
    </span>
    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
      Deepbrik – Build Smarter with AI, Cloud & Blockchain
    </h1>
    <p className="text-lg md:text-xl mb-6 text-gray-300">
      Reimagine your infrastructure with seamless AI automation,
      secure blockchain systems, and dynamic cloud services — all in one place.
    </p>
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition duration-300 shadow-md hover:shadow-lg">
      Launch Your Project
    </button>
  </div>
  <div className="image mt-8 md:mt-0 md:ml-8 flex-shrink-0">
    <img
      src="/Images/img29.webp"
      alt="AI Interface"
      className="w-full max-w-md rounded-lg shadow-xl object-cover"
    />
  </div>
</header>


      {/* Services Section */}
      <section className="services-section py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h3 className="section-subtitle text-blue-400 text-center text-lg uppercase tracking-widest mb-4">Our Services</h3>
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-8">We Provide the Best IT Solution Services</h2>
          <p className="section-desc text-gray-300 text-center text-lg mb-12 max-w-3xl mx-auto">
            At AI WebX, we offer a full range of advanced technology services
            designed to empower businesses with scalable, intelligent,
            and secure solutions.
          </p>

          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="service-card bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-white">
                AI & Machine Learning Solutions
              </h3>
              <p className="text-gray-400 mb-4">
                Transform your data into intelligence with state-of-the-art AI
                models.
              </p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Custom ML Model Development</li>
                <li>Deep Learning for Vision & NLP</li>
                <li>Predictive Analytics & Forecasting</li>
                <li>Recommendation Systems</li>
              </ul>
            </div>

            <div className="service-card bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Data Analytics & Business Intelligence
              </h3>
              <p className="text-gray-400 mb-4">
                Uncover patterns, trends, and actionable insights to drive
                decisions.
              </p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Data Cleaning, Transformation & Visualization</li>
                <li>Real-Time & Historical Data Dashboards</li>
                <li>KPI Tracking & Custom Reports</li>
                <li>Anomaly Detection & Root Cause Analysis</li>
              </ul>
            </div>

            <div className="service-card bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Web Application Development
              </h3>
              <p className="text-gray-400 mb-4">
                Build powerful, modern, and scalable digital platforms.
              </p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Full-Stack Web Application Development</li>
                <li>Responsive UI/UX with Modern Frameworks</li>
                <li>Backend API Integration & Database Design</li>
                <li>Cloud-native & Serverless Deployments</li>

              </ul>
            </div>

            <div className="service-card bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Smart Traffic & Mobility Intelligence
              </h3>
              <p className="text-gray-400 mb-4">
                Harness computer vision and AI for next-generation urban
                planning.
              </p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Traffic Flow Analysis & Prediction</li>
                <li>Vehicle Detection & Classification</li>
                <li>
                  Automated Violation Detection
                </li>
                <li>Smart Parking & Navigation Systems</li>
              </ul>
            </div>

            <div className="service-card bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Document & Image Intelligence
              </h3>
              <p className="text-gray-400 mb-4">
                Automate and extract meaning from your unstructured content.
              </p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Intelligent Document Processing (OCR + NLP)</li>
                <li>Medical Image Analysis</li>
                <li>Auto-tagging and Classification Systems</li>
                <li>AI-based Report Summarization</li>
              </ul>
            </div>

            <div className="service-card bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-white">
                AI Consulting & Strategy
              </h3>
              <p className="text-gray-400 mb-4">
                Strategize, plan, and execute AI-first transformations.
              </p>
              <ul className="list-disc list-inside text-gray-300">
                <li>AI Feasibility Assessment</li>
                <li>End-to-End AI Roadmap Planning</li>
                <li>PoC/MVP Development</li>
                <li>Training & Workshops for Teams</li>
              </ul>
            </div>

            <div className="service-card bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Newsletter Intelligence & Content Automation
              </h3>
              <p className="text-gray-400 mb-4">
                Leverage AI to keep your audience informed and engaged.
              </p>
              <ul className="list-disc list-inside text-gray-300">
                <li>AI-Driven Newsletter Creation & Scheduling</li>
                <li>Content Summarization & Personalization</li>
                <li>Engagement & Open-rate Optimization</li>
                <li>Integration with Mailchimp, Substack, etc.</li>
              </ul>
            </div>

            <div className="service-card bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Cloud & DevOps for AI
              </h3>
              <p className="text-gray-400 mb-4">
                Deploy your AI models and applications with confidence.
              </p>
              <ul className="list-disc list-inside text-gray-300">
                <li>MLOps & Continuous Deployment</li>
                <li>Docker/Kubernetes Setup</li>
                <li>Scalable Cloud Architecture</li>
                <li>CI/CD Pipelines for AI/ML Workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h3 className="section-subtitle text-blue-400 text-center text-lg uppercase tracking-widest mb-4">Industries We Serve</h3>
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-8">
            Industries We Serve
          </h2>
          <p className="industries-subtitle text-gray-300 text-center text-lg mb-12 max-w-3xl mx-auto">
            We cater to a wide range of industries, delivering tailored AI
            and tech solutions to meet specific needs:
          </p>

          <div className="industries-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="industry-card bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Healthcare
              </h3>
              <p className="text-gray-400">
                Transforming patient care and operations with AI-powered
                diagnostics, data analytics, and telemedicine solutions.
              </p>
            </div>
            <div className="industry-card bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-white">
                E-commerce & Retail
              </h3>
              <p className="text-gray-400">
                Enhancing customer experiences with personalized
                recommendations, inventory management, and secure online
                transactions.
              </p>
            </div>
            <div className="industry-card bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Finance & Banking
              </h3>
              <p className="text-gray-400">
                Streamlining processes with AI, blockchain, and machine
                learning for fraud detection, risk assessment, and smarter
                investment strategies.
              </p>
            </div>
            <div className="industry-card bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-white">Energy</h3>
              <p className="text-gray-400">
                Optimizing energy management, forecasting, and
                sustainability with IoT and data-driven AI solutions.
              </p>
            </div>
            <div className="industry-card bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Real Estate
              </h3>
              <p className="text-gray-400">
                Revolutionizing property management, investment decisions,
                and customer engagement with AI and predictive analytics.
              </p>
            </div>
            <div className="industry-card bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Manufacturing
              </h3>
              <p className="text-gray-400">
                Driving automation, predictive maintenance, and operational
                efficiency with AI, machine learning, and IoT technologies.
              </p>
            </div>
            <div className="industry-card bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Transportation & Logistics
              </h3>
              <p className="text-gray-400">
                Optimizing supply chain, delivery routes, and logistics
                operations with AI-powered solutions.
              </p>
            </div>
            <div className="industry-card bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Media & Entertainment
              </h3>
              <p className="text-gray-400">
                Personalizing content, automating production, and enhancing
                audience engagement with AI.
              </p>
            </div>
          </div>
        </div>
      </section>
      

      {/* Process Section */}
      <section className="process-section py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h3 className="section-subtitle text-blue-400 text-center text-lg uppercase tracking-widest mb-4">
            How We Build Your Success
          </h3>
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-8">
            Our Development Process
          </h2>

          <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Requirements Gathering",
                desc: "We engage with stakeholders to gather comprehensive project requirements and understand their goals through collaborative discussions.",
                icon: "https://img.icons8.com/ios/100/task.png",
                step: "01",
              },
              {
                title: "Design & Planning",
                desc: "Our team crafts a user-centric design and creates a detailed project plan, outlining the architecture, timelines, and deliverables.",
                icon: "https://img.icons8.com/ios/100/blueprint.png",
                step: "02",
              },
              {
                title: "Development",
                desc: "Our skilled developers bring your vision to life, leveraging modern technologies to build a secure and scalable product that meets all specifications.",
                icon: "https://img.icons8.com/ios/100/code--v1.png",
                step: "03",
              },
              {
                title: "Testing",
                desc: "We subject your product to rigorous testing to ensure flawless performance across all devices, identifying and resolving any issues before launch.",
                icon: "https://img.icons8.com/ios/100/inspection.png",
                step: "04",
              },
              {
                title: "Support & Maintenance",
                desc: "Our commitment extends beyond launch, providing ongoing maintenance and support to keep your product thriving in the ever-evolving digital landscape.",
                icon: "https://img.icons8.com/ios/100/handshake.png",
                step: "05",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="process-card bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center"
              >
                <span className="step-number text-blue-400 font-bold text-2xl mb-4">
                  {item.step}
                </span>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="process-icon mb-4 h-16"
                />
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-gray-400 mb-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;




