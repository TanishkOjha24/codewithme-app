import React, { useState, useEffect, useRef } from 'react';

// ----- SVG ICONS -----
// These are simple React components for our icons.

const BrainCircuitIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.08.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.33 4.68-4.56 4.93.36.31.69.92.69 1.85V21c0 .27.16.59.67.5A10 10 0 0 0 22 12a10 10 0 0 0-10-10z" /></svg> );
const CodeIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg> );
const VideoIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 8l-6 4 6 4V8z" /><rect x="2" y="6" width="14" height="12" rx="2" ry="2" /></svg> );
const FireIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c-4.4 2.9-6.2 7.6-3.8 11.2 2.4 3.6 7.1 5.8 11.2 3.8C24.8 12.6 22.9 7.9 18.5 4.3A9.5 9.5 0 0 0 12 2z"/><path d="M12.5 6C11.2 7.7 10 11.3 11 14c.5 1.4 1.5 2.5 3 3 .7.3 1.5.3 2 0"/></svg> );
const CheckCircleIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> );
const XCircleIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> );
const TrophyIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.87 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.13 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg> );
const LockIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> );
const LightbulbIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 9 8c0 1.3.5 2.6 1.5 3.5.7.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> );
const RotateCcwIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg> );
const StarIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> );
const ZapIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2z"/></svg> );
const TwitterIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> );
const GithubIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> );

// ----- Animation Component -----

