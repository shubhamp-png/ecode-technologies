// import React, { useState, useEffect } from 'react';
// import { 
//   Menu, X, ChevronDown, Code, Smartphone, Cloud, Users, Briefcase, Rocket, 
//   CheckCircle, ArrowRight, Mail, Phone, MapPin, Github, Linkedin, Twitter,
//   Globe, Database, Server, Zap, Shield, TrendingUp, Award, Clock, Target,
//   Layout, Layers, Cpu, Settings, BarChart, Monitor, Palette, Box,
//   GitBranch, Coffee, Heart, Star, MessageSquare, Send, Goal, Eye
// } from 'lucide-react';

// export default function MainPage() {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeService, setActiveService] = useState(0);
//   const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
      
//       const sections = ['home', 'about', 'services', 'hire-developers', 'contact'];
//       const current = sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
//       if (current) setActiveSection(current);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Animate stats on mount
//   useEffect(() => {
//     const targets = [150, 300, 60, 24];
//     const duration = 2000;
//     const steps = 60;
//     const increment = duration / steps;

//     let currentStep = 0;
//     const timer = setInterval(() => {
//       currentStep++;
//       const progress = currentStep / steps;
//       setAnimatedStats(targets.map(target => Math.floor(target * progress)));
      
//       if (currentStep >= steps) {
//         setAnimatedStats(targets);
//         clearInterval(timer);
//       }
//     }, increment);

//     return () => clearInterval(timer);
//   }, []);

//   // Auto-rotate services
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveService((prev) => (prev + 1) % 6);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMenuOpen(false);
//     }
//   };

//   const services = [
//     { 
//       icon: Globe, 
//       title: 'Web Development', 
//       desc: 'Responsive and modern websites tailored for your business needs',
//       features: ['Custom Web Applications', 'E-commerce Solutions', 'Progressive Web Apps (PWA)', 'CMS Development'],
//       color: 'from-blue-500 to-cyan-500'
//     },
//     { 
//       icon: Smartphone, 
//       title: 'Mobile App Development', 
//       desc: 'Native and cross-platform apps that engage users',
//       features: ['iOS & Android Apps', 'React Native', 'Flutter Development', 'App Maintenance & Support'],
//       color: 'from-purple-500 to-pink-500'
//     },
//     { 
//       icon: Cloud, 
//       title: 'Cloud Solutions', 
//       desc: 'Scalable cloud infrastructure and migration services',
//       features: ['AWS & Azure Migration', 'Cloud Architecture', 'DevOps Automation', 'Serverless Solutions'],
//       color: 'from-green-500 to-teal-500'
//     },
//     { 
//       icon: Rocket, 
//       title: 'Product Development', 
//       desc: 'Transform your ideas into market-ready digital products',
//       features: ['MVP Development', 'Product Strategy', 'UI/UX Design', 'Market Launch Support'],
//       color: 'from-orange-500 to-red-500'
//     },
//     { 
//       icon: Users, 
//       title: 'Staff Augmentation', 
//       desc: 'Expand your team with skilled tech professionals',
//       features: ['Dedicated Developers', 'Team Extension', 'Flexible Hiring Models', 'Skill-based Matching'],
//       color: 'from-indigo-500 to-purple-500'
//     },
//     { 
//       icon: Briefcase, 
//       title: 'Software Development', 
//       desc: 'Custom software solutions built for your challenges',
//       features: ['Enterprise Software', 'SaaS Applications', 'API Development', 'Legacy Modernization'],
//       color: 'from-pink-500 to-rose-500'
//     },
//   ];

//   const technologies = {
//     'Frontend': [
//       { name: 'React', icon: Layers },
//       { name: 'Vue.js', icon: Box },
//       { name: 'Angular', icon: Layout },
//       { name: 'TypeScript', icon: Code },
//       { name: 'HTML5/CSS3', icon: Palette }
//     ],
//     'Backend': [
//       { name: 'Node.js', icon: Server },
//       { name: 'Python', icon: Cpu },
//       { name: 'Java', icon: Coffee },
//       { name: 'PHP', icon: Code },
//       { name: '.NET', icon: Settings }
//     ],
//     'Mobile': [
//       { name: 'React Native', icon: Smartphone },
//       { name: 'Flutter', icon: Smartphone },
//       { name: 'iOS', icon: Smartphone },
//       { name: 'Android', icon: Smartphone },
//       { name: 'Ionic', icon: Smartphone }
//     ],
//     'Database': [
//       { name: 'MongoDB', icon: Database },
//       { name: 'PostgreSQL', icon: Database },
//       { name: 'MySQL', icon: Database },
//       { name: 'Firebase', icon: Database },
//       { name: 'Redis', icon: Database }
//     ],
//     'DevOps': [
//       { name: 'AWS', icon: Cloud },
//       { name: 'Google Cloud', icon: Cloud },
//       { name: 'Docker', icon: Box },
//       { name: 'Jenkins', icon: GitBranch },
//       { name: 'Kubernetes', icon: Server }
//     ],
//   };

