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

    // 计算新的放大倍数
    let yesSize = 1 + (clickCount * 0.2);
    
    // 使用 CSS 变量更新 Yes 按钮的 scale 值
    document.documentElement.style.setProperty("--yes-scale", yesSize);

    // 添加跳动动画（确保只添加一次）
    if (!yesButton.classList.contains("yes-grow")) {
        yesButton.classList.add("yes-grow");
    }

    // No 按钮随机移动
    let noOffsetX = (Math.random() - 0.5) * 200;
    let noOffsetY = (Math.random() - 0.5) * 100;
    noButton.style.transform = `translate(${noOffsetX}px, ${noOffsetY}px)`;

    // 图片和文字上移
    let moveUp = clickCount * 25;
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 按钮文字变化
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化
    if (clickCount === 1) mainImage.src = "images/rencuo.png";
    if (clickCount === 2) mainImage.src = "images/geiqian.png";
    if (clickCount === 3) mainImage.src = "images/duoqilai.png";
    if (clickCount === 4) mainImage.src = "images/weiqu.png";
    if (clickCount >= 5) mainImage.src = "images/crying.png";
});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!喜欢你!! ( >᎑<)♡︎ᐝ</h1>
            <img src="images/hug.png" alt="拥抱" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
    startHeartAnimation();
});

// 爱心飘落动画
function startHeartAnimation() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerText = "❤️";
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }, 500);
} 
