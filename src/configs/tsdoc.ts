import type { OptionsFiles, OptionsHasTypeScript, OptionsOverrides, OptionsTypeScriptWithTypes, TypedFlatConfigItem } from '../types'
import { GLOB_TS } from '../globs'
import { interopDefault, toArray } from '../utils'

export async function tsdoc(
  options: OptionsHasTypeScript & OptionsOverrides & OptionsFiles & OptionsTypeScriptWithTypes = {},
): Promise<TypedFlatConfigItem[]> {
  const {
    files = [GLOB_TS],
    overrides = {},
  } = options

  const tsconfigPath = options?.tsconfigPath
    ? toArray(options.tsconfigPath)
    : undefined
  const isTypeAware = !!tsconfigPath

  const [
    pluginTsdoc,
    parserTs,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-tsdoc')),
    interopDefault(import('@typescript-eslint/parser')),
  ] as const)

  return [
    {
      name: 'thewlabs/tsdoc/setup',
      plugins: {
        tsdoc: pluginTsdoc,
      },
    },
    {
      files,
      languageOptions: {
        ecmaVersion: 'latest',
        parser: parserTs,
        parserOptions: {
          ...isTypeAware ? { project: tsconfigPath } : {},
          ecmaVersion: 'latest',
          sourceType: 'module',
        },
      },
      name: 'thewlabs/tsdoc/rules',
      rules: {
        'tsdoc/syntax': 'warn',

        // overrides
        ...overrides,
      },
    },
  ]
}
