import { Tool } from "../../../../types";
import s from "./ShowMoreButton.module.css";

interface ShowMoreButtonProps {
  setShowMore: (value: boolean) => void;
  meetsCriteria: Tool[];
}

const ShowMoreButton = ({
  setShowMore,
  meetsCriteria,
}: ShowMoreButtonProps) => {
  return (
    <div className={s.showMoreWrap}>
      <button
        type="button"
        className={s.showMoreBtn}
        onClick={() => setShowMore(true)}
      >
        <strong>Show More </strong>
        <p>
          {meetsCriteria.length} more{" "}
          {meetsCriteria.length === 1 ? "tool meets" : "tools meet"} the
          criteria
        </p>
      </button>
    </div>
  );
};
export default ShowMoreButton;
