import React, { useState } from 'react';

export const ContactView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Question',
    subject: '',
    message: ''
  });

  // Keep the submitted information separately so it can be
  // displayed on the success screen.
  const [submittedData, setSubmittedData] = useState(formData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setSending(true);
    setError('');

    try {
      const response = await fetch(
        'https://api.emailjs.com/api/v1.0/email/send',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
            template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,

            template_params: {
              to_email: 'info@aaptovedawellness.com',
              from_name: formData.name,
              from_email: formData.email,
              category: formData.category,
              subject: formData.subject || 'General Inquiry',
              message: formData.message,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      // Save the submitted data before changing the form state.
      setSubmittedData(formData);

      // Show success screen.
      setSubmitted(true);

    } catch (err) {
      console.error('Error sending email:', err);
      setError(
        'There was an issue sending your message. Please try again.'
      );
    } finally {
      setSending(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setError('');

    setFormData({
      name: '',
      email: '',
      category: 'General Question',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="pt-20 pb-16 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#cba72f]/20 text-[#735c00] dark:text-[#ffe088] text-[10px] font-bold uppercase tracking-widest">
          <span className="material-symbols-outlined text-xs">
            mail
          </span>
          <span>Get In Touch</span>
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#012d1d] dark:text-[#c1ecd4]">
          Contact Us
        </h1>

        <p className="text-xs sm:text-sm text-[#414844] dark:text-[#bfc9c3] leading-relaxed">
          Have a question about our botanical profiles, traditional herbal
          preparation, or general inquiries? Reach out directly or send us
          a message below.
        </p>

      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

        {/* Left: Contact Information */}
        <div className="lg:col-span-1 space-y-5">

          {/* Phone Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#f0f5f3] to-[#e8f0ec] dark:from-[#1b4332]/60 dark:to-[#0d2818]/60 border border-[#d4e8e1] dark:border-[#274e3d] hover:shadow-lg transition-all">

            <div className="flex items-start gap-3">

              <div className="w-11 h-11 bg-[#cba72f]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-xl text-[#735c00] dark:text-[#ffe088]">
                  phone
                </span>
              </div>

              <div className="min-w-0">

                <h3 className="font-serif text-sm font-semibold text-[#012d1d] dark:text-[#c1ecd4] mb-1">
                  Customer Care
                </h3>

                {/* Phone - smaller + black/white */}
                <a
                  href="tel:7060029580"
                  className="text-sm font-bold text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  +91-7060029580
                </a>

                <p className="text-[11px] text-[#414844] dark:text-[#a5d0b9] mt-1.5 leading-relaxed">
                  Available Mon-Fri
                  <br />
                  10 AM - 6 PM
                </p>

              </div>

            </div>

          </div>

          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#f0f5f3] to-[#e8f0ec] dark:from-[#1b4332]/60 dark:to-[#0d2818]/60 border border-[#d4e8e1] dark:border-[#274e3d] hover:shadow-lg transition-all">

            <div className="flex items-start gap-3">

              <div className="w-11 h-11 bg-[#cba72f]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-xl text-[#735c00] dark:text-[#ffe088]">
                  mail_outline
                </span>
              </div>

              <div className="min-w-0">

                <h3 className="font-serif text-sm font-semibold text-[#012d1d] dark:text-[#c1ecd4] mb-1">
                  Email Support
                </h3>

                {/* Email - smaller + black/white */}
                <a
                  href="mailto:info@aaptovedawellness.com"
                  className="text-xs font-bold text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors break-all"
                >
                  info@aaptovedawellness.com
                </a>

                <p className="text-[11px] text-[#414844] dark:text-[#a5d0b9] mt-1.5">
                  Response within 24 hours
                </p>

              </div>

            </div>

          </div>

          {/* Info Card */}
          <div className="p-5 rounded-2xl bg-[#012d1d]/5 dark:bg-[#012d1d]/40 border border-[#cba72f]/20 dark:border-[#cba72f]/30">

            <h4 className="font-serif text-sm font-semibold text-[#012d1d] dark:text-[#c1ecd4] mb-2.5 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-[#cba72f]">
                info
              </span>
              Quick Tips
            </h4>

            <ul className="space-y-1.5 text-[11px] text-[#414844] dark:text-[#bfc9c3]">

              <li className="flex items-start gap-2">
                <span className="text-[#cba72f] mt-0.5">→</span>
                <span>
                  Include specific product names if inquiring
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-[#cba72f] mt-0.5">→</span>
                <span>
                  Mention relevant details about your query
                </span>
              </li>

            </ul>

          </div>

        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-2 bg-white dark:bg-[#1b4332]/30 p-6 sm:p-8 rounded-3xl border border-[#c1c8c2]/30 dark:border-[#274e3d] shadow-xl">

          {submitted ? (

            /* Success Screen */
            <div className="text-center py-10 space-y-5">

              <div className="w-16 h-16 bg-gradient-to-br from-[#2d6a3e] to-[#1b4332] text-[#c1ecd4] rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="material-symbols-outlined text-3xl">
                  mark_email_read
                </span>
              </div>

              <div className="space-y-2">

                <h3 className="font-serif text-2xl font-bold text-[#012d1d] dark:text-[#c1ecd4]">
                  Message Sent Successfully!
                </h3>

                <p className="text-xs text-[#414844] dark:text-[#bfc9c3] leading-relaxed">
                  Thank you for reaching out to AaptoVeda Wellness.
                </p>

              </div>

              <div className="bg-[#f0f5f3] dark:bg-[#1b4332]/50 p-4 rounded-xl border border-[#d4e8e1] dark:border-[#274e3d]">

                <p className="text-xs text-[#414844] dark:text-[#bfc9c3] leading-relaxed">

                  We have received your inquiry regarding{' '}

                  <span className="font-semibold text-[#2d6a3e] dark:text-[#cba72f]">
                    {submittedData.category}
                  </span>

                  {' '}and will review your message shortly. Our team will
                  respond to{' '}

                  <span className="font-semibold text-[#2d6a3e] dark:text-[#cba72f]">
                    {submittedData.email}
                  </span>

                  {' '}within <strong>24 hours</strong>.

                </p>

              </div>

              <button
                onClick={resetForm}
                className="py-2.5 px-7 rounded-full bg-[#2d6a3e] hover:bg-[#1b4332] text-white text-xs font-bold transition-all inline-flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">
                  add
                </span>
                Send Another Message
              </button>

            </div>

          ) : (

            /* Contact Form */
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>

                  <label className="block text-[11px] font-bold text-[#012d1d] dark:text-[#c1ecd4] mb-1.5">
                    Your Name *
                  </label>

                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value
                      })
                    }
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f5f3] dark:bg-[#0d2818] text-xs text-[#191c1d] dark:text-[#f0f1f2] border border-[#d4e8e1] dark:border-[#274e3d] focus:border-[#2d6a3e] dark:focus:border-[#cba72f] focus:outline-none focus:ring-2 focus:ring-[#cba72f]/20 transition-all"
                  />

                </div>

                <div>

                  <label className="block text-[11px] font-bold text-[#012d1d] dark:text-[#c1ecd4] mb-1.5">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value
                      })
                    }
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f5f3] dark:bg-[#0d2818] text-xs text-[#191c1d] dark:text-[#f0f1f2] border border-[#d4e8e1] dark:border-[#274e3d] focus:border-[#2d6a3e] dark:focus:border-[#cba72f] focus:outline-none focus:ring-2 focus:ring-[#cba72f]/20 transition-all"
                  />

                </div>

              </div>

              {/* Inquiry Type */}
              <div>

                <label className="block text-[11px] font-bold text-[#012d1d] dark:text-[#c1ecd4] mb-1.5">
                  Inquiry Type *
                </label>

                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      category: e.target.value
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f5f3] dark:bg-[#0d2818] text-xs text-[#191c1d] dark:text-[#f0f1f2] border border-[#d4e8e1] dark:border-[#274e3d] focus:border-[#2d6a3e] dark:focus:border-[#cba72f] focus:outline-none focus:ring-2 focus:ring-[#cba72f]/20 transition-all"
                >

                  <option value="General Question">
                    General Question
                  </option>

                  <option value="Product Information">
                    Product / Botanical Information
                  </option>

                  <option value="Ayurvedic Science Question">
                    Ayurvedic Principles & Dosha Info
                  </option>

                  <option value="Website Feedback">
                    Feedback & Suggestions
                  </option>

                </select>

              </div>

              {/* Subject */}
              <div>

                <label className="block text-[11px] font-bold text-[#012d1d] dark:text-[#c1ecd4] mb-1.5">
                  Subject
                </label>

                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subject: e.target.value
                    })
                  }
                  placeholder="Brief subject title (optional)..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f5f3] dark:bg-[#0d2818] text-xs text-[#191c1d] dark:text-[#f0f1f2] border border-[#d4e8e1] dark:border-[#274e3d] focus:border-[#2d6a3e] dark:focus:border-[#cba72f] focus:outline-none focus:ring-2 focus:ring-[#cba72f]/20 transition-all"
                />

              </div>

              {/* Message */}
              <div>

                <label className="block text-[11px] font-bold text-[#012d1d] dark:text-[#c1ecd4] mb-1.5">
                  Your Message / Question *
                </label>

                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value
                    })
                  }
                  placeholder="Write your question or message here..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f5f3] dark:bg-[#0d2818] text-xs text-[#191c1d] dark:text-[#f0f1f2] border border-[#d4e8e1] dark:border-[#274e3d] focus:border-[#2d6a3e] dark:focus:border-[#cba72f] focus:outline-none focus:ring-2 focus:ring-[#cba72f]/20 transition-all resize-none"
                />

              </div>

              {/* Error */}
              {error && (
                <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-300 text-xs text-center">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#2d6a3e] to-[#1b4332] hover:from-[#1b4332] hover:to-[#0d2818] text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >

                {sending ? (
                  <>
                    <span className="material-symbols-outlined text-sm animate-spin">
                      hourglass_empty
                    </span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-sm">
                      send
                    </span>
                    <span>Send Message</span>
                  </>
                )}

              </button>

              <p className="text-[10px] text-[#414844] dark:text-[#a5d0b9] text-center">
                We'll respond to your email within 24 hours.
              </p>

            </form>

          )}

        </div>

      </div>

    </div>
  );
};