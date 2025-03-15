"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Contact() {
  const [show, setShow] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
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

  async function copyMyEmail() {
    try {
      await navigator.clipboard.writeText("adhimakkimane99@gmail.com");
      setCopiedToClipboard(true);
      setTimeout(() => setCopiedToClipboard(false), 5000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
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
          className="emailPopupContainer fixed bottom-4 right-4 max-w-[400px] w-[90%] 
              rounded-lg card-shadow cursor-pointer transition-all duration-300 
              bg-white/5 backdrop-blur-md p-4 flex flex-col gap-4 text-center

              sm:bottom-2 sm:right-2 sm:w-[95%] sm:max-w-[350px] sm:p-3
              xs:bottom-2 xs:right-2 xs:w-full xs:max-w-[320px] xs:p-3"
        >
          <h1 className="text-base font-mono">💬 Let’s Connect!</h1>
          {!showEmail ? (
            <>
              {isMobile && (
                <p className="font-mono">Let’s talk about what’s next.</p>
              )}
              <div className="flex gap-4 justify-center flex-wrap">
                <div
                  onClick={copyMyEmail}
                  className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md text-white cursor-pointer w-[120px] flex items-center gap-[10px]"
                >
                  <CopyIcon /> {!copiedToClipboard ? " Email" : " Copied"}
                </div>
                <div
                  className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md text-white cursor-pointer"
                  onClick={showEmailSlide}
                >
                  📩 Contact Me
                </div>
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

function CopyIcon() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
