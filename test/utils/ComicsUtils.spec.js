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

  describe('filter comics without any unread pages', () => {
    it('should exist', () => {
      expect(ComicsUtils.filterRead).toBeDefined();
    });

    it('should throw if passed anything but an array', () => {
      const testData = [123, {}, 'I am not an array'];

      testData.forEach((data) => {
        expect(() => {
          ComicsUtils.filterRead(data);
        }).toThrow();
      });
    });

    it('should filter out "Gunnerkrigg" comic with no unread pages', () => {
      const result = ComicsUtils.filterRead(mock.ComicsMock);

      expect(result).toHaveLength(1);
      expect(result[0].name).toEqual('Gunnerkrigg Court');
    });
  });

  describe('filter comics with erroneous page count', () => {
    it('should exist', () => {
      expect(ComicsUtils.filterErroneous).toBeDefined();
    });

    it('should throw if passed anything but an array', () => {
      const testData = [123, {}, 'I am not an array'];

      testData.forEach((data) => {
        expect(() => {
          ComicsUtils.filterErroneous(data);
        }).toThrow();
      });
    });

    it('should filter out "Dreamland Chronicles" comic with unread pages', () => {
      const result = ComicsUtils.filterErroneous(mock.ComicsMock);

      expect(result).toHaveLength(1);
      expect(result[0].name).toEqual('Dreamland Chronicles');
    });
  });

  describe('function to count unread pages', () => {
    it('should exist', () => {
      expect(ComicsUtils.countUnreadPages).toBeDefined();
    });

    it('should throw if passed anything but an array', () => {
      const testData = [123, {}, 'I am not an array'];

      testData.forEach((data) => {
        expect(() => {
          ComicsUtils.countUnreadPages(data);
        }).toThrow();
      });
    });

    it('should count number of total unread pages in mock', () => {
      const result = ComicsUtils.countUnreadPages(mock.ComicsMock);

      expect(result).toEqual(42);
    });
  });
});
