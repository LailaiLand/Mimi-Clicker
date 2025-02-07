test();

function test() {
    sampleString = "";
  for (let i = 0; i < 20; i++) {
    sampleString += '<img class="test_item" src="HaruEmotes/Dohya.png">';
  }
  model.view.innerHTML += `<div class="page">${sampleString}</div>`;
}
