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
          href="https://github.com/codesydney"
          className="group relative cursor-pointer text-custom-light/70 hover:text-custom-primary/70 transition-colors duration-200"
        >
          Privacy Policy 2024
        </a>
        <a
          href="https://github.com/codesydney"
          className="group relative cursor-pointer text-custom-light/70 hover:text-custom-primary/70 transition-colors duration-200"
        >
          Terms 2024
        </a>
      </div>
    </div>
  );
}
