import MemberCard from "./MemberCard";

const Leadership = ({ leaders }) => {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto px-4 pb-12 md:px-6 md:pb-10 lg:px-10 lg:pb-16">
      <h2 className="font-semibold w-fit-content text-3xl lg:text-5xl mb-4">
        Leadership
      </h2>
      <div className="grid gap-10 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {leaders &&
          leaders.map((leader, index) => {
            return <MemberCard member={leader} key={index} />;
          })}
      </div>
    </section>
  );
};

export default Leadership;
