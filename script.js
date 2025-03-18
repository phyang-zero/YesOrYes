let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "对不起，我知道错了", 
    "零花钱都给你", 
    "欲擒故纵，我懂！", 
    "能不能给个台阶嘛", 
    "原谅我嘛，对不起"
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 按钮放大
    document.documentElement.style.setProperty('--yes-scale', 1 + (clickCount * 0.3));

    // 随机移动 No 按钮
    let noOffsetX = (Math.random() - 0.5) * 100;  // 控制左右偏移范围
    let noOffsetY = (Math.random() - 0.5) * 50;   // 控制上下偏移范围
    noButton.style.transform = `translate(${noOffsetX}px, ${noOffsetY}px)`;

    // 图片和文字往上移动
    let moveUp = clickCount * 20;
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化
    let images = ["rencuo.png", "geiqian.png", "duoqilai.png", "weiqu.png", "crying.png"];
    if (clickCount < images.length) {
        mainImage.src = `images/${images[clickCount - 1]}`;
    } else {
        mainImage.src = "images/crying.png";
    }
});
