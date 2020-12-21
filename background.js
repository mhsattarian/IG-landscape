// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
  // Send a message to the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      message: "clicked_browser_action",
    });
  });
});

// Get url and open in new tab
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "open_new_tab") {
    chrome.tabs.create({ url: request.url });
  }
});

chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
  console.log("🚀 ~ file: background.js ~ line 22 ~ details", details);
  chrome.tabs.executeScript(null, { file: "contentscript.js" });
});
