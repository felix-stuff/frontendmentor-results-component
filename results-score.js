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
  let ratingItem = document.createElement("li");
  let ratingIcon = document.createElement("img");
  let ratingScore = document.createElement("span");
  let ratingScoreNumber = document.createElement("strong");

  ratingIcon.setAttribute("src", ratings[i].icon);
  ratingIcon.setAttribute("alt", `${ratings[i].category} icon`);

  ratingScoreNumber.append(document.createTextNode(`${ratings[i].score}`));
  ratingScore.append(ratingScoreNumber, `/ ${maxScore}`);

  ratingItem.setAttribute(
    "class",
    `result-score result-score-${ratings[i].category.toLowerCase()}`
  );

  ratingItem.append(ratingIcon, `${ratings[i].category}`, ratingScore);

  document.querySelector(".list-scores").appendChild(ratingItem);

  total += ratings[i].score;
}

total = Math.floor(total / ratings.length);

let totalScoreContainer = document.createElement("span");
totalScoreContainer.setAttribute("class", "total-score");
let totalScore = document.createElement("strong");
totalScore.append(total);

totalScoreContainer.append(totalScore, ` of ${maxScore}`);

document.querySelector(".result-score").appendChild(totalScoreContainer);
