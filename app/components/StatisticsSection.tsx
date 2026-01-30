export default function StatisticsSection() {
  return (
    <section className="bg-[#2F5D50] py-16 px-6 md:py-14 md:px-0">
      <div className="mx-auto max-w-full">
        <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {/* Stat 1: Downloads */}
          <div className="text-center">
            <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              10,000+
            </div>
            <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              downloads
            </div>
            <p className="text-sm font-normal leading-relaxed text-white opacity-90 md:text-md:text-[15px]">
              Growing community across cities and interests.
            </p>
          </div>

          {/* Stat 2: Active Communities */}
          <div className="text-center">
            <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              100+
            </div>
            <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              Active communities
            </div>
            <p className="text-sm font-normal leading-relaxed text-white opacity-90 md:text-md:text-[15px]">
              From social meetups to lifestyle-based groups.
            </p>
          </div>

          {/* Stat 3: Daily Posts */}
          <div className="text-center">
            <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              100,000+
            </div>
            <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              Daily Posts
            </div>
            <p className="text-sm font-normal leading-relaxed text-white opacity-90 md:text-[15px]">
              Designed to move beyond screens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
