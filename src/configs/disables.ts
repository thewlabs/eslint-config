import type { TypedFlatConfigItem } from '../types'

import { GLOB_SRC, GLOB_SRC_EXT } from '../globs'

export async function disables(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      files: [`**/scripts/${GLOB_SRC}`],
      name: 'thewlabs/disables/scripts',
      rules: {
        'no-console': 'off',
        'thewlabs/no-top-level-await': 'off',
        'ts/explicit-function-return-type': 'off',
      },
    },
    {
      files: [`**/cli/${GLOB_SRC}`, `**/cli.${GLOB_SRC_EXT}`],
      name: 'thewlabs/disables/cli',
      rules: {
        'no-console': 'off',
        'thewlabs/no-top-level-await': 'off',
      },
    },
    {
      files: ['**/bin/**/*', `**/bin.${GLOB_SRC_EXT}`],
      name: 'thewlabs/disables/bin',
      rules: {
        'thewlabs/no-import-dist': 'off',
        'thewlabs/no-import-node-modules-by-path': 'off',
      },
    },
    {
      files: ['**/*.d.?([cm])ts'],
      name: 'thewlabs/disables/dts',
      rules: {
        'eslint-comments/no-unlimited-disable': 'off',
        'no-restricted-syntax': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
    {
      files: ['**/*.js', '**/*.cjs'],
      name: 'thewlabs/disables/cjs',
      rules: {
        'ts/no-require-imports': 'off',
      },
    },
    {
      files: [`**/*.config.${GLOB_SRC_EXT}`, `**/*.config.*.${GLOB_SRC_EXT}`],
      name: 'thewlabs/disables/config-files',
      rules: {
        'no-console': 'off',
        'thewlabs/no-top-level-await': 'off',
        'ts/explicit-function-return-type': 'off',
      },
    },
  ]
}
