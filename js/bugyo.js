function toFullWidth(value){
    return value.replace(/\u0020/g,"\u3000").replace(/[ -~]/g, s => {
            return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
    }); 
} 

function deleteSpace(value){
    return value.replace(/\s+/g,""); 
} 

function cutString(value, length){
    return value.substr(0, length);
}

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
    const result = document.getElementsByTagName("input")[0];
    result.select();
    document.execCommand("copy");
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
    const result = document.getElementsByTagName("input")[2];
    result.select();
    document.execCommand("copy");
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
    const result = document.getElementsByTagName("textarea")[0];
    result.select();
    document.execCommand("copy");
}
