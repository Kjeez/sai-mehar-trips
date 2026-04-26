import { useState, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheckCircle } from 'react-icons/fi';
import { useCallbackModal } from '../contexts/CallbackModalContext';
import './CallbackModal.css';

const CallbackModal = () => {
  const { isModalOpen, closeModal, defaultDestination } = useCallbackModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    date: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isModalOpen) {
      setFormData((prev) => ({ ...prev, destination: defaultDestination }));
      setIsSuccess(false);
      setErrorMsg('');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen, defaultDestination]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('http://localhost:5000/api/request-callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          closeModal();
        }, 3000);
      } else {
        const data = await res.json();
        setErrorMsg(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setErrorMsg('Failed to connect to the server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="callback-modal-overlay">
          <motion.div
            className="callback-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          />
          <motion.div
            className="callback-modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <button className="callback-modal-close" onClick={closeModal} aria-label="Close modal">
              <FiX size={24} />
            </button>

            {isSuccess ? (
              <div className="callback-modal-success">
                <FiCheckCircle size={64} color="#27ae60" />
                <h3>Request Sent!</h3>
                <p>We'll get back to you shortly with the best offers.</p>
              </div>
            ) : (
              <>
                <div className="callback-modal-header">
                  <h2>Request a Callback</h2>
                  <p>Get the best offers for your dream trip</p>
                </div>

                <form className="callback-modal-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Your Name" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Your Email" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="destination">Where do you want to go?</label>
                    <input type="text" id="destination" name="destination" required value={formData.destination} onChange={handleChange} placeholder="E.g., Bali, Maldives" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="date">When do you want to travel?</label>
                    <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} />
                  </div>

                  {errorMsg && <div className="form-error">{errorMsg}</div>}

                  <button type="submit" className="callback-modal-submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Best Offers'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CallbackModal;
