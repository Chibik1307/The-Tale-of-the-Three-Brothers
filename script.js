document.addEventListener("DOMContentLoaded", () => {
  const images = new Array();
  function preloadImages(...images) {
    images.forEach((image, i) => {
      image = new Image();
      image.src = preloadImages.arguments[i];
    });
  }

  preloadImages(
    "./images/illustrations/1.png",
    "./images/illustrations/2.png",
    "./images/illustrations/3.png",
    "./images/illustrations/4.png",
    "./images/illustrations/5.png",
    "./images/illustrations/6.png",
    "./images/illustrations/7.png"
  );
});

const illustration = document.querySelector(".illustration__content");
const tw = document.getElementById("typewriter");
const content = document.querySelector(".page");
const imagesMap = {
  1: { image: "1" },
  2: { image: "2" },
  3: { image: "3" },
  4: { image: "3" },
  5: { image: "3" },
  6: { image: "4" },
  7: { image: "4" },
  8: { image: "5" },
  9: { image: "5" },
  10: { image: "5" },
  11: { image: "6" },
  12: { image: "6" },
  13: { image: "6" },
  14: { image: "7" },
};

function scroll() {
  content.scrollTo({ top: content.scrollHeight, behavior: "smooth" });
}

new ResizeObserver(scroll).observe(tw);

const typeWriter = new Typewriter("#typewriter", {
  cursor: null,
  loop: false,
  delay: 50,
});

function changeImage(imageName) {
  illustration.classList.add("animation");
  setTimeout(() => {
    illustration.src = `./images/illustrations/${imageName}.png`;
  }, 500);
  setTimeout(() => {
    illustration.classList.remove("animation");
  }, 1000);
}

function intersectionObserving() {
  const target = document.querySelector(
    ".Typewriter__wrapper"
  ).lastElementChild;

  const options = {
    root: content,
    threshold: 0,
  };

  const callback = (entries, _) => {
    const targetId = target.dataset.id;
    const imageName = imagesMap[+targetId + 1].image;

    if (entries[0].isIntersecting) {
      changeImage(imageName);
    }
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(target);
}

typeWriter
  .typeString("<h1 data-id='0'>The Tale of the Three Brothers</h1>")
  .pauseFor(1000)
  .callFunction(() => {
    intersectionObserving();
  })
  .typeString(
    "<br><p data-id='1'>There were once three brothers who were traveling along a lonely, winding road at twilight. In time, the brothers reached a river too deep to wade through and too dangerous to swim across. However, these brothers were learned in the magical arts, and so they simply waved their wands and made a bridge appear across the treacherous water. They were halfway across it when they found their path blocked by a hooded figure.</p>"
  )
  .callFunction(() => {
    intersectionObserving();
  })
  .typeString(
    "<br><p data-id='2'>And Death spoke to them. He was angry that he had been cheated out of three new victims, for travellers usually drowned in the river. But Death was cunning. He pretended to congratulate the three brothers upon their magic, and said that each had earned a prize for having been clever enough to evade him.</p>"
  )
  .callFunction(() => {
    intersectionObserving();
  })
  .typeString(
    "<br><p data-id='3'>So the oldest brother, who was a combative man, asked for a wand more powerful than any in existence: a wand that must always win duels for its owner, a wand worthy of a wizard who had conquered Death! So Death crossed to an elder tree on the banks of the river, fashioned a wand from a branch that hung there, and gave it to the oldest brother.</p>"
  )
  .typeString(
    "<p data-id='4'>Then the second brother, who was an arrogant man, decided that he wanted to humiliate Death still further, and asked for the power to recall others from Death. So Death picked up a stone from the riverbank and gave it to the second brother, and told him that the stone would have the power to bring back the dead.</p>"
  )
  .typeString(
    "<p data-id='5'>And then Death asked the third and youngest brother what he would like. The youngest brother was the humblest and also the wisest of the brothers, and he did not trust Death. So he asked for something that would enable him to go forth from that place without being followed by Death. And Death, most unwillingly, handed over his own Cloak of Invisibility.</p>"
  )
  .callFunction(() => {
    intersectionObserving();
  })
  .typeString(
    "<br><p data-id='6'>Then Death stood aside and allowed the three brothers to continue on their way and they did so, talking with wonder of the adventure they had had, and admiring Death’s gifts.</p>"
  )
  .typeString(
    "<p data-id='7'>In due course the brothers separated, each for his own destination.</p>"
  )
  .callFunction(() => {
    intersectionObserving();
  })
  .typeString(
    "<br><p data-id='8'>The first brother travelled on for a week or more, and reaching a distant village, he sought out a fellow wizard with whom he had a quarrel. Naturally, with the Elder Wand as his weapon, he could not fail to win the duel that followed. Leaving his enemy dead upon the floor, the oldest brother proceeded to an inn, where he boasted loudly of the powerful wand he had snatched from Death himself, and of how it made him invincible.</p>"
  )
  .typeString(
    "<p data-id='9'>That very night, another wizard crept upon the oldest brother as he lay, wine-sodden, upon his bed. The thief took the wand and, for good measure, slit the oldest brother’s throat.</p>"
  )
  .typeString(
    "<p data-id='10'>And so Death took the first brother for his own.</p>"
  )
  .callFunction(() => {
    intersectionObserving();
  })
  .typeString(
    "<br><p data-id='11'>Meanwhile, the second brother journeyed to his own home, where he lived alone. Here he took out the stone that had the power to recall the dead, and turned it thrice in his hand. To his amazement and his delight, the figure of the girl he had once hoped to marry before her untimely death appeared at once before him.</p>"
  )
  .typeString(
    "<p data-id='12'>Yet she was silent and cold, separated from him as though by a veil. Though she had returned to the mortal world, she did not truly belong there and suffered. Finally, the second brother, driven mad with hopeless longing, killed himself so as truly to join her.</p>"
  )
  .typeString(
    "<p data-id='13'>And so Death took the second brother for his own.</p>"
  )
  .callFunction(() => {
    intersectionObserving();
  })
  .typeString(
    "<br><p data-id='14'>But though Death searched for the third brother for many years, he was never able to find him. It was only when he had attained a great age that the youngest brother finally took off the Cloak of Invisibility and gave it to his son. And then he greeted Death as an old friend, and went with him gladly, and, equals, they departed this life.</p>"
  )
  .start();
