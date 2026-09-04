import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

const contactMessages: ContactMessage[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Direct Message API route
  app.post('/api/contact', (req, res) => {
    try {
      const { name, email, message } = req.body || {};

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide your name, email, and message.' });
      }

      // Basic email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(String(email).trim())) {
        return res.status(400).json({ error: 'Please enter a valid email address.' });
      }

      const newMsg: ContactMessage = {
        id: Date.now().toString(),
        name: String(name).trim(),
        email: String(email).trim(),
        message: String(message).trim(),
        timestamp: new Date().toISOString(),
      };

      contactMessages.push(newMsg);
      console.log(`[Direct Message from ${newMsg.name} (${newMsg.email})]:`, newMsg.message);

      return res.status(200).json({
        success: true,
        message: "Message sent! I'll get back to you soon.",
        id: newMsg.id,
      });
    } catch (err: unknown) {
      console.error('Error handling contact message:', err);
      return res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }
  });

  // Health check
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
