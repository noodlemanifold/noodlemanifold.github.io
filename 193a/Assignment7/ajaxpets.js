/**
 * A webpage for fetching cute pet photos. Puppies (the best) or
 * kitties will be populated on the page after the user selects their desired
 * pet type.
 */
(function() {

  "use strict";

    const AJAX_PETS_URL = "https://courses.cs.washington.edu/courses/cse154/webservices/pets/ajaxpets.php";

  window.addEventListener("load", init);

  /**
   * TODO: What do we need to initialize?
   */
  function init() {
      let radios = qsa("input[name='animal']");
          for (let i = 0; i < radios.length; i++) {
              radios[i].addEventListener("change", makeRequest);
          }
  }

  function makeRequest() {
    let animal = this.value;

      //fixed using this!! https://stackoverflow.com/questions/41946457/getting-text-from-fetch-response-object
    fetch(AJAX_PETS_URL + "?animal=" + animal)
      .then(checkStatus)
        .then(response => response.text())
        .then((response) => splitNewLines(response))
      //.then(splitNewLines)
      .then(displayPictures)
      .catch(console.log);
  }

    //split api response so each image is its own token
  function splitNewLines(text) {
      console.log(text);
    return text.split("\n");
  }

      //clear any existing images
  function clearPictures() {
    let imgs = qsa("#pictures img");
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].remove();
    }
  }

      //display the new images retrieved from ajax!
  function displayPictures(imgs) {
    clearPictures();
    for (let i = 0; i < imgs.length; i++) {
      let imgPath = imgs[i];
      let img = document.createElement("img");
      img.src = imgPath;
      img.alt = "adorable friend";
  	  id("pictures").appendChild(img);
    }
  }

  /* ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  async function checkStatus(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
