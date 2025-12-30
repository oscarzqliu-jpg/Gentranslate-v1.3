document.addEventListener("DOMContentLoaded", function () {

  const slangDictionary = {

67: {
  meaning: "Nonsensical slang term, especially among Gen Alpha",
  tone: "Street Slang, Meaningless",
  example: "Six-Seven Hahahaha!",
  parent: "(Filler Word) Hahahaha!",
},

delulu: {
  meaning: "Delusional in a humorous or self-aware way",
  tone: "Playful",
  example: "I’m being delulu about this crush.",
  parent: "I’m being unrealistic about this."
},

corecore: {
  meaning: "Chaotic or ironic internet culture mashups",
  tone: "Online",
  example: "That video is so corecore.",
  parent: "That content is very internet-styled and ironic."
},

girl_math: {
  meaning: "Justifying spending in a humorous way",
  tone: "Humorous",
  example: "It was basically free — girl math.",
  parent: "I justified the purchase in my head."
},

boy_math: {
  meaning: "Overanalyzing situations humorously",
  tone: "Humorous",
  example: "That explanation is pure boy math.",
  parent: "That reasoning is overly complicated."
},

its_giving: {
  meaning: "The vibe or impression something gives",
  tone: "Casual",
  example: "It’s giving main character.",
  parent: "It gives off that impression."
},

hard_launch: {
  meaning: "Publicly revealing a relationship",
  tone: "Casual",
  example: "They hard launched on Instagram.",
  parent: "They officially announced their relationship."
},

soft_launch: {
  meaning: "Hinting at a relationship without fully revealing it",
  tone: "Casual",
  example: "That post was a soft launch.",
  parent: "They subtly hinted at their relationship."
},

beige_flag: {
  meaning: "A neutral or mildly odd trait",
  tone: "Playful",
  example: "That’s such a beige flag.",
  parent: "That’s an odd but harmless trait."
},

npc_energy: {
  meaning: "Acting basic or predictable",
  tone: "Humorous",
  example: "That response had NPC energy.",
  parent: "That behavior was very predictable."
},

side_eye: {
  meaning: "Giving a look of judgment or suspicion",
  tone: "Casual",
  example: "I’m giving major side eye.",
  parent: "I am skeptical or disapproving."
},

aesthetic: {
  meaning: "Visually pleasing style or vibe",
  tone: "Positive",
  example: "Her room is so aesthetic.",
  parent: "Her room looks very nice."
},

rent_free: {
  meaning: "Something you keep thinking about",
  tone: "Casual",
  example: "That scene lives rent free in my mind.",
  parent: "I keep thinking about that."
},

caught_lacking: {
  meaning: "Unprepared or embarrassed",
  tone: "Negative",
  example: "I got caught lacking.",
  parent: "I was unprepared."
},

energy: {
  meaning: "The vibe someone gives off",
  tone: "Casual",
  example: "I like his energy.",
  parent: "I like his attitude."
},
    caught_in_4k: {
      meaning: "Caught with clear evidence",
      tone: "Humorous",
      example: "He got caught in 4K.",
      parent: "There is undeniable proof."
    },
    ghosted: {
      meaning: "Suddenly stopped responding",
      tone: "Negative",
      example: "They ghosted me.",
      parent: "They stopped replying without explanation."
    },
    pressed: {
      meaning: "Overly upset or bothered",
      tone: "Negative",
      example: "Why are you so pressed?",
      parent: "Why are you so upset?"
    },
    valid: {
      meaning: "Reasonable or acceptable",
      tone: "Positive",
      example: "That opinion is valid.",
      parent: "That opinion makes sense."
    },
    fr: {
      meaning: "Short for 'for real', meaning honestly or seriously",
      tone: "Casual",
      example: "That test was hard fr.",
      parent: "That test was honestly difficult."
    },
    lowkey: {
      meaning: "Secretly or mildly",
      tone: "Casual",
      example: "I lowkey like that song.",
      parent: "I kind of like that song."
    },
    w: {
      meaning: "A win or success",
      tone: "Positive",
      example: "That’s a W.",
      parent: "That is a success."
    },
    bruh: {
      meaning: "Expression of disbelief or frustration",
      tone: "Casual",
      example: "Bruh, no way.",
      parent: "I can’t believe that."
    },
    ick: {
      meaning: "A sudden feeling of disgust or disinterest",
      tone: "Negative",
      example: "That gave me the ick.",
      parent: "That made me uncomfortable."
    },
    slay: {
      meaning: "Doing something very well",
      tone: "Positive",
      example: "She slayed that presentation.",
      parent: "She did an excellent job."
    },
    bussin: {
      meaning: "Extremely good (usually food)",
      tone: "Positive",
      example: "This pizza is bussin.",
      parent: "This food tastes very good."
    },
    mid: {
      meaning: "Average or unimpressive",
      tone: "Judgmental",
      example: "That movie was mid.",
      parent: "That movie was not very good."
    },
    sus: {
      meaning: "Suspicious or questionable",
      tone: "Casual",
      example: "That sounds kinda sus.",
      parent: "That sounds suspicious."
    },
    aura: {
      meaning: "The cool, confident factor or vibe someone gives off",
      tone: "Casual",
      example: "That guy got aura.",
      parent: "That guy is cool."
    },
    rizz: {
      meaning: "Charisma or charm",
      tone: "Casual",
      example: "He’s got rizz.",
      parent: "He is very charming."
    },
    cap: {
      meaning: "A lie or something untrue",
      tone: "Casual",
      example: "That’s cap.",
      parent: "That is not true."
    },
    npc: {
      meaning: "Someone who lacks originality",
      tone: "Insulting",
      example: "Bro is an NPC.",
      parent: "They are acting very predictable."
    }
  };

  function translateSlang() {
    const input = document.getElementById("slangInput").value.toLowerCase().trim();
    const resultDiv = document.getElementById("result");

    if (input === "") {
      resultDiv.innerHTML = "Please enter a word.";
      return;
    }

    if (slangDictionary[input]) {
      const word = slangDictionary[input];
      resultDiv.innerHTML = `
        <h3>${input}</h3>
        <p><strong>Meaning:</strong> ${word.meaning}</p>
        <p><strong>Tone:</strong> ${word.tone}</p>
        <p><strong>Example:</strong> ${word.example}</p>
        <p><strong>Parent Translation:</strong> ${word.parent}</p>
      `;
    } else {
      resultDiv.innerHTML = "Slang not found. Try another word.";
    }
  }

  window.translateSlang = translateSlang;

  // ENTER key support
  document.getElementById("slangInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      translateSlang();
    }
  });

  // 🔥 AUTO-GENERATE SLANG LIST
  const slangList = document.getElementById("slangList");

  Object.keys(slangDictionary).forEach(word => {
    const li = document.createElement("li");
    li.textContent = word;
    slangList.appendChild(li);
  });

});

function toggleMode() {
  const body = document.body;
  const button = document.querySelector(".mode-toggle");

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    button.textContent = "☀️ Light Mode";
  } else {
    button.textContent = "🌙 Dark Mode";
  }
}
function toggleUpdateLog() {
  document.getElementById("updateLog").classList.toggle("hidden");
}
