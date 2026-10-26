// pnpm add -D stylelint stylelint-config-standard-scss stylelint-config-recess-order

/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  rules: {
    'declaration-no-important': true,
    'max-nesting-depth': 3,
    'no-descending-specificity': null,
    'selector-max-id': 0,
    'selector-class-pattern': [
      '^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z][a-z0-9]*(-[a-z0-9]+)*)?(--[a-z][a-z0-9]*(-[a-z0-9]+)*)?$',
      {
        message:
          'Expected a BEM class: block, block__element, or block--modifier'
      }
    ]
  }
}
