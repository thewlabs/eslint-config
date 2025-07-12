/**
 * Vendor types from Prettier so we don't rely on the dependency.
 */

export type VendoredPrettierOptions = Partial<VendoredPrettierOptionsRequired>

export type VendoredPrettierRuleOptions = VendoredPrettierOptions & {
  parser?: BuiltInParserName | ExternalParserName
  [k: string]: unknown | undefined
}

export interface VendoredPrettierOptionsRequired {
  /**
   * Specify the line length that the printer will wrap on.
   * @defaultValue 120
   */
  printWidth: number
  /**
   * Specify the number of spaces per indentation-level.
   */
  tabWidth: number
  /**
   * Indent lines with tabs instead of spaces
   */
  useTabs?: boolean
  /**
   * Print semicolons at the ends of statements.
   */
  semi: boolean
  /**
   * Use single quotes instead of double quotes.
   */
  singleQuote: boolean
  /**
   * Use single quotes in JSX.
   */
  jsxSingleQuote: boolean
  /**
   * Print trailing commas wherever possible.
   */
  trailingComma: 'none' | 'es5' | 'all'
  /**
   * Print spaces between brackets in object literals.
   */
  bracketSpacing: boolean
  /**
   * Put the `>` of a multi-line HTML (HTML, XML, JSX, Vue, Angular) element at the end of the last line instead of being
   * alone on the next line (does not apply to self closing elements).
   */
  bracketSameLine: boolean
  /**
   * Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.
   * @deprecated use bracketSameLine instead
   */
  jsxBracketSameLine: boolean
  /**
   * Format only a segment of a file.
   */
  rangeStart: number
  /**
   * Format only a segment of a file.
   * @defaultValue Number.POSITIVE_INFINITY
   */
  rangeEnd: number
  /**
   * By default, Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer.
   * In some cases you may want to rely on editor/viewer soft wrapping instead, so this option allows you to opt out.
   * @defaultValue "preserve"
   */
  proseWrap: 'always' | 'never' | 'preserve'
  /**
   * Include parentheses around a sole arrow function parameter.
   * @defaultValue "always"
   */
  arrowParens: 'avoid' | 'always'
  /**
   * Provide ability to support new languages to prettier.
   */
  plugins: Array<string | any>
  /**
   * How to handle whitespaces in HTML.
   * @defaultValue "css"
   */
  htmlWhitespaceSensitivity: 'css' | 'strict' | 'ignore'
  /**
   * Which end of line characters to apply.
   * @defaultValue "lf"
   */
  endOfLine: 'auto' | 'lf' | 'crlf' | 'cr'
  /**
   * Change when properties in objects are quoted.
   * @defaultValue "as-needed"
   */
  quoteProps: 'as-needed' | 'consistent' | 'preserve'
  /**
   * Whether or not to indent the code inside <script> and <style> tags in Vue files.
   * @defaultValue false
   */
  vueIndentScriptAndStyle: boolean
  /**
   * Enforce single attribute per line in HTML, XML, Vue and JSX.
   * @defaultValue false
   */
  singleAttributePerLine: boolean

  /**
   * How to handle whitespaces in XML.
   * @defaultValue "preserve"
   */
  xmlQuoteAttributes: 'single' | 'double' | 'preserve'
  /**
   * Whether to put a space inside the brackets of self-closing XML elements.
   * @defaultValue true
   */
  xmlSelfClosingSpace: boolean
  /**
   * Whether to sort attributes by key in XML elements.
   * @defaultValue false
   */
  xmlSortAttributesByKey: boolean
  /**
   * How to handle whitespaces in XML.
   * @defaultValue "ignore"
   */
  xmlWhitespaceSensitivity: 'ignore' | 'strict' | 'preserve'
}

export type BuiltInParserName
  = | 'acorn'
    | 'angular'
    | 'babel-flow'
    | 'babel-ts'
    | 'babel'
    | 'css'
    | 'espree'
    | 'flow'
    | 'glimmer'
    | 'graphql'
    | 'html'
    | 'json-stringify'
    | 'json'
    | 'json5'
    | 'less'
    | 'lwc'
    | 'markdown'
    | 'mdx'
    | 'meriyah'
    | 'scss'
    | 'typescript'
    | 'vue'
    | 'xml'
    | 'yaml'

export type ExternalParserName = 'slidev' | 'astro'

// This utility is here to handle the case where you have an explicit union
// between string literals and the generic string type. It would normally
// resolve out to just the string type, but this generic LiteralUnion maintains
// the intellisense of the original union.
//
// It comes from this issue: microsoft/TypeScript#29729:
//   https://github.com/microsoft/TypeScript/issues/29729#issuecomment-700527227
export type LiteralUnion<T extends U, U = string>
  = | T
    | (Pick<U, never> & { _?: never | undefined })
