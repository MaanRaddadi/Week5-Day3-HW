const arBtn = document.getElementById("ar");
const enBtn = document.getElementById("en");

const english = {
  dropdownMenuButton1: "Men's",
  dropdownMenuButton2: "Women's",
  dropdownMenuButton3: "Kids",
  watchDescription:
    "sleek and slim with raised band attachments that make it more comfortable for all-day wear. The modern design complements styles ranging from funky to formal.",
  learnMore: "Learn More",
  view: "View",
  rolex: "ROLEX",
  boss: "BOSS",
  apple: "Apple",
  huawei: "Huawei",
  samsoung: "Samsoung",
  sony: "Sony",
  google: "google",
  watch1: "Watch 1",
  watch2: "Watch 2",
  watch3: "Watch 3",
  watch4: "Watch 4",
  watch5: "Watch 5",
  apple2: "Apple",
  fitbit: "FitBit",
  copyRight: "© 2020 Copyright:",
  itemFeature1: "Advanced Health Tracking <i class='fa-solid fa-heart-pulse'>",
  itemFeature2: "Built-in GPS <i class='fa-solid fa-location-dot'></i>",
  itemFeature3: "Voice Assistant <i class='fa-solid fa-ear-listen'></i>",
  itemFeature4: "Long Battery Life <i class='fa-solid fa-battery-full'></i>",
  addToCart: "Add to Cart",
  changeTimer: "Change Timer",
  itemPrice: "550 S.R",
};
const arabic = {
  dropdownMenuButton1: "الرجال",
  dropdownMenuButton2: "النساء",
  dropdownMenuButton3: "الأطفال",
  watchDescription:
    "أنيق ورفيع مع ملحقات شريطية مرتفعة تجعله أكثر راحة للارتداء طوال اليوم. التصميم الحديث يكمل الأنماط التي تتراوح من غير تقليدي إلى رسمي.",
  learnMore: "اعرف أكثر",
  view: "عرض",
  rolex: "رولكس",
  boss: "بوس",
  apple: "أبل",
  huawei: "هواوي",
  samsoung: "سامسونج",
  sony: "سوني",
  google: "قوقل",
  watch1: "الساعة 1",
  watch2: "الساعة 2",
  watch3: "الساعة 3",
  watch4: "الساعة 4",
  watch5: "الساعة 5",
  apple2: "أبل",
  fitbit: "فيت بيت",
  copyRight: "جميع الحقوق محفوظة © 2020",
  itemFeature1:
    "<i class='fa-solid fa-heart-pulse'></i> خدمة تتبع الصحة العامة",
  itemFeature2: " <i class='fa-solid fa-location-dot'></i>خاصية GPS",
  itemFeature3: " <i class='fa-solid fa-ear-listen'></i> التحكم الصوتي",
  itemFeature4: "<i class='fa-solid fa-battery-full'></i> بطارية تدوم اطول",
  addToCart: "إضافة إلى السلة",
  changeTimer: "تغيير المؤقت",
  itemPrice: "550 رس",
};

arBtn.addEventListener("click", () => {
  changeLang();
});
enBtn.addEventListener("click", () => {
  changeLang();
});
let ViewElement = document.querySelectorAll(".view");
let isEnglish = true;
function changeLang() {
  isEnglish = !isEnglish;
  const languageText = isEnglish ? english : arabic;
  if (languageText === arabic) {
    document.body.style.direction = "rtl";
    document.body.style.fontFamily = "'Tajawal', sans-serif";
    console.log(document.body.style);
  } else {
    document.body.style.direction = "ltr";
    document.body.style.fontFamily = "Poppins, sans-serif;";
  }
  for (const key in languageText) {
    let element = document.getElementById(key);

    if (element) {
      element.innerHTML = languageText[key];
    } else if (key == "view") {
      element = document.querySelectorAll(".view");

      for (let i in element) {
        element[i].innerHTML = languageText[key];
      }
    }
  }
}

// Second Page

const colorBtns = document.querySelectorAll(".color-btn");
const itemHolder = document.querySelector(".item-holder");
colorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "color1") {
      itemHolder.style.backgroundImage = 'url("./assets/images/watch1.png")';
    } else if (btn.id === "color2") {
      itemHolder.style.backgroundImage = `url(./assets/images/watch2.png)`;
    } else if (btn.id === "color3") {
      itemHolder.style.backgroundImage = `url(./assets/images/watch3.png)`;
    } else if (btn.id === "color4") {
      itemHolder.style.backgroundImage = `url(./assets/images/watch4.png)`;
    } else if (btn.id === "color5") {
      itemHolder.style.backgroundImage = `url(./assets/images/watch5.png)`;
    }
  });
});
const timerText = document.querySelector("#digital-timer");
const clockTimer = document.querySelector("#clock-timer");
const changeTimer = document.querySelector("#changeTimer");

let isDigital = true;
changeTimer.addEventListener("click", () => {
  isDigital = !isDigital;
  if (isDigital) {
    clockTimer.style.display = "none";
    timerText.style.display = "block";
  } else {
    clockTimer.style.display = "block";
    timerText.style.display = "none";
  }
});

startDigitalTimer();
startClockTimer();
function startDigitalTimer() {
  setInterval(() => {
    const date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let seconds = date.getSeconds();
    date.get;
    let timer = `${hours}:${min}:${seconds}`;
    timerText.textContent = timer;
  }, 1000);
}
function startClockTimer() {
  const hour = document.querySelector(".hour");
  const minute = document.querySelector(".minute");
  const second = document.querySelector(".second");
  setInterval(() => {
    const date = new Date();
    let currentHours = date.getHours();
    let currentMin = date.getMinutes();
    let currentSeconds = date.getSeconds();

    // االدائرة 360 درجة فيها 12 ساعة 360 /12 = 30 درجة لكل ساعة

    const hourRotation = 30 * currentHours + currentMin / 2;

    const minRotation = 6 * currentMin;
    const secondsRotation = 6 * currentSeconds;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minRotation}deg)`;
    second.style.transform = `rotate(${secondsRotation}deg)`;
  }, 1000);
}
