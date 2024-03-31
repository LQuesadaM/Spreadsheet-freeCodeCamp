const isEven = (num) => (num % 2 === 0 ? true : false);
const sum = (nums) =>
  nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = (nums) => sum(nums) / nums.length;

const median = (nums) => {
  const sorted = nums.slice().sort((a, b) => a - b);
};

const range = (start, end) =>
  Array(end - start + 1)
    .fill(start)
    .map((element, index) => element + index);

const charRange = (start, end) =>
  range(start.charCodeAt(0), end.charCodeAt(0)).map((code) =>
    String.fromCharCode(code)
  );

window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = (name) => {
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.append(label);
  };
  const letters = charRange("A", "J");
  letters.forEach(createLabel);
  range(1, 99).forEach((number) => {
    createLabel(number);
    letters.forEach((letter) => {
      const input = document.createElement("input");
      input.type = "text";
      input.id = letter + number;
      input.ariaLabel = letter + number;
      container.append(input);
    });
  });
};
