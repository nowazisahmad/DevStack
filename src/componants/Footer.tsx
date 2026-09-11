import FooterLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-gray-700 w-full">
      <div className="grid grid-cols-4 container mx-auto gap-20 px-5 py-20 md:px-10 lg:px-0">
        <div>
          <img src={FooterLogo} alt="Footer Logo" />
          <p className="text-gray-500 font-normal text-[13px] md:text-[16] py-5 max-w-lg">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div>
            <ul className="flex justify-between items-center text-4 py-5 text-blue-500 transition hover:text-blue-500">
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-[17px]">PRODUCT</h4>
          <ul className="text-[13px] py-4 text-blue-500 transition hover:text-blue-500 space-y-3">
            <li><a href="#">Home</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[17px]">COMPANY</h4>
          <ul className="text-[13px] py-4 text-blue-500 transition hover:text-blue-500 space-y-3">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#"></a>Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[17px]">LEGAL</h4>
          <ul className="text-[13px] py-4 text-blue-500 transition hover:text-blue-500 space-y-3">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#"></a>Terms of Service</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex justify-between container mx-auto py-10">
        <p className="text-gray-500 font-normal text-[13px] md:text-[16] max-w-lg">&copy; 2026 Dev Stack. All rights reserved.</p>
        <div>
            <ul className="flex justify-between gap-5 text-[13px] text-blue-500 transition hover:text-blue-500 space">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
