import Math, { add, subtract, multiply, divide } from './Math';

export default function DestructingImports() {
  return (
    <table>
      <thead>
        <tr>
          <th>Math</th>
          <th>Matematica</th>
          <th>Functions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Math.add(2, 3) = {Math.add(2, 3)}</td>
          <td>Matematica.add(2, 3) = {Math.add(2, 3)}</td>
          <td>add(2, 3) = {add(2, 3)}</td>
        </tr>
        <tr>
          <td>Math.subtract(5, 1) = {Math.subtract(5, 1)}</td>
          <td>Matematica.subtract(5, 1) = {Math.subtract(5, 1)}</td>
          <td>subtract(5, 1) = {subtract(5, 1)}</td>
        </tr>
        <tr>
          <td>Math.multiply(3, 4) = {Math.multiply(3, 4)}</td>
          <td>Matematica.multiply(3, 4) = {Math.multiply(3, 4)}</td>
          <td>multiply(3, 4) = {multiply(3, 4)}</td>
        </tr>
        <tr>
          <td>Math.divide(8, 2) = {Math.divide(8, 2)}</td>
          <td>Matematica.divide(8, 2) = {Math.divide(8, 2)}</td>
          <td>divide(8, 2) = {divide(8, 2)}</td>
        </tr>
      </tbody>
    </table>
  );
}