import SectionTitle from "../shared/SectionTitle";
import StatisticsCard from "./StatisticsCard";

export default function StatisticsSection({ statisticsData }) {
  const { mainTitle, pseudoTitle, cards } = statisticsData;
  const [titleWhite, titleBlue] = [mainTitle.slice(0, 8), mainTitle.slice(8)];
  return (
    <section className="relative z-20 w-full max-w-[1440px] mx-auto mt-4 p-4 py-8 md:p-6 md:py-10 lg:p-10 lg:py-16 ">
      <SectionTitle psuedoTitle={pseudoTitle}>
        <span>
          {titleWhite} <span className="text-custom-primary">{titleBlue}</span>
        </span>
      </SectionTitle>
      <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3 mt-20 max-w-[1000px] mx-auto">
        {cards &&
          cards.map((cardData, index) => {
            return <StatisticsCard key={index} cardData={cardData} />;
          })}
      </div>
    </section>
  );
}
