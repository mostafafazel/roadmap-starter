<template>
  <div class="bg-black recipes-page font-farsi text-center p-8 bg-gradient-to-br from-black via-gray-800 to-teal-900 min-h-screen">
    <h1 class="text-3xl sm:text-4xl font-semibold text-white bg-white/20 backdrop-blur-lg p-4 rounded-xl inline-block mb-8">
      اسلایدر دستور پخت
    </h1>
    <RecipeSlider :recipes="recipeList" />
  </div>
</template>

<script setup>

const recipeList = [
  {
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBhc3RhfGVufDB8fHx8MTYyNjUwOTI5NA&ixlib=rb-1.2.1&q=80&w=400",
    title: "اسپاگتی کربنارا",
    description: "یک غذای کلاسیک ایتالیایی با تخم مرغ، پنیر، بیکن و فلفل سیاه.",
  },
  {
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGNoaWNrZW58ZW58MHx8fHwxNjI2NTA5MzAw&ixlib=rb-1.2.1&q=80&w=400",
    title: "چیکن آلفردو",
    description: "سس آلفردوی خامه‌ای روی فتوچینی همراه با مرغ گریل شده خوش طعم.",
  },
  {
    image: "https://images.unsplash.com/photo-1562967916-6ce1aab6a6f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGJlZWZ8ZW58MHx8fHwxNjI2NTA5MzA1&ixlib=rb-1.2.1&q=80&w=400",
    title: "بیف استراگانف",
    description: "گوشت نرم در سس خامه‌ای قارچ همراه با نودل تخم‌مرغ.",
  },
];
</script>

<style scoped>
.recipes-page {
  width: 100vw;
  text-align: center;
  padding: 20px;
  direction: rtl;
  font-family: 'Vazir', sans-serif;
}

h1 {
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 20px;
  backdrop-filter: blur(5px);
  padding: 10px;
  border-radius: 12px;
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
}

</style>
