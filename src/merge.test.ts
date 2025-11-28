import { merge } from './merge';

describe('merge', () => {
    it('should merge three sorted arrays', () => {
        const c1 = [5, 3, 1];
        const c2 = [2, 4, 6];
        const c3 = [0, 7, 8];
        const result = merge(c1, c2, c3);
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('should handle empty arrays', () => {
        expect(merge([], [], [])).toEqual([]);
        expect(merge([], [1, 2], [3])).toEqual([1, 2, 3]);
        expect(merge([2, 1], [], [3])).toEqual([1, 2, 3]);
        expect(merge([2, 1], [3], [])).toEqual([1, 2, 3]);
    });

    it('should handle arrays of different lengths', () => {
        const c1 = [3, 2, 1];
        const c2 = [4];
        const c3 = [5, 6, 7, 8];
        expect(merge(c1, c2, c3).sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('should handle duplicates', () => {
        const c1 = [1, 1];
        const c2 = [1, 1];
        const c3 = [1, 1];
        expect(merge(c1, c2, c3)).toEqual([1, 1, 1, 1, 1, 1]);

        const c4 = [2, 1];
        const c5 = [2, 3];
        const c6 = [1, 3];
        expect(merge(c4, c5, c6)).toEqual([1, 1, 2, 2, 3, 3]);
    });
});
