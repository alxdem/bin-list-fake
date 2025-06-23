import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import copy from 'rollup-plugin-copy';

export default [
    {
        input: 'index.ts',
        output: [
            { file: 'dist/index.cjs.js', format: 'cjs' },
            { file: 'dist/index.esm.js', format: 'esm' },
        ],
        plugins: [
            typescript(),
            copy({
                targets: [
                    { src: 'src/assets/*', dest: 'dist/assets'}
                ]
            }),
        ],
    },
    {
        input: 'index.ts',
        output: { file: 'dist/index.d.ts', format: 'es' },
        plugins: [dts()],
    },
];