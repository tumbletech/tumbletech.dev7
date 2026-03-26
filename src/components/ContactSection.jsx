import { useState } from "react";

const ENDPOINT_URL = "/api/contact.php";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    companyWebsite: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in your name, email, and message.",
      });
      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch(ENDPOINT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Submission failed.");
      }

      setSubmitStatus({
        type: "success",
        message: result.message || "Your inquiry has been sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        companyWebsite: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error.message || "Something went wrong.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-cyan-500/10 bg-black px-5 py-20 md:px-8"
    >
      <div className="mx-auto max-w-5xl rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.03] p-8 md:p-12">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            Contact Us
          </div>

          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Let’s talk about your workflow
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-cyan-100/70 md:text-base">
            Need automation, AI agents, a website, or a custom system? Send us a
            message and let’s discuss the right solution for your business.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <input
            type="text"
            name="companyWebsite"
            value={formData.companyWebsite}
            onChange={handleChange}
            className="hidden"
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-cyan-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-cyan-500/20 bg-black/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-cyan-100/35 focus:border-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-cyan-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-cyan-500/20 bg-black/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-cyan-100/35 focus:border-cyan-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm text-cyan-200">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="Optional"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-cyan-500/20 bg-black/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-cyan-100/35 focus:border-cyan-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-cyan-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell us what you need built, automated, or improved."
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-cyan-500/20 bg-black/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-cyan-100/35 focus:border-cyan-400"
            />
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-xl border border-cyan-400 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Inquiry"}
            </button>

            <div className="text-sm text-cyan-100/50">
              Or email us directly at{" "}
              <a
                href="mailto:admin@tumbletech.dev"
                className="text-cyan-300 transition hover:text-cyan-200"
              >
                admin@tumbletech.dev
              </a>
            </div>
          </div>

          {submitStatus && (
            <div
              className={`rounded-xl border px-4 py-3 text-sm ${
                submitStatus.type === "success"
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                  : "border-red-400/30 bg-red-400/10 text-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}