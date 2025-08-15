const TABLE_HEADERS = [
  "Year",
  "Investment Value",
  "Interest (Year)",
  "Total Interest",
  "Invested Capital",
];

export default function TableHeader() {
  return (
    <thead>
      <tr>
        {TABLE_HEADERS.map((title) => (
          <th key={title}>{title}</th>
        ))}
      </tr>
    </thead>
  );
}
