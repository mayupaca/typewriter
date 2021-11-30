const typewriter = (sentence) => {
  let delay = 0;
  for (let i of sentence) {
    setTimeout(() => { process.stdout.write(i) }, delay);
    delay += 50;
  }
};

const sentence = "hello there from lighthouse labs";
typewriter(sentence);