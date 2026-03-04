"use client";

import { useState } from "react";

export default function CaseTrackerPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── NAVBAR ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 h-[70px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#195dee] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2L15 5.5V12.5L9 16L3 12.5V5.5L9 2Z" fill="white" />
              </svg>
            </div>
            <span className="text-[#195dee] font-bold text-xl tracking-tight">MigraUSA</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="text-gray-700 font-medium hover:text-[#195dee] transition-colors flex items-center gap-1 text-sm">
                For Individuals
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 font-medium hover:text-[#195dee] transition-colors flex items-center gap-1 text-sm">
                For Businesses
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            <a href="#" className="text-gray-700 font-medium hover:text-[#195dee] transition-colors text-sm">Resources</a>
            <a href="#" className="text-gray-700 font-medium hover:text-[#195dee] transition-colors text-sm">Pricing</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-[#195dee] transition-colors">Log in</a>
            <a
              href="#"
              className="text-sm font-semibold bg-[#195dee] text-white px-5 py-2.5 rounded-full hover:bg-[#1449c7] transition-colors"
            >
              Get Started Free
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="#374151" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-[70px] left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-lg p-6 flex flex-col gap-4 md:hidden">
          <a href="#" className="text-gray-700 font-medium text-sm">For Individuals</a>
          <a href="#" className="text-gray-700 font-medium text-sm">For Businesses</a>
          <a href="#" className="text-gray-700 font-medium text-sm">Resources</a>
          <a href="#" className="text-gray-700 font-medium text-sm">Pricing</a>
          <a href="#" className="text-gray-700 font-medium text-sm">Log in</a>
          <a href="#" className="text-sm font-semibold bg-[#195dee] text-white px-5 py-2.5 rounded-full text-center">
            Get Started Free
          </a>
        </div>
      )}

      <main className="pt-[70px]">
        {/* ── HERO SECTION ── */}
        <section className="bg-white pt-16 pb-0 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#195dee] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <div className="w-2 h-2 bg-[#195dee] rounded-full animate-pulse"></div>
                Live case monitoring · 500K+ cases tracked
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
                USCIS, NVC &amp; EOIR<br />
                <span className="text-[#195dee]">Case Tracker</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl mx-auto">
                Quit waiting endlessly. Stay informed about your immigration case — without the guesswork.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-[#195dee] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#1449c7] transition-colors text-sm"
                >
                  Track My Case
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-semibold px-8 py-3.5 rounded-full hover:bg-gray-50 transition-colors text-sm"
                >
                  See how it works
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-6 mt-8">
                <div className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#10b981"><path d="M8 1l1.8 3.6L14 5.5l-3 2.9.7 4.1L8 10.4l-3.7 2.1.7-4.1L2 5.5l4.2-.9L8 1z"/></svg>
                  <span className="text-xs text-gray-500 font-medium">4.9/5 rating</span>
                </div>
                <div className="w-px h-4 bg-gray-200"></div>
                <span className="text-xs text-gray-500 font-medium">100% Free to start</span>
                <div className="w-px h-4 bg-gray-200"></div>
                <span className="text-xs text-gray-500 font-medium">No credit card required</span>
              </div>
            </div>

            {/* App Screenshot Mockup */}
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-gradient-to-b from-blue-50 to-white rounded-t-2xl pt-8 px-4 md:px-8">
                {/* Browser chrome */}
                <div className="bg-white rounded-t-xl shadow-2xl overflow-hidden border border-gray-200">
                  {/* Browser bar */}
                  <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 bg-white rounded-md border border-gray-200 px-3 py-1.5 text-xs text-gray-400 max-w-xs mx-auto">
                      app.migrausa.com/case-tracker
                    </div>
                  </div>

                  {/* App UI Mockup */}
                  <div className="bg-white p-6 min-h-[400px]">
                    {/* Dashboard header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">My Cases</h3>
                        <p className="text-xs text-gray-500">Last updated: Just now</p>
                      </div>
                      <button className="bg-[#195dee] text-white text-xs font-semibold px-4 py-2 rounded-full">
                        + Add Case
                      </button>
                    </div>

                    {/* Case cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {/* Case 1 */}
                      <div className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Receipt Number</span>
                            <p className="text-sm font-bold text-gray-900 mt-0.5">EAC2190134567</p>
                          </div>
                          <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            Approved
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">I-485</span>
                          <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">USCIS</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                          <div className="bg-green-500 h-1.5 rounded-full w-full"></div>
                        </div>
                      </div>

                      {/* Case 2 */}
                      <div className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Receipt Number</span>
                            <p className="text-sm font-bold text-gray-900 mt-0.5">WAC2110087321</p>
                          </div>
                          <span className="inline-flex items-center gap-1 bg-yellow-50 text-yellow-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                            Pending
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">I-130</span>
                          <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">USCIS</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                          <div className="bg-yellow-400 h-1.5 rounded-full w-3/5"></div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="border border-gray-100 rounded-xl p-4">
                      <h4 className="text-sm font-bold text-gray-900 mb-4">Recent Updates</h4>
                      <div className="space-y-4">
                        {[
                          { date: "Mar 1, 2026", status: "Case approved and decision emailed", color: "bg-green-500" },
                          { date: "Feb 18, 2026", status: "Biometrics appointment completed", color: "bg-blue-500" },
                          { date: "Jan 30, 2026", status: "Case transferred to new office", color: "bg-purple-500" },
                        ].map((item, i) => (
                          <div key={i} className="flex gap-3">
                            <div className="flex flex-col items-center">
                              <div className={`w-2.5 h-2.5 rounded-full ${item.color} mt-0.5 shrink-0`}></div>
                              {i < 2 && <div className="w-px flex-1 bg-gray-100 mt-1"></div>}
                            </div>
                            <div className="pb-2">
                              <p className="text-xs text-gray-500">{item.date}</p>
                              <p className="text-sm text-gray-700 font-medium">{item.status}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className="bg-[#195dee] py-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500K+", label: "Cases Tracked" },
                { number: "95%", label: "Update Accuracy" },
                { number: "24/7", label: "Real-time Monitoring" },
                { number: "3 mins", label: "Average Setup Time" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-white">{stat.number}</p>
                  <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES CARDS ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything you need to track your case
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Powerful tools designed for individuals and businesses navigating the immigration process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Card 1 – Blue */}
              <div className="bg-[#195dee] rounded-2xl p-7 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Case Status Tracking</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Instantly check your USCIS, NVC, and EOIR case status. Get notified the moment anything changes.
                </p>
              </div>

              {/* Card 2 – Orange */}
              <div className="bg-orange-500 rounded-2xl p-7 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Notifications</h3>
                <p className="text-orange-100 text-sm leading-relaxed">
                  Email and push alerts the instant your case status updates. Never miss a critical change again.
                </p>
              </div>

              {/* Card 3 – Purple */}
              <div className="bg-purple-600 rounded-2xl p-7 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Attorney Network</h3>
                <p className="text-purple-100 text-sm leading-relaxed">
                  Connect with experienced immigration attorneys who can help you navigate complex situations.
                </p>
              </div>

              {/* Card 4 – Light Blue */}
              <div className="bg-sky-100 rounded-2xl p-7">
                <div className="w-12 h-12 bg-sky-200 rounded-xl flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Processing Analytics</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  See real processing times by form type and service center. Know when to expect a decision.
                </p>
              </div>

              {/* Card 5 – Light Green */}
              <div className="bg-emerald-50 rounded-2xl p-7">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interview Prep</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Prepare for your immigration interview with tailored questions, tips, and document checklists.
                </p>
              </div>

              {/* Card 6 – Dark */}
              <div className="bg-gray-900 rounded-2xl p-7 text-white">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Business Immigration</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Track H-1B, L-1, and other work visas for your entire team. Compliance dashboards for HR.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Up and running in minutes
              </h2>
              <p className="text-gray-500 text-lg">
                Three simple steps to never miss a case update again.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
              {/* Connector lines (desktop) */}
              <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-px bg-gray-200 z-0"></div>

              {[
                {
                  step: "01",
                  title: "Add your receipt number",
                  desc: "Enter your USCIS receipt number (e.g., EAC, WAC, LIN, SRC, NBC, IOE). We support all form types.",
                  color: "bg-blue-50",
                  textColor: "text-[#195dee]",
                },
                {
                  step: "02",
                  title: "We monitor 24/7",
                  desc: "Our system checks your case status continuously and logs every change with timestamps.",
                  color: "bg-orange-50",
                  textColor: "text-orange-600",
                },
                {
                  step: "03",
                  title: "Get notified instantly",
                  desc: "Receive email or push notifications the moment your status changes. Act quickly when it matters.",
                  color: "bg-purple-50",
                  textColor: "text-purple-600",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center relative z-10">
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-5`}>
                    <span className={`text-2xl font-black ${item.textColor}`}>{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#195dee] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#1449c7] transition-colors text-sm"
              >
                Start Tracking for Free
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by thousands of applicants
              </h2>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#195dee"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-gray-500">4.9 out of 5 from 3,200+ reviews</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Maria G.",
                  visa: "I-485 • Approved",
                  quote: "I stopped refreshing the USCIS website obsessively. MigraUSA notified me the minute my case was approved. Absolute lifesaver.",
                },
                {
                  name: "Raj P.",
                  visa: "H-1B • Pending",
                  quote: "The analytics showing typical processing times for my service center gave me real peace of mind. I know exactly what to expect.",
                },
                {
                  name: "Sophie T.",
                  visa: "I-130 • Pending",
                  quote: "When my case moved to a new office, I got notified within minutes. My attorney was amazed I knew before the USCIS portal updated.",
                },
              ].map((t, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} width="14" height="14" viewBox="0 0 20 20" fill="#195dee"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.visa}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="py-20 bg-[#195dee]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Start tracking your case today
            </h2>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              Join 500,000+ applicants who trust MigraUSA to monitor their immigration journey. Free forever for individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#195dee] font-bold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors text-sm"
              >
                Get Started Free
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-sm"
              >
                Talk to an Attorney
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="bg-gray-900 text-gray-400 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
              {/* Brand */}
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#195dee] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 2L15 5.5V12.5L9 16L3 12.5V5.5L9 2Z" fill="white" />
                    </svg>
                  </div>
                  <span className="text-white font-bold text-lg">MigraUSA</span>
                </div>
                <p className="text-sm leading-relaxed mb-4">
                  The most trusted immigration case tracking platform in the US.
                </p>
                <div className="flex gap-3">
                  {["twitter", "facebook", "linkedin"].map((s) => (
                    <a key={s} href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.56v14.91C24 21.98 21.98 24 19.44 24H4.56C2.02 24 0 21.98 0 19.47V4.56C0 2.02 2.02 0 4.56 0h14.88C21.98 0 24 2.02 24 4.56z"/></svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Products */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-4">Products</h4>
                <ul className="space-y-3 text-sm">
                  {["Case Tracker", "Processing Times", "Visa Bulletin", "Interview Prep", "Document Checklist"].map((item) => (
                    <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
                <ul className="space-y-3 text-sm">
                  {["About Us", "Blog", "Careers", "Press", "Contact"].map((item) => (
                    <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-4">Resources</h4>
                <ul className="space-y-3 text-sm">
                  {["Immigration Guides", "Community Forum", "Attorney Directory", "News & Updates", "FAQ"].map((item) => (
                    <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
                <ul className="space-y-3 text-sm">
                  {["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"].map((item) => (
                    <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm">
                © 2026 MigraUSA. All rights reserved. Not a law firm. Not legal advice.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
