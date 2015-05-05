main = function() {
  var result, source;
  source = INPUT.value;
  try {
    result = JSON.stringify(gramatica.parse(source), null, 2);
  } catch (_error) {
    result = _error;
    result = "<div class=\"error\">" + result + "</div>";
  }
  return OUTPUT.innerHTML = result;
};

window.onload = function() {
  return PARSE.onclick = main;
};
