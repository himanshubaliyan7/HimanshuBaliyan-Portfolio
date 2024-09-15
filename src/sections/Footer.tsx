import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/himanshu-baliyan/",
  },
  {
    title: "GitHub",
    link: "https://github.com/himanshubaliyan7",
  },
  {
    title: "Twitter",
    link: "https://x.com/HimanshuBaliy07",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/he_man_su/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/40 -z-10">
            Copyright &copy; {new Date().getFullYear()} Himanshu Baliyan
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.link}
                key={link.title}
                target="_blank"
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
