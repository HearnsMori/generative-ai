# Gemini Learning Assistant API

A simple Express.js server that integrates with Google Gemini AI to provide a learning assistant chatbot. The bot generates responses based on user prompts and system instructions.

## Features
- Receives user input and system context via POST requests.
- Uses Google Gemini AI (`gemini-2.0-flash`) to generate intelligent responses.
- Returns AI-generated text as JSON.
- CORS enabled for frontend integration.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/HearnsMori/generative-ai
   ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create .env file:
    ```bash
    GEMINI_API_KEY=put_your_own_api_key_here
    PORT=10000
    ```

## Usage
- Start the server
```bash
node server.js
```
- Post a request to /chat/gemini
```json
{
  "user": "Your message here",
  "system": "System instructions for context"
}
```
- Response
```json
{
  "msg": "AI-generated response text"
}
```

## Future Plans
- Support additional generative AI models.
- Add conversation history management.
- Integrate with frontend chat UI.

### License (MIT)