module.exports = {
    'env': {
        'commonjs': true,
        'es2021': true,
        'node': true,
        'browser': true
    },
    'extends': 'eslint:recommended',
    'parser': '@babel/eslint-parser',
    'parserOptions': {
        'ecmaVersion': 13,
        'sourceType': "module",
        requireConfigFile: false,
        'babelOptions': {
            'presets': ['@babel/preset-react']
        }
    },
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'eqeqeq': 'error',
        'no-trailing-spaces': 'error',
        'object-curly-spacing': [
            'error', 'always'
        ],
        'arrow-spacing': [
            'error', { 'before': true, 'after': true}
        ],
        'no-console': 0,
        //'unused-imports/no-unused-imports': 'error'
        // 'react/jsx-uses-react': 0,
        // 'react/jsx-uses-vars': 0
    }
}
