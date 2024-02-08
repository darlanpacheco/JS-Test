// parentNode
// childNodes
// firstChild
// lastChild
// nextSibling
// previousSibling

const radios = [...document.querySelectorAll(`input[type="radio"]`)];

let radioChecked = () => {
  for (let value of radios) {
    if (value.checked) {
      return value;
    }
  }
};

console.log(radioChecked());
