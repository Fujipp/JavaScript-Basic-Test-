// 65130500087 Anawat Grudtoop
function isPasswordValid(password) {
  // let ctUppercase = false,
  //   ctLowercase = false,
  //   ctNumber = false,
  //   ctSp = false;
  // if (password == null || password == undefined) return false;
  // pwArr = [...password];
  // if (password.length < 8) return false;
  // for (i = 0; i < pwArr.length; i++) {
  //   if (!ctUppercase) {
  //     if (pwArr[i].charCodeAt(0) >= 65 && pwArr[i].charCodeAt(0) <= 90) {
  //       ctUppercase = true;
  //     }
  //   }
  //   if (!ctLowercase) {
  //     if (pwArr[i].charCodeAt(0) >= 97 && pwArr[i].charCodeAt(0) <= 102) {
  //       ctLowercase = true;
  //     }
  //   }
  //   if (!ctSp) {
  //     switch (pwArr[i]) {
  //       case "@":
  //       case "#":
  //       case "$":
  //       case "%":
  //       case "^":
  //       case "&":
  //       case "*":
  //       case "!":
  //         ctSp = true;
  //         break;
  //     }
  //   }
  //   if (!ctNumber) {
  //     if (pwArr[i].charCodeAt(0) >= 48 && pwArr[i].charCodeAt(0) <= 57) {
  //       ctNumber = true;
  //     }
  //   }
  // }
  // if (ctLowercase, ctNumber, ctSp, ctUppercase) return true;
  // else return false;
  if (password === undefined || password === null || password === "" || password.length < 8) {
    return false
  }
  if (password.match(/[a-z]/g)?.length >= 1 && password.match(/[A-Z]/g)?.length >= 1){
    return true
  }
  return false
}

console.log(isPasswordValid(undefined)); //false
console.log(isPasswordValid(null)); //false
console.log(isPasswordValid("")); //false
console.log(isPasswordValid("ab!12")); //false
console.log(isPasswordValid("1234abcd")); //false
console.log(isPasswordValid("Zky543#@")); //true
console.log(isPasswordValid("1#@!*aB^5")); //true
console.log(isPasswordValid("%5Ko&$pp")); //true
console.log(isPasswordValid("12345abcxyZ$")); //true

module.exports = isPasswordValid;
