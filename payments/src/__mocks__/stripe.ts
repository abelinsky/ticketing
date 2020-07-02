export const stripe = {
  charges: {
    // returns a promise that automatically resolves
    create: jest.fn().mockResolvedValue({ id: 'asdd' }),
  },
};
