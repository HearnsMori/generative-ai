const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;


const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generalbot(user, system) {
	try {
		const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

		// Add a prompt context that guides the bot to respond as a learning assistant
		const learningContextPrompt = system;
		// Combine the learning context with the user’s prompt
		const fullPrompt = `${learningContextPrompt} \nUser: ${user} \nYou(AI): (???)`;

		// Generate content based on the combined prompt
		const result = await model.generateContent(fullPrompt);
		const response = await result.response;
		const text = response.text();

		// Return the generated text as the bot's response
		return text;
	} catch (err) {
		console.error("Gemini API error:", err);
		return "Generative AI Error"; // Fallback error message
	}
}


app.post('/chat/gemini', async (req, res) => {
	const {user, system} = req.body;
	const msg = await generalbot(user, system);
	res.json({msg});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});