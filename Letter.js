// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying
// character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed
// the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder
//   (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating
//   the stored boolean value to true if it was guessed correctly




var Letter = function (ltr) {
    this.letter = ltr;
    this.appear = false;
  
    this.letterRender = function() {
      // if this is a blank space
      if (this.letter == ' ') {
          //mark the space true
          this.appear = true;
          // and return a space to the word
          return '  ';
        // if the letter hasn't been guessed
      } if (this.appear === false) {
          // return letters placeholder
          return ' _ ';
        // if the letter has appeared (guessed)
      } else {
          //show the letter
          return this.letter;
      }
    };
  };
  
  module.exports = Letter;