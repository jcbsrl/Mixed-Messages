//This outputs a new, randomized joke when ever the user uses it.
const jokeStart = ["What do you call a bear", "Why shouldn't you trust a scientist", "What do you get when you cross an elephant and", "How does a penguin build", "Why don't skeletons fight"]
const jokeMid = [" with a plate of spaghetti?", " with a wooden leg.", " before the sun rises.", " using a spoon and a fork?", " with super glue?", " a pizza delivery?" ]
const jokeEnd = ["Pastacarnivore", "Because they might make light of the situation", "You get a wobbly trunk show!" , "With a lot of ice and some extra toppings!", "Because they don't have the guts!" ]

const generator = () => {
    let output = [];
    let outputStart = jokeStart[(Math.random(Math.floor() * jokeStart.length()))];
    let outputMid = jokeMid[(Math.random(Math.floor() * jokeMid.length()))];
    let outputEnd = jokeEnd[(Math.random(Math.floor() * jokeEnd.length()))];
    output = output.push(outputStart, outputMid, outputEnd)
    console.log(generator);
}