//   const developers = [
//     { name: 'React JS', icon: Layers, experience: '5+ Years' },
//     { name: 'Node.js', icon: Server, experience: '5+ Years' },
//     { name: 'Vue.js', icon: Box, experience: '4+ Years' },
//     { name: 'Angular', icon: Layout, experience: '5+ Years' },
//     { name: 'Python', icon: Cpu, experience: '6+ Years' },
//     { name: 'Java', icon: Coffee, experience: '7+ Years' },
//     { name: 'PHP', icon: Code, experience: '8+ Years' },
//     { name: 'Flutter', icon: Smartphone, experience: '3+ Years' },
//     { name: 'iOS', icon: Smartphone, experience: '5+ Years' },
//     { name: 'Android', icon: Smartphone, experience: '6+ Years' },
//     { name: 'WordPress', icon: Globe, experience: '7+ Years' },
//     { name: 'Shopify', icon: Globe, experience: '4+ Years' }
//   ];

//   const stats = [
//     { value: animatedStats[0], label: 'Projects Delivered', icon: Rocket, suffix: '+' },
//     { value: animatedStats[1], label: 'Developers Deployed', icon: Users, suffix: '+' },
//     { value: animatedStats[2], label: 'Happy Clients', icon: Heart, suffix: '+' },
//     { value: animatedStats[3], label: 'Support Available', icon: Clock, suffix: '/7' },
//   ];

//   const whyChooseUs = [
//     { 
//       icon: Zap,
//       title: 'Quick Integration', 
//       desc: 'Seamlessly onboard developers for rapid deployment and immediate impact on your projects'
//     },
//     { 
//       icon: Award,
//       title: 'Reliable Delivery', 
//       desc: 'Consistent high-quality results guaranteed with our commitment to excellence'
//     },
//     { 
//       icon: TrendingUp,
//       title: 'Agile Methodology', 
//       desc: 'Adaptability and efficiency in project execution ensuring timely delivery'
//     },
//     { 
//       icon: Target,
//       title: 'Cost-Effective', 
//       desc: 'Competitive rates with premium quality resources for maximum ROI'
//     },
//   ];

//   const processSteps = [
//     { icon: MessageSquare, title: 'Consultation', desc: 'Discuss your requirements' },
//     { icon: Layout, title: 'Planning', desc: 'Strategic roadmap creation' },
//     { icon: Code, title: 'Development', desc: 'Agile development process' },
//     { icon: Rocket, title: 'Launch', desc: 'Deployment & support' },
//   ];

//   return (
//     <div className="min-h-screen  overflow-hidden">
//       {/* Navigation */}
//       <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('home')}>
//               <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
//                 <Code className="text-white" size={24} />
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
//                 Ecode Technologies
//               </span>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-8">
//               {['home', 'about', 'services', 'hire-developers', 'contact'].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className={`capitalize transition-all duration-300 relative group ${
//                     activeSection === section
//                       ? 'text-yellow-600 font-semibold'
//                       : 'text-gray-700 font-semibold hover:text-yellow-600'
//                   }`}
//                 >
//                   {section.replace('-', ' ')}
//                   <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-500 transform transition-transform duration-300 ${
//                     activeSection === section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
//                   }`}></span>
//                 </button>
//               ))}
//               <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
//                 Get Started <ArrowRight size={18} />
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 animate-slideDown">
//               {['home', 'about', 'services', 'hire-developers', 'contact'].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className="block w-full text-left py-3 px-4 capitalize hover:bg-blue-50 rounded transition-colors"
//                 >
//                   {section.replace('-', ' ')}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="pt-40 pb-40 px-4 relative bg-gradient-to-br from-slate-100 to-yellow-100">
//         {/* Animated background elements */}
//         <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full blur-2xl opacity-20 animate-float"></div>
//         <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-2xl opacity-20 animate-floatDelay"></div>
        
//         <div className="max-w-5xl mx-auto relative z-10 ">
//           <div className="grid md:grid-cols-0 text-center gap-12 items-center">
//             <div className="animate-fadeInLeft">
//               <div className="inline-flex items-center border border-yellow-600 gap-2 bg-yellow-100 text-black-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
//                 <Rocket size={18} />
//                 Your Trusted IT Partner
//               </div>
//               <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-16 animate-fadeInup">
//                 Hire Dedicated Developers & 
//                 <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent animate-gradient"> Teams – On Your Terms</span>
//               </h1>
//               <p className="text-xl text-gray-600 mb-8 animate-fadeInleft delay-200">
//                 Scale your business with vetted developers available on part-time, full-time, contract, and permanent hiring models.
//               </p>
//               <div className="item-center flex justify-center gap-4  ">
//                 <button 
//                   onClick={() => scrollToSection('services')}
//                   className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group animate-fadeInRight  delay-300"
//                 >
//                   Hire Developers
//                   <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button 
//                   onClick={() => scrollToSection('contact')}
//                   className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 animate-fadeInleft delay-400"
//                 >
//                   Book Free Consultation
//                 </button>
//               </div>
//             </div>
//             {/* <div className="relative animate-fadeInRight">
//               <div className="relative z-10 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
//                 <div className="grid grid-cols-3 gap-4 mb-6">
//                   {['React', 'Node.js', 'AWS', 'Python', 'Flutter', 'MongoDB'].map((tech, index) => (
//                     <div 
//                       key={index} 
//                       className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white text-center font-semibold hover:bg-white/30 transition-all cursor-pointer transform hover:scale-110"
//                       style={{ animationDelay: `${index * 0.1}s` }}
//                     >
//                       {tech}
//                     </div>
//                   ))}
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:bg-white/20 transition-all">
//                   <div className="flex items-center gap-2 mb-2">
//                     <Award className="animate-pulse" />
//                     <p className="text-sm">15+ Years Combined Experience</p>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-3xl font-bold">{animatedStats[1]}+</span>
//                     <span className="text-sm">Developers Ready</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
//               <div className="absolute -top-6 -left-6 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
//             </div> */}
//           </div>

