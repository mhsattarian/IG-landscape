// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    // What should happen?
    var videoEl = document.querySelector("video");
    videoEl.setAttribute("controls", "");

    var prevRotate = 0;
    if (videoEl.style.transform)
      prevRotate = parseInt(videoEl.style.transform.split("(")[1].slice(0, -4));

    videoEl.style.cssText = `
      max-width: 100%;
      height: 720px;
      display: block;
      transform: rotate(${prevRotate + 90}deg);
      transform-origin: center;
      height: 90vw;
      width: 90vh;
      `;

    document.body.style.cssText = `
    width: 99vw;
    height: 98vh;
    display: grid;
    place-content: center;
    background: black;
    `;

    document.body.innerHTML = "";
    document.body.appendChild(videoEl);

    // document.chrome.runtime.sendMessage({
    //   message: "open_new_tab",
    //   url: imageAddress,
    // });
  }
});
