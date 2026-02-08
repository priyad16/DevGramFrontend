import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className="min-h-screen bg-base-200 font-sans" data-theme="nord">
            {/* HERO SECTION */}
            <div className="hero min-h-[80vh] bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-extrabold text-primary mb-6 animate-fade-in-up">
                            Connect, Share, and Grow with DevGram
                        </h1>
                        <p className="py-6 text-xl text-base-content/80 mb-8 animate-fade-in-up delay-100">
                            The premier community for developers to showcase skills, build meaningful connections,
                            and find new opportunities. Join thousands of developers today!
                        </p>
                        <div className="flex justify-center gap-4 animate-fade-in-up delay-200">
                            <Link to="/signup" className="btn btn-primary btn-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                Get Started
                            </Link>
                            <Link to="/login" className="btn btn-outline btn-primary btn-lg hover:bg-primary hover:text-white transition-all duration-300">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* FEATURES SECTION */}
            <div className="py-20 px-4 bg-base-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-primary mb-16">
                        Why Join DevGram?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1: Secure Authentication */}
                        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-default border border-base-300">
                            <div className="card-body items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                </div>
                                <h3 className="card-title text-xl mb-2">Secure Access</h3>
                                <p className="text-base-content/70">
                                    Robust Login and Signup system powered by JWT for secure and seamless authentication.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2: Profile Management */}
                        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-default border border-base-300">
                            <div className="card-body items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4 text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                <h3 className="card-title text-xl mb-2">Profile Management</h3>
                                <p className="text-base-content/70">
                                    Create and customize your professional profile to showcase your skills and personality.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3: Smart Feed */}
                        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-default border border-base-300">
                            <div className="card-body items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                    </svg>
                                </div>
                                <h3 className="card-title text-xl mb-2">Smart Feed</h3>
                                <p className="text-base-content/70">
                                    Discover other developers and potential connections tailored to your network.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4: Send Requests */}
                        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-default border border-base-300">
                            <div className="card-body items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-info/10 flex items-center justify-center mb-4 text-info">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                </div>
                                <h3 className="card-title text-xl mb-2">Connect</h3>
                                <p className="text-base-content/70">
                                    Send connection requests to developers you want to add to your professional network.
                                </p>
                            </div>
                        </div>

                        {/* Feature 5: Review Requests */}
                        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-default border border-base-300">
                            <div className="card-body items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-4 text-success">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="card-title text-xl mb-2">Review Requests</h3>
                                <p className="text-base-content/70">
                                    Manage incoming connection requests. Accept or ignore them to curate your circle.
                                </p>
                            </div>
                        </div>

                        {/* Feature 6: Connections */}
                        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-default border border-base-300">
                            <div className="card-body items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-warning/10 flex items-center justify-center mb-4 text-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                </div>
                                <h3 className="card-title text-xl mb-2">My Network</h3>
                                <p className="text-base-content/70">
                                    View and manage your connected peers. Build strong professional relationships.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
