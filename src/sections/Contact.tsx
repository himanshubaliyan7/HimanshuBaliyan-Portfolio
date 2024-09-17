import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <section
      className="py-16 pt-12 lg:py-24 lg:pt-20 relative z-20"
      id="contact"
    >
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif">
                Let&apos;s Build Something Great Together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Looking for a developer who&apos;s ready to take on challenges
                and deliver top-tier web solutions? Let&apos;s connect and
                discuss how my skills can contribute to your team&apos;s
                success.
              </p>
            </div>
            <div>
              <a href="mailto:himanshubaliyan4000@gmail.com?subject=Let's%20Connect">
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                  <span className="font-semibold">Get in Touch</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
