module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2018
  },
  rules: {
    'camelcase': 2, // 强制驼峰法命名
    'comma-dangle': [2, 'never'], // 对象字面量项尾不能有逗号
    'comma-spacing': 2, // 逗号后面的空格
    'eqeqeq': 2, // 使用全等
    'indent': [2, 2], // 检查代码缩进，采用2空格作为缩进单位
    'key-spacing': 2, // 对象字面量中冒号的前后空格
    'no-const-assign': 2,// 禁止修改const声明的变量
    'no-spaced-func': 2,// 函数调用时 函数名与()之间不能有空格
    'no-unneeded-ternary': 2,//禁止不必要的嵌套
    'no-eval': 2, // 禁止使用eval
    'quotes': [2, 'single'], // 使用单引号
    'spaced-comment': 2,// 注释后面要添加空格
    'semi': [0, 'always'], // 语句强制分号结尾
    'no-var': 0, // 不允许使用var 声明变量
    'space-before-function-paren': [2, 'always'], // function 的圆括号之前是否使用空格
    'space-infix-ops': [2, {'int32Hint': false}], // 中缀操作符前后空格,ts中未生效
    'vue/max-attributes-per-line': 0, // 不检查html部分的属性换行
    'vue/html-self-closing': 0, // 禁止提示自闭合html段落
    'vue/html-closing-bracket-spacing': 2, // 自闭合标签前需保留空格
    'vue/singleline-html-element-content-newline': 0, // 取消html包裹文字部分换行
    'vue/html-indent': 2, // 开启html缩进检测
    'vue/attributes-order': 2, // 开启属性位置检测
    'vue/mustache-interpolation-spacing': 0, // 关闭模板语法内前后空格设置
    'vue/no-side-effects-in-computed-properties': 0,
    'no-trailing-spaces': 0, // 关闭末尾空格检查
    'no-unused-vars': 0, // 允许有未使用的变量
    'prefer-const': 0 // 允许使用let
  },
}