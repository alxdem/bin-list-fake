import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url';

export default [
    {
        input: 'index.ts',
        output: [
            { file: 'dist/index.cjs.js', format: 'cjs' },
            { file: 'dist/index.esm.js', format: 'esm' },
        ],
        plugins: [
            url({
                include: ['**/*.png'],
                limit: Infinity,
                emitFiles: false
            }),
            resolve({
                extensions: ['.js', '.ts', '.png'],
            }),
            typescript({
                tsconfig: './tsconfig.json',
                declaration: false
            }),
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