// A reusable component to animate elements as they enter the viewport.
const AnimatedDiv = ({ children, className }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`${className} transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {children}
        </div>
    );
};


const Logo = ({ onClick, theme = 'light' }) => {
    const textColor = theme === 'dark' ? 'text-white' : 'text-slate-800';
    return (
    <div onClick={onClick} className="inline-flex items-center gap-2 cursor-pointer">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-orange-500">
            <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className={`text-2xl font-bold ${textColor}`}>CodeWithMe<span className="text-orange-500">.</span></span>
    </div>
)};

const GlassCard = ({ children, className }) => (
    <div className={`bg-white/60 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${className}`}>
        {children}
    </div>
);


// ----- Page Components -----

const Header = ({ setPage, isLoggedIn, setIsLoggedIn }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-lg border-b border-white/20 shadow-sm">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Logo onClick={() => setPage('home')} />
                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-slate-600 hover:text-orange-500 transition-colors">Features</a>
                    <a href="#courses" className="text-slate-600 hover:text-orange-500 transition-colors">Courses</a>
                    <a href="#about" className="text-slate-600 hover:text-orange-500 transition-colors">About Us</a>
                </div>
                <div className="flex items-center gap-4">
                    {isLoggedIn ? (
                        <>
                            <button onClick={() => setPage('dashboard')} className="font-semibold text-slate-600 hover:text-orange-500 transition-colors">Dashboard</button>
                            <button onClick={() => setIsLoggedIn(false)} className="px-5 py-2.5 bg-orange-500 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all duration-300">Logout</button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => setPage('login')} className="font-semibold text-slate-600 hover:text-orange-500 transition-colors">Log In</button>
                            <button onClick={() => setPage('login')} className="px-5 py-2.5 bg-orange-500 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all duration-300">Sign Up</button>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

const HeroSection = ({ setPage }) => (
    <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-6">
            <AnimatedDiv className="flex flex-col items-center">
                <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 leading-tight">
                    Your Personal AI Guide to 
                    <span className="block mt-2 bg-gradient-to-r from-orange-500 to-amber-400 text-transparent bg-clip-text">Mastering Code</span>
                </h1>
                <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">Stop guessing your learning path. Get a personalized, AI-generated roadmap, watch curated videos, and practice with interactive challenges—all in one place. ✨</p>
                <button onClick={() => setPage('login')} className="mt-10 px-8 py-4 bg-orange-500 text-white text-lg font-bold rounded-lg shadow-xl shadow-orange-500/40 hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
                    Start Your Journey (It's Free!)
                </button>
            </AnimatedDiv>
        </div>
    </section>
);

const StatsSection = () => (
    <section className="py-12 bg-white/50">
        <AnimatedDiv className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <p className="text-4xl font-bold text-orange-500">20+</p>
                    <p className="mt-2 text-slate-600">Courses Available</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-orange-500">4+</p>
                    <p className="mt-2 text-slate-600">Languages Supported</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-orange-500">500+</p>
                    <p className="mt-2 text-slate-600">Coding Challenges</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-orange-500">AI-Powered</p>
                    <p className="mt-2 text-slate-600">Learning Roadmaps</p>
                </div>
            </div>
        </AnimatedDiv>
    </section>
);

const FeaturesSection = () => {
     const features = [
        { icon: <BrainCircuitIcon className="text-orange-500" />, title: "AI-Powered Roadmaps", description: "Tell us your goal, and our AI will generate a step-by-step learning path just for you." },
        { icon: <VideoIcon className="text-orange-500" />, title: "Curated Video Tutorials", description: "No more endless searching. We link the best YouTube tutorials directly to each topic in your roadmap." },
        { icon: <CodeIcon className="text-orange-500" />, title: "Interactive Coding", description: "Watch a concept, then immediately apply it in our integrated code editor with real-time feedback." }
    ];
    return (
        <section id="features" className="py-20">
            <div className="container mx-auto px-6">
                <AnimatedDiv className="flex flex-col items-center">
                    <h2 className="text-4xl font-bold text-slate-800 text-center">How It Works</h2>
                    <p className="mt-4 text-lg text-slate-600 text-center max-w-xl mx-auto">Learning to code has never been this streamlined.</p>
                </AnimatedDiv>
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <AnimatedDiv key={index} className="flex">
                            <GlassCard>
                                <div className="w-16 h-16 bg-white/70 rounded-full flex items-center justify-center mb-6">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                                <p className="text-slate-600">{feature.description}</p>
                            </GlassCard>
                        </AnimatedDiv>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CoursesSection = () => {
    const courses = [ { name: "Python", emoji: "🐍", color: "from-blue-400 to-teal-400" }, { name: "JavaScript", emoji: "💛", color: "from-yellow-400 to-amber-500" }, { name: "Java", emoji: "☕", color: "from-red-500 to-orange-500" }, { name: "Go", emoji: "🐹", color: "from-cyan-400 to-sky-500" }, { name: "React", emoji: "⚛️", color: "from-blue-500 to-indigo-500" }, { name: "SQL", emoji: "📊", color: "from-gray-400 to-slate-500" } ];
    return(
        <section id="courses" className="py-20 bg-orange-500/10">
            <div className="container mx-auto px-6">
                 <AnimatedDiv className="flex flex-col items-center">
                    <h2 className="text-4xl font-bold text-slate-800 text-center">Explore Our Courses</h2>
                    <p className="mt-4 text-lg text-slate-600 text-center max-w-xl mx-auto">Start with the most in-demand languages and frameworks.</p>
                </AnimatedDiv>
                <AnimatedDiv className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {courses.map(course => ( <div key={course.name} className={`bg-gradient-to-br ${course.color} text-white p-6 rounded-2xl font-bold text-xl flex flex-col items-center justify-center aspect-square shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl`}><span className="text-5xl mb-2">{course.emoji}</span><span>{course.name}</span></div> ))}
                </AnimatedDiv>
            </div>
        </section>
    );
};

const AboutSection = () => (
    <section id="about" className="py-20">
        <AnimatedDiv className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-slate-800">Our Mission</h2>
                    <p className="mt-4 text-lg text-slate-600">We believe learning to code should be an adventure, not a chore. CodeWithMe was born from a simple idea: create a single place where learners can get a clear, AI-guided path, watch the best content, and practice their skills without getting lost. We're here to make your coding journey fun, efficient, and effective.</p>
                    <div className="mt-6 flex gap-4">
                         <div className="flex items-center"><img className="w-12 h-12 rounded-full border-2 border-white shadow-md" src="https://placehold.co/100x100/FBCFE8/831843?text=TO" alt="Avatar Tanishk"/></div>
                         <div className="flex items-center -ml-5"><img className="w-12 h-12 rounded-full border-2 border-white shadow-md" src="https://placehold.co/100x100/A7F3D0/047857?text=AM" alt="Avatar Arnav"/></div>
                         <div className="flex items-center -ml-5"><img className="w-12 h-12 rounded-full border-2 border-white shadow-md" src="https://placehold.co/100x100/E9D5FF/3730A3?text=AP" alt="Avatar Akshata"/></div>
                         <div className="flex items-center ml-2"><p className="font-semibold text-slate-600">Built by Tanishk, Arnav, & Akshata.</p></div>
                    </div>
                </div>
                 <GlassCard className="p-0 overflow-hidden">
                    <img src="https://placehold.co/600x400/fff7ed/ea580c?text=CodeWithMe+Team" alt="CodeWithMe Team" className="w-full h-full object-cover"/>
                 </GlassCard>
            </div>
        </AnimatedDiv>
    </section>
);


const Footer = () => (
    <footer className="bg-slate-800 text-white py-12">
        <AnimatedDiv className="container mx-auto px-6 text-center">
            <Logo onClick={() => window.scrollTo(0, 0)} theme="dark" />
            <p className="mt-2 text-slate-400">Level up your coding skills, one step at a time.</p>
            <div className="flex justify-center gap-6 mt-6">
                <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors"><TwitterIcon /></a>
                <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors"><GithubIcon /></a>
            </div>
            <p className="mt-8 text-sm text-slate-500">&copy; {new Date().getFullYear()} CodeWithMe. All rights reserved.</p>
        </AnimatedDiv>
    </footer>
);


const LandingPage = ({ setPage }) => (
    <div>
        <HeroSection setPage={setPage} />
        <StatsSection />
        <FeaturesSection />
        <CoursesSection />
        <AboutSection />
    </div>
);

const LoginPage = ({ setPage, setIsLoggedIn }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    
    const handleSubmit = (e) => { e.preventDefault(); setIsLoggedIn(true); setPage('dashboard'); }
    
    return (
        <div className="min-h-screen flex items-center justify-center pt-20 p-4">
            <div className="w-full max-w-4xl flex overflow-hidden bg-white/60 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
                <div className="w-full md:w-1/2 p-12">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-slate-800">{isSignUp ? "Create Your Account" : "Welcome Back!"}</h1>
                        <p className="text-slate-600 mt-2">{isSignUp ? "Let's get you started on your coding journey." : "Ready to level up your skills?"}</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {isSignUp && (
                             <div>
                                <label className="block text-slate-700 font-semibold mb-2" htmlFor="name">Full Name</label>
                                <input className="w-full p-3 border border-slate-300 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-orange-500" type="text" id="name" placeholder="Tanishk Ojha" required />
                            </div>
                        )}
                        <div>
                            <label className="block text-slate-700 font-semibold mb-2" htmlFor="email">Email Address</label>
                            <input className="w-full p-3 border border-slate-300 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-orange-500" type="email" id="email" placeholder="you@example.com" required/>
                        </div>
                         <div>
                            <label className="block text-slate-700 font-semibold mb-2" htmlFor="password">Password</label>
                            <input className="w-full p-3 border border-slate-300 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-orange-500" type="password" id="password" placeholder="••••••••" required/>
                        </div>
                        <button type="submit" className="w-full py-3 bg-orange-500 text-white font-bold rounded-lg shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all duration-300">{isSignUp ? "Sign Up" : "Log In"}</button>
                        <p className="text-center text-sm text-slate-600 pt-4">
                           {isSignUp ? "Already have an account?" : "Don't have an account?"}
                           <button onClick={(e) => {e.preventDefault(); setIsSignUp(!isSignUp)}} className="font-semibold text-orange-500 hover:text-orange-600 ml-1">
                                {isSignUp ? "Log In" : "Sign Up"}
                           </button>
                        </p>
                    </form>
                </div>
                <div className="hidden md:flex flex-col justify-center w-1/2 p-12 text-white bg-gradient-to-br from-orange-500 to-amber-400">
                    <h2 className="text-3xl font-bold">Learn by Doing.</h2>
                    <p className="mt-4 opacity-90">Our interactive platform makes learning code intuitive, fun, and effective.</p>
                </div>
            </div>
        </div>
    );
};

const Dashboard = ({ setPage, setSelectedRoadmap }) => {
    const roadmaps = [ { id: 'python-beginner', language: "Python", level: "Beginner", progress: 75, emoji: "🐍" }, { id: 'js-intermediate', language: "JavaScript", level: "Intermediate", progress: 40, emoji: "💛" }, ];
    const achievements = [ { title: "Python Novice", icon: "🐍" }, { title: "Code Explorer", icon: "🗺️" }, { title: "Problem Solver", icon: "💡" }, ];
    const leaderboard = [ { name: "Akshata P.", score: 2450, avatar: "AV" }, { name: "Tanishk O.", score: 2100, avatar: "TO" }, { name: "Arnav M.", score: 1980, avatar: "AM" }, ];

    const handleRoadmapClick = (roadmap) => {
        setSelectedRoadmap(roadmap);
        setPage('roadmap');
    };

    return (
        <div className="min-h-screen pt-28">
            <AnimatedDiv className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h1 className="text-4xl font-bold text-slate-800">Your Dashboard</h1>
                        <p className="text-slate-600 mt-2">Welcome back! Let's get back to learning.</p>
                        <div className="mt-10">
                            <h2 className="text-2xl font-bold mb-4">Continue Learning</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {roadmaps.map(r => (
                                    <GlassCard key={r.id} className="cursor-pointer" onClick={() => handleRoadmapClick(r)}>
                                        <div className="flex justify-between items-start"><div className="text-4xl">{r.emoji}</div><p className="font-bold text-lg text-orange-500">{r.progress}%</p></div>
                                        <h3 className="text-xl font-bold mt-2">{r.language}</h3><p className="text-slate-500">{r.level} Roadmap</p>
                                        <div className="mt-4 w-full bg-white/50 rounded-full h-2.5"><div className="bg-orange-500 h-2.5 rounded-full" style={{width: `${r.progress}%`}}></div></div>
                                    </GlassCard>
                                ))}
                            </div>
                        </div>
                        <GlassCard className="mt-10">
                            <h2 className="text-2xl font-bold mb-4">Start a New Roadmap</h2>
                            <div className="flex flex-col md:flex-row gap-4">
                                <select className="w-full p-3 border border-slate-300 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-orange-500"><option>Choose Language</option><option>Python</option></select>
                                <select className="w-full p-3 border border-slate-300 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-orange-500"><option>Choose Level</option><option>Beginner</option></select>
                                <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all duration-300 whitespace-nowrap">Create with AI</button>
                            </div>
                        </GlassCard>
                    </div>
                    <div className="lg:col-span-1 space-y-8">
                        <GlassCard>
                             <h2 className="text-2xl font-bold mb-4">Your Progress</h2>
                             <div className="grid grid-cols-2 gap-4 text-center">
                                 <div className="bg-orange-100/50 border border-orange-200 p-4 rounded-lg">
                                    <p className="font-bold text-orange-800">Daily Streak</p>
                                    <div className="flex items-center justify-center gap-1"><FireIcon className="w-8 h-8 text-orange-500" /><span className="text-3xl font-bold text-orange-600">5</span></div>
                                 </div>
                                 <div className="bg-blue-100/50 border border-blue-200 p-4 rounded-lg">
                                    <p className="font-bold text-blue-800">Total XP</p>
                                    <div className="flex items-center justify-center gap-1"><StarIcon className="w-8 h-8 text-blue-500" /><span className="text-3xl font-bold text-blue-600">2100</span></div>
                                 </div>
                             </div>
                             <div className="mt-6">
                                <h3 className="font-bold mb-3">Achievements</h3>
                                <div className="space-y-3">
                                    {achievements.map(ach => (
                                        <div key={ach.title} className="flex items-center"><div className="w-10 h-10 rounded-lg bg-slate-200/50 flex items-center justify-center text-xl mr-4">{ach.icon}</div><p className="font-semibold text-slate-700">{ach.title}</p></div>
                                    ))}
                                </div>
                             </div>
                        </GlassCard>
                        <GlassCard>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><TrophyIcon className="text-amber-500" /> Leaderboard</h2>
                            <div className="space-y-4">
                                {leaderboard.map((user, index) => (
                                    <div key={user.name} className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <span className="font-bold w-6">{index + 1}.</span>
                                            <img className="w-10 h-10 rounded-full mx-3" src={`https://placehold.co/100x100/E9D5FF/3730A3?text=${user.avatar}`} alt={user.name}/>
                                            <span className="font-semibold">{user.name}</span>
                                        </div>
                                        <span className="font-bold text-orange-500">{user.score} XP</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </AnimatedDiv>
        </div>
    )
};

