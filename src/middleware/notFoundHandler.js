export const notFoundHandler = (req, res) => {
  res.status(404).json({ message: 'Note not found' });
};
