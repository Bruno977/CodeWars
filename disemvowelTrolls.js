function disemvowel(str) {
  let removeVowel = str.replace(/[aeiou]/gi, "")
  return removeVowel;
}disemvowel("This website is for losers LOL!")
