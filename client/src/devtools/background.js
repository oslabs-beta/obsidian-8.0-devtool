let portFromApp;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('made it inside background.js->chrome.runtime.onMessage.addListener');
  console.log('message is', message);
  portFromApp.postMessage(message);
});

chrome.runtime.onConnect.addListener(port => {
  portFromApp = port;
  console.log('connected!!');

  // onConnect, send a message to content.js to get current Algo/Capacity in Use
  chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
    console.log('tabs is', tabs[0].id);
    chrome.tabs.sendMessage(tabs[0].id, {type: 'algocap'});
    return true;
  })
})