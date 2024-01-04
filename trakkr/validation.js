$(function () {
  "use strict";
  $(".needs-validation").each(function () {
    this.addEventListener("submit", function (e) {
      if (this.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
      $(this).addClass("was-validated");
    });
  });
});
