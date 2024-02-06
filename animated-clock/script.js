window.addEventListener("load", () => {
  const clock = () => {
    const now = new Date();
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    context.save();

    context.clearRect(0, 0, 500, 500);
    context.translate(250, 250);
    context.rotate(-Math.PI / 2);

    context.strokeStyle = "#000000";
    context.fillStyle = "#f4f4f4";
    context.lineWidth = 5;
    context.lineCap = "round";

    context.save();
    context.beginPath();
    context.lineWidth = 14;
    context.strokeStyle = "#800000";
    context.arc(0, 0, 142, 0, Math.PI * 2, true);
    context.stroke();
    context.fill();
    context.restore();

    context.save();
    for (let x = 0; x < 12; x++) {
      context.beginPath();
      context.rotate(Math.PI / 6);
      context.moveTo(100, 0);
      context.lineTo(120, 0);
      context.stroke();
    }
    context.restore();

    context.save();
    context.lineWidth = 4;
    for (let x = 0; x < 60; x++) {
      if (x % 5 !== 0) {
        context.beginPath();
        context.moveTo(117, 0);
        context.lineTo(120, 0);
        context.stroke();
      }
      context.rotate(Math.PI / 30);
    }
    context.restore();

    const hour = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    context.save();
    context.rotate(
      (Math.PI / 6) * hour +
        (Math.PI / 360) * minutes +
        (Math.PI / 21600) * seconds
    );
    context.strokeStyle = "#800000";
    context.lineWidth = 14;
    context.beginPath();
    context.moveTo(-20, 0);
    context.lineTo(80, 0);
    context.stroke();
    context.restore();

    context.save();
    context.rotate((Math.PI / 30) * minutes + (Math.PI / 1800) * seconds);
    context.strokeStyle = "#800000";
    context.lineWidth = 8;
    context.beginPath();
    context.moveTo(-28, 0);
    context.lineTo(109, 0);
    context.stroke();
    context.restore();

    context.save();
    context.rotate((Math.PI / 30) * seconds);
    context.strokeStyle = "#FF7F50";
    context.fillStyle = "#FF7F50";
    context.lineWidth = 6;
    context.beginPath();
    context.moveTo(-30, 0);
    context.lineTo(100, 0);
    context.stroke();
    context.beginPath();
    context.arc(0, 0, 10, 0, Math.PI * 2, true);
    context.fill();
    context.restore();

    context.restore();

    requestAnimationFrame(clock);
  };

  requestAnimationFrame(clock);
});
