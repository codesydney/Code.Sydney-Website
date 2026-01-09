export default function FooterCopyright() {
  return (
    <div className="flex flex-col gap-4 items-center lg:flex-row lg:justify-between">
      <div className="">
        <p className="text-center text-custom-light/70">
          Copyright © 2024 Code.Sydney Pty Ltd ABN 37 625 436 151
        </p>
      </div>
      <div className="flex space-between gap-4">
        <a
          href="/documents/Code.Sydney Website Privacy Policy 2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative cursor-pointer text-custom-light/70 hover:text-custom-primary/70 transition-colors duration-200"
        >
          Privacy Policy 2026
        </a>
        <a
          href="/documents/Code.Sydney Client Terms 2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative cursor-pointer text-custom-light/70 hover:text-custom-primary/70 transition-colors duration-200"
        >
          Terms 2026
        </a>
      </div>
    </div>
  );
}
