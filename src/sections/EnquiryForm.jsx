
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import axios from "axios";

const EnquiryForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const serviceID = import.meta.env.VITE_ENQUIRY_SERVICE_ID;
  const templateID = import.meta.env.VITE_ENQUIRY_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_ENQUIRY_PUBLIC_KEY;



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
  

  const onSubmit = async (data) => {
    if (loading) return;
    setLoading(true);

    const isValid = await validateEmail(data.email);

    if (!isValid) {
      toast.error("Invalid or non-existent email!");
      setLoading(false);
      return; // Stop further execution if email is invalid
    }
    

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: phone,
      service: data.service,
      message: data.message,
      to_name: "Radha Mam Techy Builder",
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      toast.success("Enquiry submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send enquiry. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="max-h-[80vh] overflow-y-auto p-0"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Enquiry Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="text-black
             w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 bg-transparent"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="text-black w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 bg-transparent"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Phone Number</label>
          <div
            className="text-black w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 bg-transparent"
          >
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={setPhone}
              inputStyle={{ border: "none", outline: "none" }}
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700">Select Service</label>
          <select
            {...register("service", { required: "Please select a service" })}
            className="text-black w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 bg-transparent"
          >
            <option value="">Select a Service</option>
            <option value="Website Development">Website Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="SEO Service">SEO Service</option>
            <option value="Digital Marketing Service">
              Digital Marketing Service
            </option>
            <option value="Social Media Management">
              Social Media Management
            </option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Website Maintenance Service">
              Website Maintenance Service
            </option>
            <option value="Other">Other</option>
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm">{errors.service.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="text-black border-black w-full p-2 border rounded-lg focus:ring focus:ring-blue-200 bg-transparent"
            rows="4"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className={`w-full text-lg py-2 px-6 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#2a52be] font-semibold rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 text-white"
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
