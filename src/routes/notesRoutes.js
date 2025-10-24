import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from '../controllers/notesController.js';
import { celebrate, Segments } from 'celebrate';
import {
  noteIdParamSchema,
  noteSchemaBodyValidation,
  updateNoteSchema,
} from '../validations/noteValidation.js';

const router = Router();

//get all notes
router.get('/notes', getAllNotes);
//get notes by id
router.get('/notes/:noteId', celebrate(noteIdParamSchema), getNoteById);

router.post('/notes', celebrate(noteSchemaBodyValidation), createNote);
router.delete('/notes/:noteId', celebrate(noteIdParamSchema), deleteNote);
router.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);

export default router;
