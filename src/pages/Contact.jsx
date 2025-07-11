import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // replace with your EmailJS Service ID
        "your_template_id", // replace with your EmailJS Template ID
        form.current,
        "your_public_key" // replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="max-w-2xl mt-10 mx-auto px-6 py-16 text-neutral-800">
      <h1 className="text-3xl font-bold text-brand mb-6 text-center">
        Contact Us
      </h1>

      <p className="text-center text-neutral-600 mb-10">
        Have questions about our treks or want to customize your adventure? Send
        us a message and we’ll get back to you soon.
      </p>

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label htmlFor="user_name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full border border-neutral-300 rounded px-4 py-2 focus:outline-brand"
          />
        </div>

        <div>
          <label htmlFor="user_email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full border border-neutral-300 rounded px-4 py-2 focus:outline-brand"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full border border-neutral-300 rounded px-4 py-2 focus:outline-brand"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-brand text-white px-6 py-2 rounded font-medium hover:bg-brand-hover transition"
        >
          Send Message
        </button>

        {submitted && (
          <p className="text-green-600 text-sm mt-3">
            Thank you! Your message has been sent.
          </p>
        )}
      </form>
      {/* Call Info Section */}
      <div className="bg-[#f6faf8] mt-10 border border-brand/20 rounded-xl p-5 mb-10 shadow-sm">
        <h2 className="text-lg font-semibold text-brand mb-2">
          Call Us Directly
        </h2>
        <p className="text-sm text-neutral-600 mb-1">
          📞{" "}
          <a
            href="tel:+917017502703"
            className="text-brand font-medium hover:underline"
          >
            +91 7536861503
          </a>
        </p>
        <p className="text-sm text-neutral-600">
          📞{" "}
          <a
            href="tel:+919999999999"
            className="text-brand font-medium hover:underline"
          >
            +91 7409335016
          </a>{" "}
          {/* Add any second number if needed */}
        </p>
        <p className="text-xs text-gray-500 mt-2 italic">
          Available daily from 9AM – 8PM IST
        </p>
      </div>
    </section>
  );
}
