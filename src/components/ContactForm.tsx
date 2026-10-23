import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full lg:w-96 flex-shrink-0">
      <div className="bg-red-800 rounded-xl overflow-hidden">


        {/* Header */}
        <div className="bg-gray-800 text-white text-center font-bold py-4 px-6 text-sm leading-snug">
          DO YOU HAVE ANY QUESTIONS?
          <br />
          CONTACT US!
        </div>



        {/* Fields */}
        
        <div className="p-4 flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="NAME"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white rounded-lg px-4 py-3 text-sm text-gray-600 placeholder-gray-400 outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="PHONE NUMBER"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-white rounded-lg px-4 py-3 text-sm text-gray-600 placeholder-gray-400 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white rounded-lg px-4 py-3 text-sm text-gray-600 placeholder-gray-400 outline-none"
          />
          <textarea
            name="message"
            placeholder="MESSAGE"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full bg-white rounded-lg px-4 py-3 text-sm text-gray-600 placeholder-gray-400 outline-none resize-none"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-red-900 hover:bg-red-700 transition-colors text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 mt-1 border border-white"
          >
            SUBMIT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}