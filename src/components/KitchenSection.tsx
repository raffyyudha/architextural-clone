import Link from "next/link";
import Image from "next/image";

export default function KitchenSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://ext.same-assets.com/3334648824/417933128.png"
          alt="Modern kitchen interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Diagonal dark overlay on left */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/4 bg-[#100f0f]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 60% 100%, 0 100%)",
        }}
      />

      {/* Content */}
      <div className="relative h-full min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-md">
            <h2 className="text-4xl lg:text-5xl text-white leading-tight mb-6">
              Breathe new life<br />into your kitchen
            </h2>
            <Link
              href="/kitchen-refurbs"
              className="inline-block bg-[#86776a] text-white px-8 py-4 text-sm tracking-wide hover:bg-[#756658] transition-colors"
            >
              Interested? Let&apos;s go
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
