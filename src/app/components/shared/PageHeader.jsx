export default function PageHeader({ pageTitle, children }) {
  return (
    <header className="w-full max-w-[1920px] mx-auto px-4 py-12 md:px-6 md:py-10 lg:px-10 lg:py-16">
      <h1 className="text-custom-light font-bold text-3xl md:text-4xl lg:text-6xl mb-4 max-w-[1000px] relative z-10">
        {pageTitle}
      </h1>
      <div className="max-w-[1000px] relative z-20 text-custom-primary font-light">
        {children}
      </div>
    </header>
  );
}
