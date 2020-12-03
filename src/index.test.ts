import iterate, { algorithms } from './index';

test('iterate', () => {
    expect(iterate(
        1,
        algorithms.MA,
        {
            Z: { re: 0, im: 0 },
            C: { re: 0, im: 0 },
            exp: 2
        }
    )).toEqual({ reValues: [0], imValues: [0] });
});
