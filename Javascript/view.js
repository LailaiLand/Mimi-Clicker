printView();

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
          <p class="currentPointsDisplayed">
            ${model.currentPoints}
          </p>
        </div>
        <br>
        <div class="pointsInfoContainer">
          <div class="ppcInfo">
            <img class="mimiIcon" src="${model.mimiIcon.img}">
            per click: ${model.pointsPerClick}
          </div>
          <div class="potInfo">
            <img class="mimiIcon" src="${model.mimiIcon.img}">
            per second: ${model.pointsOverTime}
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
  initializeStore()
  for (let i = 0; i < model.emoteList.length; i++) {
    html += /*HTML*/ `
          <div class="storeItemContainer">
            <img class="buyIcon" 
              src="Media/Mogu big.png" 
              onclick=
              "buyItem('item${i}', ${model.emoteList[i]} , this)"
              id="buyIcon${i}">
            <div class="itemBox" id="item${i}">
              <!--temp-->
              <img src="${model.emoteList[i].img}">
            </div>
            <p class="itemPrice">
              Price:
              <img class="mimiIcon" src="${model.mimiIcon.img}">
              ${model.emoteList[i].price}
            </p>
          </div>
        `;
  }
  return html;
}

function buyItem(boxId, emote, icon){
    emoteBox = document.getElementById(boxId);

}

// Test I used for positioning the click icon on the background
// test()

// function test(){
//     model.view.innerHTML += '<img class="earPop" src="Media/Dohya big.png">'
// }
