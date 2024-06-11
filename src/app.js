/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  //write your code here
  const pronoun = ["the", "our", "my", "her", "his"];
  const adjective = ["great", "big"];
  const noun = ["jogger", "racoon"];
  const extension = [".com", ".net", ".us", ".io"];

  const bios = [];

  for (let pronounindex = 0; pronounindex < pronoun.length; pronounindex++) {
    for (
      let adjectiveIndex = 0;
      adjectiveIndex < adjective.length;
      adjectiveIndex++
    ) {
      for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
        for (
          let extensionIndex = 0;
          extensionIndex < extension.length;
          extensionIndex++
        ) {
          bios.push(
            `${pronoun[pronounindex]}${adjective[adjectiveIndex]}${noun[nounIndex]}${extension[extensionIndex]}`
          );
        }
      }
    }
  }

  for (const bio of bios) {
    console.log(bio);
  }
};
