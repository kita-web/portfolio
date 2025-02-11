document.addEventListener('DOMContentLoaded', function () {
    // 色の配列を定義
    // var colors = ['#CE6626', '#43A283', '#223a70', '#7B3F94', '#222137'];
    var colors = ['#AC4E3A', '#43A283', '#4E618D', '#5B4365', '#4E4D5F'];
    // ランダムな色を選択
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    // ヘッダーの背景色を変更
    document.getElementById('header').style.backgroundColor = randomColor;
});