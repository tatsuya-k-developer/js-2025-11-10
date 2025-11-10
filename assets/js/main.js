// 関数：おみくじを引く
function drawFortune() {
  // 配列におみくじの種類を入れる
  const fortunes = ["大吉", "中吉", "小吉", "吉", "凶"];

  // ランダムで1つ選ぶ
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const result = fortunes[randomIndex];

  // 結果を表示
  document.getElementById("result").textContent = `あなたの運勢は… ${result}！`;

  // if文で特別なメッセージを表示
  if (result === "大吉") {
    document.getElementById("result").style.color = "red";
  } else if (result === "凶") {
    document.getElementById("result").style.color = "gray";
  } else {
    document.getElementById("result").style.color = "black";
  }
}
  