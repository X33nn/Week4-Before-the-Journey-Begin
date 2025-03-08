/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  const vowels = "aiueoAIUEO";
  let newStr = "";
  for (let char of str) {
    if (vowels.includes(char)) {
      newStr += String.fromCharCode(char.charCodeAt(0) + 1);
    } else {
      newStr += char;
    }
  }
  return newStr;
}

function reverseWord(str) {
  return str.split("").reverse().join("");
}

function setLowerUpperCase(str) {
  let newStr = "";
  for (let char of str) {
    newStr +=
      char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
  }
  return newStr;
}

function removeSpaces(str) {
  return str.replace(/\s/g, "");
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }

  const changedVocals = changeVocals(name);
  const reversed = reverseWord(changedVocals);
  const swappedCase = setLowerUpperCase(reversed);
  const noSpaces = removeSpaces(swappedCase);
  return noSpaces;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
