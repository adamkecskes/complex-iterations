import { add, multiply, complex, pow } from 'mathjs';
import { Complex } from 'mathjs';

type ValueOf<T> = T[keyof T];

export type AlgorithmParameters = { Z: Complex; C: Complex; exp: number };

export const algorithms = {
    MA({ Z, C, exp }: AlgorithmParameters): Complex {
        return add(pow(Z, exp), C) as Complex;
    },

    MB({ Z, C, exp }: AlgorithmParameters): Complex {
        return pow(add(pow(Z, 1 / exp), C), exp) as Complex;
    },

    MC({ Z, C, exp }: AlgorithmParameters): Complex {
        return pow(add(pow(multiply(Z, C), 1 / exp), C), exp) as Complex;
    },
};

export type Algorithm = ValueOf<typeof algorithms>;
export type IterationResult = {
    reValues: number[];
    imValues: number[];
};
export type ComplexNumber = { re: number; im: number };
export type IterationOptions = {
    Z: ComplexNumber;
    C: ComplexNumber;
    exp: number;
};

export default function iterate(iterations: number, algorithm: Algorithm, options: IterationOptions): IterationResult {
    const values: IterationResult = { reValues: [], imValues: [] };

    let Z: Complex = complex(options.Z.re, options.Z.im);
    const C: Complex = complex(options.C.re, options.C.im);

    for (let n: number = 0; n < iterations; n += 1) {
        Z = algorithm({
            Z,
            C,
            exp: options.exp,
        });

        if (isNaN(Z.im) || isNaN(Z.re)) {
            break;
        }
        values.reValues.push(Z.re);
        values.imValues.push(Z.im);
    }

    return values;
}
