import React, { useState } from 'react';
import { Brain, User, Briefcase, Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const QualifyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessType: '',
    frustration: '',
    monthlyRevenue: '',
    goal: '',
    contactMethod: 'phone',
    contactInfo: '',
    committed: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, send to your backend (e.g., Formspree, Webhook, etc.)
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p className="text-gray-300 mb-6">
            We’ll review your details and reach out within 24 hours if you’re a strong fit for our booking system.
          </p>
          <a
            href="https://www.mentislib.com"
            className="text-blue-400 hover:underline inline-flex items-center"
          >
            ← Back to Mentis Liberum
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <nav className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-6 flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-bold">Mentis Liberum</div>
            <div className="text-sm text-gray-400">Freedom of Mind, Powered by AI</div>
          </div>
        </div>
      </nav>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700"
        >
          <h1 className="text-3xl font-bold mb-2">Get Your Booking Website</h1>
          <p className="text-gray-400 mb-8">
            This 2-minute form helps us ensure we’re the right fit for your business.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center">
                <User className="w-4 h-4 mr-2" /> Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Smith"
              />
            </div>

            {/* Business Type */}
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center">
                <Briefcase className="w-4 h-4 mr-2" /> Business Type
              </label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select your business</option>
                <option value="hvac">HVAC Contractor</option>
                <option value="lawyer">Lawyer / Law Firm</option>
                <option value="plumber">Plumber</option>
                <option value="electrician">Electrician</option>
                <option value="other">Other Local Service</option>
              </select>
            </div>

            {/* Frustration */}
            <div>
              <label className="block text-sm font-medium mb-3">What’s your biggest lead-gen frustration?</label>
              {[
                { value: 'missed_calls', label: 'I miss calls after hours' },
                { value: 'no_bookings', label: 'My website doesn’t book anything' },
                { value: 'ghosted_leads', label: 'Leads ghost me after I send a quote' },
                { value: 'wasted_ads', label: 'I waste money on ads with no ROI' },
                { value: 'other_frustration', label: 'Other' }
              ].map((option) => (
                <label key={option.value} className="flex items-start mb-2">
                  <input
                    type="radio"
                    name="frustration"
                    value={option.value}
                    checked={formData.frustration === option.value}
                    onChange={handleChange}
                    required
                    className="mt-1 mr-3"
                  />
                  <span className="text-gray-300">{option.label}</span>
                </label>
              ))}
            </div>

            {/* Monthly Revenue */}
            <div>
              <label className="block text-sm font-medium mb-2">Average monthly revenue from booked jobs?</label>
              <select
                name="monthlyRevenue"
                value={formData.monthlyRevenue}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select range</option>
                <option value="under_5k">< $5,000</option>
                <option value="5k_15k">$5,000 – $15,000</option>
                <option value="15k_50k">$15,000 – $50,000</option>
                <option value="over_50k">$50,000+</option>
              </select>
            </div>

            {/* Goal */}
            <div>
              <label className="block text-sm font-medium mb-3">What’s your #1 goal right now?</label>
              {[
                { value: 'more_calls', label: 'Get more emergency/service calls' },
                { value: 'less_chasing', label: 'Reduce time spent chasing quotes' },
                { value: 'premium_image', label: 'Appear more premium to attract higher-ticket clients' },
                { value: 'automate', label: 'Automate my booking process' }
              ].map((option) => (
                <label key={option.value} className="flex items-start mb-2">
                  <input
                    type="radio"
                    name="goal"
                    value={option.value}
                    checked={formData.goal === option.value}
                    onChange={handleChange}
                    required
                    className="mt-1 mr-3"
                  />
                  <span className="text-gray-300">{option.label}</span>
                </label>
              ))}
            </div>

            {/* Contact Info */}
            <div>
              <label className="block text-sm font-medium mb-2">Best way to reach you?</label>
              <div className="flex space-x-4 mb-3">
                {[
                  { value: 'phone', label: 'Phone' },
                  { value: 'email', label: 'Email' },
                  { value: 'text', label: 'Text' }
                ].map((method) => (
                  <label key={method.value} className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method.value}
                      checked={formData.contactMethod === method.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-gray-300">{method.label}</span>
                  </label>
                ))}
              </div>
              <input
                type={formData.contactMethod === 'email' ? 'email' : 'tel'}
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
                required
                placeholder={
                  formData.contactMethod === 'email'
                    ? 'you@business.com'
                    : '(555) 123-4567'
                }
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Commitment Checkbox */}
            <div className="pt-4 border-t border-gray-700">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="committed"
                  checked={formData.committed}
                  onChange={handleChange}
                  required
                  className="mt-1 mr-3"
                />
                <span className="text-gray-300">
                  I want a booking website that works while I sleep — so I can focus on my craft, not my calendar.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center"
            >
              Get My Booking Website →
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </form>
        </motion.div>

        <div className="text-center text-gray-500 text-sm mt-8">
          © 2025 Mentis Liberum. Freedom of Mind, Powered by AI.
        </div>
      </div>
    </div>
  );
};

export default QualifyForm;