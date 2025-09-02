import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log("Form submitted:", formData);
      await emailjs.send(
        "service_fu4hhiy",
        "template_qoelemu",
        {
          from_name: formData.name,
          to_name: "Rahul",
          from_email: formData.email,
          to_email: "rahul1sharma1919@gmail.com",
          message: formData.message,
        },
        "bo8p3mH6NAAiXE7Zp"
      );
      setIsLoading(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      showAlertMessage("success", "Message sent successfully!");
    } catch (error) {
      setIsLoading(false);
      console.error("Error sending message:", error);
      showAlertMessage("danger", "Message not sent");
    }
    //   service_fu4hhiy
    //   template_qoelemu
  };
  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-center gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique idea to life, I'm here to help. Let's
            connect and discuss your project!
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="field-input field-input-focus"
              placeholder="John Doe"
              required
              autoComplete="name"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="field-input field-input-focus"
              placeholder="johndoe@gmail.com"
              required
              autoComplete="email"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              required
              autoComplete="message"
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
