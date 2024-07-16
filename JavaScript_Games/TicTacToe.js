// function generateWinningLines(n) {
//   const lines = [];

//   // Rows
//   for (let i = 0; i < n; i++) {
//     const row = [];
//     for (let j = 0; j < n; j++) {
//       row.push(i * n + j);
//     }
//     lines.push(row);
//   }

//   // Columns
//   for (let i = 0; i < n; i++) {
//     const col = [];
//     for (let j = 0; j < n; j++) {
//       col.push(j * n + i);
//     }
//     lines.push(col);
//   }

//   // Diagonals
//   const diag1 = [];
//   const diag2 = [];
//   for (let i = 0; i < n; i++) {
//     diag1.push(i * n + i);
//     diag2.push(i * n + (n - i - 1));
//   }
//   lines.push(diag1);
//   lines.push(diag2);

//   return lines;
// }

// // Example usage
// const size = 3; // For a 3x3 grid
// const winningLines = generateWinningLines(size);
// console.log(winningLines);


function generateWinningLines(n) {
  const lines = [];
  console.log(`Generating winning lines for a ${n}x${n} grid`);

  // Rows
  for (let i = 0; i < n; i++) {
    const row = [];
    console.log(`Generating row ${i}`);
    for (let j = 0; j < n; j++) {
      const index = i * n + j;
      console.log(`Row ${i}, adding index ${index}`);
      row.push(index);
    }
    lines.push(row);
    console.log(`Completed row ${i}:`, row);
  }

  // Columns
  for (let i = 0; i < n; i++) {
    const col = [];
    console.log(`Generating column ${i}`);
    for (let j = 0; j < n; j++) {
      const index = j * n + i;
      console.log(`Column ${i}, adding index ${index}`);
      col.push(index);
    }
    lines.push(col);
    console.log(`Completed column ${i}:`, col);
  }

  // Diagonals
  const diag1 = [];
  const diag2 = [];
  console.log("Generating diagonals");
  for (let i = 0; i < n; i++) {
    const index1 = i * n + i;
    const index2 = i * n + (n - i - 1);
    console.log(`Diagonal 1, adding index ${index1}`);
    console.log(`Diagonal 2, adding index ${index2}`);
    diag1.push(index1);
    diag2.push(index2);
  }
  lines.push(diag1);
  lines.push(diag2);
  console.log("Completed diagonals:", diag1, diag2);

  return lines;
}

// Example usage
const size = 3; // For a 3x3 grid
const winningLines = generateWinningLines(size);
console.log("All winning lines:", winningLines);
