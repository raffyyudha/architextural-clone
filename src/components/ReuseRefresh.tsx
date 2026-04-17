import Link from "next/link";
import Image from "next/image";

export default function ReuseRefresh() {
  return (
    <section className="bg-[#e0ddda] relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Image Side with Diagonal Cut */}
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
          <Image
            src="https://ext.same-assets.com/3334648824/4279719394.png"
            alt="Modern bedroom interior"
            fill
            className="object-cover"
          />
          {/* Diagonal overlay for the cut effect */}
          <div
            className="absolute top-0 right-0 w-[120px] h-full bg-[#e0ddda] hidden lg:block"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
            }}
          />
        </div>

        {/* Content Side */}
        <div className="flex items-center py-16 lg:py-0">
          <div className="px-6 lg:px-16 max-w-lg">
            {/* Decorative zigzag line */}
            <div className="mb-8 relative">
              <svg className="w-40 h-6" viewBox="0 0 160 24">
                <path
                  d="M0 12 L20 12 L30 4 L40 20 L50 4 L60 20 L70 4 L80 20 L90 12 L160 12"
                  stroke="#a89a8c"
                  strokeWidth="1.5"
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
