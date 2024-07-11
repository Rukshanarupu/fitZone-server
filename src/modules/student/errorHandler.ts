import { ValidationError } from 'joi';

export const validateRequest = (data: any, schema: any) => {
  const { error } = schema.validate(data);
  if (error) return { error };
  return { error: null };
};
