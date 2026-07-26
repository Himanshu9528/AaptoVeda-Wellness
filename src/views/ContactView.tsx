import React, { useState } from 'react';

export const ContactView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Question',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-24 pb-20 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#cba72f]/20 text-[#735c00] dark:text-[#ffe088] text-xs font-bold uppercase tracking-widest">
          <span className="material-symbols-outlined text-sm">mail</span>
          <span>Get In Touch</span>
        </span>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#012d1d] dark:text-[#c1ecd4]">
          Contact Us
        </h1>

        <p className="text-xs sm:text-base text-[#414844] dark:text-[#bfc9c3] leading-relaxed">
          Have a question about our botanical profiles, traditional herbal preparation, or general inquiries? Send us a message below.
        </p>
      </div>

      <div className="max-w-xl mx-auto bg-white dark:bg-[#1b4332]/40 p-6 sm:p-10 rounded-3xl border border-[#c1c8c2]/30 dark:border-[#274e3d] shadow-xl">
        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#1b4332] text-[#c1ecd4] rounded-full flex items-center justify-center mx-auto text-3xl shadow-inner">
              <span className="material-symbols-outlined text-3xl">mark_email_read</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#012d1d] dark:text-[#c1ecd4]">
              Message Received
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mx-auto">
              Thank you for reaching out, <strong>{formData.name}</strong>. We have received your inquiry regarding <em>{formData.category}</em> and will reply to <strong>{formData.email}</strong> within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  category: 'General Question',
                  subject: '',
                  message: ''
                });
              }}
              className="py-3 px-6 rounded-full bg-[#012d1d] hover:bg-[#1b4332] text-white text-xs font-bold transition-all mt-2"
            >
              Send Another Question
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#012d1d] dark:text-[#c1ecd4] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-[#edeeef] dark:bg-[#121614] text-xs text-[#191c1d] dark:text-[#f0f1f2] border border-transparent focus:border-[#cba72f] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#012d1d] dark:text-[#c1ecd4] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#edeeef] dark:bg-[#121614] text-xs text-[#191c1d] dark:text-[#f0f1f2] border border-transparent focus:border-[#cba72f] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#012d1d] dark:text-[#c1ecd4] mb-1">
                Inquiry Type *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#edeeef] dark:bg-[#121614] text-xs text-[#191c1d] dark:text-[#f0f1f2] border border-transparent focus:border-[#cba72f] focus:outline-none"
              >
                <option value="General Question">General Question</option>
                <option value="Product Information">Product / Botanical Information</option>
                <option value="Ayurvedic Science Question">Ayurvedic Principles & Dosha Info</option>
                <option value="Website Feedback">Feedback & Suggestions</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#012d1d] dark:text-[#c1ecd4] mb-1">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Brief subject title..."
                className="w-full px-4 py-3 rounded-xl bg-[#edeeef] dark:bg-[#121614] text-xs text-[#191c1d] dark:text-[#f0f1f2] border border-transparent focus:border-[#cba72f] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#012d1d] dark:text-[#c1ecd4] mb-1">
                Your Message / Question *
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your question or message here..."
                className="w-full px-4 py-3 rounded-xl bg-[#edeeef] dark:bg-[#121614] text-xs text-[#191c1d] dark:text-[#f0f1f2] border border-transparent focus:border-[#cba72f] focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#012d1d] hover:bg-[#1b4332] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">send</span>
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>

    </div>
  );
};
