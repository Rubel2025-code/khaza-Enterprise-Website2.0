import { useState } from "react";
import HeroQuestions from "../components/HeroQuestions";
import FAQData from "../data/FAQData.tsx";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="border border-gray-300 rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Header */}
      <div
        className={`flex justify-between items-center px-6 py-4 select-none transition-colors duration-[250ms] ${open
            ? "bg-[#7b1535] text-white"
            : "bg-white text-gray-800 hover:bg-[#7b1535] hover:text-white"
          }`}
      >
        <span className={open ? "font-bold" : "font-semibold"}>{question}</span>

        <span
          className={`text-[22px] transition-transform duration-300 ${open ? "rotate-180 text-white" : "rotate-0 text-gray-500"
            }`}
        >
          ▾
        </span>
      </div>


      {/* Answer */}
      {open && (
        <div className="px-6 pt-3 pb-4 text-[14px] text-[#313a46] border-t border-gray-200 font-semibold">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function Questions() {
  return (
    <div>
      <HeroQuestions />

      {/* FAQ list */}
      <div className="max-w-[900px] mx-auto px-6 py-12 flex flex-col gap-4">
        {FAQData.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}

        {/* Contact box */}
        <div className="mt-8">
          <p className="font-bold text-gray-800">
            Can't find your question on this page?
          </p>
          <p className="mt-2 text-sm text-gray-600">
            We want you to feel confident with your stay, so please ask us
            anything through email at{" "}
            <a
              href="mailto:khazaenterprise403@gmail.com"
              className="text-red-700 font-semibold"
            >
              khazaenterprise403@gmail.com
            </a>{" "}
            or contact us by phone at{" "}
            <span className="font-medium">01685-809403, 01793-358550</span>.
          </p>
        </div>
      </div>
    </div>
  );
}