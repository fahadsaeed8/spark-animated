import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="bg-[#F5F2ED] py-62 -mt-60 md:mt-0 px-6 md:py-16 md:px-12">
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-center">
        {/* Logo - Centered at top */}
        <div className="mb-8 md:mb-12 flex items-center justify-center">
          <div
            className="animate-rotate"
            style={{
              animation: "rotate 10s linear infinite",
              display: "inline-block",
              transformOrigin: "center center",
            }}
          >
            <Image
              src="/Layer_1.svg"
              width={80}
              height={80}
              alt="Society & The Circle Logo"
              className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28"
            />
          </div>
        </div>

        {/* Social Media Icons - Centered row */}
        <div className="flex flex-row gap-3 md:gap-0 items-center justify-center">
          {/* TikTok - Using YouTube icon as placeholder, replace with TikTok icon when available */}
          <a
            href="#"
            className=" p-2 md:p-2.5 transition hover:opacity-80 flex items-center justify-center"
            aria-label="TikTok"
          >
            <Image
              src="/Vector (17).svg"
              alt="TikTok"
              width={20}
              height={20}
              className="w-4 h-4 md:w-8 md:h-8"
            />
          </a>
          {/* Instagram */}
          <a
            href="#"
            className=" p-2 md:p-2.5 transition hover:opacity-80 flex items-center justify-center"
            aria-label="Instagram"
          >
            <Image
              src="/Vector (18).svg"
              alt="Instagram"
              width={20}
              height={20}
              className="w-4 h-4 md:w-8 md:h-8"
            />
          </a>
          {/* Facebook */}
          <a
            href="#"
            className=" p-2 md:p-2.5 transition hover:opacity-80 flex items-center justify-center"
            aria-label="Facebook"
          >
            <Image
              src="/Vector (19).svg"
              alt="Facebook"
              width={20}
              height={20}
              className="w-4 h-4 md:w-8 md:h-8"
            />
          </a>
          {/* Twitter */}
          <a
            href="#"
            className=" p-2 md:p-2.5 transition hover:opacity-80 flex items-center justify-center"
            aria-label="Twitter"
          >
            <Image
              src="/Vector (20).svg"
              alt="Twitter"
              width={20}
              height={20}
              className="w-4 h-4 md:w-8 md:h-8"
            />
          </a>
          {/* LinkedIn */}
          <a
            href="#"
            className="p-2 md:p-2.5 transition hover:opacity-80 flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <Image
              src="/Vector (21).svg"
              alt="LinkedIn"
              width={20}
              height={20}
              className="w-4 h-4 md:w-8 md:h-8"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
