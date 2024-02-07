function captureMarkdownHeaders(str) {
  const h1Regex = /^(?<!#)#\s(.)+(?=\n)/gim;
  const h2Regex = /^(?<!#)#{2}\s(.)+(?=\n)/gim;
  const h3Regex = /^(?<!#)#{3}\s(.)+(?=\n)/gim;
  const h4Regex = /^(?<!#)#{4}\s(.)+(?=\n)/gim;
  const h5Regex = /^(?<!#)#{5}\s(.)+(?=\n)/gim;
  const h6Regex = /^(?<!#)#{6}\s(.)+(?=\n)/gim;

  const headers = {
    h1: str.match(h1Regex),
    h2: str.match(h2Regex),
    h3: str.match(h3Regex),
    h4: str.match(h4Regex),
    h5: str.match(h5Regex),
    h6: str.match(h6Regex),
  };

  for (const header in headers) {
    if (headers[header]) {
      headers[header].forEach(
        match =>
          (str = str.replace(
            match,
            $(`<${header} />`, {
              text: match.substr(parseInt(header[1]) + 1),
            })[0].outerHTML
          ))
      );
    }
  }

  $("#markdown").html(str);
}

$("document").ready(function () {
  $("#input").on("input", e => {
    const value = e.target.value;
    $("#markdown").html(value);
    captureMarkdownHeaders(value);
  });
});
