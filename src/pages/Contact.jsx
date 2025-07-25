import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        setSubmitted(true);
        form.current.reset();
        toast.success("Message sent successfully!");
        console.log(result.text);
      },
      (error) => {
        console.error("FAILED...", error.text);
        toast.error("⚠️ Something went wrong. Please try again.");
      }
    );
  };

  return (
    <section className="max-w-2xl mt-10 mx-auto px-6 py-16 text-neutral-800">
      <h1 className="text-3xl font-bold text-brand  mb-6 text-center">
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
          <p className="text-brand font-semibold text-sm mt-3">
            Thank you! Your message has been sent.
          </p>
        )}
      </form>

      <div className="bg-[#f6faf8] mt-10 border border-brand/20 rounded-xl p-5 mb-10 shadow-sm">
        <h2 className="text-lg font-semibold text-brand mb-2">
          Call Us Directly
        </h2>
        <p className="text-sm text-neutral-600 mb-1">
          📞{" "}
          <a
            href="tel:+917536861503"
            className="text-brand font-medium hover:underline"
          >
            +91 7536861503
          </a>
        </p>
        <p className="text-sm text-neutral-600">
          📞{" "}
          <a
            href="tel:+917409335016"
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
