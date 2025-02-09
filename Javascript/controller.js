function initializeStore() {
  for (let i = 0; i < model.emoteList.length; i++) {
    let pointMofier = i + 1;
    model.emoteList[i].price = 10 * i + 10;
    model.emoteList[i].isCat
      ? (model.emoteList[i].ppc = pointMofier)
      : (model.emoteList[i].pot = pointMofier);
    
  }
}
