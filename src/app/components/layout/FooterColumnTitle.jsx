export default function FooterColumnTitle({ children }) {
  return (
    <h3 className="mb-4 mx-2 flex items-center gap-2 text-2xl font-semibold border-b-[1px] border-custom-light/20">
      {children}
    </h3>
  );
}
