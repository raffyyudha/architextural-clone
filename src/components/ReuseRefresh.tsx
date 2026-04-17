import Link from "next/link";
import Image from "next/image";

export default function ReuseRefresh() {
  return (
    <section className="bg-[#e0ddda] relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Image Side with Diagonal Cut */}
        <div className="relative h-[400px] lg:h-auto">
          <div className="absolute inset-0 lg:right-[-50px]">
            <Image
              src="https://ext.same-assets.com/3334648824/4279719394.png"
              alt="Modern bedroom interior"
              fill
              className="object-cover"
            />
          </div>
          {/* Diagonal overlay for the cut effect */}
          <div
            className="absolute top-0 right-0 w-[100px] h-full bg-[#e0ddda] hidden lg:block"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
            }}
          />
        </div>

        {/* Content Side */}
        <div className="flex items-center py-16 lg:py-0">
          <div className="px-6 lg:px-16 max-w-lg">
            {/* Decorative lines */}
            <div className="mb-8">
              <svg className="w-32 h-8" viewBox="0 0 128 32">
                <path
                  d="M0 16 L40 16 L50 8 L60 24 L70 8 L80 24 L90 16 L128 16"
                  stroke="#86776a"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>

            <h2 className="text-4xl lg:text-5xl text-[#100f0f] leading-tight mb-6">
              Reuse. Refresh.<br />Redefine.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Up-cycle your existing spaces without the disruption or cost of large refurbishments.
            </p>
            <Link
              href="/why-wrapping"
              className="inline-block bg-[#86776a] text-white px-8 py-4 text-sm tracking-wide hover:bg-[#756658] transition-colors"
            >
              See how it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
