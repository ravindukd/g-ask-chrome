// contentScript.js

// Function to extract text from the webpage
async function extractTextFromPage() {
    const textNodes = document.querySelectorAll('body, p, span, h1, h2, h3, h4, h5, h6');
    const textArray = Array.from(textNodes).map(node => node.innerText.trim());
    const ta= textArray.join('\n');
    // const answer = await callTOGPT(ta);
    // alert(answer)
    return ta
  }
  
  // Function to send a message to the background script when the shortcut key is pressed
  function handleShortcutKey(event) {
    if (event.key === "q" && event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey) {
      // Ctrl + K is pressed
      const extractedText = extractTextFromPage();
      chrome.runtime.sendMessage({ action: "extractText", data: extractedText });
    }
  }
  
  document.addEventListener("keydown", handleShortcutKey);
  
  
  // async function callTOGPT(text) {
  //   const key = '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';
  //   const prompt = "You are a quiz helper. Once your clients send a long unstructred text you will extract the questions, quizes, problems from the text and send the answer back to user. You will not explain the answer, instead you will just send the answers."

  //   const response = await fetch('https://api.openai.com/v1/chat/completions', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${key}`
  //     },
  //     body: JSON.stringify({
  //       "model": "gpt-3.5-turbo",
  //       "messages": [{
  //         "role": 'system',
  //         "content": prompt,
  //       }, {

  //         "role": 'user',
  //         "content": text
  //       }]
  //     })
  //   });
  //   const d = await response.json();
  //   console.log(d.choices[0].message.content)
  //   return d.choices[0].message.content;
  // }