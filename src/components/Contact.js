import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiAlertCircle, FiCalendar, FiCheck, FiEdit3, FiMail, FiMapPin, FiPhone, FiSend, FiUser } from 'react-icons/fi'

const Contact = () => {
  // Form stages
  const STAGES = {
    PURPOSE: 0,
    DETAILS: 1,
    MESSAGE: 2,
    COMPLETE: 3
  }

  const [currentStage, setCurrentStage] = useState(STAGES.PURPOSE)
  const [formState, setFormState] = useState({
    purpose: '',
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState({ show: false, type: '', message: '' })

  const purposes = [
    { id: 'inquiry', label: 'General Inquiry' },
    { id: 'quote', label: 'Request a Quote' },
    { id: 'booking', label: 'Book a Service' },
    { id: 'collaboration', label: 'Discuss Collaboration' },
    { id: 'hiring', label: 'Hiring Opportunity' }
  ]

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handlePurposeSelect = (purpose) => {
    setFormState({
      ...formState,
      purpose,
    })
    setCurrentStage(STAGES.DETAILS)
  }

  const handleStageChange = (direction) => {
    // Validate current stage before proceeding
    if (direction === 'next') {
      if (currentStage === STAGES.DETAILS) {
        if (!formState.name || !formState.email) {
          showToast('error', 'Please fill in all required fields')
          return
        }
      }
      setCurrentStage(prev => prev + 1)
    } else {
      setCurrentStage(prev => prev - 1)
    }
  }


const handleContactFormSubmit = async () => {
  if (isSubmitting) return;
  setIsSubmitting(true);
  
  // Final validation
  if (!formState.name || !formState.email || !formState.message) {
    showToast('error', 'Please fill in all required fields');
    setIsSubmitting(false);
    return;
  }
  
  // Create form data object from current form state
  const formData = {
    purpose: formState.purpose,
    name: formState.name,
    email: formState.email,
    phone: formState.phone,
    preferredDate: formState.preferredDate,
    budget: formState.budget,
    message: formState.message,
    timestamp: new Date().toISOString(),
  };
  
  try {
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to send message');
    }
    
    showToast('success', 'Your message has been sent successfully!');
    setCurrentStage(STAGES.COMPLETE);
    setFormState({
      purpose: '',
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      budget: '',
      message: '',
    });
  } catch (error) {
    console.error("Error sending message:", error);
    showToast('error', 'Failed to send message. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};


  const showToast = (type, message) => {
    setToast({ show: true, type, message })
    setTimeout(() => setToast({ show: false, type: '', message: '' }), 5000)
  }

  const resetForm = () => {
    setCurrentStage(STAGES.PURPOSE)
    setFormState({
      purpose: '',
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      budget: '',
      message: '',
    })
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const stageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.4 } }
  }

  return (
    <div className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to chat? I&apos;m here to help. Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="p-4 mb-4 rounded-full bg-sky-100 text-sky-600">
              <FiMapPin size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Location</h3>
            <p className="text-slate-600">Texas, USA</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="p-4 mb-4 rounded-full bg-sky-100 text-sky-600">
              <FiMail size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Email</h3>
            <a href="mailto:charlesawuku2010@gmail.com" className="text-slate-600 hover:text-sky-600 transition-colors duration-300">
              Charlesawuku2010@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center text-center lg:items-start lg:text-left"
          >
           <div className="p-4 mb-4 rounded-full bg-sky-100 text-sky-600">
  <FiPhone size={24} />
</div>
<h3 className="text-xl font-bold text-slate-800 mb-2">WhatsApp</h3>
<a
  href="https://wa.me/14696041967"
  target="_blank"
  rel="noopener noreferrer"
  className="text-slate-600 hover:text-sky-600 transition-colors duration-300"
>
  Chat on WhatsApp
</a>
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="mb-8 px-4">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-sky-600 bg-sky-100">
                {currentStage === STAGES.PURPOSE ? 'Select Purpose' : 
                 currentStage === STAGES.DETAILS ? 'Your Details' : 
                 currentStage === STAGES.MESSAGE ? 'Your Message' : 'Complete'}
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-sky-600">
                  Step {currentStage + 1} of {Object.keys(STAGES).length}
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-sky-100">
              <div 
                style={{ width: `${(currentStage + 1) * (100 / Object.keys(STAGES).length)}%` }} 
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sky-500 transition-all duration-500"
              ></div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 relative overflow-hidden"
        >
          {/* Toast notification */}
          {toast.show && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`absolute top-4 right-4 p-4 rounded-md shadow-md flex items-center gap-2 ${
                toast.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {toast.type === 'success' ? (
                <FiCheck className="text-green-600" size={18} />
              ) : (
                <FiAlertCircle className="text-red-600" size={18} />
              )}
              <span>{toast.message}</span>
            </motion.div>
          )}

          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Let&apos;s Connect</h3>

          {/* Purpose Selection Stage */}
          {currentStage === STAGES.PURPOSE && (
            <motion.div
              key="purpose"
              variants={stageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mb-6"
            >
              <h4 className="text-xl font-medium text-slate-700 mb-6 text-center">
                What can I help you with today?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {purposes.map((purpose) => (
                  <motion.button
                    key={purpose.id}
                    onClick={() => handlePurposeSelect(purpose.id)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-6 rounded-lg border-2 text-center hover:shadow-md transition-all duration-300 ${
                      formState.purpose === purpose.id
                        ? 'border-sky-500 bg-sky-50'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    {purpose.id === 'inquiry' && <FiEdit3 className="mx-auto mb-4 text-sky-500" size={32} />}
                    {purpose.id === 'quote' && <FiSend className="mx-auto mb-4 text-sky-500" size={32} />}
                    {purpose.id === 'booking' && <FiCalendar className="mx-auto mb-4 text-sky-500" size={32} />}
                    {purpose.id === 'collaboration' && <FiUser className="mx-auto mb-4 text-sky-500" size={32} />}
                    {purpose.id === 'hiring' && <FiUser className="mx-auto mb-4 text-sky-500" size={32} />}
                    <p className="font-medium text-slate-800">{purpose.label}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Details Form Stage */}
          {currentStage === STAGES.DETAILS && (
            <motion.div
              key="details"
              variants={stageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-slate-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 px-4 py-3 rounded-md border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-slate-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 px-4 py-3 rounded-md border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiPhone className="text-slate-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full pl-10 px-4 py-3 rounded-md border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all duration-300"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                </div>
                {(formState.purpose === 'booking' || formState.purpose === 'quote') && (
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Date {formState.purpose === 'booking' && <span className="text-red-500">*</span>}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiCalendar className="text-slate-400" />
                      </div>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formState.preferredDate}
                        onChange={handleChange}
                        required={formState.purpose === 'booking'}
                        className="w-full pl-10 px-4 py-3 rounded-md border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all duration-300"
                      />
                    </div>
                  </div>
                )}
                {(formState.purpose === 'quote' || formState.purpose === 'collaboration') && (
                  <div className={formState.purpose === 'booking' ? "col-span-2" : ""}>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                      Estimated Budget (Optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formState.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all duration-300"
                    >
                      <option value="">Select a range</option>
                      <option value="less-than-1k">Less than $1,000</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-plus">$10,000+</option>
                    </select>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Message Stage */}
          {currentStage === STAGES.MESSAGE && (
            <motion.div
              key="message"
              variants={stageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                    <FiEdit3 className="text-slate-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full pl-10 px-4 py-3 rounded-md border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all duration-300"
                    placeholder="Please provide details about your project or inquiry..."
                  ></textarea>
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  Your message will be sent securely and I&apos;ll respond within 24-48 hours.
                </p>
              </div>
            </motion.div>
          )}

          {/* Complete Stage */}
          {currentStage === STAGES.COMPLETE && (
            <motion.div
              key="complete"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-center py-8"
            >
              <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <FiCheck size={48} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Message Sent Successfully!</h3>
              <p className="text-slate-600 mb-8">
                Thank you for reaching out! I&apos;ll get back to you as soon as possible.
              </p>
              <button
                onClick={resetForm}
                className="px-6 py-2 bg-sky-100 text-sky-600 rounded-md hover:bg-sky-200 transition-colors duration-300"
              >
                Send Another Message
              </button>
            </motion.div>
          )}

          {/* Navigation buttons */}
          {currentStage !== STAGES.COMPLETE && (
            <div className="flex justify-between mt-8">
              {currentStage > STAGES.PURPOSE ? (
                <button
                  type="button"
                  onClick={() => handleStageChange('prev')}
                  className="px-6 py-2 bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200 transition-colors duration-300"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}
              
              {currentStage < STAGES.MESSAGE ? (
                <button
                  type="button"
                  onClick={() => handleStageChange('next')}
                  className="px-6 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors duration-300"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleContactFormSubmit}
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={18} />
                      Send Message
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Contact