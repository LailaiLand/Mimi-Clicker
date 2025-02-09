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
       <!-- todo: generateStore-->
      </div>
    `;
    model.view.innerHTML = html;
}

// Test I used for positioning the click icon on the background
// test()

// function test(){
//     model.view.innerHTML += '<img class="earPop" src="Media/Dohya big.png">'
// }
