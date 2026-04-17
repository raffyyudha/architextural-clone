import Link from "next/link";

export default function BookInstaller() {
  return (
    <section className="bg-[#454240] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl text-white leading-tight">
              Are you ready to book<br />an installer?
            </h2>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              It&apos;s easy from here, just give us a few more details about your project and we&apos;ll match you to the best installer, local to you. Your installer will be in touch to discuss your project!
            </p>
            <Link
              href="/find-an-installer"
              className="inline-block bg-[#86776a] text-white px-8 py-4 text-sm tracking-wide hover:bg-[#756658] transition-colors"
            >
              Speak to an installer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
