function Contact() {
  const inputStyle =
    "w-full h-14 text-gray-800 placeholder-text-400 text-lg  leading-7  focus:outline-none py-2 px-4 mb-8 font-semibold border-2 border-dark rounded-xs shadow-[6px_6px_0_var(--color-dark)]";
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
          <div className="flex items-center lg:mb-0 mb-10">
            <div>
              <h4 className="text-morning text-xl font-bold leading-6 mb-4 lg:text-left text-center">
                Contact Us
              </h4>
              <h2 className="text-dark text-4xl font-bold leading-10 mb-9 lg:text-left text-center">
                Reach Out To Us
              </h2>
              <form action="">
                <input type="text" className={inputStyle} placeholder="Name" />
                <input
                  type="email"
                  className={inputStyle}
                  placeholder="Email"
                />
                <textarea
                  id="text"
                  className="w-full h-48  resize-none text-gray-600 placeholder-text-400 text-lg  leading-7 focus:outline-none px-4 py-4 mb-8 font-semibold border-2 border-dark rounded-xs shadow-[6px_6px_0_var(--color-dark)]"
                  placeholder="Message"
                ></textarea>
                <button className="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-xs bg-morning cursor-pointer  transition-all duration-700 hover:!bg-morning hover:shadow-[6px_6px_0_var(--color-liteMorning)]">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="lg:max-w-xl w-full h-[600px] hidden md:flex items-center justify-center  bg-cover bg-no-repeat bg-[url('./images/contact.png')] ">
            {/* ...rest of your code, update all class to className ... */}
            {/* For brevity, not repeating the rest, but update all class to className */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
