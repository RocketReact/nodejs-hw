import { Schema, model } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    tag: {
      type: String,
      required: true,
      enum: [
        'Work',
        'Personal',
        'Meeting',
        'Shopping',
        'Ideas',
        'Travel',
        'Finance',
        'Health',
        'Important',
        'Todo',
      ],
      default: 'Todo',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
// Третий параметр - явное имя коллекции в MongoDB
export const Notes = model('Notes', noteSchema, 'notes');
