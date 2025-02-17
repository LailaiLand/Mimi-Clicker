printView();
potTimer();

function printView() {
  let html = "";
  html += /*HTML*/ `
      <img 
        class="earPop" 
        src="${model.clickIcon.img}"
        onclick="earClick(this)"
      >
      <div class="pointsBox">
        <div class="currentPointsContainer">
          <img class="mimiIcon" src="${model.mimiIcon.img}">
          <p class="currentPointsDisplayed" id="pointsDisplay">
            ${model.currentPoints}
          </p>
        </div>
        <br>
        <div class="pointsInfoContainer">
          <div class="ppcInfo">
            <img class="mimiIcon" src="${model.mimiIcon.img}">
            <p id="ppcDisplay">per click: ${model.pointsPerClick} </p>
          </div>
          <div class="potInfo">
            <img class="mimiIcon" src="${model.mimiIcon.img}">
            <p id="potDisplay">per second: ${model.pointsOverTime}</p>
          </div>
        </div>
      </div>
      <div class="storeContainer">
       ${generateStore()}
      </div>
    `;
  model.view.innerHTML = html;
}

function generateStore() {
  let html = "";
  initializeStore();
  for (let i = 0; i < model.emoteList.length; i++) {
    html += /*HTML*/ `
          <div class="storeItemContainer">
            <img class="buyIcon" 
              src="Media/Mogu big.png" 
              onclick=
              "buyItem('item${i}', '${i}' , this , 'priceDisplay${i}',)"
              id="buyIcon${i}">
            <div class="itemBox" id="item${i}">
            </div>
            <p class="itemPrice">
              Price:
              <img class="mimiIcon" src="${model.mimiIcon.img}">
              <p id="priceDisplay${i}"> 
                ${model.emoteList[i].price}
              </p>
            </p>
          </div>
        `;
  }
  return html;
}

function buyItem(boxId, emote, icon, itemPrice) {
  let emoteBox = document.getElementById(boxId);
  let priceText = document.getElementById(itemPrice);
  let emoteObject = model.emoteList[emote]
  if (model.currentPoints >= emoteObject.price) {
    model.currentPoints -= emoteObject.price;
    modifierUpdate(emoteObject);
    emoteBox.innerHTML += `<img src="${emoteObject.img}" class="boughtItem">`;
    priceText.innerHTML = emoteObject.price;
  }
}

function earClick(image) {
  clickIncrease();
  updatePoints();
}

function potTimer() {
  setInterval(() => {
    model.currentPoints += model.pointsOverTime;
    updatePoints();
  }, 1000);
}

function updatePoints() {
  document.getElementById("pointsDisplay").innerHTML =
    "total: " + model.currentPoints;
  document.getElementById("ppcDisplay").innerHTML =
    "per click: " + model.pointsPerClick;
  document.getElementById("potDisplay").innerHTML =
    "per second: " + model.pointsOverTime;
}

// function earClickSize(image) {
//   image.style.height = 180;
//   image.style.width = 180;
//   setTimeout(() => {
//     image.style.height = 200;
//     image.style.width = 200;
//   }, 100);
// }

// Test I used for positioning the click icon on the background
// test()

// function test(){
//     model.view.innerHTML += '<img class="earPop" src="Media/Dohya big.png">'
// }
