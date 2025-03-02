// 左側の奉行の仕事
function lBugyo(){
    let msg = "マイオフィスの面倒な仕様はマイオフィス奉行にお任せあれ!!\n\n";
    msg += "使い方指南:\n「入力内容」の欄に申請フォームで入力したい内容、「文字数」の欄に制限文字数を入力して「お裁き」ボタンを押します。";
    msg += "クリップボードに内容がコピーされるので、後はCtrl+Vで入力したい箇所にペーストするだけです。\n";
    msg += "作業終了時は「右側の奉行」をクリックしてフォームをクリアしましょう。";
    alert(msg);
}

// 右側の奉行の仕事
function rBugyo(){
    // クリップボードのクリア作業
    clearClipboard();

    // フォームのクリア
    document.getElementById("halftofull").value = "";
    document.getElementById("sentence").value = "";
    document.getElementById("longsentence").value = "";
    document.getElementById("status1").innerHTML = "";
    document.getElementById("status2").innerHTML = "";
    document.getElementById("status3").innerHTML = "";

    alert("本日の白州はこれまで!!\n\nマイオフィス奉行");
}

// クリップボードをクリア
function clearClipboard(){
    document.getElementById("halftofull").value = " ";
    document.getElementById("sentence").value = " ";
    document.getElementById("len-num1").value = 15;
    document.getElementById("longsentence").value = " ";
    document.getElementById("len-num2").value = 100;
    const result1 = document.getElementsByTagName("input")[0].value;
    navigator.clipboard.writeText(result1);
    const result2 = document.getElementsByTagName("input")[2].value;
    navigator.clipboard.writeText(result2);
    const result3 = document.getElementsByTagName("textarea")[0].value;
    navigator.clipboard.writeText(result3);
}

// 全角文字に変換
function toFullWidth(value){
    return value.replace(/\u0020/g,"\u3000").replace(/[ -~]/g, s => {
            return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
    }); 
} 

// スペースを削除
function deleteSpace(value){
    return value.replace(/\s+/g,""); 
} 

// 指定の文字列長を抽出
function cutString(value, length){
    return value.substr(0, length);
}

// 指定の文字列長の全角文字列に変換
function full_and_length(value, length){
    const conv_value = toFullWidth(value);
    if(conv_value.length > length){ 
        let temp_str = deleteSpace(conv_value);
        if(temp_str.length > length){
            return cutString(temp_str, length); 
        }
    }
    return conv_value;
}

function osabaki1(){
    const value = document.getElementById("halftofull").value;
    if(value==" " || value==""){
        document.getElementById("status1").innerHTML = "空文字では申請出来ませぬ!!";
        return;
    }
    document.getElementById("halftofull").value = toFullWidth(value);
    document.getElementById("status1").innerHTML = "お裁き完了!!";
    const result = document.getElementsByTagName("input")[0].value;
    navigator.clipboard.writeText(result);
}

function osabaki2(){
    const value = document.getElementById("sentence").value;
    const length = document.getElementById("len-num1").value;
    if(value==" " || value==""){
        document.getElementById("status2").innerHTML = "空文字では申請出来ませぬ!!";
        return;
    }
    if(Number(length) < 0 || isNaN(Number(length))){
        document.getElementById("status2").innerHTML = "整数値を入力して下され!!";
        return;
    }
    document.getElementById("sentence").value = full_and_length(value, length);
    document.getElementById("status2").innerHTML = "お裁き完了!!";
    const result = document.getElementsByTagName("input")[2].value;
    navigator.clipboard.writeText(result);
}

function osabaki3(){
    const value = document.getElementById("longsentence").value;
    const length = document.getElementById("len-num2").value;
    if(value==" " || value==""){
        document.getElementById("status3").innerHTML = "空文字では申請出来ませぬ!!";
        return;
    }
    if(Number(length) < 0 || isNaN(Number(length))){
        document.getElementById("status2").innerHTML = "整数値を入力して下さい!!";
        return;
    }
    document.getElementById("longsentence").value = full_and_length(value, length);
    document.getElementById("status3").innerHTML = "お裁き完了!!";
    const result = document.getElementsByTagName("textarea")[0].value;
    navigator.clipboard.writeText(result);
}
