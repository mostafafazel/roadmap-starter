<template>
  <div class="font-farsi recipe-slider flex flex-col items-center justify-center gap-6 p-8 relative">
    <button
      v-if="!showAllSlides"
      @click="previousSlide"
      :disabled="currentSlide === 0"
      class="slider-btn bg-white/20 backdrop-blur-lg text-white text-3xl p-4 rounded-full hover:scale-105 transition transform duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <div class="i-carbon-arrow-left" />
    </button>

    <!-- Recipe Slide -->
    <div
      v-if="!showAllSlides"
      class="recipe w-full  max-w-full p-8 rounded-3xl bg-white/10 backdrop-blur-lg shadow-xl flex flex-col items-center text-right space-y-4 animate-fadeIn text-white"
    >
      <h3 class="text-2xl font-bold flex items-center gap-2">
        <span>{{ slides[currentSlide].title }}</span>
        <span v-if="slides[currentSlide].icon" :class="slides[currentSlide].icon"></span>
      </h3>
      <p v-html="slides[currentSlide].content" class="text-lg opacity-90 leading-7 space-y-3"></p>
    </div>

    <button
      v-if="!showAllSlides"
      @click="nextSlide"
      :disabled="currentSlide === slides.length - 1"
      class="slider-btn bg-white/20 backdrop-blur-lg text-white text-3xl p-4 rounded-full hover:scale-105 transition transform duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <div class="i-carbon-arrow-right" />
    </button>

    <!-- All Slides View -->
    <div
      v-if="showAllSlides"
      class="all-slides grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 p-4"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="slide-preview p-4 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg transition transform hover:scale-105 cursor-pointer flex flex-col items-center space-y-2 text-right"
      >
        <h3 class="text-lg font-semibold text-white flex items-center gap-2">
          {{ slide.title }}
          <span v-if="slide.icon" :class="slide.icon"></span>
        </h3>
        <p class="text-white text-sm opacity-70">{{ slide.preview }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  recipes: {
    type: Array,
    required: true,
  },
});
const slides = ref([
  {
    title: "🍞✨ نان دارچینی خوشمزه ✨🍞",
    content: `
      <strong style="color: #87ff8e; font-size: 1.25rem;">
        🍞 دسته‌بندی
      </strong><br><br>

      <span class="ina">برای خمیر</span><br><br>
      
      <span style="color: #FFFFFF;">پودر خمیر مایه</span> | 
      <span style="color: #00beb1; font-weight: bold;">۱۵ گرم</span> 
      (۲ قاشق غذاخوری)<br>

      <span style="color: #FFFFFF;">کره</span> | 
      <span style="color: #00beb1; font-weight: bold;">۱۵۰ گرم 🧈</span><br>

      <span style="color: #FFFFFF;">شیر</span> | 
      <span style="color: #00beb1; font-weight: bold;">۲ و ۱/۸ پیمانه 🥛</span><br>

      <span style="color: #FFFFFF;">تخم‌مرغ</span> | 
      <span style="color: #00beb1; font-weight: bold;">۱ عدد 🥚</span><br>

      <span style="color: #FFFFFF;">شکر</span> | 
      <span style="color: #00beb1; font-weight: bold;">۳/۴ پیمانه 🍬</span><br>

      <span style="color: #FFFFFF;">آرد</span> | 
      <span style="color: #00beb1; font-weight: bold;">حدود ۶ پیمانه 🌾</span><br><br>

      <span  class="ina">داخل خمیر</span><br><br>
      
      <span style="color: #FFFFFF;">کره</span> | 
      <span style="color: #00beb1; font-weight: bold;">۱۰۰ گرم 🧈</span><br>

      <span style="color: #FFFFFF;">دارچین</span> | 
      <span style="color: #00beb1; font-weight: bold;">۲ قاشق غذاخوری 🌿</span><br>

      <span style="color: #FFFFFF;">شکر</span> | 
      <span style="color: #00beb1; font-weight: bold;">نصف پیمانه 🍬</span><br><br>

      <span class="ina">رومال</span><br><br>

      <span style="color: #FFFFFF;">زرده تخم‌مرغ</span> | 
      <span style="color: #00beb1; font-weight: bold;">۱ عدد 🥚</span><br><br>

      <span class="ina">تزیین</span><br><br>

      <span style="color: #FFFFFF;">شکر درشت</span> | 
      <span style="color: #00beb1; font-weight: bold;">به مقدار لازم ✨</span><br>
    `,
    icon: "i-tabler-bread",
    preview: "برای خمیر و مواد اولیه",
  },
  {
    title: "⏲️ مرحله ۱: آماده‌سازی خمیر مایه",
    content: `
      <span style="color: #87ff8e; font-size: 1.25rem; font-weight: bold;">
        ⏲️ آماده‌سازی خمیر مایه
      </span><br><br>

      1️⃣ <span style="color: #00beb1; font-weight: bold;">شیر (۲ و ۱/۸ پیمانه)</span> را 
      <span style="font-style: italic; color: #20B2AA;">گرم کنید</span> تا به دمای بدن برسد. 
      نه خیلی داغ و نه سرد! 🔥<br><br>

      2️⃣ <span style="color: #00beb1; font-weight: bold;">شکر (۳/۴ پیمانه)</span> را 
      <span style="font-style: italic; color: #20B2AA;">داخل شیر بریزید</span> و 
      <span style="font-style: italic; color: #20B2AA;">هم بزنید</span> تا کاملاً 
      <span style="font-style: italic; color: #20B2AA;">حل شود</span> 🍯<br><br>

      3️⃣ <span style="color: #00beb1; font-weight: bold;">پودر خمیر مایه (۱۵ گرم)</span> 
      را اضافه کنید و <span style="color: #20B2AA; font-style: italic;">۱۰ دقیقه استراحت دهید</span> 
      تا خمیر مایه <span style="color: #20B2AA; font-style: italic;">پف کند</span> و فعال شود 🕰️<br>
    `,
    icon: "i-tabler-clock",
    preview: "آماده‌سازی خمیر مایه",
  },
  {
    title: "🌾🥚 مرحله ۲: آماده کردن خمیر",
    content: `
      <span style="color: #87ff8e; font-size: 1.25rem; font-weight: bold;">
        🌾🥚 آماده کردن خمیر
      </span><br><br>

      1️⃣ در کاسه دیگری، 
      <span style="color: #00beb1; font-weight: bold;">تخم‌مرغ (۱ عدد)</span> را 
      <span style="color: #20B2AA; font-style: italic;">کمی هم بزنید</span> 🥄 تا از حالت لختگی درآید<br><br>

      2️⃣ <span style="color: #00beb1; font-weight: bold;">کره (۱۵۰ گرم)</span> آب شده را به 
      تخم‌مرغ <span style="color: #20B2AA; font-style: italic;">اضافه کنید</span> و 
      <span style="color: #20B2AA; font-style: italic;">هم بزنید</span> 🧈<br><br>

      3️⃣ <span style="color: #20B2AA; font-style: italic;">مخلوط خمیر مایه</span> را 
      به مواد اضافه کنید و همه را خوب ترکیب کنید<br><br>

      4️⃣ آرد (حدود ۶ پیمانه) را کم کم اضافه کنید و ورز دهید:<br><br>
         - با ماشین آشپزخانه: ۱۰ دقیقه با دور متوسط 🕰️<br><br>
         - با دست: ۲۰ دقیقه تا خمیر نرم و لطیف شود ✋<br>
    `,
    icon: "i-openmoji-wheat",
    preview: "آماده کردن خمیر",
  },
  {
    title: "🌟 مرحله ۳: استراحت خمیر",
    content: `
      <span style="color: #87ff8e; font-size: 1.25rem; font-weight: bold;">
        🌟 استراحت خمیر
      </span><br><br>

      1️⃣ خمیر را در ظرفی 
      <span style="color: #20B2AA; font-style: italic;">پوشانده</span> و در جای گرم بگذارید تا 
      <span style="color: #20B2AA; font-style: italic;">۴۵ دقیقه استراحت کند</span> 🕰️<br><br>

      2️⃣ خمیر باید 
      <span style="color: #20B2AA; font-style: italic;">حجمش دو برابر شود</span> 🪄<br>
    `,
    icon: "i-tabler-clock",
    preview: "استراحت خمیر",
  },
  {
    title: "✨ مرحله ۴: آماده‌سازی رول‌ها",
    content: `
      <span style="color: #87ff8e; font-size: 1.25rem; font-weight: bold;">
        ✨ آماده‌سازی رول‌ها
      </span><br><br>

      1️⃣ خمیر را روی 
      <span style="color: #FFFFFF;">سطح آردپاشی‌شده</span> بگذارید و به 
      <span style="color: #00beb1; font-weight: bold;">قطر ۱ سانت</span> و به شکل 
      <span style="color: #20B2AA; font-style: italic;">مستطیل باز کنید</span><br><br>

      2️⃣ <span style="color: #00beb1; font-weight: bold;">کره (۱۰۰ گرم)</span> که به دمای محیط رسیده را با 
      <span style="color: #20B2AA; font-style: italic;">پالت روی خمیر بمالید</span> 🧈<br><br>

      3️⃣ <span style="color: #00beb1; font-weight: bold;">دارچین (۲ قاشق غذاخوری)</span> و 
      <span style="color: #00beb1; font-weight: bold;">شکر (نصف پیمانه)</span> را 
      <span style="color: #20B2AA; font-style: italic;">مخلوط کنید</span> و به طور 
      <span style="color: #20B2AA; font-style: italic;">یکنواخت روی خمیر بپاشید</span> 🌿🍬<br>
    `,
    icon: "i-tabler-rectangle",
    preview: "آماده‌سازی رول‌ها",
  },
  {
    title: "🌪️✂️ مرحله ۵: رول کردن و برش دادن",
    content: `
      <span style="color: #87ff8e; font-size: 1.25rem; font-weight: bold;">
        🌪️✂️ رول کردن و برش دادن
      </span><br><br>

      1️⃣ خمیر را از یک طرف 
      <span style="color: #20B2AA; font-style: italic;">آرام رول کنید</span><br><br>

      2️⃣ می‌توانید 
      <span style="color: #20B2AA; font-style: italic;">برش‌های ۳ سانتی</span> بزنید و حدود 
      <span style="color: #20B2AA; font-style: italic;">۳۰ عدد رول کوچک</span> داشته باشید، یا مثل طرح اصلی:<br><br>

         - با <span style="color: #20B2AA; font-style: italic;">قیچی برش‌های نیمه بزنید</span> و 
         <span style="color: #20B2AA; font-style: italic;">هر برش را یکی در میان به طرفین بگذارید</span> ✂️<br>
    `,
    icon: "i-carbon-scissors",
    preview: "رول کردن و برش دادن",
  },
  {
    title: "✨ مرحله ۶: رومال و تزیین",
    content: `
      <span style="color: #87ff8e; font-size: 1.25rem; font-weight: bold;">
        ✨ رومال و تزیین
      </span><br><br>

      1️⃣ <span style="color: #00beb1; font-weight: bold;">زرده تخم‌مرغ (۱ عدد)</span> را 
      <span style="color: #20B2AA; font-style: italic;">خوب هم بزنید</span> و با 
      <span style="color: #20B2AA; font-style: italic;">برس روی خمیر بمالید</span> 🥚<br><br>

      2️⃣ <span style="color: #FFFFFF;">شکر درشت</span> را برای تزیین 
      <span style="color: #20B2AA; font-style: italic;">بپاشید</span> 🌟<br>
    `,
    icon: "i-openmoji-star",
    preview: "رومال و تزیین",
  },
  {
    title: "🍞🔥 مرحله ۷: پختن نان",
    content: `
      <span style="color: #87ff8e; font-size: 1.25rem; font-weight: bold;">
        🍞🔥 پختن نان
      </span><br><br>

      1️⃣ خمیر را در <span style="color: #00beb1; font-weight: bold;">فر از قبل گرم شده با دمای ۲۰۰ درجه سانتی‌گراد</span> بپزید 🔥<br><br>

      2️⃣ حدود <span style="color: #00beb1; font-weight: bold;">۱۵ دقیقه زمان دهید</span> تا نان 
      <span style="color: #20B2AA; font-style: italic;">طلایی شود</span><br>
    `,
    icon: "i-carbon-oven",
    preview: "پختن نان",
  },
  {
    title: "🎉 نان دارچینی خوشمزه آماده است! 🎉",
    content: `
      <span style="color: #87ff8e; font-size: 1.25rem; font-weight: bold;">
        🎉 نان دارچینی خوشمزه آماده است! 🎉
      </span><br><br>

      نان دارچینی خوشمزه و گرم آماده شده است. نوش جان!<br><br>
      
      این نان خوش‌طعم را با چای یا قهوه میل کنید ☕<br>
    `,
    icon: "i-carbon-party-popper",
    preview: "نان آماده شده",
  }
]);



const currentSlide = ref(0);
const showAllSlides = ref(false);

const nextSlide = () => {
  if (currentSlide.value < slides.value.length - 1) {
    currentSlide.value++;
  }
};

const previousSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};

const goToSlide = (index) => {
  currentSlide.value = index;
  showAllSlides.value = false;
};

// Keydown event handling
const handleKeydown = (event) => {
  if (event.key === "ArrowRight") {
    nextSlide();
  } else if (event.key === "ArrowLeft") {
    previousSlide();
  } else if (event.key === " ") {
    event.preventDefault();
    nextSlide();
  } else if (event.key === "Escape") {
    showAllSlides.value = !showAllSlides.value;
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.5s ease-in-out;
}


.ina{
  font-weight: 900;
    color: #ffffff;
    font-size: x-large;
    padding-inline: 120px;
    padding-top: 2px;
    border-top: 0.1px solid #000000;
}
</style>
