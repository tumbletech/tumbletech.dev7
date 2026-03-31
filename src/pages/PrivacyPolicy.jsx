import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const sections = [
    {
      title: "1. Introduction",
      body: `Tumbletech respects your privacy and is committed to protecting any personal information you may provide through this website. This Privacy Policy explains how information may be collected, used, stored, and protected when you visit or interact with the Tumbletech website.`,
    },
    {
      title: "2. Information We May Collect",
      body: `We may collect information that you voluntarily provide through contact forms, inquiry fields, or direct communication. This may include your name, email address, company name, phone number, project details, and any other information you choose to submit.`,
    },
    {
      title: "3. Automatically Collected Data",
      body: `Like many websites, this site may collect limited technical and usage information automatically, such as browser type, device information, operating system, IP address, pages visited, referral sources, and general interaction data. This information is typically used for analytics, security, and website improvement purposes.`,
    },
    {
      title: "4. How We Use Information",
      body: `Information collected through this website may be used to respond to inquiries, evaluate project fit, communicate with you, improve website performance, maintain security, analyze usage trends, and support Tumbletech's operations and service delivery.`,
    },
    {
      title: "5. No Sale of Personal Information",
      body: `Tumbletech does not sell your personal information to third parties. Any information you provide is used primarily for communication, inquiry handling, project evaluation, operational improvement, and related legitimate business purposes.`,
    },
    {
      title: "6. Sharing of Information",
      body: `Tumbletech may share information only when reasonably necessary, such as with trusted service providers, hosting providers, analytics services, email delivery tools, legal advisers, or when required by law, regulation, legal process, or the protection of rights, safety, and security.`,
    },
    {
      title: "7. Cookies and Analytics",
      body: `This website may use cookies, tracking technologies, or third-party analytics tools to understand visitor behavior, measure traffic, and improve website performance. You may control cookies through your browser settings, although doing so may affect certain site functions.`,
    },
    {
      title: "8. Data Retention",
      body: `Tumbletech may retain submitted or collected information for as long as reasonably necessary for communication, recordkeeping, business operations, legal compliance, dispute resolution, and security purposes, unless a longer retention period is required or permitted by law.`,
    },
    {
      title: "9. Data Security",
      body: `Reasonable administrative, technical, and organizational measures are taken to help protect information against unauthorized access, misuse, alteration, disclosure, or destruction. However, no website, email transmission, or digital storage system can be guaranteed to be absolutely secure.`,
    },
    {
      title: "10. Third-Party Services and Links",
      body: `This website may contain links to third-party platforms, social media pages, video platforms, external tools, or embedded services. Tumbletech is not responsible for the privacy practices, content, or security of those third-party services, and users should review their separate policies where applicable.`,
    },
    {
      title: "11. Children's Privacy",
      body: `This website is not intended to knowingly collect personal information from children without appropriate supervision or lawful basis. If you believe that personal information from a child has been submitted improperly, please contact Tumbletech so appropriate action can be taken.`,
    },
    {
      title: "12. Your Choices",
      body: `You may choose not to provide personal information through this website. However, doing so may limit Tumbletech's ability to respond to your inquiry or provide requested information. You may also request correction or deletion of certain submitted information, subject to applicable legal and operational limitations.`,
    },
    {
      title: "13. Changes to This Privacy Policy",
      body: `Tumbletech may update or revise this Privacy Policy from time to time without prior notice. Any updates will become effective once posted on this website. Continued use of the website after changes are posted constitutes acceptance of the revised policy.`,
    },
    {
      title: "14. Contact",
      body: `If you have questions regarding this Privacy Policy or how information may be handled through this website, you may contact Tumbletech through the contact channels provided on the site.`,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="border-b border-cyan-500/10 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">

          <button
            onClick={() => navigate(-1)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-200 transition hover:border-cyan-300/40 hover:bg-cyan-500/10 hover:text-white"
            >
            ← Back to Last Page
            </button>

          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            Legal
          </div>

          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-8 text-cyan-100/75 md:text-base">
            This Privacy Policy explains how Tumbletech may collect, use,
            store, and protect information submitted through or generated by
            your use of this website.
          </p>

          <div className="mt-6 h-[2px] w-20 bg-cyan-400/70" />
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.03] p-6 md:p-10">
          <div className="mb-10 text-sm text-cyan-100/50">
            Effective date: March 31, 2026
          </div>

          <div className="space-y-10">
            {sections.map((section) => (
              <div
                key={section.title}
                className="border-b border-cyan-500/10 pb-8 last:border-b-0 last:pb-0"
              >
                <h2 className="text-xl font-semibold text-white md:text-2xl">
                  {section.title}
                </h2>

                <p className="mt-4 text-sm leading-8 text-cyan-100/75 md:text-base">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-cyan-400/20 bg-black/40 p-5">
            <p className="text-sm leading-7 text-cyan-100/70">
              By using this website, you acknowledge this Privacy Policy and
              agree to the handling of information as described here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}