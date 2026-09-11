import FooterLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 lg:py-13">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <img src={FooterLogo} alt="Footer Logo" className="h-8 object-contain" />
            <p className="text-gray-500 font-normal text-[13px] md:text-[15px] max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[14px] md:text-[15px] text-gray-900 mb-4 uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-[13px] md:text-[14px] text-gray-500">
              <li><a href="#" className="text-blue-500 transition hover:text-blue-700">Home</a></li>
              <li><a href="#" className="text-blue-500 transition hover:text-blue-700">Technologies</a></li>
              <li><a href="#" className="text-blue-500 transition hover:text-blue-700">Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[14px] md:text-[15px] text-gray-900 mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-[13px] md:text-[14px] text-gray-500">
              <li><a href="#" className="text-blue-500 transition hover:text-blue-700">About</a></li>
              <li><a href="#" className="text-blue-500 transition hover:text-blue-700">Contact</a></li>
              <li><a href="#" className="text-blue-500 transition hover:text-blue-700">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[14px] md:text-[15px] text-gray-900 mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-[13px] md:text-[14px] text-gray-500">
              <li><a href="#" className="text-blue-500 transition hover:text-blue-700">Privacy Policy</a></li>
              <li><a href="#" className="text-blue-500 transition hover:text-blue-700">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-10 border-gray-200" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-500">
          <p className="text-center md:text-left">&copy; 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-blue-500 transition hover:text-blue-700">Privacy</a>
            <a href="#" className="text-blue-500 transition hover:text-blue-700">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;