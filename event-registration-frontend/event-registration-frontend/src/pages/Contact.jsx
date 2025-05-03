import React, { useState } from "react";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

// Navigation bar component
const Navigation = () => (
  <nav className="container mx-auto flex items-center justify-between h-[72px] px-4">
    <div className="logo"></div>
  </nav>
);

// Section header
const ContactHeader = () => (
  <div className="max-w-[1000px] ml-[230px] mx-auto px-4">
    <h1 className="text-[48px] font-extrabold bg-gradient-to-r from-[#310C7E] to-[#9372C1] text-transparent bg-clip-text mb-4">
      CONTACT US
    </h1>
    <p className="font-medium text-[#310C7E] leading-relaxed text-lg">
      Let’s connect — we’re here to help, and we’d love to hear from you!
      Whether you have a question, comment, or just want to chat, you can
      reach out to us through the contact form on this page, or by phone,
      email, or social media.
    </p>
  </div>
);

// Reusable button
const Button = ({ text, icon, isOutline, customStyles }) => (
  <button
    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold ${
      isOutline
        ? `border ${customStyles}`
        : `text-white ${customStyles}`
    }`}
  >
    {icon}
    {text}
  </button>
);

// Main Contact Form Page
const ContactPage = () => {
  const [name, setName] = useState("Anshu");
  const [email, setEmail] = useState("support@dosomecoding.com");
  const [text, setText] = useState("Subscribe to this channel");

  const onSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  };

  return (
    <div className="pb-20 bg-purple-200">
      <Navigation />
      <ContactHeader />

      <section className="flex items-end max-w-[1200px] mt-10 ml-[230px] mx-auto gap-16 flex-wrap relative">
        {/* Form */}
        <div className="flex flex-col gap-6 flex-1 min-w-[320px] max-w-[500px] z-10">
          <div className="flex gap-8">
            <Button
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="24px" />}
              customStyles="bg-[#310C7E] hover:bg-[#4d2aa0]"
            />
            <Button
              text="VIA CALL"
              icon={<FaPhoneAlt fontSize="24px" />}
              customStyles="bg-[#310C7E] hover:bg-[#4d2aa0]"
            />
          </div>

          <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<HiMail fontSize="24px" />}
            customStyles="border-[#9372C1] text-[#310C7E] hover:bg-[#f1ecfa]"
          />

          <form onSubmit={onSubmit} className="flex flex-col gap-5 pb-5">
            {[
              { label: "Name", name: "name", type: "text" },
              { label: "Email", name: "email", type: "email" },
            ].map(({ label, name, type }) => (
              <div className="flex flex-col w-full relative" key={name}>
                <label
                  htmlFor={name}
                  className="text-sm absolute -top-3 left-2 bg-[#f6edff] px-2 text-[#310C7E]"
                >
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  className="h-10 px-2 border-[2px] border-[#310C7E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#310C7E] bg-[#f6edff]"
                />
              </div>
            ))}

            <div className="flex flex-col w-full relative">
              <label
                htmlFor="text"
                className="text-sm absolute -top-3 left-2 bg-[#f6edff] px-2 text-[#310C7E]"
              >
                Description
              </label>
              <textarea
                name="text"
                rows="8"
                className="p-3 border-[2px] border-[#310C7E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#310C7E] bg-[#f6edff]"
              />
            </div>

            <div className="flex justify-end">
              <Button
                text="SUBMIT BUTTON"
                customStyles="bg-[#310C7E] hover:bg-[#4d2aa0]"
              />
            </div>
          </form>
        </div>

        {/* Floating UI */}
        <div className="flex-1 min-w-[300px] mb-[130px] flex justify-center items-center relative z-0">
          {/* Chat Bubble */}
          <div className="absolute bottom-[20px] right-[60px] bg-white rounded-3xl shadow-2xl p-6 w-[340px] transform rotate-[-5deg] z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-400 text-white flex items-center justify-center font-bold text-lg">CF</div>
              <div>
                <p className="text-base font-semibold text-gray-800">Chat with CF</p>
                <p className="text-sm text-gray-500">Typing...</p>
              </div>
            </div>
            <div className="text-sm text-gray-700 bg-gray-100 p-3 rounded mb-3">
              Hello! I’d love some help with your form.
            </div>
            <div className="text-sm text-white bg-[#310C7E] p-3 rounded text-right ml-auto w-fit">
              Sure! I’ll send the details now.
            </div>
          </div>

          {/* Calendar */}
          <div className="absolute bottom-[100px] right-[100px] bg-white rounded-3xl shadow-2xl p-6 w-[360px] transform rotate-[3deg] z-0">
            <p className="text-[#310C7E] font-bold mb-4 text-base">Pick a Date</p>
            <div className="grid grid-cols-7 gap-3 text-sm text-center text-gray-600">
              {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                <div key={d} className="font-bold text-[#9372C1]">{d}</div>
              ))}
              {[...Array(30).keys()].map((i) => {
                const day = i + 1;
                return (
                  <div
                    key={day}
                    className={`p-2 rounded-full ${day === 24 ? "bg-[#310C7E] text-white font-semibold" : ""}`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div className="absolute bottom-[200px] right-[-20px] bg-gradient-to-r from-[#fcefee] to-[#f5f1fc] p-6 rounded-3xl shadow-2xl w-[300px] transform rotate-[2deg] z-20">
            <p className="text-[#310C7E] font-semibold text-base mb-3">Contact Info</p>
            <div className="flex items-center gap-4 mb-2 text-sm">
              <FaPhoneAlt className="text-[#310C7E]" />
              <span>+1 (234) 567-890</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <HiMail className="text-[#310C7E]" />
              <span>help@support.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
