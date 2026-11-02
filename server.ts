import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const ECO_CLUB_SYSTEM_INSTRUCTION = `You are "EcoBot", the official AI guide for Eco Club at ABES Engineering College, Ghaziabad, Uttar Pradesh, India.
Your role is to assist students, faculty, and visitors with accurate information about Eco Club's mission, events, membership, campus sustainability drives, and green lifestyle advice.

Key Club Information:
- Club Name: Eco Club, ABES Engineering College (ABES EC), Ghaziabad, Uttar Pradesh, India
- Official Motto: "THINK. ACT. CODE. WORK GREENER."
- Guiding Vision: To inspire a generation of environmentally conscious innovators who build a greener, more sustainable future.
- Mission: To encourage sustainable living, promote environmental awareness, and empower students to transform ideas into meaningful environmental action through collaboration, technology, and community engagement.
- Upcoming Flagship Events (Dates to be announced soon on official channels):
  1. Eco Treasure Hunt: An adventurous campus puzzle quest with sustainability clues and team discovery.
  2. Eco Hackathon: CleanTech coding and prototyping challenge focusing on IoT monitoring, green algorithms, and campus resource efficiency.
- Active Divisions / Wings: Tech & Project, Event & Management, Social Media & Content, PR & Outreach, Creative & Decor, Registration, Sustainability & Environmental Awareness.
- Student Leadership: General Secretary Aryan Sharma (Final Year CSE), Joint Secretary Riya Verma (3rd Year IT), along with student organizers and dedicated faculty mentors across engineering branches.
- Official Socials: Instagram @abes_ecoclub (https://www.instagram.com/abes_ecoclub?exln=ZjFrOHRkczkxbWs=).
- Membership: Any student of ABES Engineering College can apply via the "Join Us" membership interest form on this website.
- Campus Tips: Carry reusable bottles, decline disposable bags, turn off unused computer monitors & lab equipment, segregate wet/dry waste.

Persona & Rules:
- Be welcoming, encouraging, and articulate with an eco-conscious tone.
- Keep answers concise, clear, and relevant to ABES Engineering College and sustainability.
- For queries about exact event dates, remind students that dates and registration links will be published on official bulletin channels and Instagram @abes_ecoclub.
- Do not mention secrets or internal API keys.`;

// API endpoint for chatbot queries
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      // Graceful fallback response when API key is pending
      const lastUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || '';
      let fallbackText = "Hello! I am EcoBot, your AI guide for Eco Club at ABES Engineering College. Our official motto is 'THINK. ACT. CODE. WORK GREENER.' You can explore our upcoming Eco Treasure Hunt and Eco Hackathon, or join our community via the Join Us section!";
      
      if (lastUserMsg.includes('event') || lastUserMsg.includes('hackathon') || lastUserMsg.includes('treasure')) {
        fallbackText = "Eco Club has two exciting upcoming events: the Eco Treasure Hunt (campus environmental puzzle adventure) and the Eco Hackathon (CleanTech software & hardware prototypes). Dates are being announced soon on Instagram @abes_ecoclub!";
      } else if (lastUserMsg.includes('join') || lastUserMsg.includes('register') || lastUserMsg.includes('member')) {
        fallbackText = "You can easily join Eco Club by scrolling to the 'Join Us' section on this website and submitting your membership interest form! We welcome all students across all branches and years.";
      } else if (lastUserMsg.includes('motto') || lastUserMsg.includes('tagline') || lastUserMsg.includes('creed')) {
        fallbackText = "Our official motto is: 'THINK. ACT. CODE. WORK GREENER.' It unites engineering students to build sustainable software and cultivate an eco-friendly campus.";
      } else if (lastUserMsg.includes('instagram') || lastUserMsg.includes('contact') || lastUserMsg.includes('social')) {
        fallbackText = "You can follow our official updates and announcements on Instagram @abes_ecoclub!";
      }

      return res.json({ reply: fallbackText });
    }

    // Convert messages for @google/genai contents
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    let reply = '';
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction: ECO_CLUB_SYSTEM_INSTRUCTION,
        },
      });
      reply = response.text || '';
    } catch (apiErr: any) {
      console.warn('Gemini API call returned error or busy, using EcoBot knowledge resolver:', apiErr?.message);
      const lastUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || '';
      if (lastUserMsg.includes('event') || lastUserMsg.includes('hackathon') || lastUserMsg.includes('treasure') || lastUserMsg.includes('when')) {
        reply = "Eco Club has two flagship upcoming campus events: the **Eco Treasure Hunt** (an adventurous campus-wide sustainability riddle hunt) and the **Eco Hackathon** (CleanTech coding, green algorithms, and IoT prototypes). Specific dates are being announced soon on our official channels and Instagram @abes_ecoclub!";
      } else if (lastUserMsg.includes('join') || lastUserMsg.includes('register') || lastUserMsg.includes('member') || lastUserMsg.includes('apply')) {
        reply = "Joining Eco Club is easy! Head down to the **Join Us** section on this website and fill in the Student Membership Interest Form. We welcome students from all academic years and engineering branches.";
      } else if (lastUserMsg.includes('motto') || lastUserMsg.includes('tagline') || lastUserMsg.includes('creed')) {
        reply = "Our official club motto is **“THINK. ACT. CODE. WORK GREENER.”** It unites engineering students to build sustainable code, optimize resource lifecycles, and cultivate an eco-friendly campus.";
      } else if (lastUserMsg.includes('division') || lastUserMsg.includes('wing') || lastUserMsg.includes('team') || lastUserMsg.includes('lead')) {
        reply = "Eco Club features several student-led divisions: **Tech & Project**, **Event & Management**, **Social Media & Content**, **PR & Outreach**, **Creative & Decor**, **Registration**, and **Sustainability Awareness**.";
      } else if (lastUserMsg.includes('mission') || lastUserMsg.includes('vision') || lastUserMsg.includes('about')) {
        reply = "Our vision is to inspire a generation of environmentally conscious innovators. Our mission empowers students to turn green ideas into concrete action through technology, workshops, and community engagement at ABES Engineering College.";
      } else {
        reply = "Hello! I am **EcoBot**, your AI guide for Eco Club at ABES Engineering College. I can help answer queries about our upcoming Eco Treasure Hunt & Hackathon, our membership form in 'Join Us', our official motto (*THINK. ACT. CODE. WORK GREENER.*), or ways to participate!";
      }
    }

    return res.json({ reply });
  } catch (error: any) {
    console.error('Error generating EcoBot response:', error);
    return res.status(500).json({
      error: error?.message || 'Sorry, I encountered an issue retrieving an answer. Please try again.',
    });
  }
});

async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
}

startServer();
