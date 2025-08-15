import { calculateInvestmentResults } from "../../util/investment";
import { formatter } from "../../util/investment";

function deriveCalculatedResults(investmentValues) {
  let copyInvestmentValues = {...investmentValues}
  let results = calculateInvestmentResults(copyInvestmentValues)

  return results
}

export default function TableBodyContent({ investmentValues }) {
  let calculatedResults = []
  calculatedResults = deriveCalculatedResults(investmentValues)
  console.log("TEST in TableBodyContent, Calculated results: ", calculatedResults);

  const tableItems = [];

  calculatedResults.map(yearResult => {
    tableItems.push(
      <tr key={yearResult.year}>
        <td>{yearResult.year}</td>
        <td>{formatter.format(yearResult.valueEndOfYear)}</td>
        <td>{formatter.format(yearResult.interest)}</td>
        <td>{formatter.format(yearResult.totalInterest)}</td>
        <td>{formatter.format(yearResult.investedCapital)}</td>
      </tr>
    );
  })

  return <tbody>{tableItems}</tbody>;
}
