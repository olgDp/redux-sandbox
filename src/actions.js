const inc = () => ({
  type: "INC"
});

const dec = () => {
  return { type: "DEC" };
};

const rnd = () => {
  const payload = Math.floor(Math.random() * 25 - 10);
  return { type: "RND", payload };
};

export { inc, dec, rnd };
