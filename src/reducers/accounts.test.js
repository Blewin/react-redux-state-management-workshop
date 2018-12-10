import accounts from "./accounts"

describe('accounts reducer', () => {
  describe('decrement action', () => {
    it('should correctly remove existing account', () => {
      const mockState = {
        a: 1,
        b: 2,
        c: 3,
      };

      const newState = accounts(mockState, {type: 'DELETE', id: 'b'});

      expect(newState).toEqual({
        a: 1,
        c: 3,
      });

      /* reducer should not mutate the old state!*/
      expect(newState).not.toBe(mockState);
    });

    it('should not crash when called with wrong account number', () => {
      expect(accounts({}, {type: 'DELETE', id: 'b'})).toBeDefined();
    });
  })
})