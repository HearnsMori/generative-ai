const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;


const { GoogleGenerativeAI } = require("@google/generative-ai");


async function generalbot(genAI, user, system) {
	try {
		const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

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

//For multiple Gemini API keys
app.post('/chat/gemini', async (req, res) => {
	try {
		const { user, system } = req.body;
		const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
		const msg = await generalbot(genAI, user, system);
		res.json({ msg });
	} catch (error) {
		console.error("Error handling /chat/gemini request:", error);
		res.status(500).json({ msg: "Internal Server Error" });
	}
});
app.post('/chat/gemini/2', async (req, res) => {
	try {
		const { user, system } = req.body;
		const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY_TWO);
		const msg = await generalbot(genAI, user, system);
		res.json({ msg });
	} catch (error) {
		console.error("Error handling /chat/gemini request:", error);
		res.status(500).json({ msg: "Internal Server Error" });
	}
});
app.post('/chat/gemini/3', async (req, res) => {
	try {
		const { user, system } = req.body;
		const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY_THREE);
		const msg = await generalbot(genAI, user, system);
		res.json({ msg });
	} catch (error) {
		console.error("Error handling /chat/gemini request:", error);
		res.status(500).json({ msg: "Internal Server Error" });
	}
});
app.post('/chat/gemini/4', async (req, res) => {
	try {
		const { user, system } = req.body;
		const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY_FOUR);
		const msg = await generalbot(genAI, user, system);
		res.json({ msg });
	} catch (error) {
		console.error("Error handling /chat/gemini request:", error);
		res.status(500).json({ msg: "Internal Server Error" });
	}
});
app.post('/chat/gemini/5', async (req, res) => {
	try {
		const { user, system } = req.body;
		const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY_FIVE);
		const msg = await generalbot(genAI, user, system);
		res.json({ msg });
	} catch (error) {
		console.error("Error handling /chat/gemini request:", error);
		res.status(500).json({ msg: "Internal Server Error" });
	}
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});