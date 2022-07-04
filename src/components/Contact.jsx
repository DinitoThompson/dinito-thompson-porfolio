import React from "react";
import emailjs from "@emailjs/browser";

import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_beizs7c",
        "template_jftdjck",
        form.current,
        "X0ZYEwMZiQf9uMgQr"
      )
      .then(
        (result) => {
          alert("Email Sent!");
        },
        (error) => {
          alert("Error, Reach out via email please.");
        }
      );
    e.target.reset();
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white uppercase tracking-widest">
            Get In Touch ?
          </p>
          <p className="py-3 font-medium">
            Fill out the form or Send me an email : <br />
            <span className="text-green-300 font-extralight tracking-widest">
              dinitothompson@gmail.com
            </span>{" "}
          </p>
        </div>
        {/* Contact Form */}
        <div className=" flex justify-center items-center">
          <form
            className="flex flex-col max-w-[600px] w-full"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="p-4">
              <input
                className="w-[100%] p-6 my-2 rounded-[0.5rem] bg-transparent border-[2px] border-solid border-white"
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
              />
              <input
                className="w-[100%] p-6 my-2 rounded-[0.5rem] bg-transparent border-[2px] border-solid border-white"
                type="text"
                name="subject"
                placeholder="Your Subject"
                required
              />
              <textarea
                className="w-[100%] p-6 my-2 rounded-[0.5rem] bg-transparent border-[2px] border-solid border-white"
                name="message"
                rows="7"
                placeholder="Your Message"
                required
              ></textarea>
              <div className="p-8 flex justify-center">
                <button
                  type="submit"
                  className="text-white border-2 hover:bg-white hover:text-black px-4 py-3 duration-500 rounded-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
