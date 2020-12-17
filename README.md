# Complex Iterations

## Install
```bash
$ yarn add complex-iterations
```

## Demo
You can see the iterations in action [here](https://circal.hu).

### MA algorithm (the classic Mandelbrot algorithm)
<img src="https://render.githubusercontent.com/render/math?math=Z_n = {Z_{n-1}^{EXP}} %2B C">


### MB algorithm
<img src="https://render.githubusercontent.com/render/math?math=Z_n = Z_{n-1}^{\frac{1}{EXP}} %2B C)^{EXP}">


### MC algorithm
<img src="https://render.githubusercontent.com/render/math?math=Z_n = ((Z_{n-1}*C)^{\frac{1}{EXP}} %2B C)^{EXP}">

## Usage
```typescript
import iterate, {algorithms, Algorithm, AlgorithmParameters } from "complex-iterations";

import { Complex } from 'mathjs';

const options = {
    Z: { re: 0, im: 0 },
    C: { re: -0.1, im: 1 },
    exp: 2,
}
const values =  iterate(iterations: 100, algorithm: algorithms.MA, options);
```
