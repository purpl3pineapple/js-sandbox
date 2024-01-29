const keyCode = e => {
  const insert = document.getElementById("insert");
  insert.innerHTML = "";

  const keyCodes = {
    "e.key": e.key === " " ? "Space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };

  for (let key in keyCodes) {
    const div = document.createElement("div");
    div.className = "key";

    const keyCode = document.createTextNode(keyCodes[key]);

    const small = document.createElement("small");
    const keyNameText = document.createTextNode(key);

    small.appendChild(keyNameText);
    div.appendChild(keyCode);
    div.appendChild(small);

    insert.appendChild(div);
  }
};

window.addEventListener("keydown", keyCode);
