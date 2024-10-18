function censor() {
    const myMap = new Map();

    return function (str1, str2 = false) {
        if (str2) {
            myMap.set(str1, str2);
        } else {
            return str1.split(" ").map((word) => myMap.get(word) || word).join(" ");
        }
    }
}

const changeScene = censor();

changeScene("PHP", "JS");

changeScene("backend", "frontend");

console.log(
  changeScene(
    "PHP is the most popular programming language for backend web-development"
  )
);
