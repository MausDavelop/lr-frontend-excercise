export const exists = <T>(input?: T): input is T => {
  return input !== null && input !== undefined;
};

export const nonArray = <T>(input: T | T[]): T => {
  if (Array.isArray(input)) {
    return input[0];
  }

  return input;
};
