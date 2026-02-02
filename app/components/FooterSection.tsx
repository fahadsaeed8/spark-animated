import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="bg-[#F5F2ED] py-12 px-6 md:py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Mobile: Stacked layout, Desktop: All in one row */}
        <div className="flex flex-col md:flex-row md:flex-wrap md:gap-30 items-start gap-8 md:gap-30">
          {/* Social Media Icons */}
          <div className="flex flex-row gap-4 w-full md:w-auto">
            <a
              href="#"
              className="text-gray-700 transition hover:text-gray-900"
              aria-label="Instagram"
            >
              <Image
                src="/Item → Link → SVG.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </a>
            <a
              href="#"
              className="text-gray-700 transition hover:text-gray-900"
              aria-label="Facebook"
            >
              <Image
                src="/Item → Link → SVG (1).svg"
                alt="Facebook"
                width={20}
                height={20}
              />
            </a>
            <a
              href="#"
              className="text-gray-700 transition hover:text-gray-900"
              aria-label="Twitter"
            >
              <Image
                src="/Item → Link → SVG (2).svg"
                alt="Twitter"
                width={20}
                height={20}
              />
            </a>
            <a
              href="#"
              className="text-gray-700 transition hover:text-gray-900"
              aria-label="LinkedIn"
            >
              <Image
                src="/Item → Link → SVG (3).svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </a>
            <a
              href="#"
              className="text-gray-700 transition hover:text-gray-900"
              aria-label="YouTube"
            >
              <Image
                src="/Item → Link → SVG (4).svg"
                alt="YouTube"
                width={20}
                height={20}
              />
            </a>
          </div>
          {/* Community Column */}
          <div className="w-full md:w-auto">
            <h5 className="mb-3 text-[18px] font-bold text-black">Community</h5>
            <ul className="space-y-2 text-sm text-black">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Plenty of Interests
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Plenty of Cities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  The Blog
                </a>
              </li>
            </ul>
          </div>
          {/* Help Column */}
          <div className="w-full md:w-auto">
            <h5 className="mb-3 text-[18px] font-bold text-black">Help</h5>
            <ul className="space-y-2 text-sm text-black">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Security
                </a>
              </li>
            </ul>
          </div>
          {/* Company Column */}
          <div className="w-full md:w-auto">
            <h5 className="mb-3 text-[18px] font-bold text-black">Company</h5>
            <ul className="space-y-2 text-sm text-black">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          {/* Legal Column */}
          <div className="w-full md:w-auto">
            <h5 className="mb-3 text-[18px] font-bold text-black">Legal</h5>
            <ul className="space-y-2 text-sm text-black">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Consumer Health Data Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Intellectual Property
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Publication Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Colorado Safety Policy Information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition flex items-center gap-1"
                >
                  Your Privacy Choices
                  <span className="inline-block w-8 h-8 rounded-full flex items-center justify-center">
                    <Image
                      src={"SVG.svg"}
                      alt=""
                      width={100}
                      height={100}
                      className="md:mt-1"
                    />{" "}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
