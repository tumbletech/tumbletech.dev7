import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserAgreement() {
  const navigate = useNavigate();
  const sections = [
    {
      title: "1. Acceptance of Terms",
      body: `By accessing or using the Tumbletech website, you agree to be bound by this User Agreement and all applicable laws and regulations. If you do not agree, please do not use this website.`,
    },
    {
      title: "2. Website Purpose",
      body: `This website is provided for general information about Tumbletech's services, projects, ideas, and contact channels. Nothing on this website shall be interpreted as a guaranteed offer, final scope, binding proposal, or automatic client engagement unless expressly confirmed by Tumbletech in writing.`,
    },
    {
      title: "3. No Automatic Client Relationship",
      body: `Viewing this website, sending a message through the contact form, or corresponding with Tumbletech does not automatically create a client-consultant, contractor-client, partnership, or employment relationship. Any formal engagement shall only exist after clear written agreement by both parties.`,
    },
    {
      title: "4. Intellectual Property",
      body: `Unless otherwise stated, all content on this website, including text, branding, layouts, concepts, graphics, project descriptions, and original materials, belongs to Tumbletech and is protected by applicable intellectual property laws. You may not reproduce, republish, modify, distribute, or commercially use any content without prior written permission.`,
    },
    {
      title: "5. Project Samples and Demonstrations",
      body: `Any featured projects, demos, mockups, concepts, prototypes, workflows, automations, AI systems, or sample materials shown on this website are for presentation, illustration, or portfolio purposes only. Availability, specifications, scope, pricing, and implementation details may change without notice.`,
    },
    {
      title: "6. User Conduct",
      body: `You agree not to use this website in any way that is unlawful, harmful, disruptive, abusive, fraudulent, or intended to interfere with the operation, security, or integrity of the website. You also agree not to attempt unauthorized access to any part of the site, server, forms, or connected systems.`,
    },
    {
      title: "7. Submitted Information",
      body: `If you submit inquiries, messages, or project-related information through this website, you represent that the information you provide is accurate to the best of your knowledge and does not violate the rights of any third party. Tumbletech reserves the right, but not the obligation, to respond to inquiries at its discretion.`,
    },
    {
      title: "8. No Warranty",
      body: `This website and its contents are provided on an "as is" and "as available" basis. Tumbletech makes no warranties, express or implied, regarding the completeness, accuracy, reliability, availability, suitability, or fitness of the website or its contents for any particular purpose.`,
    },
    {
      title: "9. Limitation of Liability",
      body: `To the fullest extent permitted by law, Tumbletech shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising from or related to your use of, inability to use, or reliance on this website or any information presented on it.`,
    },
    {
      title: "10. Third-Party Links",
      body: `This website may contain links to third-party platforms or services such as social media sites, video platforms, forms, or external tools. Tumbletech is not responsible for the content, policies, availability, or practices of those third-party websites.`,
    },
    {
      title: "11. Changes to the Website or Agreement",
      body: `Tumbletech may update, revise, suspend, or remove any part of this website or this User Agreement at any time without prior notice. Continued use of the website after changes are posted constitutes your acceptance of the revised terms.`,
    },
    {
      title: "12. Privacy",
      body: `Your use of this website is also subject to Tumbletech's Privacy Policy. Where this User Agreement and the Privacy Policy both apply, they should be read together.`,
    },
    {
      title: "13. Governing Law",
      body: `This User Agreement shall be governed by and interpreted in accordance with the laws of the Republic of the Philippines, without prejudice to any applicable mandatory legal protections.`,
    },
    {
      title: "14. Contact",
      body: `For questions regarding this User Agreement, you may contact Tumbletech through the contact channels provided on this website.`,
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
            User Agreement
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-8 text-cyan-100/75 md:text-base">
            This User Agreement governs your access to and use of the
            Tumbletech website. By continuing to browse or use this site, you
            acknowledge and accept the terms below.
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
              If you do not agree with this User Agreement, do not use the website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}