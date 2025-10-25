import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import {
  getAllNotesSchema,
  noteIdSchema,
} from '../validations/noteValidation.js';

const router = Router();

//get all notes
router.get('/notes', celebrate(getAllNotesSchema), getAllNotes);
//get notes by id
router.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);

router.post('/notes', createNote);
router.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);
router.patch('/notes/:noteId', celebrate(noteIdSchema), updateNote);

export default router;
