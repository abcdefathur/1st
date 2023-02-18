let splash = document.querySelector(".splash");
let heart = document.querySelectorAll(".heart");
let couple = document.querySelector(".couple");
let messagex = document.querySelector(".message");
let letter = document.querySelector("#letter");
let slider = document.querySelectorAll(".slider-btn");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let count = 0;
let message = [];

message[0] = "Hallo cantikkkkkk";
message[1] = "xixixixixi";
message[2] = "ga kerasa kitaa ni da setahun lebih ya ayang";
message[3] = "selamattt satu tahun sayangkuu";
message[4] = "walopun ketemunya cuma bisa keitung jari";
message[5] = "WKWKWKWKKWK";
message[6] = "gapapaa ayangggg";
message[7] = "yang penting kita bisa sama sama terusss";
message[8] = "Terimakasih yaaa";
message[9] = "terimakasihh uda mau sama samaa";
message[10] = "buat akuu dan kitaaa";
message[11] = "kita sama sama teruss ya cantikkk";
message[12] = "sampaaii tuaaaa berduaaa sama samaaa";
message[13] = "bingung aku mau ngetik apa lagiiii :(";
message[14] = "pusinggg";
message[15] = "maap kalo ga soswitt pacarmu iniii";
message[16] = "cuma bisa kek giniii huft :( ";
message[17] = "intinyaa aku mau bilanggg";
message[18] = "Happy Anniversary sayangkuuuu";
message[19] = "Lafyuuuuuuuuuu <3 ";
message[20] = "btw";
message[21] = "aku kangen :(";
message[22] = "mauu ketemuuuu :(";
message[23] = "cepett cepett ketemu ya sayanggg ";
message[24] = "lafyuuuuuu plosokkkkkkkkkk";
message[25] = "xixixixi";
message[26] = "ih ayang harus inget ini terusss";
message[27] = "u be safe under my control";
message[28] = "mwaaaaah";

setTimeout(() => {
    splash.style.opacity = 0;
    splash.style.transition = "opacity 0.5s";
    for (r = 0; r < heart.length; r++) {
        heart[r].style.scale = 1;
        heart[r].style.transition = `scale ${r + 0.3}s`;
    }

    couple.style.scale = 1;
    couple.style.transition = "scale 0.5s";

    messagex.style.scale = 1;
    messagex.style.transition = "scale 0.2s";

    left.style.marginRight = 0;
    right.style.marginLeft = 0;

    left.style.transition = "margin-right 0.7s";
    right.style.transition = "margin-left 0.7s";

    setTimeout(() => (splash.style.display = "none"), 1000);
}, 3000);

function OnPrevious() {
    letter.style.opacity = 0;
    letter.style.transition = "opacity 0.5s";
    slider[0].style.backgroundColor = "#80808048";
    slider[0].style.transition = "background-color 0.5s";

    setTimeout(() => {
        slider[0].style.backgroundColor = "#00000000";
        slider[0].style.transition = "background-color 0.5s";
    }, 300);

    setTimeout(() => {
        letter.style.opacity = 1;
        letter.style.transition = "opacity 1s";
    }, 700);

    setTimeout(() => {
        if (count == -1) {
            count = message.length - 1;
            letter.textContent = message[count--];
        } else {
            letter.textContent = message[count--];
        }
    }, 600);

    return count;
}

function OnNext() {
    letter.style.opacity = 0;
    letter.style.transition = "opacity 0.5s";
    slider[1].style.backgroundColor = "#80808048";
    slider[1].style.transition = "background-color 0.5s";

    setTimeout(() => {
        slider[1].style.backgroundColor = "#00000000";
        slider[1].style.transition = "background-color 0.5s";
    }, 300);

    setTimeout(() => {
        letter.style.opacity = 1;
        letter.style.transition = "opacity 1s";
    }, 700);

    setTimeout(() => {
        if (count == message.length) {
            count = 0;
            letter.textContent = message[count++];
        } else {
            letter.textContent = message[count++];
        }
    }, 600);

    return count;
}
