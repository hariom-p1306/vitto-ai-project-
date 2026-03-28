
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (!email) {
            alert("Please enter email");
            return;
        }

        alert("Subscribed successfully!");
        setEmail("");
    };
    return (
        <div className="bg-[#1A1A2E] text-white min-h-screen">

            {/* HERO SECTION */}
            <section className="flex flex-col items-center justify-center text-center px-6 py-20">

                <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
                    AI-First Infrastructure for Modern Financial Services
                </h1>

                <p className="mt-6 text-gray-300 max-w-2xl text-lg">
                    Built specifically for Banks, NBFCs, and MFIs.
                    Not retrofitted AI. Not fragmented vendors.
                    A unified platform for intelligent lending.
                </p>

                <div className="mt-8 flex gap-4">
                    <button
                        onClick={() => navigate("/signup")}
                        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-medium transition"
                    >
                        Book a Demo
                    </button>

                    <button
                        onClick={() =>
                            document.getElementById("platform").scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                        className="border border-gray-400 hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition"
                    >
                        Explore Platform
                    </button>
                </div>

            </section>

            {/* PROBLEM SECTION */}
            <section className="px-6 py-16 bg-[#16213E]">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    The Reality of Today’s Lending Technology
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

                    <div className="bg-[#1A1A2E] p-6 rounded-xl shadow-lg hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-2 text-red-500">01</h3>
                        <p className="font-semibold">Fragmented Systems</p>
                        <p className="text-gray-400 mt-2">
                            Siloed LOS, LMS, and CRM systems with no unified data layer.
                        </p>
                    </div>

                    <div className="bg-[#1A1A2E] p-6 rounded-xl shadow-lg hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-2 text-red-500">02</h3>
                        <p className="font-semibold">Non-AI Native Vendors</p>
                        <p className="text-gray-400 mt-2">
                            AI is added on top of legacy systems instead of being built from scratch.
                        </p>
                    </div>

                    <div className="bg-[#1A1A2E] p-6 rounded-xl shadow-lg hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-2 text-red-500">03</h3>
                        <p className="font-semibold">Reactive Collections</p>
                        <p className="text-gray-400 mt-2">
                            No predictive intelligence, only manual follow-ups and delayed actions.
                        </p>
                    </div>

                    <div className="bg-[#1A1A2E] p-6 rounded-xl shadow-lg hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-2 text-red-500">04</h3>
                        <p className="font-semibold">Static Rule Engines</p>
                        <p className="text-gray-400 mt-2">
                            Rules that don’t learn or adapt to changing borrower behavior.
                        </p>
                    </div>

                </div>

            </section>

            {/* SOLUTION SECTION */}
            <section className="px-6 py-20 bg-[#1A1A2E]">

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT SIDE TEXT */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            AI-native decisioning meets full stack operational automation
                        </h2>

                        <p className="text-gray-400 leading-relaxed">
                            Vitto is built from the ground up as an AI-first infrastructure
                            for financial institutions. Instead of layering AI on top of
                            fragmented systems, it unifies data, decisioning, and operations
                            into a single intelligent platform.
                        </p>
                    </div>

                    {/* RIGHT SIDE FEATURES */}
                    <div className="space-y-6">

                        <div className="bg-[#16213E] p-5 rounded-xl hover:scale-105 transition">
                            <h3 className="font-semibold text-lg text-red-500">
                                Domain-trained Models
                            </h3>
                            <p className="text-gray-400 mt-2">
                                Models trained specifically for credit, risk, and lending workflows.
                            </p>
                        </div>

                        <div className="bg-[#16213E] p-5 rounded-xl hover:scale-105 transition">
                            <h3 className="font-semibold text-lg text-red-500">
                                Unified Architecture
                            </h3>
                            <p className="text-gray-400 mt-2">
                                Single platform integrating LOS, LMS, CRM, and AI decisioning.
                            </p>
                        </div>

                        <div className="bg-[#16213E] p-5 rounded-xl hover:scale-105 transition">
                            <h3 className="font-semibold text-lg text-red-500">
                                Explainability
                            </h3>
                            <p className="text-gray-400 mt-2">
                                Transparent AI decisions with clear reasoning for compliance.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            {/* AI LAYER SECTION */}
            <section className="px-6 py-20 bg-[#16213E]">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    The AI Layer of Vitto
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {/* Card 1 */}
                    <div className="bg-[#1A1A2E] p-6 rounded-xl hover:scale-105 transition">
                        <h3 className="text-lg font-semibold text-red-500">
                            Data-Based Assessment
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Analyze structured and unstructured borrower data for insights.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#1A1A2E] p-6 rounded-xl hover:scale-105 transition">
                        <h3 className="text-lg font-semibold text-red-500">
                            ML Models
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Predict creditworthiness using domain-trained machine learning models.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#1A1A2E] p-6 rounded-xl hover:scale-105 transition">
                        <h3 className="text-lg font-semibold text-red-500">
                            Rule Engine & Decisioning
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Combine rules and AI for accurate lending decisions.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#1A1A2E] p-6 rounded-xl hover:scale-105 transition">
                        <h3 className="text-lg font-semibold text-red-500">
                            Fraud Intelligence
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Detect anomalies and prevent fraudulent loan applications.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#1A1A2E] p-6 rounded-xl hover:scale-105 transition">
                        <h3 className="text-lg font-semibold text-red-500">
                            Collection Intelligence
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Predict repayment behavior and optimize recovery strategies.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#1A1A2E] p-6 rounded-xl hover:scale-105 transition">
                        <h3 className="text-lg font-semibold text-red-500">
                            Agentic AI Layer
                        </h3>
                        <p className="text-gray-400 mt-2">
                            AI agents assisting borrowers, field agents, and underwriters.
                        </p>
                    </div>

                </div>

            </section>

            {/* BUSINESS IMPACT SECTION */}
            <section className="px-6 py-20 bg-[#1A1A2E]">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Measurable Impact from Day One
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">

                    {/* Card 1 */}
                    <div className="bg-[#16213E] p-6 rounded-xl hover:scale-105 transition">
                        <h3 className="text-3xl font-bold text-red-500">2x</h3>
                        <p className="mt-2 font-semibold">Faster Credit Decisions</p>
                        <p className="text-gray-400 mt-2 text-sm">
                            Reduce approval time using AI-driven decisioning systems.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#16213E] p-6 rounded-xl hover:scale-105 transition">
                        <h3 className="text-3xl font-bold text-red-500">30%</h3>
                        <p className="mt-2 font-semibold">Lower Portfolio Risk</p>
                        <p className="text-gray-400 mt-2 text-sm">
                            Better risk assessment with domain-trained ML models.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#16213E] p-6 rounded-xl hover:scale-105 transition">
                        <h3 className="text-3xl font-bold text-red-500">25%</h3>
                        <p className="mt-2 font-semibold">Higher Recovery Rates</p>
                        <p className="text-gray-400 mt-2 text-sm">
                            Predictive collections improve repayment outcomes.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#16213E] p-6 rounded-xl hover:scale-105 transition">
                        <h3 className="text-3xl font-bold text-red-500">50+</h3>
                        <p className="mt-2 font-semibold">Seamless Integrations</p>
                        <p className="text-gray-400 mt-2 text-sm">
                            Easily integrate with existing banking systems and APIs.
                        </p>
                    </div>

                </div>

            </section>

            {/* SOCIAL PROOF SECTION */}
            <section className="px-6 py-20 bg-[#16213E]">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Trusted by Financial Institutions
                </h2>

                {/* LOGOS */}
                <div className="flex flex-wrap justify-center gap-8 mb-12 text-gray-400">
                    <span className="text-lg">BankCorp</span>
                    <span className="text-lg">FinServe</span>
                    <span className="text-lg">CreditX</span>
                    <span className="text-lg">NBFC Pro</span>
                    <span className="text-lg">MicroFinance Hub</span>
                </div>

                {/* TESTIMONIALS */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

                    {/* Testimonial 1 */}
                    <div className="bg-[#1A1A2E] p-6 rounded-xl">
                        <p className="text-gray-300">
                            “Vitto helped us reduce loan approval time significantly while maintaining
                            strict compliance. The AI-driven decisioning is a game changer.”
                        </p>
                        <h4 className="mt-4 font-semibold">Rahul Sharma</h4>
                        <p className="text-gray-500 text-sm">Head of Credit, FinServe NBFC</p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-[#1A1A2E] p-6 rounded-xl">
                        <p className="text-gray-300">
                            “The unified platform replaced multiple disconnected systems. Our operations
                            are now faster, smarter, and more efficient.”
                        </p>
                        <h4 className="mt-4 font-semibold">Anjali Verma</h4>
                        <p className="text-gray-500 text-sm">CTO, CreditX Solutions</p>
                    </div>

                </div>

            </section>

            {/* CTA BANNER */}
            <section className="px-6 py-20 bg-red-600 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Discover the key to grow your business
                </h2>

                <p className="text-white mt-4 text-lg">
                    Unlock faster decisioning, better risk control, and smarter operations.
                </p>

                <div className="mt-8 flex justify-center gap-4">

                    <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                        Book a Demo
                    </button>

                    <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition">
                        Learn More
                    </button>

                </div>

            </section>

            {/* FOOTER */}
            <footer className="bg-[#0F172A] text-gray-400 px-6 py-12">

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

                    {/* LOGO + TAGLINE */}
                    <div>
                        <h3 className="text-xl font-bold text-white">Vitto</h3>
                        <p className="mt-4 text-sm">
                            AI-native infrastructure for modern financial services.
                        </p>
                    </div>

                    {/* NAV LINKS */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Platform</h4>
                        <ul className="space-y-2">
                            <li className="hover:text-white cursor-pointer">AI Platform</li>
                            <li className="hover:text-white cursor-pointer">Automation</li>
                            <li className="hover:text-white cursor-pointer">API Infrastructure</li>
                            <li className="hover:text-white cursor-pointer">Collections</li>
                        </ul>
                    </div>

                    {/* NEWSLETTER */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded bg-gray-800 text-white outline-none"
                        />

                        <button
                            onClick={handleSubscribe}
                            className="mt-4 w-full bg-red-600 py-2 rounded hover:bg-red-700"
                        >
                            Subscribe
                        </button>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="text-center mt-10 text-sm">
                    © 2026 Vitto. All rights reserved.
                </div>

            </footer>

        </div>
    );
};

export default Home;