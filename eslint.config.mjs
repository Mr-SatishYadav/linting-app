import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
	{ files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	{
		rules: {
			'no-unreachable': 'off',
		},
	},
	{
		rules: {
			'no-unreachable': 'error',
		},
	},
	{
		rules: {
			'no-unreachable': 'warn',
      "quotes":["error", "single"]
		},
	},
];
