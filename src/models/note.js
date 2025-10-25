import { Schema, model } from 'mongoose';
import { TAGS } from '../constants/tags.js';
const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
      default: '',
    },
    tag: {
      type: String,
      enum: TAGS,
      default: 'Todo',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
// Третий параметр - явное имя коллекции в MongoDB
export const Note = model('Note', noteSchema, 'notes');
