const args = process.argv.slice(2);
if (args[0] !== undefined && args[1] !== undefined) {
    console.log(args[0] + " is " + args[1]);
} else if (args[0] !== undefined && args[1] === undefined) {
    console.log("Only one argument found. Please provide two arguments.");
} else {
    console.log("No arguments found. Please provide two arguments.");
}