const RoadmapPage = ({ setPage, roadmap }) => {
    const topics = { 'python-beginner': [ { title: "Introduction to Python", status: "completed" }, { title: "Variables & Data Types", status: "completed" }, { title: "Working with Strings", status: "current" }, { title: "Conditional Logic (If/Else)", status: "locked" }, { title: "Functions", status: "locked" }, { title: "Lists and Loops", status: "locked" }, ] };
    const roadmapTopics = topics[roadmap.id] || [];
    const [progress, setProgress] = useState(0);
    useEffect(() => { setProgress(roadmap.progress); }, [roadmap.progress]);

    const getStatusStyles = (status) => {
        switch (status) {
            case 'completed': return { icon: <CheckCircleIcon className="text-green-500" />, button: <button className="font-semibold text-green-600">Completed</button> };
            case 'current': return { icon: <CodeIcon className="text-orange-500" />, button: <button onClick={() => setPage('coding')} className="px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-lg shadow-lg hover:bg-orange-600">Start Lesson</button> };
            case 'locked': default: return { icon: <LockIcon className="text-slate-400" />, button: <button className="font-semibold text-slate-400 cursor-not-allowed">Locked</button> };
        }
    };

    return (
        <div className="min-h-screen pt-28">
            <AnimatedDiv className="container mx-auto px-6">
                <button onClick={() => setPage('dashboard')} className="flex items-center gap-2 font-semibold text-slate-600 mb-4 hover:text-orange-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
                    Back to Dashboard
                </button>
                <GlassCard className="mb-8">
                     <h1 className="text-4xl font-bold text-slate-800">{roadmap.language} <span className="text-slate-500">{roadmap.level}</span></h1>
                     <div className="mt-4 w-full bg-white/50 rounded-full h-2.5"><div className="bg-orange-500 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{width: `${progress}%`}}></div></div>
                </GlassCard>
                <div className="space-y-4">
                    {roadmapTopics.map((topic, index) => {
                        const { icon, button } = getStatusStyles(topic.status);
                        return (
                            <GlassCard key={index} className="p-4 flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 flex items-center justify-center mr-4">{icon}</div>
                                    <h2 className={`text-lg font-semibold ${topic.status === 'locked' ? 'text-slate-400' : 'text-slate-800'}`}>{topic.title}</h2>
                                </div>
                                {button}
                            </GlassCard>
                        )
                    })}
                </div>
            </AnimatedDiv>
        </div>
    );
};

