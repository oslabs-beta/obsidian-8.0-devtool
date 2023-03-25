let portFromApp;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('made it inside background.js->chrome.runtime.onMessage.addListener');
  console.log('message is', message);
  if(message.type === 'query'){
    portFromApp.postMessage(message);
  }
});

chrome.runtime.onConnect.addListener(port => {
  portFromApp = port;
  console.log('connected!!');
})