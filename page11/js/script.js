document.addEventListener('DOMContentLoaded', function () {
    // 色の配列を定義
    // var colors = ['#CE6626', '#43A283', '#223a70', '#7B3F94', '#222137'];
    var colors = ['#AC4E3A', '#69B59C', '#4E618D', '#9565A9', '#4E4D5F'];
    // ランダムな色を選択
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    // ヘッダーの背景色を変更
    document.getElementById('header').style.backgroundColor = randomColor;
});


// フォルダ構成に合わせてパスを指定
const pages = [
    'page1/page1.html',
    'page2/page2.html',
    'page3/page3.html',
    'page4/page4.html',
    'page5/page5.html',
    'page6/page6.html',
    'page7/page7.html',
    'page8/page8.html',
    'page9/page9.html',
    'page10/page10.html',
    'page11/page11.html',
    'page12/page12.html'
];

// 現在のページ名を取得
let currentPage = window.location.pathname.split('/').pop();  // ファイル名（例: page1.html）
let currentFolder = window.location.pathname.split('/').slice(-2, -1)[0];  // フォルダ名（例: page1）

// フォルダ名とファイル名を組み合わせて現在のページのインデックスを取得
let currentFullPath = `${currentFolder}/${currentPage}`;
let currentIndex = pages.indexOf(currentFullPath);

// 前へボタンの動作
document.getElementById('prevButton').addEventListener('click', function() {
    let prevIndex = (currentIndex - 1 + pages.length) % pages.length;  // ループ
    window.location.href = `../${pages[prevIndex]}`;  // 親ディレクトリに戻って遷移
});

// 次へボタンの動作
document.getElementById('nextButton').addEventListener('click', function() {
    let nextIndex = (currentIndex + 1) % pages.length;  // ループ
    window.location.href = `../${pages[nextIndex]}`;  // 親ディレクトリに戻って遷移
});
