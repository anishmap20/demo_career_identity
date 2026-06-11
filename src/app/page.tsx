'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  Zap,
  Mic,
  MonitorPlay,
  Camera,
  Repeat,
  ClipboardX,
  MonitorCheck,
  Check,
  Mail,
  Shield,
  Clock,
  Sparkles,
  ArrowRight,
  Code2,
  HelpCircle,
  AlertTriangle
} from 'lucide-react';
import Image from 'next/image';

export default function DemoCareerIdentity() {
  const [isOpen, setIsOpen] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-[#3ed496]/20 selection:text-[#123f2f]">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src="/images/carerid-logo.jpeg" 
            alt="Career ID Logo" 
            width={160} 
            height={48} 
            className="object-contain" 
            priority
          />
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="mailto:info@careerid.in" 
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#15a371] transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@careerid.in
          </a>
          <span className="hidden md:inline text-xs text-slate-300">|</span>
          <span className="bg-[#e6f7f0] text-[#123f2f] text-xs font-bold px-3 py-1.5 rounded-full border border-[#bce8d6]">
            ₹249 / test flat rate
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#123f2f] to-[#0a231a] text-white py-24 px-6 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(62,212,150,0.12),transparent_60%)]"></div>
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-[#3ed496] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Next-Gen Assessment Engine
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-3xl">
            Hire Smarter with <span className="text-[#3ed496]">AI-Powered</span> Technical Tests
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Create progressive, 4-layer technical assessments in minutes. Strictly proctored, instantly graded, and optimized for 35+ domains.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button 
              onClick={handleOpenModal}
              className="bg-[#2eb386] hover:bg-[#259b73] text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-[#2eb386]/20 flex items-center gap-2 hover:translate-x-1 duration-200 cursor-pointer"
            >
              Start Testing
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-left text-sm text-slate-400">
              <span className="text-white font-bold block text-xl">₹249 <span className="text-xs font-normal text-slate-400">/ test</span></span>
              Pay-as-you-go • No monthly commitments
            </div>
          </div>

        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-white border-b border-slate-100 py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#123f2f]">35+</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">Tech Domains</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#123f2f]">4-Layer</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">Testing Rubric</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#123f2f]">3 mins</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">AI Test Generation</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#123f2f]">₹249</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">Flat Cost Per Candidate</p>
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#2eb386]">Next-Gen Hiring</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Designed for Impressive Candidate Assessment
          </h3>
          <p className="text-slate-600">
            Ditch traditional, easily bypassable assessment tools. CareerID delivers a reliable sandbox environment built to accurately measure engineering capability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#e6f7f0] flex items-center justify-center text-[#123f2f] mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-slate-900">AI Test Builder</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              No need to maintain question banks. Describe the role requirements, and our AI constructs a fresh, non-searchable 4-layer challenge in 3–5 minutes.
            </p>
          </div>

          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#e6f7f0] flex items-center justify-center text-[#123f2f] mb-6">
              <Code2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-slate-900">Live Execution Sandbox</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Candidates write code against hidden test suites in an integrated Monaco editor, build SQL layouts, or layout architecture models on Excalidraw whiteboards.
            </p>
          </div>

          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#e6f7f0] flex items-center justify-center text-[#123f2f] mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-slate-900">Multi-Modal Anti-Cheat</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Continuous proctoring with tab-switch detection, browser lockouts, screenshot intervals, and automated flag tags ensures absolute exam integrity.
            </p>
          </div>
        </div>
      </section>

      {/* The 4-Layer Timeline Showcase */}
      <section className="bg-slate-100/60 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#2eb386]">The Grading Model</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              4 Progressive Evaluation Layers
            </h3>
            <p className="text-slate-600">
              Each test progresses from speed checks to complex scenario architectures, ensuring complete evaluation of skills.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-32 space-y-12">
            {[
              {
                layer: "L0",
                title: "Speed & Coverage (10% Weight)",
                desc: "Rapid-fire timed questions measuring domain knowledge width. Faster correct inputs yield higher scores.",
                tags: ["Timed MCQ", "Immediate Answers", "Speed Scoring"]
              },
              {
                layer: "L1",
                title: "Reality Check (20% Weight)",
                desc: "Micro-scenarios with intentionally deceptive trap answers. Discovers developers who rely on rote memorization.",
                tags: ["Trap MCQs", "Conceptual Triggers", "Scenario Selection"]
              },
              {
                layer: "L2",
                title: "Execution & Systems (40% Weight)",
                desc: "Active programming environment containing test cases + SQL execution sandbox + live Excalidraw designs.",
                tags: ["Monaco Code Editor", "Excalidraw Diagramming", "Sandbox Grading"]
              },
              {
                layer: "L3",
                title: "Senior Reasoning (30% Weight)",
                desc: "Complex debugging blocks and system architectural bottlenecks. Graded by AI against a strict structural rubric.",
                tags: ["AI Missed Concept Scoring", "Code Debugging", "Architecture Rubric"]
              }
            ].map((step, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-[17px] top-0.5 bg-white border-4 border-[#2eb386] rounded-full w-8 h-8 flex items-center justify-center shadow-sm group-hover:bg-[#123f2f] group-hover:border-[#3ed496] transition-colors duration-300">
                  <span className="text-[10px] font-black text-slate-800 group-hover:text-white">{step.layer}</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-slate-600 max-w-3xl text-sm leading-relaxed mb-4">{step.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((t, tIdx) => (
                      <span key={tIdx} className="bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Old Way vs CareerID */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#2eb386]">Platform Comparison</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            How CareerID Compares
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Old Way */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 relative">
            <div className="flex items-center gap-2 mb-6 text-slate-500 font-bold uppercase text-sm">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Traditional Platforms
            </div>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span>Rigid template questions easily looked up online</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span>Days spent manually creating assessments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span>Bypassable anti-cheat rules with simple tab switching</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span>Recruiters spend hours parsing through raw, code answers</span>
              </li>
            </ul>
          </div>

          {/* CareerID Way */}
          <div className="bg-white border-2 border-[#2eb386] rounded-2xl p-8 shadow-lg relative">
            <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#2eb386] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
              Recommended
            </div>
            <div className="flex items-center gap-2 mb-6 text-[#123f2f] font-bold uppercase text-sm">
              <CheckCircle2 className="w-5 h-5 text-[#2eb386]" />
              CareerID Test Engine
            </div>
            <ul className="space-y-4 text-sm text-slate-800">
              <li className="flex items-start gap-3">
                <span className="text-[#2eb386] font-bold mt-0.5">✓</span>
                <span>Progressive 4-layer sandbox testing everything from MCQs to architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2eb386] font-bold mt-0.5">✓</span>
                <span>AI generates assessment suites in 3–5 minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2eb386] font-bold mt-0.5">✓</span>
                <span>Full screen capture, tab-switch penalties, and copy-paste locks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2eb386] font-bold mt-0.5">✓</span>
                <span>Instant automated report mapping out candidate strengths & recommendations</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proctoring Grid */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#3ed496]">Strict Integrity</h2>
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              State-of-the-Art Proctoring Suite
            </h3>
            <p className="text-slate-400">
              Never worry about exam leakages or external assistance. CareerID has comprehensive safeguards baked in.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { icon: <Mic className="w-6 h-6 text-[#3ed496]" />, label: "Audio Recording" },
              { icon: <MonitorPlay className="w-6 h-6 text-[#3ed496]" />, label: "Screen Capture" },
              { icon: <Camera className="w-6 h-6 text-[#3ed496]" />, label: "Photo Snapshots" },
              { icon: <Repeat className="w-6 h-6 text-amber-500" />, label: "Tab penalty" },
              { icon: <ClipboardX className="w-6 h-6 text-amber-500" />, label: "Paste Blocks" },
              { icon: <MonitorCheck className="w-6 h-6 text-[#3ed496]" />, label: "Multi-Screen Info" }
            ].map((p, pIdx) => (
              <div key={pIdx} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="flex justify-center mb-4">{p.icon}</div>
                <p className="text-xs font-semibold text-slate-300">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#2eb386]">Process</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            How to Get Started
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Generate Assessment", desc: "Input skill domains. Our AI builds a custom 4-layer challenge matching your hiring goals." },
            { step: "2", title: "Invite Candidates", desc: "Send candidate links. They write code, design whiteboards, and submit within a secure window." },
            { step: "3", title: "Read AI Reports", desc: "Receive immediate breakdown detailing competencies, weaknesses, and hiring recommendations." }
          ].map((s, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#e6f7f0] rounded-lg border border-[#bce8d6] flex items-center justify-center font-bold text-[#123f2f]">
                {s.step}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{s.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA & Contact Box */}
      <section className="bg-gradient-to-r from-[#123f2f] to-[#1e6f51] py-16 px-6 text-center text-white relative">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-[#3ed496] font-bold text-xs uppercase tracking-widest">Pricing & Access</span>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight">
              Start evaluating for just ₹249 per person
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
              Fully transparent pay-as-you-go pricing. You only pay for candidate test invitations sent. No subscriptions, setup costs, or overhead.
            </p>
          </div>

          <div className="bg-white text-slate-800 rounded-2xl p-8 max-w-xl mx-auto shadow-2xl border border-white/10">
            <div className="w-14 h-14 bg-[#e6f7f0] rounded-full flex items-center justify-center mb-4 mx-auto border-2 border-[#2eb386]">
              <Mail className="w-6 h-6 text-[#123f2f]" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-slate-900">Request Sandbox Access</h4>
            <p className="text-slate-500 text-xs mb-6 max-w-sm mx-auto">
              Get setup on the platform and set up your initial assessment in under 5 minutes.
            </p>
            <div className="bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">Direct Email:</span>
              <a 
                href="mailto:info@careerid.in" 
                className="text-lg md:text-xl font-black text-[#15a371] hover:text-[#123f2f] hover:underline transition-colors"
              >
                info@careerid.in
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 px-6 border-t border-slate-100 text-center text-slate-400 text-xs">
        <p>© {new Date().getFullYear()} CareerID Test Engine. All rights reserved.</p>
        <p className="mt-1">Hyderabad, India • careerid.in</p>
      </footer>

      {/* Access Request Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => { setIsOpen(false); setSubmitted(false); setEmailInput(''); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold text-lg p-1"
            >
              ✕
            </button>
            
            {!submitted ? (
              <form onSubmit={(e) => { e.preventDefault(); if (emailInput) setSubmitted(true); }} className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-[#e6f7f0] rounded-xl flex items-center justify-center text-[#2eb386] mx-auto mb-2">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950">Start Testing</h3>
                  <p className="text-slate-500 text-sm">
                    Enter your work email to configure your custom assessment.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="you@company.com" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2eb386]/30 focus:border-[#2eb386] text-sm"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#2eb386] hover:bg-[#259b73] text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  Configure Assessment
                </button>
                <p className="text-[10px] text-center text-slate-400">
                  Flat rate of ₹249 per test. Pay only for sent invitations.
                </p>
              </form>
            ) : (
              <div className="text-center space-y-6 py-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-[#e6f7f0] rounded-full flex items-center justify-center text-[#2eb386] mx-auto border-4 border-white shadow-md">
                  <Check className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-950">Setup Requested!</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
                    We've received your request. A setup link and sandbox credentials have been sent to <span className="font-semibold text-slate-900">{emailInput}</span>.
                  </p>
                </div>
                <button 
                  onClick={() => { setIsOpen(false); setSubmitted(false); setEmailInput(''); }}
                  className="w-full bg-[#123f2f] hover:bg-[#0a231a] text-white font-bold py-3 px-6 rounded-xl transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
