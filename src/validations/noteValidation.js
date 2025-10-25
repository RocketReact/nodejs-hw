import { Segments, Joi } from 'celebrate';
import { TAGS } from '../constants/tags.js';

export const getAllNotesSchema = {
  [Segments.QUERY]: Joi.object({
    tag: Joi.string()
      .valid(...TAGS)
      .messages({
        'string.base': 'Tag must be a string',
        'any.only': `Tag must be one of the: ${TAGS.join(', ')}`,
      }),
    search: Joi.string().min(1).trim().messages({
      'string.base': 'Search must be a string',
    }),
    page: Joi.number().integer().min(1).default(1).messages({
      'number.base': 'Page must be a number',
      'number.integer': 'Page must be an integer',
      'number.min': 'Page must be at least {#limit}',
    }),
    perPage: Joi.number().integer().min(5).max(20).default(10).messages({
      'number.base': 'PerPage must be a number',
      'number.integer': 'PerPage must be an integer',
      'number.min': 'PerPage must be at least {#limit}',
      'number.max': 'PerPage must be at most {#limit}',
    }),
  }),
};
