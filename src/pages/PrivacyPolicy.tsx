import HeroAbout from "../components/HeroAbout";

const SECTIONS = [
  {
    title: "1. Introduction",
    body: "Khaza Enterprise ('we', 'our', 'us') is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services or visit our website.",
  },
  {
    title: "2. Information We Collect",
    body: "We collect personal information that you voluntarily provide when booking our services, including your full name, phone number, email address, pick-up and drop-off locations, and travel dates. We do not collect sensitive personal data such as financial account details or national identification numbers.",
  },
  {
    title: "3. How We Use Your Information",
    body: "The information we collect is used solely to process your booking, confirm reservations, communicate service updates, and improve our offerings. We do not use your information for unsolicited marketing without your consent.",
  },
  {
    title: "4. Information Sharing",
    body: "We do not sell, trade, or rent your personal information to third parties. Your information may be shared with our drivers or internal staff only to the extent necessary to fulfil your booking. We may disclose information if required by law or a competent authority in Bangladesh.",
  },
  {
    title: "5. Data Security",
    body: "We take reasonable measures to protect your personal information from unauthorised access, disclosure, or loss. However, no method of transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "6. Cookies",
    body: "Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how our website is used. You may disable cookies through your browser settings, though this may affect certain features of the website.",
  },
  {
    title: "7. Your Rights",
    body: "You have the right to request access to the personal information we hold about you, correct any inaccuracies, or request its deletion. To exercise these rights, please contact us using the details below. We will respond to all requests within a reasonable timeframe.",
  },
  {
    title: "8. Third-Party Links",
    body: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any external sites you visit.",
  },
  {
    title: "9. Changes to This Policy",
    body: "We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting to our website. Continued use of our services following any changes constitutes your acceptance of the updated policy.",
  },
  {
    title: "10. Contact Us",
    body: "If you have any questions or concerns regarding this Privacy Policy, please contact us at khazaenterprise403@gmail.com or call 01685-809403 / 01793-358550. Our office is located at 209, North Manda, Mugda, Dhaka-1214.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#F8F5F2] min-h-screen">
      <HeroAbout />

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#8B1A3A] font-semibold tracking-widest text-xs uppercase mb-2">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Privacy <span className="text-[#8B1A3A]">Policy</span>
          </h1>
          
          <div className="mt-5 flex justify-center gap-1">
            <div className="w-12 h-1 rounded-full bg-[#8B1A3A]" />
            <div className="w-3 h-1 rounded-full bg-[#D4A843]" />
            <div className="w-3 h-1 rounded-full bg-[#8B1A3A] opacity-30" />
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-5">
          {SECTIONS.map((section, index) => (
            <div
              key={index}
              className="bg-white border border-[#E8E3DF] rounded-2xl p-6
                         hover:border-[#8B1A3A] hover:shadow-md transition-all duration-300"
            >
              <h2 className="text-lg font-bold text-[#8B1A3A] mb-2
                             font-['Barlow_Condensed',sans-serif] tracking-tight">
                {section.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}