import FooterLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-gray-700 w-full">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1 space-y-4">
            <img
              src={FooterLogo}
              alt="DevStack Logo"
              className="h-8 object-contain"
            />
            <p className="text-gray-500 text-[13px] md:text-[15px] max-w-sm">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="flex gap-5 text-[13px] text-gray-700">
              <a href="#" className="text-blue-500 hover:text-blue-600 transition">
                GitHub
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600 transition">
                Twitter
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600 transition">
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[14px] md:text-[15px] text-gray-900 mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-[13px] md:text-[14px] text-gray-500">
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-600 transition">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-600 transition">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[14px] md:text-[15px] text-gray-900 mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-[13px] md:text-[14px] text-gray-500">
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-600 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-600 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-600 transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[14px] md:text-[15px] text-gray-900 mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-[13px] md:text-[14px] text-gray-500">
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-600 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-600 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 md:my-10 border-gray-200" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-500">
          <p className="text-center md:text-left">
            &copy; 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-blue-500 hover:text-blue-600 transition">
              Privacy
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600 transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;