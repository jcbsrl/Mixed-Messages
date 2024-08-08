//This outputs a new, random message when ever the user uses it.
const messages = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

const generator = () => {
    const output = messages.Math.floor(Math.random() * messages.length());
    return console.log(output);
}