// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process



// the order would be first third and second bec setTimeout is asynchronous
// and what happens with asynchronous?
// well, they get offloaded. that means the setTimout func will get offloaded and only be invoked once we're done 
// with our immediate code(matlab uske niche ke sync code perform ho jaye uske bad hi voh callback invoke hoga)