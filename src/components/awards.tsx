import { Award } from "@/data/award";
import { AwardEntry } from "@/components/award-entry";

export function Awards({
  awards,
  hideLink,
  className = "space-y-12",
}: {
  awards: Award[];
  hideLink?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      {awards.map((award, index) => (
        <AwardEntry key={index} award={award} hideLink={hideLink} />
      ))}
    </div>
  );
}
