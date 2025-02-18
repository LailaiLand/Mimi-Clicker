function initializeStore() {
  for (let i = 0; i < model.emoteList.length; i++) {
    let pointMofier = i * 5 + 1;
    model.emoteList[i].price = 50 * i * i + 10;
    model.emoteList[i].isCat
      ? (model.emoteList[i].ppc = pointMofier)
      : (model.emoteList[i].pot = pointMofier);
  }
}

function clickIncrease() {
  model.currentPoints += model.pointsPerClick;
}

function modifierUpdate(emote) {
  emote.amount ++;
  emote.isCat
    ? (model.pointsPerClick += emote.ppc)
    : (model.pointsOverTime += emote.pot);
  emote.price += emote.amount * 2 + 3;
}
