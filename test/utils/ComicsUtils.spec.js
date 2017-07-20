import ComicsUtils from '../../app/utils/ComicsUtil';
import mock from '../mock/Comics.mock';

describe('ComicsUtils', () => {
  describe('filter comics with unread pages', () => {
    it('should exist', () => {
      expect(ComicsUtils.filterUnread).toBeDefined();
    });

    it('should throw if passed anything but an array', () => {
      const testData = [123, {}, 'I am not an array'];

      testData.forEach((data) => {
        expect(() => {
          ComicsUtils.filterUnread(data);
        }).toThrow();
      });
    });

    it('should filter out "A Mad Tea-Party" comic with unread pages', () => {
      const result = ComicsUtils.filterUnread(mock.ComicsMock);

      expect(result).toHaveLength(1);
      expect(result[0].name).toEqual('A Mad Tea-Party');
    });
  });
});