//           {/* Stats */}
//           {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
//             {stats.map((stat, index) => {
//               const Icon = stat.icon;
//               return (
//                 <div 
//                   key={index} 
//                   className="text-center group hover:scale-110 transition-transform duration-300"
//                   style={{ animationDelay: `${index * 0.2}s` }}
//                 >
//                   <div className="flex items-center justify-center mb-3">
//                     <div className="bg-gradient-to-br from-yellow-600 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
//                       <Icon className="text-white" size={24} />
//                     </div>
//                   </div>
//                   <div className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-2">
//                     {stat.value}{stat.suffix}
//                   </div>
//                   <div className="text-gray-600">{stat.label}</div>
//                 </div>
//               );
//             })}
//           </div> */}
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 px-4 bg-white relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 animate-float"></div>
        
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center mb-16 animate-fadeInUp">
//             <div className="inline-flex items-center border border-yellow-600 gap-2 bg-yellow-100 text-black-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               <Star size={18} />
//               About Us
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Who We Are</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               With a strong focus on quality, transparency, and long-term partnerships, we enable companies to hire developers without the complexities of recruitment, payroll, and infrastructure.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="animate-fadeInLeft">
//               <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                
//                 Your Reliable IT Partner for Scalable Success
//               </h3>
//               <p className="text-gray-600 mb-6">
//                We are a technology-driven company specializing in dedicated resource hiring and developer outsourcing. We help startups, SMEs, and enterprises build scalable digital products by providing highly skilled developers and technical teams tailored to their business needs.

//               </p>
//               <div className="space-y-4">
//                 {[
//                   { icon: Heart, text: 'Customer-centric approach focused on your unique needs' },
//                   { icon: Shield, text: '100% transparency in processes and operations' },
//                   { icon: Award, text: 'Proven track record with 60+ successful projects' },
//                   { icon: TrendingUp, text: 'Agile methodology for efficient delivery' }
//                 ].map((item, index) => {
//                   const Icon = item.icon;
//                   return (
//                     <div 
//                       key={index} 
//                       className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300"
//                     >
//                       <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-200 transition-colors">
//                         <Icon className="text-green-600" size={20} />
//                       </div>
//                       <span className="text-gray-700">{item.text}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-4 animate-fadeInRight">
//               {[
//                 { icon: Code, title: 'Expert Team', desc: 'Skilled developers across all major technologies', color: 'from-blue-500 to-blue-600' },
//                 { icon: Rocket, title: 'Innovation', desc: 'Cutting-edge solutions for modern challenges', color: 'from-purple-500 to-purple-600' },
//                 { icon: Users, title: 'Collaboration', desc: 'Seamless integration with your team', color: 'from-green-500 to-green-600' },
//                 { icon: Briefcase, title: 'Reliability', desc: 'Consistent delivery on time and budget', color: 'from-orange-500 to-orange-600' }
//               ].map((item, index) => {
//                 const Icon = item.icon;
//                 return (
//                   <div
//                     key={index}
//                     className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-white hover:scale-105 transition-transform duration-300 cursor-pointer ${
//                       index % 2 === 1 ? 'mt-8' : ''
//                     }`}
//                   >
//                     <Icon size={40} className="mb-4 animate-pulse" />
//                     <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
//                     <p className="text-white/90 text-sm">{item.desc}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* vision mission Steps */}
//           <div className="mt-20">
//             <div className="text-center mb-16 animate-fadeInUp">
//             <div className="inline-flex items-center border border-yellow-600 gap-2 bg-yellow-100 text-black-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               <Star size={18} />
//               Ecode Technologies
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
        
//           </div>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div class="relative group">
//                     <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500">
//                         <div class="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                             <Eye className="text-white" size={28}/>
//                         </div>
                        
//                         <h4 class="text-xl font-bold text-gray-900 mb-2">Our Vision</h4>
//                         <p class="text-gray-600 text-md">To become a trusted global partner for businesses seeking reliable, scalable, and cost-effective development resources. We aim to empower organizations worldwide by delivering high-quality technology solutions, fostering long-term partnerships, and driving sustainable growth through innovation, transparency, and excellence.</p>
//                     </div>
                  
//                 </div>

//               <div class="relative group">
//                     <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500">
//                         <div class="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                             <Goal className="text-white" size={28}/>
//                         </div>
                       
//                         <h4 class="text-xl font-bold text-gray-900 mb-2">Our Mission</h4>
//                         <p class="text-gray-600 text-md">Deliver top-quality developers aligned with client goals Provide flexible hiring models without long-term risk Build long-term relationships through trust and performance Enable businesses to scale faster and smarter</p>
//                     </div>
                  
//                 </div>
//             </div>
//           </div>

