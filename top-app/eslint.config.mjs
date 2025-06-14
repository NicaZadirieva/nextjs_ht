import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		rules: {
			'semi': ['error', 'always',
				{
					'omitLastInOneLineBlock': false
				}],
			'comma-dangle': ['error', 'never'],
			'quotes': ['error', 'single'],
			'indent': ['error', 'tab'],
			//Ошибка, если используется конкатенация строк вместо шаблонных литералов.
			'prefer-template': ['error'],
			//Ошибка, если в качестве коллбека используется не стрелочная функция.
			'prefer-arrow-callback': ['error'],
			//Ошибка, если в одном из ветвлений функция возвращает значение, а в другом нет.
			'consistent-return': 'error'
		}
	}
];

export default eslintConfig;
