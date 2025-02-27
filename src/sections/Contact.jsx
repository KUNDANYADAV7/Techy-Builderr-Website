import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

const Contact = () => {

  const openGmail = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // For Android devices, use the Gmail intent URL scheme.
    if (/android/i.test(userAgent)) {
      window.location.href = "intent://compose?to=techybuilderr@gmail.com#Intent;package=com.google.android.gm;scheme=mailto;end;";
    }
    // For iOS devices, use the Gmail URL scheme.
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href = "googlegmail://co?to=techybuilderr@gmail.com";
    }
    // Fallback for desktop or when detection fails.
    else {
      window.open("https://mail.google.com/mail/?view=cm&fs=1&to=techybuilderr@gmail.com", "_blank");
    }
  };

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({}); // Error state

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove error message when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  // Form validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS credentials
  const serviceID = import.meta.env.VITE_CONTACT_SERVICE_ID;
  const templateID = import.meta.env.VITE_CONTACT_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_CONTACT_PUBLIC_KEY;


  const validateEmail = async (email) => {
    try {
      const response = await axios.get(
        `https://emailvalidation.abstractapi.com/v1/?api_key=${import.meta.env.VITE_EMAIL_VALID_API_KEY}&email=${email}`
      );
      return response.data.deliverability === "DELIVERABLE";
    } catch (error) {
      console.error("Email validation failed:", error);
      return false;
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return; // Ensure form validation runs first
  
    setIsSubmitting(true); // Disable button
  
    // Check email validity
    const isValid = await validateEmail(formData.email);
    if (!isValid) {
      toast.error("Invalid or non-existent email!");
      setIsSubmitting(false);
      return; // Stop further execution
    }
  
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      service: formData.service,
      message: formData.message,
      to_name: "Radha mam Techy Builder",
      reply_to: formData.email,
    };
  
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((result) => {
        toast.success("Email sent successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
  
        setFormData({ name: "", email: "", service: "", message: "" });
        setIsSubmitting(false); // Re-enable button
      })
      .catch((error) => {
        toast.error("Failed to send email. Please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
  
        setIsSubmitting(false); // Re-enable button
      });
  };
  
  return (

    <>
 <div className="w-full bg-white py-2">
  <div className="w-[95%] m-auto bg-[#F3F5F5] py-5 px-6 md:px-20 rounded-xl shadow-lg">
    {/* Contact Section */}
    <section
      id="contact"
      className="lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10"
    >
      {/* Contact Form */}
      <div
        data-aos="zoom-in"
        className='bg-gray-400/15 p-10 flex flex-col justify-center items-start gap-6 rounded-xl'
      >
        <h1
          className='text-2xl text-black font-semibold'
        >
          Reach out to us today
        </h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div>
            <input
              type="text"
              placeholder="Enter your full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-3 border-2 text-black border-black rounded-xl placeholder:text-black"
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter your valid email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-3 border-2 text-black border-black rounded-xl placeholder:text-black"
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-6 py-3 border-2 text-black border-black rounded-xl focus:text-black"
            >
              <option value="">Select a Service</option>
              <option value="Website Development">Website Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="SEO Service">SEO Service</option>
              <option value="Digital Marketing Service">Digital Marketing Service</option>
              <option value="Social Media Management">Social Media Management</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Website Maintenance Service">Website Maintenance Service</option>
              <option value="Other">Other</option>
            </select>
            {errors.service && <p className="text-red-500 mt-1">{errors.service}</p>}
          </div>

          <div>
            <textarea
              cols="30"
              rows="5"
              placeholder="Write your message here..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-6 py-3 border-2 text-black border-black rounded-xl placeholder:text-black"
            ></textarea>
            {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#2a52be] w-full text-md px-8 py-3 text-white font-semibold rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isSubmitting ? "Sending..." : "SEND EMAIL"}
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6 w-full">
      {/* Heading */}
      <h1 className="text-[32px] font-bold text-[#000045]">CONTACT US</h1>

      {/* Contact Details */}
      <div className="flex flex-col gap-6">
        {/* Phone */}
        <div className="flex items-center gap-4">
          <FaPhone className="text-[#000045] text-2xl" />
          <span className="text-lg text-black">+91 8866646691</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-[#000045] text-2xl" />
          <span className="text-lg text-black"><a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    openGmail();
  }}
>techybuilderr@gmail.com</a>
  </span>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-[#000045] text-2xl" />
          <span className="text-lg text-black">
            34, 3rd floor, Sanket Park, Iskon Mandir, Harinagar, Vadodara-390007.
          </span>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14764.682386557562!2d73.151903!3d22.309387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9a1eb7d6e09%3A0x3f2c3f843bf0c3e6!2sISKCON%20Temple!5e0!3m2!1sen!2sin!4v1739437832504!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </section>
  </div>
</div>

    </>
  );
};

export default Contact;
