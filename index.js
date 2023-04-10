import cohere from 'cohere-ai';

cohere.init('U8mpI91Yu1IQnjo1ktVyvhbmpF5wiormpB1yMPt4')


const response = await cohere.generate({
    prompt: "What is your name?",
    temperature: 0.9
})

console.log(response.body)