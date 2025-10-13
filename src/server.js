import express from 'express';
import cors from 'cors';
import pino from 'pino-http'
const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());
app.use(cors());

app.use(pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'HH:MM:ss',
      ignore: 'pid,hostname',
      messageFormat: '{req.method} {req.url} {res.statusCode} - {responseTime}ms',
      hideObject: true,
}}}))

app.get('/notes', (req, res) => {
  res.status(200).json({
    message: 'Retrieved all notes',
  })
})
app.get('/notes/:noteId', (req, res) => {
  const {noteId} = req.params
  res.status(200).json({
    id_param: Number(noteId),
  })
})
app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found',
  })
})
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
