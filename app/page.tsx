import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.png')",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col">
          {/* NAVBAR */}
          <header className="flex items-center justify-between px-6 py-5 md:px-12">
            {/* Logo - White circle with line through it */}
            <div className="flex items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <circle cx="16" cy="16" r="15" stroke="white" strokeWidth="2" />
                <line
                  x1="8"
                  y1="16"
                  x2="24"
                  y2="16"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Nav Links */}
            <nav className="hidden gap-6 text-xs font-medium uppercase tracking-wide text-white md:flex lg:gap-8">
              <a className="hover:opacity-80 transition-opacity" href="#">
                ABOUT
              </a>
              <a className="hover:opacity-80 transition-opacity" href="#">
                ABOUT COMMUNITY
              </a>
              <a className="hover:opacity-80 transition-opacity" href="#">
                ABOUT EVENT
              </a>
              <a className="hover:opacity-80 transition-opacity" href="#">
                ABOUT KEEPER MAKING
              </a>
              <a className="hover:opacity-80 transition-opacity" href="#">
                CONTACT US
              </a>
            </nav>
          </header>

          {/* HERO CENTER */}
          <div className="flex flex-1 items-center justify-center px-6 text-start">
            <div className="max-w-5xl">
              <h1 className="mb-10 font-clash text-4xl font-light leading-tight text-[#F5F2ED] md:text-6xl lg:text-8xl">
                The most welcoming way to date
              </h1>

              {/* Buttons */}
              <div className="flex flex-wrap justify-start gap-4">
                <button className="rounded-lg bg-[#E69F4F] px-8 py-3 text-sm font-medium text-white transition hover:bg-orange-600">
                  Download for iOS
                </button>

                <button className="rounded-lg bg-[#E69F4F] px-8 py-3 text-sm font-medium text-white transition hover:bg-orange-600">
                  Download for Android
                </button>
              </div>
            </div>
          </div>

          {/* FOOTNOTE */}
          <div className="px-6 pb-6 text-center text-[10px] text-white opacity-70 md:px-12">
            Terms are applied. Images are for illustrative purposes only. Prices
            or offers are subject to change without prior notice.
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="bg-[#f5f5f0] py-16 px-6 md:py-24 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-normal text-gray-800 md:text-3xl">
            Who we are
          </h2>
          <h3 className="mb-6 text-3xl font-normal text-gray-900 md:text-4xl lg:text-5xl">
            A Social App for Real People
          </h3>
          <p className="text-base leading-relaxed text-gray-700 md:text-lg">
            Circle Society is designed to help you build meaningful connections
            — through interest-based communal, social actions, and thoughtful
            introductions. No pretense, no pressure — just authentic social
            experiences.
          </p>
        </div>
      </section>

      {/* EASY AND SAFE FEATURES SECTION */}
      <section className="bg-[#f5f5f0] py-16 px-6 md:py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-2xl font-normal text-gray-800 md:text-3xl">
            Easy and safe features
          </h2>
          <h3 className="mb-12 text-center text-3xl font-normal text-gray-900 md:text-4xl">
            of The Circle Society app
          </h3>

          {/* Feature Cards */}
          <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
            {/* Feature 1: Community Groups */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="rounded-lg bg-white p-8 shadow-sm">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-800"
                    style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))" }}
                  >
                    {/* Top box - sketchy style */}
                    <path
                      d="M20 10 L100 10 L100 50 L20 50 Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <text
                      x="60"
                      y="32"
                      textAnchor="middle"
                      fontSize="9"
                      fill="currentColor"
                      fontFamily="Arial, sans-serif"
                    >
                      Where we can be you.
                    </text>
                    {/* Bottom left box */}
                    <path
                      d="M20 60 L55 60 L55 95 L20 95 Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Fish icon */}
                    <path
                      d="M30 75 Q37.5 70, 37.5 75 Q37.5 80, 30 75"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <circle cx="32" cy="75" r="1.5" fill="currentColor" />
                    {/* Bottom right box */}
                    <path
                      d="M65 60 L100 60 L100 95 L65 95 Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* House icon */}
                    <path
                      d="M75 70 L82.5 65 L90 70 L90 85 L75 85 Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M80 85 L80 75"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="mb-3 text-xl font-medium text-gray-900">
                Community Groups
              </h4>
              <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                Join groups based on your passion — from hobbies to faith, food
                to family.
              </p>
            </div>

            {/* Feature 2: Events You'll Love */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="rounded-lg bg-white p-8 shadow-sm">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-800"
                    style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))" }}
                  >
                    {/* Left person - heart head */}
                    <path
                      d="M35 28 C35 20, 42 15, 50 20 C58 15, 65 20, 65 28 C65 35, 50 50, 50 50 C50 50, 35 35, 35 28 Z"
                      fill="currentColor"
                      opacity="0.2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="50"
                      y2="75"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="50"
                      y1="75"
                      x2="38"
                      y2="90"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="50"
                      y1="75"
                      x2="62"
                      y2="90"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    {/* Right person - heart head */}
                    <path
                      d="M85 28 C85 20, 92 15, 100 20 C108 15, 115 20, 115 28 C115 35, 100 50, 100 50 C100 50, 85 35, 85 28 Z"
                      fill="currentColor"
                      opacity="0.2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="100"
                      y1="50"
                      x2="100"
                      y2="75"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="100"
                      y1="75"
                      x2="88"
                      y2="90"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="100"
                      y1="75"
                      x2="112"
                      y2="90"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    {/* Holding hands */}
                    <path
                      d="M62 70 Q70 70, 78 70"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="mb-3 text-xl font-medium text-gray-900">
                Events You'll Love
              </h4>
              <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                Find and create social meetups and experiences that matter.
              </p>
            </div>

            {/* Feature 3: Match & Connect */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="rounded-lg bg-white p-8 shadow-sm">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-800"
                    style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))" }}
                  >
                    {/* Heart */}
                    <path
                      d="M60 35 C55 25, 45 25, 45 35 C45 40, 60 55, 60 55 C60 55, 75 40, 75 35 C75 25, 65 25, 60 35 Z"
                      fill="currentColor"
                      opacity="0.2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Speech bubble */}
                    <path
                      d="M50 70 L90 70 L90 90 L65 90 L60 95 L60 90 L50 90 Z"
                      fill="white"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <text
                      x="70"
                      y="82"
                      textAnchor="middle"
                      fontSize="11"
                      fill="currentColor"
                      fontFamily="Arial, sans-serif"
                      fontWeight="500"
                    >
                      Hi
                    </text>
                  </svg>
                </div>
              </div>
              <h4 className="mb-3 text-xl font-medium text-gray-900">
                Match & Connect
              </h4>
              <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                Discover people based on shared interests, not superficial
                swipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE REAL CONNECTIONS COME TO LIFE SECTION */}
      <section className="bg-gray-800 py-16 px-6 md:py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-normal text-white md:text-4xl lg:text-5xl">
            Where real connections come to life
          </h2>

          {/* Image Collage Placeholder */}
          <div className="relative mx-auto max-w-4xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-700">
              {/* Main central image placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-full w-full bg-gradient-to-br from-gray-600 to-gray-800 opacity-50"></div>
              </div>
              {/* Collage grid overlay */}
              <div className="absolute inset-0 grid grid-cols-4 gap-2 p-4">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="rounded bg-gray-600 opacity-60"
                    style={{
                      backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzQ0NDQ0NCIvPjwvc3ZnPg==')`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="bg-teal-700 py-16 px-6 md:py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
            {/* Stat 1: Downloads */}
            <div className="text-center">
              <div className="mb-2 text-5xl font-normal text-white md:text-6xl lg:text-7xl">
                10,000+
              </div>
              <div className="mb-2 text-lg font-medium text-white md:text-xl">
                downloads
              </div>
              <p className="text-sm leading-relaxed text-white opacity-90 md:text-base">
                Growing community across cities and interests.
              </p>
            </div>

            {/* Stat 2: Active Communities */}
            <div className="text-center">
              <div className="mb-2 text-5xl font-normal text-white md:text-6xl lg:text-7xl">
                100+
              </div>
              <div className="mb-2 text-lg font-medium text-white md:text-xl">
                Active communities
              </div>
              <p className="text-sm leading-relaxed text-white opacity-90 md:text-base">
                Find local meetups in interest-based groups.
              </p>
            </div>

            {/* Stat 3: Daily Posts */}
            <div className="text-center">
              <div className="mb-2 text-5xl font-normal text-white md:text-6xl lg:text-7xl">
                100,000+
              </div>
              <div className="mb-2 text-lg font-medium text-white md:text-xl">
                Daily Posts
              </div>
              <p className="text-sm leading-relaxed text-white opacity-90 md:text-base">
                Engaging conversations every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD APP SECTION */}
      <section className="bg-[#f5f5f0] py-16 px-6 md:py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-normal text-gray-900 md:text-4xl lg:text-5xl">
            Download the App Now
          </h2>

          {/* Phone Mockups */}
          <div className="relative mb-12 flex justify-center">
            <div className="relative flex items-center justify-center gap-4 md:gap-8">
              {/* Left Phone */}
              <div className="relative z-10 w-32 transform md:w-48 lg:w-56">
                <div className="relative rounded-[2rem] bg-gray-900 p-2 shadow-2xl">
                  <div className="aspect-[9/19] rounded-[1.5rem] bg-white overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-b from-gray-100 to-gray-200"></div>
                  </div>
                </div>
              </div>

              {/* Middle Phone */}
              <div className="relative z-20 w-36 transform md:w-56 lg:w-64">
                <div className="relative rounded-[2rem] bg-gray-900 p-2 shadow-2xl">
                  <div className="aspect-[9/19] rounded-[1.5rem] bg-gray-800 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-b from-gray-700 to-gray-900"></div>
                  </div>
                </div>
              </div>

              {/* Right Phone */}
              <div className="relative z-10 w-32 transform md:w-48 lg:w-56">
                <div className="relative rounded-[2rem] bg-gray-900 p-2 shadow-2xl">
                  <div className="aspect-[9/19] rounded-[1.5rem] bg-white overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-b from-gray-50 to-gray-100"></div>
                  </div>
                </div>
              </div>

              {/* Golden Glow Effect */}
              <div
                className="absolute inset-0 -z-10 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, rgba(253, 224, 71, 0.1) 50%, transparent 100%)",
                }}
              ></div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-3 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800 md:px-8 md:py-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm4.12-6.01c.19-.2.19-.52 0-.72l-4.24-4.24c-.2-.2-.52-.2-.72 0L5.57 11.72c-.19.2-.19.52 0 .72l4.24 4.24c.2.2.52.2.72 0l6.4-6.4zm-1.06 7.98l-2.27-2.27-8.49 8.49 10.76-6.22z" />
              </svg>
              Get it on Google Play
            </button>

            <button className="flex items-center gap-3 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800 md:px-8 md:py-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.18 8.13 9.5 7.9c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.9c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Download on the App Store
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-[#f5f5f0] py-12 px-6 md:py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap items-start justify-between gap-8">
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-700 transition hover:text-gray-900"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-700 transition hover:text-gray-900"
                aria-label="Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-700 transition hover:text-gray-900"
                aria-label="Twitter"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-700 transition hover:text-gray-900"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-700 transition hover:text-gray-900"
                aria-label="YouTube"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {/* Community Column */}
              <div>
                <h5 className="mb-3 text-sm font-medium text-gray-900">
                  Community
                </h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <a href="#" className="hover:text-gray-900 transition">
                      Downloads
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 transition">
                      Success Stories
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 transition">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 transition">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 transition">
                      Forum
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 transition">
                      Creators
                    </a>
                  </li>
                </ul>
              </div>

              {/* Help Column */}
              <div>
                <h5 className="mb-3 text-sm font-medium text-gray-900">Help</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <a href="#" className="hover:text-gray-900 transition">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 transition">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 transition">
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h5 className="mb-3 text-sm font-medium text-gray-900">
                  Company
                </h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <a href="#" className="hover:text-gray-900 transition">
                      About Us
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
              <div>
                <h5 className="mb-3 text-sm font-medium text-gray-900">
                  Legal
                </h5>
                <ul className="space-y-2 text-sm text-gray-700">
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
                      Community Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 transition">
                      Content Policy
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
                      The Trust & Safety
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
