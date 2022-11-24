import moment from "moment";

export const getHighlightedText = (text: string, highlight: string) => {
  // Split on highlight term and include term into parts, ignore case
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <span>
      {parts.map((part, i) => (
        <span
          key={i}
          style={
            part.toLowerCase() === highlight.toLowerCase()
              ? { background: "#02ffff" }
              : {}
          }
        >
          {part}
        </span>
      ))}
    </span>
  );
};

export const sortByDate = (arr) => {
  const sortedArr = arr.sort((left, right) => {
    const dateA = moment(new Date(left.createdDate)).format("MM-DD-YYYY");
    const dateB = moment(new Date(right.createdDate)).format("MM-DD-YYYY");
    return Date.parse(dateB) - Date.parse(dateA);
  });

  return sortedArr;
};