const CodingPage = () => {
    const [activeTab, setActiveTab] = useState('output');
    const testCases = [ { id: 1, passed: true }, { id: 2, passed: true }, { id: 3, passed: false } ];
    
    return(
        <div className="min-h-screen pt-28">
            <AnimatedDiv className="container mx-auto px-6">
                <GlassCard className="p-4 mb-6 flex justify-between items-center"><h1 className="text-xl font-bold">Python Basics: Functions</h1><button className="px-5 py-2.5 bg-slate-700 text-white font-semibold rounded-lg shadow-lg hover:bg-slate-800 transition-all duration-300">Next Lesson →</button></GlassCard>
                <div className="grid lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-4"><GlassCard className="p-6"><h2 className="text-xl font-bold mb-4">Instructions</h2><div className="text-slate-600 space-y-3 leading-relaxed"><p>A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function.</p><p><strong>Your Task:</strong> Complete the `greet` function to return the string "Hello, " followed by the name parameter.</p></div><h2 className="text-xl font-bold mb-4 mt-6">Tutorial Video</h2><div className="aspect-video bg-slate-200/50 rounded-lg flex items-center justify-center"><VideoIcon className="w-12 h-12 text-slate-400" /></div></GlassCard></div>
                    <div className="lg:col-span-8 flex flex-col h-full">
                        <div className="grid grid-cols-2 gap-6 items-start">
                            <div className="col-span-2 lg:col-span-1">
                                <div className="bg-slate-700 rounded-t-lg px-4 py-2 text-white text-sm flex justify-between items-center">
                                    <span>main.py</span>
                                    <button className="flex items-center gap-1 text-xs text-slate-300 hover:text-white"><RotateCcwIcon /> Reset Code</button>
                                </div>
                                <textarea defaultValue={`def greet(name):\n    # Your code here\n    return f"Hello, {name}!"\n\nprint(greet("Coder"))`} className="w-full bg-slate-800 rounded-b-lg text-white font-mono text-sm p-4 h-96 resize-none focus:outline-none" />
                            </div>
                             <div className="col-span-2 lg:col-span-1">
                                <div className="flex bg-slate-700 rounded-t-lg">
                                    <button onClick={() => setActiveTab('output')} className={`flex-1 py-2 text-white text-sm ${activeTab === 'output' ? 'bg-slate-800' : ''}`}>Output</button>
                                    <button onClick={() => setActiveTab('tests')} className={`flex-1 py-2 text-white text-sm ${activeTab === 'tests' ? 'bg-slate-800' : ''}`}>Test Cases</button>
                                    <button onClick={() => setActiveTab('hints')} className={`flex-1 py-2 text-white text-sm ${activeTab === 'hints' ? 'bg-slate-800' : ''}`}>Hints</button>
                                    <button onClick={() => setActiveTab('ai')} className={`flex-1 py-2 text-white text-sm ${activeTab === 'ai' ? 'bg-slate-800' : ''} flex items-center justify-center gap-1.5`}><ZapIcon className="w-4 h-4 text-yellow-300"/> AI</button>
                                </div>
                                <div className="bg-slate-800 rounded-b-lg text-white font-mono text-sm p-4 h-96">
                                   {activeTab === 'output' && (<div className="space-y-1"><p className="text-green-400">&gt; python main.py</p><p>Hello, Coder!</p></div>)}
                                   {activeTab === 'tests' && (<div className="space-y-2">
                                        {testCases.map(tc => (
                                            <div key={tc.id} className={`flex items-center p-2 rounded ${tc.passed ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                                                {tc.passed ? <CheckCircleIcon className="text-green-400 mr-2" /> : <XCircleIcon className="text-red-400 mr-2" />}
                                                <p>Test Case #{tc.id}</p>
                                            </div>
                                        ))}
                                   </div>)}
                                   {activeTab === 'hints' && (<div className="text-slate-400 space-y-2">
                                        <p className="flex items-start gap-2"><LightbulbIcon className="w-5 h-5 mt-0.5" /> Remember to use an f-string for easy formatting!</p>
                                   </div>)}
                                   {activeTab === 'ai' && (<div className="text-slate-400 space-y-2">
                                        <p className="text-yellow-300">AI Assistant is thinking...</p>
                                   </div>)}
                                </div>
                            </div>
                        </div>
                         <button className="w-full py-3 mt-6 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300">Run & Submit</button>
                    </div>
                </div>
            </AnimatedDiv>
        </div>
    )
}

// ----- Main App Component -----
export default function App() {
    const [page, setPage] = useState('home'); // 'home', 'login', 'dashboard', 'roadmap', 'coding'
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedRoadmap, setSelectedRoadmap] = useState(null);

    const renderPage = () => {
        switch (page) {
            case 'login': return <LoginPage setPage={setPage} setIsLoggedIn={setIsLoggedIn} />;
            case 'dashboard': return isLoggedIn ? <Dashboard setPage={setPage} setSelectedRoadmap={setSelectedRoadmap} /> : <LoginPage setPage={setPage} setIsLoggedIn={setIsLoggedIn} />;
            case 'roadmap': return isLoggedIn ? <RoadmapPage setPage={setPage} roadmap={selectedRoadmap} /> : <LoginPage setPage={setPage} setIsLoggedIn={setIsLoggedIn} />;
            case 'coding': return isLoggedIn ? <CodingPage /> : <LoginPage setPage={setPage} setIsLoggedIn={setIsLoggedIn} />;
            case 'home':
            default: return <LandingPage setPage={setPage} />;
        }
    };

    return (
        <div className="bg-slate-100 min-h-screen flex flex-col bg-fixed" style={{backgroundImage: 'radial-gradient(at 20% 20%, hsla(28,100%,74%,0.1) 0px, transparent 50%), radial-gradient(at 80% 20%, hsla(190,100%,74%,0.1) 0px, transparent 50%), radial-gradient(at 80% 80%, hsla(240,100%,74%,0.1) 0px, transparent 50%), radial-gradient(at 20% 80%, hsla(350,100%,74%,0.1) 0px, transparent 50%)'}}>
            <Header setPage={setPage} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <main className="flex-grow">{renderPage()}</main>
            <Footer />
        </div>
    );
}


