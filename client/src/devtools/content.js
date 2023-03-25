// alert('Hello!');

// chrome.runtime.onConnectExternal.addListener((port) => {
//   if(port.name === 'hi') {
//     console.log('in background.js connected!');
//   }
// })
// console.log(chrome.devtools.network);

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log('made it inside the event listener');
//   console.log(request);
//   sendResponse({hello: 'hello to you too'})
// });

window.addEventListener('message', msg => {
  console.log('made it inside content.js->window.addEventListener');
  console.log('message is', msg.data);
  chrome.runtime.sendMessage({type: msg.data.type, time: msg.data.time, hit: msg.data.hit});
  }
)