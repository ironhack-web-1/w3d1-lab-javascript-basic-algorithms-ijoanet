console.log('-- ITERATION 0 --')
console.log("I'm ready!");

// Iteration 1: Names and Input
console.log('-- ITERATION 1 --')
let hacker1 = 'Paco';
console.log(`The driver\'s name is ${hacker1}.`);
let hacker2 = 'Manolo';
console.log(`The navigator\'s name is ${hacker2}.`);

// Iteration 2: Conditionals
console.log('-- ITERATION 2 --')
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log('Wow, you both have equally long names, XX characters!');
}

// Iteration 3: Loops
console.log('-- ITERATION 3 --')
// Spaced
console.log('-- 3.1')
let nameSpaced = ''
for (let i = 0; i < hacker1.length; i++) {
    if (i != 0) {
        nameSpaced += ' '
    }
    nameSpaced += hacker1[i].toUpperCase()
}
console.log(nameSpaced);

// Reversed
console.log('-- 3.2')
let nameReversed = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
    nameReversed += hacker2[i]
}
console.log(nameReversed);

// Reversed but cooler 😎
const nameReversedCooler = hacker2.split('').reverse().join('');
console.log(nameReversedCooler);

// Lexicographic order
console.log('-- 3.3')
const lexicoGraphicallyOrdered = [hacker1, hacker2].sort()
if (lexicoGraphicallyOrdered[0] === hacker1) {
    console.log('The driver\'s name goes first.')
} else if (lexicoGraphicallyOrdered[0] === hacker2) {
    console.log('Yo, the navigator goes first definitely.')
} else {
    console.log('What?! You both have the same name?')
}

// Bonus 1
console.log('-- BONUS 1 --')
const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula elit non mauris tincidunt porttitor. Aenean vitae tortor non nulla fermentum iaculis. Quisque eros velit, tincidunt porttitor viverra in, vehicula sed leo. Nam scelerisque lectus vel nulla dapibus eleifend. Vestibulum metus massa, vehicula eu ultrices vitae, laoreet sed quam. Proin dapibus nisi ac nisi ultricies, commodo pellentesque orci iaculis. Duis porttitor dapibus blandit. Donec ultricies nisl et tellus bibendum sodales. Etiam consectetur libero tempus, posuere ex eget, eleifend tortor. Vestibulum pulvinar ante eu magna blandit, ac volutpat nulla consequat. In sit amet fermentum purus, quis malesuada neque.
Etiam eu ante facilisis, finibus velit sit amet, auctor augue. Nunc in luctus odio. Vestibulum suscipit dapibus fermentum. Aenean laoreet iaculis elit, vel viverra dolor sagittis non. Donec laoreet scelerisque sapien, tincidunt laoreet diam tincidunt vel. Ut sed enim ac massa feugiat ornare. Suspendisse molestie ut enim dignissim iaculis. Mauris congue tristique purus, quis imperdiet elit. Aenean non sapien lectus. Proin vel dictum lectus. Proin sed enim et arcu elementum aliquet ut in eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi ultricies urna eu mauris semper, at ullamcorper sem ullamcorper. Nunc a finibus neque, vitae sagittis dui. Nulla ut neque nec felis iaculis efficitur vel eget mauris. In id placerat quam, non lacinia elit.
Aliquam laoreet malesuada mauris, ut malesuada purus volutpat at. Aliquam erat volutpat. Suspendisse nec est quis orci eleifend fermentum ultricies non tortor. Aliquam vitae tellus aliquam elit elementum imperdiet. Fusce volutpat massa quis consectetur porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam a turpis vel nunc rhoncus luctus sed rhoncus est. Aliquam turpis arcu, porta ut tincidunt non, pretium ut risus. Nam congue tortor a est dignissim, at viverra arcu finibus. Phasellus scelerisque tortor posuere lacus sagittis bibendum. Etiam eget pharetra nibh.`

console.log(`Lorem ipsum constains ${loremIpsum.split(/\s/).length} words.`)
console.log(`Lorem ipsum constains ${loremIpsum.match(/et/g).length} 'et' repetitions.`)

// Bonus 2
console.log('-- BONUS 2 --')
function phraseToCheck(phraseToCheck) {
    const normalised = phraseToCheck.replace(/\W/g, '').toLowerCase()
    const reversed = normalised.split('').reverse().join('');

    if (normalised === reversed) {
        console.log('The phrase is a palindrome.')
    } else {
        console.log('The phrase is not a palindrome.')
    }
}

phraseToCheck('A man, a plan, a canal, Panama!')
phraseToCheck('Amor, Roma')
phraseToCheck('race car')
phraseToCheck('stack cats')
phraseToCheck('step on no pets')
phraseToCheck('taco cat')
phraseToCheck('put it up')
phraseToCheck('Was it a car or a cat I saw?')
phraseToCheck('No x in Nixon')
phraseToCheck('Not a palindrome')
