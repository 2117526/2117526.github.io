console.log("jquery.jsを読み込みました。")

$("h3").on("click", function(){
    console.log("h3タグがクリックされました。");
    $(this).next().slideToggle();
});