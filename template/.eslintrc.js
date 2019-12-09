module.exports = {
    root: true,

    env: {
        node: true
    },

    extends: ['plugin:vue/essential', '@vue/prettier'],

    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        'arrow-parens': ['error', 'as-needed'],
        semi: ['error', 'never'],
        'func-names': ['error', 'never'],
        'no-plusplus': ['off'],
        'prefer-destructuring': ['error', { object: false, array: false }],
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'global-require': 'off'
    },

    parserOptions: {
        parser: 'babel-eslint'
    },

    settings: {
        'import/resolver': {
            webpack: {
                config: './webstorm.webpack.js'
            }
        }
    },
}
