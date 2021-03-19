const body = document.querySelector("body");
// 배경화면 변경할 횟수를 담을 변수
const IMG_NUMBER = 5;
// body태그에 bgImage클래스인 img태그를 만들고 prepend로 이미지 업데이트
function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}
// 랜덤함수
function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER); 
    return number
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();