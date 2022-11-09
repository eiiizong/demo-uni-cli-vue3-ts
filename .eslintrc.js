module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    // eslint-config-prettier 的缩写
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: [],
  rules: {
      // 首个参数 0 = off, 1 = warn, 2 = error
      'prettier/prettier': 1,
      'no-tabs': 'off',
      'no-return-assign': 0,
      'callback-return': 0,
      'consistent-return': 0,
      // js
      'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
      'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
      // 禁止使用拖尾逗号
      'comma-dangle': [2, 'never'],
      // 禁止使用分号
      'semi': [2, 'never'],
      // 禁用行尾空白
      'no-trailing-spaces': [2],
      // 禁止直接调用 Object.prototypes 的内置属性
      'no-prototype-builtins': 0,
      // 强制一行的最大长度
      'max-len': 0,
      // 禁止对函数参数再赋值
      'no-param-reassign': 0,
      // 要求箭头函数的参数使用圆括号
      'arrow-parens': 0,
      // 禁用一元操作符 ++ 和 --
      'no-plusplus': 0,
      // 禁止使用特定的语法
      'no-restricted-syntax': 0,
  
      // ts
      // 禁用 any
      '@typescript-eslint/no-explicit-any': 0,
      // 禁用 空函数
      '@typescript-eslint/no-empty-function': 0,
      // 禁用 忽略
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/explicit-module-boundary-types': 'off',
  
      // vue
      // script 缩进
      // 'vue/script-indent': [0, 2, { baseIndent: 1, switchCase: 1 }],
      // prop 在 模板 和 JSX 中应该始终使用 kebab-case
      'vue/attribute-hyphenation': [2, 'always'],
      // 只有1个导出时，用export default
      'import/prefer-default-export': 0,
      'linebreak-style': ['off', 'windows'],
      // 取消对文件扩展名的验证
      'import/extensions': [0, 'always', {
        js: '',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        vue: 'never'
      }],
      // 强制在花括号内使用一致的换行符
      'object-curly-newline': [0, { multiline: true }]
  },
  overrides: [
    {
      // 关闭 vue 文件中的 indent 的默认检查
      // 使用 vue/script-indent 缩进规则
      files: ['*.vue'],
      rules: {
        indent: 0
      }
    }
  ]
}
