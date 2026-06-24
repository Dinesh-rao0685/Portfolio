import React, { useState } from "react";
import toast from "react-hot-toast"

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.contact ||
      !formData.message
    ) {
      toast.error("Please fill all fields");
      return;
    }

    console.log("Form Submitted:", formData);
    toast.success("Submitted successfully")
    // yaha future me backend / email service call kar sakte ho
    setSubmitted(true);

    // reset form
    setFormData({
      fullName: "",
      email: "",
      contact: "",
      message: "",
    });
  };

  return (
    <div name="Contact" className="max-w-full border border-b-2 gap-3 flex flex-col w-full py-4 p-2 md:px-16 px-6 break-words">
      <h2 className="font-bold md:text-3xl text-2xl">Contact me</h2>
      <p>Please fill out the form below to contact me</p>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col gap-4 p-4 rounded-lg shadow-md"
      >
        <h2 className="font-semibold text-2xl">Send Your Message</h2>

        <div className="md:w-3/4 w-full space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="text-lg block mb-1">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-md p-2 border outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-lg block mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md p-2 border outline-none"
            />
          </div>

          {/* Contact */}
          <div>
            <label htmlFor="contact" className="text-lg block mb-1">
              Contact
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              placeholder="Enter your contact no"
              value={formData.contact}
              onChange={handleChange}
              className="w-full rounded-md p-2 border outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="text-lg block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full rounded-md p-2 border outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="p-2 my-3 bg-green-600 rounded-md px-8 md:w-3/4 w-full text-lg text-white hover:bg-green-700"
        >
          Send
        </button>

        {submitted && (
          <p className="text-green-600 font-medium">
            Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;