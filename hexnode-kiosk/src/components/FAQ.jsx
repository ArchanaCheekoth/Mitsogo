import React, { useState } from "react";

const faqData = [
  {
    question: "What is Hexnode Kiosk Mode?",
    answer:
      "Hexnode Kiosk Mode allows you to lock down devices to run only specific applications, improving security and user experience.",
  },
  {
    question: "How do I set up Kiosk Mode on my device?",
    answer:
      "You can configure Kiosk Mode using the Hexnode dashboard. Navigate to the Policies section and apply the Kiosk profile to your device.",
  },
  {
    question: "Is Hexnode Kiosk Mode available for all platforms?",
    answer:
      "Yes, Hexnode Kiosk Mode supports Android, iOS, Windows, and macOS devices.",
  },
  {
    question: "Can I remotely manage devices in Kiosk Mode?",
    answer:
      "Yes, Hexnode provides remote device management, allowing you to push policies, monitor devices, and troubleshoot remotely.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto text-left">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4 bg-white p-4 rounded-lg shadow-md">
            <button
              className="w-full text-left font-semibold flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
