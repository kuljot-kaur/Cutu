const messageBtn = document.getElementById("messageBtn");
const hugBtn = document.getElementById("hugBtn");
const displayArea = document.getElementById("displayArea");

const messages = [
  "Even if today felt heavy, you still carried yourself through it. That matters more than you know.", 
  "You’re not behind. You’re just on your own path, walking at your own pace. I believe in that pace, and I believe in you.",
   "There’s nothing wrong with needing rest or comfort. That doesn’t make you weak, you’re still strong, still worthy, always.",
   "You don’t have to feel okay all the time to be doing okay. I see the quiet ways you’re healing, even when you can’t",
   "Some days you bloom, other days you just breathe. Both are important. Both are beautiful. I am here for both.",
   "You don’t always have to be strong. It’s okay to soften. Let yourself rest. I’ve got you.",
   "You don’t owe anyone an explanation for your tiredness. Life gets heavy. Just surviving it is already a lot and I’m proud of you.",
   "It’s okay if you don’t feel bright today. Even cloudy skies are full of meaning and so are you, always.",
   "You’re not a burden for feeling deeply. I know you can’t always find the words, and that’s okay. Just know I’m here. I always will be.",
   "You’re not broken. You don’t need fixing. You’re still growing, even in the unseen places.",
   "You’ve done hard things before, I’ve seen your strength. You’ll get through this too, one breath at a time.",
   "Just because it’s slow doesn’t mean it’s not real. You’re growing quietly, and that still counts.",
   "Growth doesn’t need to be perfect or loud. It just needs you, and you’re doing more than you know.",
   "This isn’t the end. It’s just a pause. There’s so much still waiting for you, even if it’s not visible right now.",
   "There is light ahead, even if you can’t feel it yet. I’ll help you hold on. Just take it one step at a time.",
   "What feels unclear today might make sense tomorrow, sometimes understanding just needs a little time, and that’s okay.",
   "It’s okay not to have the next step figured out. Sometimes just resting is part of moving forward.",
   "Life is still unfolding for you, and I love watching it happen. You don’t have to rush your story.",
   "The storm won’t last forever. Let this moment pass without trying to make it mean something. I’m right here through all of it.",
   "You’re allowed to start over, as many times as you need, I’ll be here every time.",
   "You are not alone in this. I’m here, holding space for you, even when words feel too heavy.",
   "Your feelings are real, and you’re allowed to feel all of them. You don’t have to carry it alone, not while I’m here.",
   "You are not your struggles. You’re so much more, I see it in every little thing you do, I hope one day you do too.",
   "You are not the weight of what you’ve been through. You’re the love you give, the light you still carry, even on hard days.",
   "You don’t have to prove anything to be loved. I hope you know that you’re already enough, I love you just as you are.",
   "You don’t have to earn your worth through doing. You matter because you’re you. That’s enough for me.",
   "You’re loved in small ways, in quiet moments, in things left unsaid, in the spaces between. It’s there. I promise. I’m here.",
   "You matter to me in ways I can’t always put into words. Just wanted you to know I’m so glad you're part of my world.",
   "You are loved, even when you can’t feel it. I’m here, holding that love for you until you can see it again.",
   "You don’t have to have it all together to be loved. You’re allowed to struggle and I’ll hold you together for a while if you need.",
   "Even if you don’t see it, I do, you’re still showing up, still trying, and that matters. You’re doing better than you think",
   "You’ve made it through things you thought would break you. And here you are. That’s something I admire every single day.",
   "Even if it feels small, the effort you’re giving matters. You’re doing your best and that’s more than enough for me.",
   "Even when it’s quiet and everything feels far away, you’re not alone. I’m here. Always.",
   "You haven’t lost any part of yourself that matters even if the light feels dim, it’s still there. So are you"
];


messageBtn.addEventListener("click", () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  // Set up the container for the message
  displayArea.innerHTML = `
    <div id="typingMessage" class="p-6 bg-pink-200 rounded-2xl shadow-md text-purple-800 font-medium max-w-md mx-auto">
      💌 <span id="typedText"></span>
    </div>
  `;

  const typedText = document.getElementById("typedText");
  const dingSound = document.getElementById("dingSound");

  dingSound.currentTime = 0; // Reset to beginning
  dingSound.play();


  let i = 0;

  function typeLetter() {
    if (i < randomMessage.length) {
      typedText.innerHTML += randomMessage.charAt(i);
      i++;
      setTimeout(typeLetter, 30); // typing speed (lower is faster)
    }
  }
  
  typeLetter();
});


hugBtn.addEventListener("click", () => {
  displayArea.innerHTML = `
    <div class="flex flex-col items-center space-y-4">
      <img src="assets/hug.gif" alt="Huggy" class="w-40 h-auto rounded-xl shadow-md">
      <div class="text-purple-700 text-lg font-medium">
        Here's your warmest bear hug! 🫂💞
      </div>
    </div>
  `;

  const hugSound = document.getElementById("hugSound");
  hugSound.currentTime = 0;
  hugSound.play();
});

