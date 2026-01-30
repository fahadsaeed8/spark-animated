import Image from "next/image";

export default function EasyAndSafeFeaturesSection() {
  return (
    <section className="py-16 px-6 bg-[#fbead0] md:py-24 md:px-12 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/Background-grey.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="mx-auto max-w-6xl relative z-10">
        <h2 className="mb-4 text-center font-clash text-2xl font-medium text-[#1B1B1B] md:text-5xl">
          Easy and safe features
        </h2>
        <h2 className="mb-4 text-center font-clash text-2xl font-medium text-[#1B1B1B] md:text-5xl">
          of The Circle Society app
        </h2>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-6 md:mt-20 lg:gap-8">
          {/* Feature 1: Community Groups */}
          <div className="text-center">
            <div className="mb-6 flex justify-start">
              <div>
                <Image
                  src="/Dating on POF.svg"
                  alt="Community Groups"
                  width={210}
                  height={210}
                  className="mx-auto"
                />
              </div>
            </div>
            <h4 className="mb-3 font-clash text-xl md:text-3xl text-start font-medium text-[#1B1B1B]">
              Community Groups
            </h4>
            <p className="text-sm leading-relaxed w-[80%] text-start text-[#5A5A5A] md:text-[22px]">
              Join groups based on your passions — from fitness to faith, food
              to family.
            </p>
          </div>

          {/* Feature 2: Events You'll Love */}
          <div className="text-center">
            <div className="mb-6 flex justify-start">
              <div>
                <Image
                  src="/For our anniversary, this fool got me a card that read, 'You're the best thing I've ever found on the Internet._'.svg"
                  alt="Events You'll Love"
                  width={290}
                  height={290}
                  className="mx-auto"
                />
              </div>
            </div>
            <h4 className="mb-3 font-clash text-xl md:text-3xl text-start font-medium text-[#1B1B1B]">
              Events You'll Love
            </h4>
            <p className="text-sm leading-relaxed w-[80%] text-start text-[#5A5A5A] md:text-[22px]">
              Find and create local meetups and experiences that matter.
            </p>
          </div>

          {/* Feature 3: Match & Connect */}
          <div className="text-center">
            <div className="mb-6 flex justify-start">
              <div>
                <Image
                  src="/pof_illustration_heart_hi.webp.svg"
                  alt="Match & Connect"
                  width={340}
                  height={340}
                  className="mx-auto "
                />
              </div>
            </div>
            <h4 className="mb-3 font-clash text-xl md:text-3xl text-start font-medium text-[#1B1B1B]">
              Match & Connect
            </h4>
            <p className="text-sm leading-relaxed w-[80%] text-start text-[#5A5A5A] md:text-[22px]">
              Discover people based on shared interests, not superficial
              swipes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


