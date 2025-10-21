import { Notes } from '../models/note';
import createHttpError from 'http-errors';
export const getAllNotes = async (req, res) => {
  const notes = await Notes.find();
  res.status(200).json(notes);
};

export const getNoteById = async (req, res, next) => {
  const { noteId } = req.params;
  const note = await Notes.findById(noteId);
  if (!note) {
    next(createHttpError(404, 'Student not found'));
    return;
  }
  res.status(200).json(note);
};
