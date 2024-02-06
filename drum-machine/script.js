import clips from "./clips.js";

$("document").ready(function () {
  function setKit(kit) {
    sessionStorage.setItem("kit", `${kit}`);

    clips.forEach(function ({ id, kit1, kit2 }) {
      $(`#${id}`).prop("src", kit === 1 ? kit1.path : kit2.path);

      $(`button:contains(${id})`).on("click", function () {
        playClip(id);
      });
    });
  }

  function playClip(id) {
    const kit = parseInt(sessionStorage.getItem("kit"));
    const {
      kit1: { description: kit1Desc },
      kit2: { description: kit2Desc },
    } = clips.find(({ id: clipID }) => clipID === id);

    $(`#${id}`)[0].play();
    $("#display").text(kit === 1 ? kit1Desc : kit2Desc);
  }

  function power(mode) {
    const display = $("#display");
    const drumMachine = $("#drum-machine");
    const buttons = $("button:has(audio)");

    $(drumMachine).css({
      "box-shadow": mode === "off" ? "none" : "3px 3px 3px 1.5px #0dcaf0",
    });

    if (mode === "off") {
      $(buttons).addClass("disabled text-dark");
      $(display).text("");
    } else {
      $(buttons).removeClass("disabled text-dark");
    }
  }

  $("#power-switch").on("change", function () {
    power($(this).prop("checked") ? "on" : "off");
  });

  $("#kit-1").on("click", function () {
    setKit(1);
  });

  $("#kit-2").on("click", function () {
    setKit(2);
  });

  $("button:has(audio)").on("mousedown", function () {
    $(this).removeClass("bg-dark text-info").addClass("bg-info text-dark");
  });

  $("button:has(audio)").on("mouseup", function () {
    $(this).removeClass("bg-info text-dark").addClass("bg-dark text-info");
  });

  $("#volume-control").on("change", function () {
    const volume = $(this).prop("value");

    $.each([$(".clip")], function () {
      [...this].forEach(clip => (clip.volume = volume));
    });
  });

  $(document).on("keydown", e => {
    const id = e.key.toUpperCase();
    const clip = $(`#${id}`)[0];
    if (clip) {
      playClip(id);
    }
  });

  setKit(1);
});
