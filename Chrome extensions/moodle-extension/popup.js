(function () {
  document.getElementById("fixButton").addEventListener("click", fixProblem);

  function fixProblem() {
    chrome.cookies.getAll({ url: "https://my.idc.ac.il" }, function (cookies) {
      for (var i = 0; i < cookies.length; i++) {
        chrome.cookies.remove({
          url: "https://my.idc.ac.il" + cookies[i].path,
          name: cookies[i].name,
        });
      }
    });
    chrome.tabs.update({ url: "https://my.idc.ac.il" });
  }
})();
