//FS Module
const fs = require('fs');

fs.readdir('./', (err, files)=>{
      if(err) console.log(`Error: ${err}`);
      else console.log(`Result: ${files}`);
});

