const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);

function joinList(conceptList) {
  let newStr = "";
  for (let i = 0; i < conceptList.length; i++) {
    if (i < conceptList.length - 1) {
      newStr += `${conceptList[i]}, `;
    } else {
      newStr += `${conceptList[i]}`;
    }
  }
  return newStr;
}
console.log(`Today I learned about ${concepts}.`);
