import TableBodyContent from "./TableBodyContent";
import TableHeader from "./TableHeader";

export default function Table({ investmentValues }) {
  return (
    <table id="result">
        <TableHeader />
        <TableBodyContent investmentValues={investmentValues} />
    </table>
  );
}
