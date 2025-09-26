import React, { useState } from 'react';
import { Phone, Calendar, Clock, Star, Truck, Scale, Droplets, Brain, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const [activeTab, setActiveTab] = useState('hvac');

  const nicheExamples = {
    hvac: {
      icon: <Truck className="w-6 h-6" />,
      title: "HVAC Contractors",
      pain: "Missed after-hours calls = lost $1,200+ emergency jobs",
      solution: "Your site answers 24/7, shows real-time availability, and books emergency calls before you wake up."
    },
    lawyers: {
      icon: <Scale className="w-6 h-6" />,
      title: "Lawyers",
      pain: "Prospects compare you to 5 other firms before calling",
      solution: "Your site builds instant trust with case-specific FAQs, client intake forms, and calendar booking—so you only talk to ready-to-hire clients."
    },
    plumbers: {
      icon: <Droplets className="w-6 h-6" />,
      title: "Plumbers & Electricians",
      pain: "You’re great at your trade—but bad at chasing quotes",
      solution: "Clients pick their service time and submit details upfront. You just show up and get paid."
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Mentis Liberum</span>
            </div>
            <div className="hidden md:block text-sm text-gray-400">
              Freedom of Mind, Powered by AI
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Your Shortcut to <span className="text-blue-400">Autopilot Lead Generation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Stop losing $1,200+ jobs to missed calls. Get a done-for-you booking website that works while you sleep—so you can focus on your craft, not your calendar.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 max-w-2xl mx-auto mb-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div><Phone className="w-8 h-8 text-green-400 mx-auto mb-2" /><div className="font-bold">24/7 Call Capture</div></div>
              <div><Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2" /><div className="font-bold">Instant Booking</div></div>
              <div><Clock className="w-8 h-8 text-purple-400 mx-auto mb-2" /><div className="font-bold">Live in 5 Days</div></div>
            </div>
          </motion.div>

          <motion.a
            href="https://www.mentislib.com/qualify"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center shadow-lg"
          >
            Get My Booking Website →
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex items-center justify-center text-sm text-gray-400"
          >
            <ShieldCheck className="w-4 h-4 mr-2 text-green-400" />
            Live in 5 business days or 100% refund
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-gray-800/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-xl italic mb-4">"My new site booked 14 jobs in the first 10 days—including 3 emergency calls after midnight."</p>
            <div className="font-bold">Mike T., HVAC Contractor – Austin, TX</div>
            <div className="text-blue-400 font-semibold mt-2">14 booked jobs | $8,200 revenue</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="space-y-8">
            {[
              { step: 1, title: "Tell Us About Your Business", desc: "5-minute form to share your services and goals" },
              { step: 2, title: "We Build Your Site", desc: "AI crafts your niche-specific booking site in <7 days" },
              { step: 3, title: "Go Live & Book Jobs", desc: "We connect your phone and hand you the keys" }
            ].map((item, i) => (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Niche Examples */}
      <section className="py-16 bg-gray-800/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Built for Your Trade</h2>
          <div className="flex justify-center space-x-4 mb-8">
            {Object.keys(nicheExamples).map((niche) => (
              <button
                key={niche}
                onClick={() => setActiveTab(niche)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === niche 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 text-gray-300'
                }`}
              >
                {nicheExamples[niche].title}
              </button>
            ))}
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700"
          >
            <div className="flex items-start space-x-4">
              <div className="text-blue-400 mt-1">{nicheExamples[activeTab].icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{nicheExamples[activeTab].title}</h3>
                <p className="text-red-400 mb-2"><strong>The Problem:</strong> {nicheExamples[activeTab].pain}</p>
                <p><strong>Our Solution:</strong> {nicheExamples[activeTab].solution}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Freedom of Mind?</h2>
          <p className="text-gray-300 mb-8">Get your autopilot booking system—so you can work less and earn more.</p>
          <a
            href="https://www.mentislib.com/qualify"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center"
          >
            Get My Booking Website →
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        © 2025 Mentis Liberum. Freedom of Mind, Powered by AI.<br />
        <a href="https://www.mentislib.com" className="text-blue-400 hover:underline">www.mentislib.com</a>
      </footer>
    </div>
  );
};

export default App;