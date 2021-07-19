input.onButtonPressed(Button.A, function () {
    basic.showString("" + (nouns[randint(0, 5)]))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (adjectives[randint(0, 5)]))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (verbs[randint(0, 5)]))
})
let adjectives: string[] = []
let verbs: string[] = []
let nouns: string[] = []
nouns = [
"chocolate",
"platypus",
"palace",
"scissors",
"sunflower",
"mustache"
]
verbs = [
"defenestrate",
"eat",
"tinker",
"skip",
"sigh",
"laugh"
]
adjectives = [
"hungry",
"purple",
"bright",
"ticklish",
"miniscule",
"dizzy"
]
