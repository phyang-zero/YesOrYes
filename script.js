let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0; // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
  "对不起，我知道错了",
  "零花钱都给你",
  "欲擒故纵，我懂！",
  "能不能给个台阶嘛",
  "原谅我嘛，对不起"
];

// No 按钮点击事件
noButton.addEventListener("click", function () {
  clickCount++;

  // 让 Yes 按钮变大，每次放大 1.2 倍
  let yesSize = 1 + clickCount * 1.2;
  yesButton.style.transform = `scale(${yesSize})`;

  // 挤压 No 按钮，每次右移 50px
  let noOffset = clickCount * 50;
  noButton.style.transform = `translateX(${noOffset}px)`;

  // 新增：让图片和文字往上移动，每次上移 25px
  let moveUp = clickCount * 25;
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`;

  // No 文案变化（前 5 次变化）
  if (clickCount <= 5) {
    noButton.innerText = noTexts[clickCount - 1];
  }

  // 图片变化（前 5 次变化）
  if (clickCount === 1) mainImage.src = "images/rencuo.png";   // 震惊
  if (clickCount === 2) mainImage.src = "images/geiqian.png";   // 思考
  if (clickCount === 3) mainImage.src = "images/duoqilai.png";  // 生气
  if (clickCount === 4) mainImage.src = "images/weiqu.png";     // 哭
  if (clickCount >= 5) mainImage.src = "images/crying.png";      // 之后一直是哭
});

// Yes 按钮点击后，进入表白成功页面，并新增心形飘落动画效果及项目仓库链接（使用 Font Awesome 图标）
yesButton.addEventListener("click", function () {
  document.body.innerHTML = `
    <div class="yes-screen">
      <h1 class="yes-text">!!!喜欢你!! ( >᎑<)♡︎ᐝ</h1>
      <img src="images/hug.png" alt="拥抱" class="yes-image">
      <a href="https://github.com/phyang-zero/YesOrYes" target="_blank" class="repo-link">
        <i class="fab fa-fw fa-github"></i>
        网页源码
      </a>
    </div>
  `;
  document.body.style.overflow = "hidden";

  // 新增：让爱心从页面顶部飘落
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px"; // 随机字号：20px~40px
    heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // 动画时长：3s~6s
    document.body.appendChild(heart);

    // 动画结束后移除该元素
    heart.addEventListener("animationend", function () {
      heart.remove();
    });
  }
  setInterval(createHeart, 500);
});
