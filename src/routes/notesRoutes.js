import { Router } from 'express';
import { getAllNotes, getNoteById } from '../controllers/notesController.js';

const router = Router();

//get all notes
router.get('/notes', async (req, res, next) => {
  try {
    await getAllNotes(req, res);
  } catch (error) {
    next(error);
  }
});

//get notes by id
router.get('/notes/:noteId', async (req, res, next) => {
  try {
    await getNoteById(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
