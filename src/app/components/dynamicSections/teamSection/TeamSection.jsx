import MemberCard from "./MemberCard";

const TeamSection = ({ teamData }) => {
  const { title, belowTitleDescription, teamMembers } = teamData;
  return (
    <section className="relative w-full max-w-[1920px] mx-auto px-4 pb-12 md:px-6 md:pb-10 lg:px-10 lg:pb-16">
      <h2 className="font-semibold w-fit-content text-3xl lg:text-5xl mb-4">
        {/* Code.Sydney&apos;s Mentors */}
        {title}
      </h2>
      <div className="grid gap-10 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {teamMembers &&
          teamMembers.map((member, index) => {
            return <MemberCard member={member} key={index} />;
          })}
      </div>
    </section>
  );
};

export default TeamSection;
