export const StarsRating = ({ rating }: { rating: number }) => {
  const stars = Math.round(rating / 2);
  return (
    // <span>
    //   {Array.from({ length: 5 }, (_, i) => (
    //     <span key={i} style={{ color: i < stars ? "gold" : "#ccc", fontSize: 18 }}>
    //       ★
    //     </span>
    //   ))}
    // </span>
    <span style={{ display: "flex", gap: "4px" }}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill={i < stars ? "gold" : "#ccc"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77 5.82 21l1.18-6.86-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
};
