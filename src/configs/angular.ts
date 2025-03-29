import type { OptionsFiles, OptionsHasTypeScript, OptionsOverrides, OptionsTypeScriptWithTypes, TypedFlatConfigItem } from 'src/types'
import { GLOB_TS } from '../globs'
import { ensurePackages, interopDefault, toArray } from '../utils'

export async function angular(
  options: OptionsHasTypeScript & OptionsOverrides & OptionsFiles & OptionsTypeScriptWithTypes = {},
): Promise<TypedFlatConfigItem[]> {
  const {
    files = [GLOB_TS],
    overrides = {},
  } = options

  await ensurePackages([
    '@angular-eslint/eslint-plugin',
  ])

  const tsconfigPath = options?.tsconfigPath
    ? toArray(options.tsconfigPath)
    : undefined
  const isTypeAware = !!tsconfigPath

  const [
    pluginAngular,
    parserTs,
  ] = await Promise.all([
    interopDefault(import('@angular-eslint/eslint-plugin')),
    interopDefault(import('@typescript-eslint/parser')),
  ] as const)

  return [
    {
      name: 'thewlabs/angular/setup',
      plugins: {
        angular: pluginAngular,
      },
    },
    {
      files,
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          ...isTypeAware ? { project: tsconfigPath } : {},
        },
        sourceType: 'module',
      },
      name: 'thewlabs/angular/rules',
      rules: {
        'angular/component-class-suffix': 'error',
        'angular/component-max-inline-declarations': 'error',
        'angular/component-selector': 'error',
        'angular/consistent-component-styles': 'error',
        'angular/contextual-decorator': 'error',
        'angular/contextual-lifecycle': 'error',
        'angular/directive-class-suffix': 'error',
        'angular/directive-selector': 'error',
        'angular/no-async-lifecycle-method': 'error',
        'angular/no-attribute-decorator': 'error',
        'angular/no-conflicting-lifecycle': 'error',
        'angular/no-duplicates-in-metadata-arrays': 'error',
        'angular/no-empty-lifecycle-method': 'error',
        'angular/no-forward-ref': 'error',
        'angular/no-input-prefix': 'error',
        'angular/no-input-rename': 'error',
        'angular/no-inputs-metadata-property': 'error',
        'angular/no-lifecycle-call': 'error',
        'angular/no-output-native': 'error',
        'angular/no-output-on-prefix': 'error',
        'angular/no-output-rename': 'error',
        'angular/no-outputs-metadata-property': 'error',
        'angular/no-pipe-impure': 'error',
        'angular/no-queries-metadata-property': 'error',
        'angular/pipe-prefix': 'error',
        'angular/prefer-on-push-component-change-detection': 'error',
        'angular/prefer-output-readonly': 'error',
        'angular/prefer-signals': 'error',
        'angular/prefer-standalone': 'error',
        'angular/relative-url-prefix': 'error',
        'angular/require-lifecycle-on-prototype': 'error',
        'angular/require-localize-metadata': 'error',
        'angular/runtime-localize': 'error',
        'angular/sort-lifecycle-methods': 'error',
        'angular/use-component-selector': 'error',
        'angular/use-component-view-encapsulation': 'error',
        'angular/use-injectable-provided-in': 'error',
        'angular/use-lifecycle-interface': 'error',
        'angular/use-pipe-transform-interface': 'error',

        // overrides
        ...overrides,
      },
    },
  ]
}
