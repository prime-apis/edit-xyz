import express from 'express';
import { editImage } from './utils/editImage.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/edit', async (req, res) => {
  const { url, texts } = req.query;

  if (!url || !texts) {
    return res.status(400).send("❌ Please provide both 'url' and 'texts' parameters.");
  }

  try {
    const imageBuffer = await editImage(url, texts);
    res.setHeader('Content-Type', 'image/png');
    res.send(imageBuffer);
  } catch (err) {
    res.status(500).send("❌ Failed to edit image: " + err.message);
  }
});

app.listen(PORT, () => console.log(`✅ API is running at http://localhost:${PORT}`));
