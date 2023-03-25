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

// ADD SOME LOGIC HERE TO START THE FOLLOWING SCRIPT IF WEBSITE USES OBSIDIAN WRAPPER
// ON PAGE LOAD, 
window.addEventListener('message', msg => {
  // SHAPE OF OBJECT THAT WE SEND HAS TO INCLUDE OBSIDIAN IDENTIFIER
  // IF IT DOES WE WILL CONTINUE MESSAGE CHAIN
  console.log('made it inside content.js->window.addEventListener');
  console.log('message is', msg.data);
  chrome.runtime.sendMessage({type: msg.data.type, time: msg.data.time, name: msg.data.name, hit: msg.data.hit});
  }
)