//           {/* Process Steps */}
//           <div className="mt-20">
//             <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h2>
//             <div className="grid md:grid-cols-4 gap-6">
//               {processSteps.map((step, index) => {
//                 const Icon = step.icon;
//                 return (
//                   <div 
//                     key={index}
//                     className="relative group"
//                   >
//                     <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500">
//                       <div className="bg-gradient-to-br from-yellow-600 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                         <Icon className="text-white" size={28} />
//                       </div>
//                       <div className="absolute -top-3 -left-3 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
//                         {index + 1}
//                       </div>
//                       <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
//                       <p className="text-gray-600 text-sm">{step.desc}</p>
//                     </div>
//                     {index < processSteps.length - 1 && (
//                       <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-500"></div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20 px-4 relative overflow-hidden">
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 animate-floatDelay"></div>
        
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center mb-16 animate-fadeInUp">
//             <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               <Briefcase size={18} />
//               Our Hiring Models👨‍💻 
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hire Dedicated Developers</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Comprehensive IT solutions tailored to accelerate your business growth
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//             {services.map((service, index) => {
//               const Icon = service.icon;
//               return (
//                 <div
//                   key={index}
//                   className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group cursor-pointer"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
//                     <Icon className="text-white" size={32} />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
//                   <p className="text-gray-600 mb-4">{service.desc}</p>
//                   <ul className="space-y-2 mb-4">
//                     {service.features.map((feature, i) => (
//                       <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
//                         <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
//                     Learn More <ArrowRight size={18} />
//                   </button>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Technology Stack */}
//           <div className="mt-20">
//             <h3 className="text-3xl font-bold text-gray-900 text-center mb-12 flex items-center justify-center gap-3">
//               <Cpu className="text-blue-600 animate-pulse" />
//               Technology Stack We Master
//             </h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
//               {Object.entries(technologies).map(([category, techs], index) => (
//                 <div 
//                   key={index} 
//                   className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
//                     <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
//                     {category}
//                   </h4>
//                   <div className="space-y-3">
//                     {techs.map((tech, i) => {
//                       const TechIcon = tech.icon;
//                       return (
//                         <div 
//                           key={i} 
//                           className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer group"
//                         >
//                           <div className="bg-blue-100 p-1.5 rounded group-hover:bg-blue-200 transition-colors">
//                             <TechIcon className="text-blue-600" size={16} />
//                           </div>
//                           <span className="text-gray-700 text-sm font-medium">{tech.name}</span>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20 px-4 bg-gradient-to-br from-yellow-600 to-yellow-500 text-white relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-full opacity-10">
//           <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
//           <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-floatDelay"></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center mb-16 animate-fadeInUp">
//             <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               <Award size={18} />
//               Why Us
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Ecode Technologies</h2>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//               Experience matters, and we deliver excellence through proven methodologies
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {whyChooseUs.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <div 
//                   key={index} 
//                   className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group cursor-pointer hover:scale-105"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="bg-white/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
//                       <Icon size={28} />
//                     </div>
//                     <div className="text-4xl font-bold text-blue-200">0{index + 1}</div>
//                   </div>
//                   <h3 className="text-xl font-bold mb-3">{item.title}</h3>
//                   <p className="text-blue-100">{item.desc}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Hire Developers Section */}
//       <section id="hire-developers" className="py-20 px-4 bg-white relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30 animate-float"></div>
        
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center mb-16 animate-fadeInUp">
//             <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               <Users size={18} />
//               Hire Talent
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hire Dedicated Developers</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Access top-tier talent to scale your development capabilities
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
//             {developers.map((dev, index) => {
//               const DevIcon = dev.icon;
//               return (
//                 <div
//                   key={index}
//                   className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 group cursor-pointer"
//                   style={{ animationDelay: `${index * 0.05}s` }}
//                 >
//                   <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
//                     <DevIcon className="text-white" size={28} />
//                   </div>
//                   <h3 className="font-bold text-gray-900 mb-2">{dev.name}</h3>
//                   <p className="text-sm text-gray-600 mb-1">Developers</p>
//                   <p className="text-xs text-blue-600 font-semibold">{dev.experience}</p>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-3xl p-12 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
//             <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
//               <div className="animate-fadeInLeft">
//                 <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
//                   <Rocket className="animate-bounce" />
//                   Build Your Dream Team
//                 </h3>
//                 <p className="text-blue-100 mb-6">
//                   Enhance your development capabilities with our pre-vetted developers. Choose from hourly or project-based engagement models.
//                 </p>
//                 <div className="grid grid-cols-2 gap-3">
//                   {['Pre-vetted Developers', 'Flexible Engagement', 'Quick Onboarding', 'Dedicated Support'].map((item, i) => (
//                     <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-colors">
//                       <CheckCircle size={18} className="flex-shrink-0" />
//                       <span className="text-sm">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all animate-fadeInRight">
//                 <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
//                   <Send size={24} />
//                   Request a Developer
//                 </h4>
//                 <form className="space-y-4">
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:bg-white/30 focus:outline-none transition-all"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:bg-white/30 focus:outline-none transition-all"
//                   />
//                   <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:bg-white/30 focus:outline-none transition-all">
//                     <option className="text-gray-900">Select Technology</option>
//                     {developers.map((dev, i) => (
//                       <option key={i} className="text-gray-900">{dev.name}</option>
//                     ))}
//                   </select>
//                   <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 hover:scale-105 transition-all flex items-center justify-center gap-2 group">
//                     Get Started 
//                     <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     <section id="contact" className="py-20 px-4 relative overflow-hidden">
//       <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
//                   <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
//                   <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                  
//                   <div className="relative z-10 text-center max-w-4xl mx-auto">
//                     <Rocket className="w-16 h-16 mx-auto mb-6 animate-bounce" />
//                     <h3 className="text-4xl font-bold mb-4">Ready to Build Your Team?</h3>
//                     <p className="text-xl text-blue-100 mb-8">
//                       Let's discuss your requirements and find the perfect developers for your project
//                     </p>
                    
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                       <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 hover:scale-105 transition-all shadow-lg flex items-center gap-2">
//                         <MessageSquare size={20} />
//                         Schedule a Call
//                       </button>
//                       <button 
//                         onClick={() => scrollToSection('contact')}
//                         className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:scale-105 transition-all flex items-center gap-2"
//                       >
//                         <Send size={20} />
//                         Get a Quote
//                       </button>
//                     </div>
      
//                     <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
//                       {[
//                         { icon: Award, label: '500+ Developers' },
//                         { icon: Star, label: '4.9/5 Rating' },
//                         { icon: Clock, label: '48hr Onboarding' }
//                       ].map((stat, index) => {
//                         const StatIcon = stat.icon;
//                         return (
//                           <div key={index} className="text-center">
//                             <StatIcon className="w-8 h-8 mx-auto mb-2 animate-pulse" />
//                             <p className="text-blue-100 text-sm">{stat.label}</p>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </div>
//     </section>
              

//       {/* Contact Section */}
//       <section id="contact" className="py-20 px-4 relative overflow-hidden">
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 animate-floatDelay"></div>
        
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center mb-16 animate-fadeInUp">
//             <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               <Mail size={18} />
//               Contact Us
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Have a project in mind? Let's discuss how we can help you succeed
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="animate-fadeInLeft">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
//                 <MessageSquare className="text-blue-600" />
//                 Contact Information
//               </h3>
//               <div className="space-y-6">
//                 {[
//                   { icon: Phone, title: 'Phone', info: '+1 (555) 123-4567', color: 'from-blue-500 to-blue-600' },
//                   { icon: Mail, title: 'Email', info: 'contact@techsolutions.com', color: 'from-purple-500 to-purple-600' },
//                   { icon: MapPin, title: 'Location', info: '123 Tech Street, Innovation City, TC 12345', color: 'from-green-500 to-green-600' }
//                 ].map((item, index) => {
//                   const Icon = item.icon;
//                   return (
//                     <div 
//                       key={index}
//                       className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300"
//                     >
//                       <div className={`bg-gradient-to-br ${item.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
//                         <Icon className="text-white" size={24} />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
//                         <p className="text-gray-600">{item.info}</p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               <div className="mt-8">
//                 <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                   <Star className="text-yellow-500" />
//                   Follow Us
//                 </h4>
//                 <div className="flex gap-4">
//                   {[
//                     { Icon: Twitter, color: 'hover:bg-blue-500' },
//                     { Icon: Linkedin, color: 'hover:bg-blue-700' },
//                     { Icon: Github, color: 'hover:bg-gray-800' }
//                   ].map((social, index) => {
//                     const Icon = social.Icon;
//                     return (
//                       <button
//                         key={index}
//                         className={`bg-gray-100 p-3 rounded-lg hover:text-white transition-all hover:scale-110 ${social.color}`}
//                       >
//                         <Icon size={20} />
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 animate-fadeInRight">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
//                 <Send className="text-blue-600" />
//                 Send us a Message
//               </h3>
//               <form className="space-y-4">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Last Name"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                   />
//                 </div>
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 />
//                 <textarea
//                   rows={5}
//                   placeholder="Tell us about your project..."
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
//                 ></textarea>
//                 <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 group">
//                   Send Message
//                   <Send className="group-hover:translate-x-1 transition-transform" size={18} />
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12 px-4 relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
        
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-lg flex items-center justify-center">
//                   <Code className="text-white" size={24} />
//                 </div>
//                 <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                   Ecode Technologies
//                 </h3>
//               </div>
//               <p className="text-gray-400">
//                 Empowering businesses with cutting-edge technology solutions since 2010.
//               </p>
//             </div>
//             <div>
//               <h4 className="font-bold mb-4 flex items-center gap-2">
//                 <Briefcase size={18} />
//                 Services
//               </h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Web Development</a></li>
//                 <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Mobile Apps</a></li>
//                 <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Cloud Solutions</a></li>
//                 <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Staff Augmentation</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold mb-4 flex items-center gap-2">
//                 <Users size={18} />
//                 Company
//               </h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">About Us</a></li>
//                 <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Careers</a></li>
//                 <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Blog</a></li>
//                 <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Case Studies</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold mb-4 flex items-center gap-2">
//                 <Shield size={18} />
//                 Legal
//               </h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Privacy Policy</a></li>
//                 <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Terms of Service</a></li>
//                 <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Cookie Policy</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 pt-8 items-center gap-4">
//             <p className="text-gray-400 text-center md:text-center">
//               &copy; 2026 Ecode Technologies. Dedicated Developers & Resource Hiring Partner.
//             </p>
//             {/* <div className="text-center flex items-center  text-gray-400">
//               Made with <Heart className="text-red-500 animate-pulse" size={16} /> by Ecode Technologies Team
//             </div> */}
//           </div>
//         </div>
//       </footer>

//       {/* CSS for animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
        
//         @keyframes floatDelay {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
        
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes fadeInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         @keyframes fadeInRight {
//           from {
//             opacity: 0;
//             transform: translateX(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .animate-floatDelay {
//           animation: floatDelay 6s ease-in-out infinite;
//           animation-delay: 1s;
//         }
        
//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out;
//         }
        
//         .animate-fadeInLeft {
//           animation: fadeInLeft 0.8s ease-out;
//         }
        
//         .animate-fadeInRight {
//           animation: fadeInRight 0.8s ease-out;
//         }
        
//         .animate-slideDown {
//           animation: slideDown 0.3s ease-out;
//         }
        
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
//       `}</style>
//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Code, Users, Briefcase, Clock, Target, Shield, 
  CheckCircle, ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter,
  Globe, Database, Server, Zap, TrendingUp, Award, MessageSquare,
  FileText, Calendar, UserCheck, Settings, Send, Star, Heart,
  Layers, Box, Layout, Cpu, Coffee, Smartphone, Cloud, GitBranch,
  DollarSign, Eye, Rocket, Activity, BarChart
} from 'lucide-react';

export default function DedicatedDevelopersWebsite() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedHiringModel, setSelectedHiringModel] = useState('dedicated');
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'who-we-are', 'vision-mission', 'hiring-models', 'process', 'why-choose-us', 'expertise', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate process steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const hiringModels = [
    {
      id: 'dedicated',
      icon: Users,
      title: 'Hire Dedicated Developers',
      features: [
        'Fully dedicated to your project',
        'Work as an extension of your in-house team',
        'Direct communication & daily reporting',
        'Long-term commitment'
      ],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'parttime',
      icon: Clock,
      title: 'Part-Time Developers',
      features: [
        'Ideal for MVPs, startups, and ongoing support',
        'Pay only for the hours you need',
        'Flexible engagement',
        'Cost-effective solution'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'fulltime',
      icon: Briefcase,
      title: 'Full-Time Developers',
      features: [
        '160 hours/month commitment',
        'Best for long-term projects',
        'Consistent delivery and ownership',
        'Complete dedication'
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'contract',
      icon: FileText,
      title: 'Contractual Hiring',
      features: [
        'Fixed-duration contracts (1–12 months)',
        'No recruitment overhead',
        'Easy scale-up or scale-down',
        'Flexible terms'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'permanent',
      icon: UserCheck,
      title: 'Permanent Hiring Support',
      features: [
        'Identify, evaluate, and onboard permanent talent',
        'Reduced hiring time and risk',
        'End-to-end support',
        'Quality guaranteed'
      ],
      color: 'from-pink-400 to-pink-600'
    }
  ];

  const processSteps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Requirement Discussion',
      desc: 'Understand your technical needs, budget, and timeline'
    },
    {
      number: '02',
      icon: UserCheck,
      title: 'Developer Shortlisting',
      desc: 'We share vetted profiles aligned with your requirements'
    },
    {
      number: '03',
      icon: Calendar,
      title: 'Interview & Selection',
      desc: 'You interview and select the right resource'
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Onboarding & Kickoff',
      desc: 'Quick onboarding with clear communication and tools'
    },
    {
      number: '05',
      icon: Activity,
      title: 'Ongoing Support & Management',
      desc: 'Regular updates, performance tracking, and support'
    }
  ];

  const whyChooseUs = [
    { icon: Award, title: 'Pre-vetted & Experienced Developers', desc: 'Top 3% talent rigorously screened' },
    { icon: Layers, title: 'Flexible Engagement Models', desc: 'Choose what works best for you' },
    { icon: DollarSign, title: 'Transparent Pricing', desc: 'No hidden costs or surprises' },
    { icon: UserCheck, title: 'Dedicated Account Manager', desc: 'Single point of contact' },
    { icon: Globe, title: 'Time-zone Friendly', desc: 'Communication that works for you' },
    { icon: Shield, title: 'NDA & IP Protection', desc: 'Your ideas are secure with us' }
  ];

  const technologies = [
    { name: 'React', icon: Layers, category: 'Frontend' },
    { name: 'Angular', icon: Layout, category: 'Frontend' },
    { name: 'Vue', icon: Box, category: 'Frontend' },
    { name: 'Node.js', icon: Server, category: 'Backend' },
    { name: 'Java', icon: Coffee, category: 'Backend' },
    { name: 'Python', icon: Cpu, category: 'Backend' },
    { name: 'PHP', icon: Code, category: 'Backend' },
    { name: 'Android', icon: Smartphone, category: 'Mobile' },
    { name: 'iOS', icon: Smartphone, category: 'Mobile' },
    { name: 'Flutter', icon: Smartphone, category: 'Mobile' },
    { name: 'React Native', icon: Smartphone, category: 'Mobile' },
    { name: 'AWS', icon: Cloud, category: 'Cloud & DevOps' },
    { name: 'Azure', icon: Cloud, category: 'Cloud & DevOps' },
    { name: 'Docker', icon: Box, category: 'Cloud & DevOps' },
    { name: 'Kubernetes', icon: Server, category: 'Cloud & DevOps' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('home')}>
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Code className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Ecode Technologies
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                { id: 'home', label: 'Home' },
                { id: 'who-we-are', label: 'About Us' },
                { id: 'hiring-models', label: 'Hiring Models' },
                { id: 'process', label: 'Process' },
                { id: 'why-choose-us', label: 'Why Us' },
                { id: 'contact', label: 'Contact' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`capitalize transition-all duration-300 relative group ${
                    activeSection === section.id
                      ? 'text-yellow-600 font-semibold'
                      : 'text-gray-700 hover:text-yellow-600'
                  }`}
                >
                  {section.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transform transition-transform duration-300 ${
                    activeSection === section.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold"
              >
                Get Started <ArrowRight size={18} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-yellow-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 animate-slideDown">
              {['home', 'who-we-are', 'hiring-models', 'process', 'why-choose-us', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-3 px-4 capitalize hover:bg-yellow-50 rounded transition-colors"
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-40 animate-floatDelay"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce shadow-md">
                <Star size={18} className="animate-spin" style={{ animationDuration: '3s' }} />
                Trusted Global Partner
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Hire Dedicated <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Developers & Teams</span>
                <br />
                <span className="text-4xl md:text-5xl">– On Your Terms</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Scale your business with vetted developers available on part-time, full-time, contract, and permanent hiring models.
              </p>
              
              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Users, text: 'Dedicated Developers & Teams' },
                  { icon: Layers, text: 'Flexible Hiring Models' },
                  { icon: DollarSign, text: 'Transparent Pricing' },
                  { icon: Zap, text: 'Quick Onboarding (7-14 Days)' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="bg-yellow-100 p-2 rounded-lg group-hover:bg-yellow-200 transition-colors">
                        <Icon className="text-yellow-600" size={20} />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('hiring-models')}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                >
                  Hire Developers
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-yellow-500 text-yellow-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <Calendar size={20} />
                  Book Free Consultation
                </button>
              </div>
            </div>

            {/* Hero Image/Illustration */}
            <div className="relative animate-fadeInRight">
              <div className="relative z-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                        <Users className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">500+</p>
                        <p className="text-yellow-100 text-sm">Developers</p>
                      </div>
                    </div>
                    <TrendingUp className="text-white animate-pulse" size={32} />
                  </div>
                </div>
                
                {/* <div className="grid grid-cols-2 gap-4">
                  {['React', 'Node.js', 'Python', 'Flutter'].map((tech, index) => (
                    <div 
                      key={index}
                      className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white text-center font-semibold hover:bg-white/30 transition-all cursor-pointer transform hover:scale-110"
                    >
                      {tech}
                    </div>
                  ))}
                </div> */}

                <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="text-white" size={20} />
                    <span className="text-white text-sm">Trusted by 200+ Companies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="text-white fill-white" size={16} />
                    <Star className="text-white fill-white" size={16} />
                    <Star className="text-white fill-white" size={16} />
                    <Star className="text-white fill-white" size={16} />
                    <Star className="text-white fill-white" size={16} />
                    <span className="text-white text-sm ml-2">4.9/5 Rating</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30 animate-float"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Eye size={18} />
              Company Introduction
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
              We are a <span className="font-bold text-yellow-600">Technology-driven Company</span> specializing in dedicated resource hiring and developer outsourcing. We help startups, SMEs, and enterprises build scalable digital products by providing highly skilled developers and technical teams tailored to their business needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              With a strong focus on <span className="font-bold text-yellow-600">Quality, Transparency, and Long-term Partnerships</span>, we enable companies to hire developers without the complexities of recruitment, payroll, and infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="py-20 px-4 bg-gradient-to-br from-yellow-400 to-orange-500 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-floatDelay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 animate-fadeInLeft border border-white/20">
              <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                🌍 Our Vision
              </h3>
              <p className="text-yellow-50 text-lg leading-relaxed">
                To become a trusted global partner for businesses seeking reliable, scalable, and cost-effective development resources.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 animate-fadeInRight border border-white/20">
              <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                🎯 Our Mission
              </h3>
              <ul className="space-y-3">
                {[
                  'Deliver top-quality developers aligned with client goals',
                  'Provide flexible hiring models without long-term risk',
                  'Build long-term relationships through trust and performance',
                  'Enable businesses to scale faster and smarter'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-yellow-50">
                    <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Models Section */}
      <section id="hiring-models" className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30 animate-floatDelay"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Briefcase size={18} />
              Flexible Options
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Hiring Models</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the engagement model that best fits your project needs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hiringModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <div
                  key={model.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 hover:border-yellow-400 group overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`bg-gradient-to-br ${model.color} p-6 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform">
                        <Icon className="text-white" size={28} />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{model.title}</h3>
                    <ul className="space-y-3">
                      {model.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {/* <button className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                      Choose Model
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-yellow-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-40 animate-float"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Settings size={18} className="animate-spin" style={{ animationDuration: '3s' }} />
              How It Works
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Simple Hiring Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From requirement to delivery - a streamlined approach
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            {/* <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 transform -translate-y-1/2"></div> */}
            
            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                return (
                  <div
                    key={index}
                    className={`text-center transition-all duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}
                  >
                    <div className={`relative mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${
                      isActive 
                        ? 'bg-gradient-to-br from-yellow-400 to-orange-500 shadow-2xl scale-110' 
                        : 'bg-white border-4 border-yellow-400 hover:border-orange-500'
                    }`}>
                      <Icon className={`${isActive ? 'text-white' : 'text-yellow-600'}`} size={32} />
                      <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${  
                        isActive 
                          ? 'bg-white text-yellow-600' 
                          : 'bg-yellow-400 text-white'
                      }`}>
                        {step.number}
                      </div>
                    </div>
                    <h4 className={`text-lg font-bold mb-2 transition-colors ${
                      isActive ? 'text-yellow-600' : 'text-gray-900'
                    }`}>
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30 animate-float"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Award size={18} />
              Our Advantages
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just a hiring agency - we're your growth partner
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-floatDelay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              <Code size={18} />
              Technologies
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Technical Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master-level developers in cutting-edge technologies
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-6"></div>
          </div>

          {/* Technology Categories */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {['Frontend', 'Backend', 'Mobile', 'Cloud & DevOps'].map((category, index) => {
              const categoryTechs = technologies.filter(t => t.category === category);
              return (
                <div 
                  key={category}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all border border-white/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">{category}</h3>
                  <div className="space-y-3">
                    {categoryTechs.map((tech, i) => {
                      const TechIcon = tech.icon;
                      return (
                        <div 
                          key={i}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
                        >
                          <div className="bg-yellow-400/20 p-2 rounded group-hover:bg-yellow-400/30 transition-colors">
                            <TechIcon className="text-yellow-400" size={18} />
                          </div>
                          <span className="text-gray-200 font-medium">{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Expertise */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-center">Plus More...</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['AI / Data Science', 'CRM Development', 'HRMS Solutions', 'Custom SaaS Development', 'E-commerce', 'Blockchain'].map((tech, index) => (
                <span 
                  key={index}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-110 transition-transform cursor-pointer shadow-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-400 to-orange-500 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-floatDelay"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Rocket className="w-20 h-20 mx-auto mb-6 text-white animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Hire Your Dedicated Developer?
          </h2>
          <p className="text-xl text-yellow-50 mb-8">
            Tell us your requirement and get matched with the right developer within days.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-yellow-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-50 hover:scale-105 transition-all shadow-2xl flex items-center gap-3 mx-auto"
          >
            <Calendar size={24} />
            Get Free Consultation
            <ArrowRight size={24} />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30 animate-floatDelay"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Send size={18} />
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how we can help you build your dream team
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fadeInLeft">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MessageSquare className="text-yellow-600" />
                Get in Touch
              </h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, title: 'Email', info: 'info@ecodetechnologies.com', color: 'from-yellow-400 to-orange-500' },
                  { icon: Phone, title: 'Phone / WhatsApp', info: '+1 (555) 123-4567', color: 'from-green-400 to-green-600' },
                  { icon: Globe, title: 'Website', info: 'www.ecodetechnologies.com', color: 'from-blue-400 to-blue-600' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className={`bg-gradient-to-br ${item.color} p-3 rounded-lg group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.info}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="text-yellow-500" />
                  Connect With Us
                </h4>
                <div className="flex gap-4">
                  {[
                    { Icon: Linkedin, color: 'hover:bg-blue-700' },
                    { Icon: Twitter, color: 'hover:bg-blue-400' }
                  ].map((social, index) => {
                    const Icon = social.Icon;
                    return (
                      <button
                        key={index}
                        className={`bg-gray-100 p-3 rounded-lg hover:text-white transition-all hover:scale-110 ${social.color}`}
                      >
                        <Icon size={20} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-8 border-2 border-yellow-200 animate-fadeInRight">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Send className="text-yellow-600" />
                Send us a Message
              </h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border-2 border-yellow-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:outline-none transition-all bg-white"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border-2 border-yellow-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:outline-none transition-all bg-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-lg border-2 border-yellow-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:outline-none transition-all bg-white"
                />
                <select className="w-full px-4 py-3 rounded-lg border-2 border-yellow-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:outline-none transition-all bg-white">
                  <option>Select Hiring Model</option>
                  <option>Dedicated Developers</option>
                  <option>Part-Time Developers</option>
                  <option>Full-Time Developers</option>
                  <option>Contractual Hiring</option>
                  <option>Permanent Hiring</option>
                </select>
                <textarea
                  rows={5}
                  placeholder="Tell us about your requirement..."
                  className="w-full px-4 py-3 rounded-lg border-2 border-yellow-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:outline-none transition-all bg-white"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 group">
                  Send Message
                  <Send className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400"></div>
        
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <Code className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Ecode Technologies
            </span>
          </div>
          <p className="text-gray-300 mb-2">
            © 2026 Ecode Technologies | Dedicated Developers & Resource Hiring Partner
          </p>
          
        </div>
      </footer>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes floatDelay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-floatDelay {
          animation: floatDelay 6s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}