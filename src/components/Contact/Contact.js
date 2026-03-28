"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Contact() {
  const [show, setShow] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function handleContactPopUp() {
    let showOnBottom =
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - (isMobile ? 3000 : 1500);

    setShow(showOnBottom);
  }
  function showEmailSlide() {
    setShowEmail(true);
  }

  useEffect(() => {
    if (window.innerWidth > 951) {
      setIsMobile(true);
    }
    window.addEventListener("scroll", handleContactPopUp);
    return () => window.removeEventListener("scroll", handleContactPopUp);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="contact-popup"
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 1000, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="emailPopupContainer fixed bottom-6 right-6 max-w-[400px] w-[90%] 
              rounded-xl card-shadow cursor-pointer transition-all duration-300 
              bg-white/10 backdrop-blur-lg p-6 flex flex-col gap-4 text-center

              sm:bottom-4 sm:right-4 sm:w-[95%] sm:max-w-[350px] sm:p-4
              xs:bottom-2 xs:right-2 xs:w-full xs:max-w-[320px] xs:p-3"
        >
          <h1 className="text-base font-mono">💬 Let’s Connect!</h1>
          {!showEmail ? (
            <>
              {isMobile && (
                <p className="font-mono">Let’s talk about what’s next.</p>
              )}
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="mailto:adhimakkimane99@gmail.com"
                  className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md text-white cursor-pointer w-[120px] flex items-center justify-center gap-[10px]"
                >
                  <MailIcon /> Email
                </a>

              </div>
            </>
          ) : (
            <EmailPopUp setShowEmail={setShowEmail} />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function EmailPopUp({ setShowEmail }) {
  const [disableSubmit, setDisableSubmit] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      setShowEmail(false);
    }, 2000);

    setDisableSubmit(true);
  }
  return (
    <motion.form
      key="email-popup"
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      className="flex flex-col justify-center items-center w-full gap-4 p-4 rounded-lg shadow-lg max-w-sm sm:max-w-[100%] sm:p-3 xs:max-w-[95%] xs:p-2"
      name="contact"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="w-[90%] px-4 py-2 rounded-lg border border-gray-300 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="text"
        placeholder="Subject"
        name="subject"
        className="w-[90%] px-4 py-2 rounded-lg border border-gray-300 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        placeholder="Message"
        name="message"
        className="w-[90%] px-4 py-2 rounded-lg border border-gray-300 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <div className="flex gap-4 justify-center flex-wrap">
        <button
          className={`px-4 py-2 rounded-lg text-white cursor-pointer transition-all ${
            disableSubmit
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
          type="submit"
          disabled={disableSubmit}
        >
          🚀 Send
        </button>

        <button
          onClick={() => setShowEmail(false)}
          className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white cursor-pointer transition-all"
        >
          ⬅️ Back
        </button>
      </div>
    </motion.form>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.24 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 6L12 13L2 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
