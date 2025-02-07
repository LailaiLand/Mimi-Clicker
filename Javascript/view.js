test();

function test() {
  sampleString = "";
  for (let i = 0; i < 20; i++) {
    if (i == 1) {
      sampleString += '<img class="test_item" src="HaruEmotes/Dohya.png">';
    } else sampleString += '<div class="test_item"></div>';
  }
  model.view.innerHTML += `<div class="page">${sampleString}</div>`;
}
