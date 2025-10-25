import { Segments, Joi } from 'celebrate';
import { TAGS } from '../constants/tags.js';

export const getNotesValidationQuery = {
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
  }),
};
