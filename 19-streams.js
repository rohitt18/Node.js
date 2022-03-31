// Streams are used to read or write sequentially, basically when we have to handle & manipulate
// streaming data for example continuous source or a big file streams come in real handy.
// In node, there are 4 different types of streams - 
// 1. Writeable (used to write data sequentially)
// 2. Readable (used to read data sequentially)
// 3. Duplex (used to both read & write data sequentially)
// 4. Transform (used for modifying data when writing or reading)

//  Streams extend EventEmitter Class 


// Stream option - Read File

const {createReadStream} = require('fs');


// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 }); // highWaterMark is to control is size of the buffer which is at default 64kb
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' }); // utf8 se content coming from the file console mai dikhega 
const stream = createReadStream("./content/big.txt");

stream.on('data', (result)=>{
    console.log(result); 
})
stream.on('error', (err)=>{
    console.log(err);
})