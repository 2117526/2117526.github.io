console.log("main.jsを読み込みました。")
// 要素の取得
const checkboxes = document.querySelectorAll('.check');
const totalDisplay = document.getElementById('total');
// 0からスタート
let total = 0;

checkboxes.forEach(checkbox => {
    // チェックボックスをクリックしたときの処理
    checkbox.addEventListener('click', () => {
        // 要素を整数で取得
        const value = parseInt(checkbox.value);
        // チェックしたら＋, その他ならー
        if (checkbox.checked){
            total += value;
        } else{
            total -= value;
        }
        // コンソールログで最新のトータル値を表示
        console.log('Current total:', total);
        // トータルをHTMLで表示
        totalDisplay.textContent = total;
    });
});

// 曲名リスト
const songs = [
    "GOOD NIGHT BABY",
    "マリーゴールド",
    "小さな恋の歌（cover）",
    "プロローグ",
    "初恋",
    "I beg you",
    "ここに",
    "シンデレラガール",
    "白日",
    "アンビバレント",
    "うだつ",
    "ヒプノシスマイク-Division Battle Anthem-",
    "願い〜あの頃の君へ〜",
    "THE GIFT",
    "Blizzard",
    "僕のこと",
    "正解",
    "そっけない",
    "バスターコール",
    "サヨナラまたな",
];

// 要素の取得
const button = document.getElementById('show-song-button');
const songDisplay = document.getElementById('song-display');
// クリックしたときの処理
button.addEventListener('click',function(){
    // ランダムなインデックスの生成
    const randomIndex = Math.floor(Math.random() * songs.length);
    // ランダムな曲名の取得
    const randomSong = songs[randomIndex];
    // コンソールログで表示
    console.log(randomSong);
    // 曲名(randomSongをHTMLに表示
    songDisplay.textContent = randomSong;
})


