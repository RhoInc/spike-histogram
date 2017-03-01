import babel from 'rollup-plugin-babel';

module.exports = {
    moduleName: 'spikeHistogram',
    entry: './src/wrapper.js',
    format: 'iife',
    globals: {
        d3: 'd3',
        webcharts: 'webCharts'
    },
    plugins: [
        babel({
            'presets': [[
                'es2015',
                {'modules': false}
                ]],
            'plugins': [
                'external-helpers'
            ],
            'exclude': 'node_modules/**'
        })
    ]
};
