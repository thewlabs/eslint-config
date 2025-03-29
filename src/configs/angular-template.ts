import type { OptionsFiles, OptionsOverrides, TypedFlatConfigItem } from 'src/types'

import { GLOB_HTML } from '../globs'
import { ensurePackages, interopDefault } from '../utils'

export async function angularTemplate(
  options: OptionsOverrides & OptionsFiles = {},
): Promise<TypedFlatConfigItem[]> {
  const {
    files = [GLOB_HTML],
    overrides = {},
  } = options

  await ensurePackages([
    '@angular-eslint/eslint-plugin-template',
  ])

  const [
    pluginAngularTemplate,
    parserAngularTemplate,
  ] = await Promise.all([
    interopDefault(import('@angular-eslint/eslint-plugin-template')),
    interopDefault(import('@angular-eslint/template-parser')),
  ] as const)

  return [
    {
      name: 'thewlabs/angular/template/setup',
      plugins: {
        'angular/template': pluginAngularTemplate,
      },
    },
    {
      files,
      languageOptions: {
        parser: parserAngularTemplate,
        sourceType: 'module',
      },
      name: 'thewlabs/angular/template/rules',
      rules: {
        'angular/template/alt-text': 'error',
        'angular/template/attributes-order': 'error',
        'angular/template/banana-in-box': 'error',
        'angular/template/button-has-type': 'error',
        'angular/template/click-events-have-key-events': 'error',
        'angular/template/conditional-complexity': 'error',
        'angular/template/cyclomatic-complexity': 'error',
        'angular/template/elements-content': 'error',
        'angular/template/eqeqeq': 'error',
        'angular/template/i18n': 'error',
        'angular/template/interactive-supports-focus': 'error',
        'angular/template/label-has-associated-control': 'error',
        'angular/template/mouse-events-have-key-events': 'error',
        'angular/template/no-any': 'error',
        'angular/template/no-autofocus': 'error',
        'angular/template/no-call-expression': 'error',
        'angular/template/no-distracting-elements': 'error',
        'angular/template/no-duplicate-attributes': 'error',
        'angular/template/no-inline-styles': 'error',
        'angular/template/no-interpolation-in-attributes': 'error',
        'angular/template/no-negated-async': 'error',
        'angular/template/no-positive-tabindex': 'error',
        'angular/template/prefer-contextual-for-variables': 'error',
        'angular/template/prefer-control-flow': 'error',
        'angular/template/prefer-ngsrc': 'error',
        'angular/template/prefer-self-closing-tags': 'error',
        'angular/template/prefer-static-string-properties': 'error',
        'angular/template/role-has-required-aria': 'error',
        'angular/template/table-scope': 'error',
        'angular/template/use-track-by-function': 'error',
        'angular/template/valid-aria': 'error',

        // overrides
        ...overrides,
      },
    },
  ]
}
