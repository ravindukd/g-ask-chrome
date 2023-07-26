# G-ASK Chrome Extension

![G-ASK Logo](assets/logo.png)

## Description

G-ASK is a Chrome extension that makes it easy to get answers to web page content questions using ChatGPT, an advanced language model. The extension allows users to extract text from a web page and send it to ChatGPT to get relevant answers to questions, quizzes, or problems present in the text.

## Features

- Simple and user-friendly interface.
- Easily extract text from web pages.
- Utilize ChatGPT for providing answers to questions, quizzes, etc.
- Store your ChatGPT API key securely.

## How to Use

1. Install the Extension:
   - Clone or download this repository to your local machine.
   - Open Google Chrome and navigate to `chrome://extensions`.
   - Enable "Developer mode" in the top right corner.
   - Click on "Load unpacked" and select the extension folder from the downloaded repository.

2. Set up ChatGPT API Key:
   - After installing the extension, open the extension popup by clicking on the G-ASK icon in the Chrome toolbar.
   - Enter your ChatGPT API key in the provided password field and click "Save API Key." The key will be stored securely in your browser's local storage.

3. Use G-ASK:
   - Visit any web page containing questions, quizzes, or problems you want answers to.
   - Press `Ctrl + K` (or your defined shortcut) to trigger the extension.
   - The extension will extract relevant text from the page and send it to ChatGPT using your API key.
   - The answer provided by ChatGPT will be displayed in an alert.

## Permissions

The G-ASK Chrome extension requires the following permissions:
- `activeTab`: To access the current active tab's content.
- `storage`: To store your ChatGPT API key securely in the browser's local storage.

## Screenshots

![Screenshot 1](assets/screenshot1.png)
![Screenshot 2](assets/screenshot2.png)

## Contribution

Contributions are welcome! If you find any bugs or have suggestions for improvements, please feel free to create an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
