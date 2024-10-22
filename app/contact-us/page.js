import { Map, Phone, Mail } from "lucide-react"

export default function ContactUs() {
  return (
    <div className="w-full bg-white">
      <section className="" id="contact">
        <div className="mx-auto max-w-6xl px-4 py-24 lg:py-32">
          <div className="w-full grid md:grid-cols-2 gap-x-10">
              <div className="h-full pr-6">
                <div className="rounded-xl overflow-hidden">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Contact Us</h2>
                  <p className="max-w-lg mt-6 mb-6">
                    Have something to say? We are here to help. Fill up the
                    form or send email or call phone.
                  </p>
                  <div className="flex items-center mt-8 space-x-2 text-dark-600">
                    <Map className="w-5 h-5"/>
                    <span>14th avenue glory road</span>
                  </div>
                  <div className="flex items-center mt-2 space-x-2 text-dark-600">
                    <Phone className="w-5 h-5"/>
                    <a href="mailto:hello@company.com">hello@company.com</a>
                  </div>
                  <div className="flex items-center mt-2 space-x-2 text-dark-600">
                    <Mail className="w-5 h-5"/>
                    <a href="tel:11111111111">+51 11111111111</a>
                  </div>
                </div>
              </div>
              <div className="card h-fit max-w-6xl" id="form">
                <form id="contactForm">
                  <div className="mb-6 mt-12 md:my-0">
                    <div className="mx-0 mb-2.5 md:mb-4">
                      <div className="mx-0 mb-2.5 md:mb-4">
                        <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                        <input type="TEXT" placeholder="Full Name" className="border border-black outline-none rounded-full w-full bg-white text-gray-600 text-sm px-5 py-2 md:py-3 min-w-0" />
                      </div>
                      <div className="mx-0 mb-2.5 md:mb-4">
                        <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                        <input type="email" placeholder="Email" className="border border-black outline-none rounded-full w-full bg-white text-gray-600 text-sm px-5 py-2 md:py-3 min-w-0" />
                      </div>
                    </div>
                    <div className="mx-0 mb-2.5 md:mb-4">
                      <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Your Message"
                        className="border border-black outline-none rounded-3xl w-full bg-white text-gray-600 text-sm px-5 py-2 md:py-3 min-w-0"></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="w-full bg-black text-white px-5 py-2.5 md:py-3 font-xl rounded-full sm:mb-0">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
