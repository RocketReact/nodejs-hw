import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import { getAllNotesSchema } from '../validations/noteValidation.js';

const router = Router();

//get all notes
router.get('/notes', celebrate(getAllNotesSchema), getAllNotes);
//get notes by id
router.get('/notes/:noteId', getNoteById);

router.post('/notes', createNote);
router.delete('/notes/:noteId', deleteNote);
router.patch('/notes/:noteId', updateNote);

export default router;
