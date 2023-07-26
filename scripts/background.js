

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "extractText") {
        const apiKey = localStorage.getItem("gask-api-key");
        if (apiKey) {
            const extractedText = message.data;
            callTOGPT(extractedText,apiKey)
                .then(answer => {
                    alert(answer);
                })
                .catch(error => {
                    console.error("Error calling GPT API:", error);
                });
        } else {
            alert("Set your API key first! (Click on the G-ASK icon in the browser extentions list.)");
        }
    }
});

async function callTOGPT(text,key) {
    const prompt = "You are a quiz helper. Once your clients send a long unstructured text, you will extract the questions, quizzes, problems from the text and send the answer back to the user. You will not explain the answer, instead, you will just send the answers.";

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{
                "role": 'system',
                "content": prompt,
            }, {
                "role": 'user',
                "content": text
            }]
        })
    });

    const data = await response.json();
    const answer = data.choices[0].message.content;
    return answer;
}