// Need to figure out the best way to structure this for easy validation when quiz is done
// Will I want to have separate questions? -> What is the point of this? 
// export default questions = {
//     test: "test1"
// }

export const questions = [
    {
        question: { text: "When did you last change your AC's air filter?", number: 1 },
        answers: [
            { text: "Within the last month", value: 4 },
            { text: "2-3 months ago", value: 3 },
            { text: "Within the last year", value: 2 },
            { text: "Should I change be changing it?", value: 1 }
        ]
    },
    {
        question: { text: "This is placeholder text", number: 1 },
        answers: [
            { text: "This is a example answer", value: 0 },
            { text: "This is a example answer", value: 4 }
        ]
    },
    {
        question: { text: "This is placeholder text", number: 1 },
        answers: [
            { text: "This is a example answer", value: 1 },
            { text: "This is a example answer", value: 2 },
            { text: "This is a example answer", value: 3 },
            { text: "This is a example answer", value: 4 }
        ]
    },
    {
        question: { text: "This is placeholder text", number: 1 },
        answers: [
            { text: "This is a example answer", value: 1 },
            { text: "This is a example answer", value: 2 },
            { text: "This is a example answer", value: 3 },
            { text: "This is a example answer", value: 4 }
        ]
    },
    {
        question: { text: "This is placeholder text", number: 1 },
        answers: [
            { text: "This is a example answer", value: 0 },
            { text: "This is a example answer", value: 4 }
        ]
    }
]

// Specifying the type will allow me to use a single question container type