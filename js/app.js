// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */

const subjects = ['The children', 'Alice', 'The chef', 'My cat', 'The scientist'];
const verbs = ['explored', 'danced', 'prepared', 'chased', 'discovered'];
const adjectives = ['the mysterious', 'gracefully', 'a delicious', 'a playful', 'groundbreaking'];
const objects = ['forest', 'a beautiful waltz', 'gourmet meal', 'little mouse ', 'research findings'];
const places = ['deep in the heart of the enchanted woods', 'under the shimmering chandelier', 'in the well-equipped kitchen', 'around the garden', 'in the laboratory'];


/* Functions
-------------------------------------------------- */
const subjectBtn = document.getElementById('subjectBtn');
const verbBtn = document.getElementById('verbBtn');
const adjectiveBtn = document.getElementById('adjectiveBtn');
const objectBtn = document.getElementById('objectBtn');
const placeBtn = document.getElementById('placeBtn');
const generateBtn = document.getElementById('generateBtn');
const resetBtn = document.getElementById('resetBtn');
const storyOutput = document.getElementById('story');

const synth = window.speechSynthesis;

subjectBtn.addEventListener('click', () => {
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    storyOutput.innerHTML = randomSubject;
    speak(randomSubject);
});

verbBtn.addEventListener('click', () => {
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    storyOutput.innerHTML = randomVerb;
    speak(randomVerb);
});

adjectiveBtn.addEventListener('click', () => {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    storyOutput.innerHTML = randomAdjective;
    speak(randomAdjective);
});

objectBtn.addEventListener('click', () => {
    const randomObject = objects[Math.floor(Math.random() * objects.length)];
    storyOutput.innerHTML = randomObject;
    speak(randomObject);
});

placeBtn.addEventListener('click', () => {
    const randomPlace = places[Math.floor(Math.random() * places.length)];
    storyOutput.innerHTML = randomPlace;
    speak(randomPlace);
});

generateBtn.addEventListener('click', () => {
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomObject = objects[Math.floor(Math.random() * objects.length)];
    const randomPlace = places[Math.floor(Math.random() * places.length)];

    const story = `${randomSubject} ${randomVerb} ${randomAdjective} ${randomObject} ${randomPlace}.`;

    storyOutput.innerHTML += `<p>${story}</p>`;
    speak(story);
});

resetBtn.addEventListener('click', () => {
    storyOutput.innerHTML = '';
});

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}
