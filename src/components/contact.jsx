import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setResponse({ type: "success", message: data.message });
        setFormData({ firstName: "", email: "", message: "" });
      } else {
        setResponse({ type: "error", message: data.error });
      }
    } catch {
      setResponse({
        type: "error",
        message: "Server not responding.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#130035] text-white px-6 py-16 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-purple-600/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* LEFT */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold">
            <span className="bg-white text-transparent bg-clip-text">
              Let's Talk
            </span>
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Have a project in mind? Reach out and we’ll get back within 24 hours.
          </p>

          <div className="space-y-4 text-sm">
            <p>
              <span className="text-gray-500">Email:</span>{" "}
              <a href="mailto:hello@cerium6.com" className="hover:text-white">
                hello@cerium6.com
              </a>
            </p>
            <p>
              <span className="text-gray-500">Phone:</span>{" "}
              <a href="tel:+491234567890" className="hover:text-white">
                +49 123 456 7890
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          {response && (
            <div
              className={`mb-4 p-3 rounded-md text-sm ${
                response.type === "success"
                  ? "bg-green-500/20 text-green-300"
                  : "bg-red-500/20 text-red-300"
              }`}
            >
              {response.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <input
              type="text"
              name="firstName"
              placeholder="Your Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full px-4 py-2.5 rounded-md bg-black/40 border border-white/10 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full px-4 py-2.5 rounded-md bg-black/40 border border-white/10 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <textarea
              name="message"
              rows="3"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full px-4 py-2.5 rounded-md bg-black/40 border border-white/10 text-sm focus:ring-2 focus:ring-purple-500 outline-none resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-md bg-red-800 text-sm font-medium hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;