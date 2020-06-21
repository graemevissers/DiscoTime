/**
 * NAME:
 * DATE:
 * Disco Time
 * Computing Kids Interview
 */

 'use strict';

 (function() {
   window.addEventListener("load", init);

   function init() {
    document.querySelector("button").addEventListener("click", startDiscoTime);
   }

   /**
    * We will talk about this function another day!! Trust what
    * is happening inside!!
    */
   function startDiscoTime() {
     document.querySelector("main").classList.add("hidden");
     document.querySelector("body").classList.add("disco-time");
   }
 })();