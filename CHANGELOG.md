# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.2.0](https://github.com/BlackGlory/extra-key-state/compare/v0.1.3...v0.2.0) (2026-02-28)


### ⚠ BREAKING CHANGES

* **key-state-observer:** - Modified the function signature of the constructor of `KeyStateObserver`.
- The `KeyStateObserver` no longer calls `event.stopPropagation`
  and `event.preventDefault` on key event handlers.
* - CommonJS => ESM
- Node.js v14 => Node.js v22

### Features

* **key-state-observer:** add the `onBeforeKeyEvent` hook ([7bba71e](https://github.com/BlackGlory/extra-key-state/commit/7bba71e0dac55c76e21c4f27ecafd8af46eb6dd4))


* upgrade dependencies ([1cf2f32](https://github.com/BlackGlory/extra-key-state/commit/1cf2f3217b1fc251f2072a1759f65dec81f3507e))

### [0.1.3](https://github.com/BlackGlory/extra-key-state/compare/v0.1.2...v0.1.3) (2023-06-10)


### Bug Fixes

* export src ([8ecaef6](https://github.com/BlackGlory/extra-key-state/commit/8ecaef654fbe9acf2168058c5e88b1806bafc0a2))

### [0.1.2](https://github.com/BlackGlory/extra-key-state/compare/v0.1.1...v0.1.2) (2022-09-26)


### Features

* add the support for multiple elements ([3c01eea](https://github.com/BlackGlory/extra-key-state/commit/3c01eeaa62ad34ef8510ff86b5c880e86edc0829))
* stop propagations and prevent default behaviors ([29f91d8](https://github.com/BlackGlory/extra-key-state/commit/29f91d874389682a24c472e2dd980b629f26a969))

### [0.1.1](https://github.com/BlackGlory/extra-key-state/compare/v0.1.0...v0.1.1) (2022-09-15)


### Bug Fixes

* field `main` and `types` ([c438249](https://github.com/BlackGlory/extra-key-state/commit/c4382490926c80531bac3046c1c8d4b33e27ecdb))

## 0.1.0 (2022-08-27)


### Features

* init ([e1ff901](https://github.com/BlackGlory/extra-key-state/commit/e1ff90134ce68f98731299ec7cc9518421e2632b))
