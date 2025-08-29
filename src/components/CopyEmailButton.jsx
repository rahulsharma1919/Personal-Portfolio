import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "rahul1sharma1919@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extraLight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="flex items-center justify-center gap-2"
          >
            <img
              src="assets/copy-done.svg"
              alt="email copied"
              className="w-4"
            />
            Email Copied
          </motion.p>
        ) : (
          <motion.p
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="flex items-center justify-center gap-2"
          >
            <img src="assets/copy.svg" alt="copy email" className="w-4" /> Copy
            Email
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
