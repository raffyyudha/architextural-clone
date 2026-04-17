import Link from "next/link";
import Image from "next/image";

export default function WhyWrapping() {
  return (
    <section className="bg-[#100f0f] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl text-white leading-tight">
              Why wrapping?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              The game-changing solution that is revolutionising the interior redesign landscape.
            </p>
            <Link
              href="/why-wrapping"
              className="inline-block bg-[#86776a] text-white px-8 py-4 text-sm tracking-wide hover:bg-[#756658] transition-colors mt-4"
            >
              Find out why
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://ext.same-assets.com/3334648824/3170237336.png"
                alt="Vinyl wrapping process"
                fill
                className="object-cover"
              />
              {/* Decorative squares overlay */}
              <div className="absolute top-8 left-8 w-20 h-20 border-2 border-white/40" />
              <div className="absolute bottom-8 right-8 w-20 h-20 border-2 border-white/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
