const ratings = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

const maxScore = 100;
let total = 0;

for (let i = 0; i < ratings.length; i++) {
  let li = document.createElement("li");
  let img = document.createElement("img");
  let strong = document.createElement("strong");

  img.setAttribute("src", ratings[i].icon);
  img.setAttribute("alt", `${ratings[i].category} icon`);

  strong.append(document.createTextNode(`${ratings[i].score} / ${maxScore}`));

  li.setAttribute(
    "class",
    `result-score result-score-${ratings[i].category.toLowerCase()}`
  );

  li.append(img, `${ratings[i].category}`, strong);

  document.querySelector(".list-scores").appendChild(li);

  total += ratings[i].score;
}

total = Math.floor(total / ratings.length);

let totalScoreContainer = document.createElement("span");
totalScoreContainer.setAttribute("class", "total-score");
let totalScore = document.createElement("strong");
totalScore.append(total);

totalScoreContainer.append(totalScore, ` of ${maxScore}`);

document.querySelector(".result-score").appendChild(totalScoreContainer);
