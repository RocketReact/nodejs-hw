import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value)
    ? helpers.message('Invalid id message')
    : value;
};
// Кастомний валідатор для ObjectId для delete
export const noteIdParamSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(objectIdValidator).required(),
  }),
};

// Кастомний валідатор для ObjectId для patch
export const updateNoteSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(objectIdValidator).required(),
  }),
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(3).max(30),
    content: Joi.string().min(10).max(100),
    tag: Joi.string().min(3).max(15),
  }).min(1), // важливо: не дозволяємо порожнє тіло,
};

// Кастомна schema для post
export const noteSchemaBodyValidation = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(3).max(30).required().messages({
      'string.base': 'Title must be a string',
      'string.min': 'Title should have at least {#limit} characters',
      'string.max': 'Title should have at most {#limit} characters',
      'any.required': 'Title is required',
    }),
    content: Joi.string().min(10).max(100).messages({
      'string.base': 'Content must be a string',
      'string.min': 'Content should have at least {#limit} characters',
      'string.max': 'Content should have at most {#limit} characters',
    }),
    tag: Joi.string()
      .min(3)
      .max(15)
      .valid(
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
      )
      .messages({
        'string.base': 'Tag must be a string',
        'string.min': 'Tag should have at least {#limit} characters',
        'string.max': 'Tag should have at most {#limit} characters',
      }),
  }),
};
