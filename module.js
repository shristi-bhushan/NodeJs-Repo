// //Module eg
// //function(export,module,register,__dirname,__filename){}

//const color=require('cli-color')

// console.log(color.green('Hello nodejs'))

// //Local module
// const User = require('./auth')

//  User.register('Bhushan26')
//  User.login('Bhushan26','wownode')

// // Core modules
const path=require('path')

// // dirname
// console.log(`Folder name: `,path.dirname(__filename))

// // filename
// console.log(`File name:`,path.basename(__filename))

// // Extension
// console.log(`Extension name:`,path.extname(__filename))

// // Parse
// console.log(`Parse: `,path.parse(__filename))

// //Join
console.log(`Join:`,path.join(__dirname),'order','app.js')