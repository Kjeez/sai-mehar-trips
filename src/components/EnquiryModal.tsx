import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiArrowRight, FiUser, FiPhone, FiMail, FiMapPin, FiCalendar } from 'react-icons/fi';
import './EnquiryModal.css';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledCountry?: string;
  prefilledService?: string;
}

const serviceOptions = [
  'Visa Services',
  'International Holiday',
  'Domestic Holiday',
  'Honeymoon Package',
  'Pilgrimage Tour',
  'Custom Trip',
  'Airfare Booking',
  'Passport Services',
];

const WHATSAPP_NUMBER = '917531868691';

const EnquiryModal = ({ isOpen, onClose, prefilledCountry = '', prefilledService = '' }: EnquiryModalProps) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: prefilledService,
    destination: prefilledCountry,
    travelDate: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const modalRef = useRef<HTMLDivElement>(null);

  // Reset when opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setForm((f) => ({ ...f, destination: prefilledCountry, service: prefilledService }));
      setErrors({});
    }
  }, [isOpen, prefilledCountry, prefilledService]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Close on backdrop click
  const handleBackdrop = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) onClose();
  };

  const update = (key: string, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: '' }));
  };

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Please enter your name';
    if (!/^\d{10}$/.test(form.phone.trim())) errs.phone = 'Enter a valid 10-digit number';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `👋 *New Enquiry — Sai Mehar Trips Pvt Ltd*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* +91 ${form.phone}`,
      form.email ? `📧 *Email:* ${form.email}` : null,
      form.service ? `🛎 *Service:* ${form.service}` : null,
      form.destination ? `📍 *Destination:* ${form.destination}` : null,
      form.travelDate ? `📅 *Travel Date:* ${form.travelDate}` : null,
      form.message ? `💬 *Message:* ${form.message}` : null,
    ].filter(Boolean).join('\n');

    const encoded = encodeURIComponent(lines);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="eq-backdrop" onClick={handleBackdrop}>
        <motion.div
          className="eq-modal"
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: 'spring', stiffness: 340, damping: 28 }}
        >
          {/* Close */}
          <button className="eq-close" onClick={onClose} aria-label="Close">
            <FiX size={20} />
          </button>

          {/* Header */}
          <div className="eq-header">
            <h2 className="eq-title">Let's Plan Your Trip</h2>
            <p className="eq-subtitle">Fill in your details and we'll reach out</p>

            {/* Progress bar */}
            <div className="eq-progress">
              <div className="eq-progress-bar" style={{ width: step === 1 ? '50%' : '100%' }} />
            </div>
            <div className="eq-steps">
              <span className={step >= 1 ? 'eq-step eq-step--active' : 'eq-step'}>01 · Your Info</span>
              <span className={step >= 2 ? 'eq-step eq-step--active' : 'eq-step'}>02 · Trip Details</span>
            </div>
          </div>

          {/* Form Body */}
          <div className="eq-body">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.22 }}
                  className="eq-fields"
                >
                  <div className={`eq-field ${errors.name ? 'eq-field--error' : ''}`}>
                    <label className="eq-label">Your Name <span>*</span></label>
                    <div className="eq-input-wrap">
                      <FiUser className="eq-input-icon" />
                      <input
                        className="eq-input"
                        type="text"
                        placeholder="e.g. Rajesh Kumar"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        autoFocus
                      />
                    </div>
                    {errors.name && <span className="eq-error">{errors.name}</span>}
                  </div>

                  <div className={`eq-field ${errors.phone ? 'eq-field--error' : ''}`}>
                    <label className="eq-label">Phone Number <span>*</span></label>
                    <div className="eq-input-wrap">
                      <span className="eq-prefix">+91</span>
                      <FiPhone className="eq-input-icon eq-input-icon--after-prefix" />
                      <input
                        className="eq-input eq-input--with-prefix"
                        type="tel"
                        placeholder="Enter 10-digit number"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                        maxLength={10}
                      />
                    </div>
                    {errors.phone && <span className="eq-error">{errors.phone}</span>}
                  </div>

                  <div className={`eq-field ${errors.email ? 'eq-field--error' : ''}`}>
                    <label className="eq-label">Email Address <span className="eq-optional">(optional)</span></label>
                    <div className="eq-input-wrap">
                      <FiMail className="eq-input-icon" />
                      <input
                        className="eq-input"
                        type="email"
                        placeholder="yourname@email.com"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                      />
                    </div>
                    {errors.email && <span className="eq-error">{errors.email}</span>}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.22 }}
                  className="eq-fields"
                >
                  <div className="eq-field">
                    <label className="eq-label">Service Interested In</label>
                    <div className="eq-input-wrap">
                      <select
                        className="eq-input eq-select"
                        value={form.service}
                        onChange={(e) => update('service', e.target.value)}
                      >
                        <option value="">Select a service…</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="eq-field">
                    <label className="eq-label">Destination / Country</label>
                    <div className="eq-input-wrap">
                      <FiMapPin className="eq-input-icon" />
                      <input
                        className="eq-input"
                        type="text"
                        placeholder="e.g. Dubai, Thailand, Goa…"
                        value={form.destination}
                        onChange={(e) => update('destination', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="eq-field">
                    <label className="eq-label">Travel Date <span className="eq-optional">(approx.)</span></label>
                    <div className="eq-input-wrap">
                      <FiCalendar className="eq-input-icon" />
                      <input
                        className="eq-input"
                        type="date"
                        value={form.travelDate}
                        onChange={(e) => update('travelDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  <div className="eq-field">
                    <label className="eq-label">Any Message <span className="eq-optional">(optional)</span></label>
                    <textarea
                      className="eq-textarea"
                      placeholder="Tell us more about your trip requirements…"
                      rows={3}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="eq-footer">
            {step === 1 ? (
              <>
                <button className="eq-btn eq-btn--primary" onClick={handleNext}>
                  Next <FiArrowRight size={16} />
                </button>
                <button className="eq-btn eq-btn--whatsapp" onClick={() => {
                  if (validateStep1()) buildWhatsAppMessage();
                }}>
                  <WhatsAppIcon /> WhatsApp
                </button>
              </>
            ) : (
              <>
                <button className="eq-btn eq-btn--back" onClick={() => setStep(1)}>
                  ← Back
                </button>
                <button className="eq-btn eq-btn--whatsapp eq-btn--whatsapp-full" onClick={buildWhatsAppMessage}>
                  <WhatsAppIcon /> Send on WhatsApp
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default EnquiryModal;
