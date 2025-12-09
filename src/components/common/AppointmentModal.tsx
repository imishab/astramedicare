'use client';

import React, { useState, useEffect, useCallback } from 'react';

export default function AppointmentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    // Check if user has already dismissed the modal
    // const dismissed = localStorage.getItem('appointmentModalDismissed');
    const expiryTime = localStorage.getItem('appointmentModalDismissedExpiry');
    
    // Check if dismissal has expired (after 24 hours)
    // if (dismissed && expiryTime) {
    //   const now = Date.now();
    //   const expiry = parseInt(expiryTime, 10);
    //   if (now < expiry) {
    //     return;
    //   } else {
    //     localStorage.removeItem('appointmentModalDismissed');
    //     localStorage.removeItem('appointmentModalDismissedExpiry');
    //   }
    // }

    // Show modal after 4 seconds (non-intrusive delay)
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Trigger animation after modal is opened
      setTimeout(() => setIsVisible(true), 10);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      localStorage.setItem('appointmentModalDismissed', 'true');
      const expiryTime = Date.now() + 24 * 60 * 60 * 1000; 
      localStorage.setItem('appointmentModalDismissedExpiry', expiryTime.toString());
    }, 300);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    alert('Thank you! Your appointment request has been submitted. We will contact you soon.');
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`appointment-modal-backdrop ${isVisible ? 'visible' : ''}`}
        onClick={handleBackdropClick}
      />

      {/* Modal */}
      <div className={`appointment-modal-container ${isVisible ? 'visible' : ''}`}>
        <div className="appointment-modal-content">
          {/* Close Button */}
          <button
            className="appointment-modal-close"
            onClick={handleClose}
            aria-label="Close modal"
          >
            <i className="ri-close-line"></i>
          </button>

          {/* Header */}
          <div className="appointment-modal-header">
          
            <h2>Book Your Appointment</h2>
            <p>Fill out the form below and we'll get back to you shortly</p>
          </div>

          {/* Form */}
          <form className="appointment-modal-form" onSubmit={handleSubmit}>
            

              {/* <div className="form-group">
                <label htmlFor="modal-email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div> */}

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="modal-name">
                   Full Name
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="modal-phone">
                    Phone Number
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="modal-date">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="modal-date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="modal-time">
                  Preferred Time
                </label>
                <input
                  type="time"
                  id="modal-time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="modal-message">
                Additional Message (Optional)
              </label>
              <textarea
                id="modal-message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Any additional information or special requests..."
                rows={2}
              />
            </div>

            <button type="submit" className="theme-btn w-100 btn-lg">
              <span>Book Appointment</span>
              <i className="ri-arrow-right-line"></i>
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .appointment-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          z-index: 9998;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .appointment-modal-backdrop.visible {
          opacity: 1;
        }

        .appointment-modal-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          opacity: 0;
          pointer-events: none;
        }

        .appointment-modal-container.visible {
          opacity: 1;
          pointer-events: auto;
        }

        .appointment-modal-content {
          background: #ffffff;
          border-radius: 24px;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          transform: scale(0.8) translateY(20px);
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .appointment-modal-container.visible .appointment-modal-content {
          transform: scale(1) translateY(0);
        }

        .appointment-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f5f5f5;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #666;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .appointment-modal-close:hover {
          background: #e0e0e0;
          color: #333;
          transform: rotate(90deg);
        }

        .appointment-modal-header {
          text-align: left;
          padding: 40px 40px 0px;
        //   border-bottom: 1px solid #f0f0f0;
        }

        .appointment-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          color: white;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .appointment-modal-header h2 {
          font-size: 24px;
          font-weight: 600;
          color: #333;
          margin: 0 0 1px;
        }

        .appointment-modal-header p {
          font-size: 12px;
          color: #666;
          margin: 0;
        }

        .appointment-modal-form {
          padding: 30px 40px 40px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 0px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 600;
          color: #333;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .form-group label i {
          color: #667eea;
          font-size: 16px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 12px 16px;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          font-size: 15px;
          font-family: 'Poppins', sans-serif;
          transition: all 0.3s ease;
          background: #fff;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .appointment-submit-btn {
          width: 100%;
          padding: 16px 24px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
          margin-top: 10px;
          font-family: 'Poppins', sans-serif;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .appointment-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }

        .appointment-submit-btn:active {
          transform: translateY(0);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .appointment-modal-content {
            max-width: 100%;
            border-radius: 20px 20px 0 0;
            max-height: 95vh;
          }

          .appointment-modal-header {
            padding: 30px 20px 20px;
          }

          .appointment-icon {
            width: 60px;
            height: 60px;
            font-size: 30px;
          }

          .appointment-modal-header h2 {
            font-size: 22px;
          }

          .appointment-modal-form {
            padding: 20px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }

        
      `}</style>
    </>
  );
}