// Event-Driven Programming
// Used heavily in nodejs

const EventEmitter = require('events');

// creating the object "customEmitter" for the Class "EventEmitter" =>

const customEmitter = new EventEmitter();
// now there are many methods in this object however the 2 we're most interested in are - 
// on - listen for an event 
// emit - emit an event
customEmitter.on('response', (name,id)=>{
    console.log(`data recieved user ${name} with id:${id}`);
})
customEmitter.on('response', ()=>{
    console.log(`some other logic here`);
})

customEmitter.emit('response', 'rohit', 21); // the moment we do that, we ofc have whatever is in the callback func

// this order matters! pehle .on fir hi .emit kar sakte hai
// that means "First we would wanna listen for the event and only then we would emit it."
