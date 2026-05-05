import React from 'react';
import { Users, Star, Award, Rocket, ArrowRight, Quote } from 'lucide-react';

export default function WorkshopPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 px-6 py-20 selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <Rocket className="w-4 h-4" />
            <span>Mission Success</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            IARRD Conducts Inaugural Masterclass <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              “Vinveliyil Oru Payanam”
            </span>
          </h1>
          <p className="text-slate-400 font-medium">
            May 5, 2026 • By The IARRD Core Team
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group">
          <img
            src="/workshop.png"
            alt="IARRD Space Masterclass"
            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        {/* The Hook */}
        <div className="prose prose-invert max-w-none text-lg leading-relaxed text-slate-300">
          <p>
            When we launched registrations for <strong>Vinveliyil Oru Payanam</strong>, our mission was simple: democratize elite astrophysics by breaking down complex concepts exclusively in Tamil. We expected 50 passionate students. The reality completely shattered our expectations.
          </p>
        </div>

        {/* KPI Stats Grid (Replaces the boring bullet points) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center space-y-2 hover:border-slate-700 transition-colors">
            <Users className="w-8 h-8 mx-auto text-blue-400" />
            <div className="text-3xl font-bold text-white">157</div>
            <div className="text-sm text-slate-400">Total Registrations</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center space-y-2 hover:border-slate-700 transition-colors">
            <Users className="w-8 h-8 mx-auto text-indigo-400" />
            <div className="text-3xl font-bold text-white">103</div>
            <div className="text-sm text-slate-400">Live Attendees</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center space-y-2 hover:border-slate-700 transition-colors">
            <Award className="w-8 h-8 mx-auto text-purple-400" />
            <div className="text-3xl font-bold text-white">72</div>
            <div className="text-sm text-slate-400">Official Certificates</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center space-y-2 hover:border-slate-700 transition-colors">
            <Star className="w-8 h-8 mx-auto text-yellow-400" />
            <div className="text-3xl font-bold text-white">4.8<span className="text-lg text-slate-500">/5</span></div>
            <div className="text-sm text-slate-400">Average Rating</div>
          </div>
        </div>

        {/* Session Details */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Decoding the Cosmos</h2>
          <p className="text-lg leading-relaxed text-slate-300">
            Led by our Chief Scientific Officer, Tamizh Amuthan, attendees were taken through a custom-built, interactive 3D web experience. Instead of traditional presentations, we decoded the terrifying realities of Black Holes, Space-Time Paradoxes, and Interstellar Travel through pure physics and native Tamil.
          </p>
        </div>

        {/* Social Proof / Testimonial Block */}
        <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 rounded-2xl p-8 relative">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-blue-500/20" />
          <blockquote className="relative z-10 text-xl font-medium text-slate-200 text-center italic mt-4">
            "Amazing session! Loved it, very easy to understand. The way of conveying is really top-notch... extremely good start. IARRD is taking a great initiative."
          </blockquote>
          <div className="text-center mt-4 text-blue-400 font-semibold">— Masterclass Attendees</div>
        </div>

        {/* High-Conversion CTA for Part 2 */}
        <div className="mt-16 bg-slate-900 border-2 border-indigo-500/30 rounded-2xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <h3 className="text-3xl font-bold text-white relative z-10">Ready to Cross the Event Horizon?</h3>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto relative z-10">
            Based on massive demand, we are officially launching <strong>Part 2</strong>. Dive deeper into Time Travel, the Multiverse, Orbital Mechanics, and Quantum Concepts. Seats are strictly limited.
          </p>
          
          <div className="relative z-10 pt-4">
            <a 
              href="YOUR_GOOGLE_FORM_LINK_HERE" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/25"
            >
              Secure Your Seat for Just ₹99
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}