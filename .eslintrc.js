/* eslint-env commonjs */
module.exports = {
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2017,
        project: "./tsconfig.eslint.json",
    },
    plugins: ["react-hooks", "react"],
    extends: [
        "@purecloud/composer/typescript",
        "plugin:jest/recommended",
        "plugin:jest/style",
    ],
    rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/jsx-key": "error",
    },
};
