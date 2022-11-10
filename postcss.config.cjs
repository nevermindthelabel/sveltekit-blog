const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const cssnano = require('cssnano');
const combineSelectors = require('postcss-combine-duplicated-selectors');
const autoprefixer = require('autoprefixer');

module.exports = {
	plugins: [
		postcssJitProps(OpenProps),
		postcssPresetEnv({
			stage: 0,
			features: {
				'logical-properties-and-values': false,
				'prefers-color-scheme-query': false,
				'gap-properties': false,
				'custom-properties': false,
				'place-properties': false,
				'not-pseudo-class': false,
				'focus-visible-pseudo-class': false,
				'focus-within-pseudo-class': false,
				'color-functional-notation': false,
				'custom-media-queries': { preserve: 'inlineMediaQueries' },
				'double-position-gradients': false,
				'nesting-rules': true
				// 'custom-media-queries': true,
				// 'media-query-ranges': true
			}
		}),
		autoprefixer(),
		postcssImport(),
		combineSelectors(),
		cssnano({
			preset: 'default'
		})
	]
};
