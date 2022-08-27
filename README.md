# extra-key-state
## Install
```sh
npm install --save extra-key-state
# or
yarn add extra-key-state
```

## Usage
```ts
import { KeyStateObserver, Key, KeyState } from 'extra-key-state'

const element = document.querySelector('canvas')
const observer = new KeyStateObserver(element)
loop()

function loop() {
  switch (observer.getKeyState(Key.Enter)) {
    case KeyState.Down: // ...
    case KeyState.Up: // ...
  }

  requestAnimationFrame(loop)
}
```

## API
### KeyStateObserver
```ts
class KeyStateObserver {
  constructor(element: HTMLElement)

  getKeyState(key: Key): KeyState
  close(): void
}
```

### KeyState
```ts
enum KeyState {
  Up
, Down
}
```

### Key
```ts
enum Key {
  A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z
, Num1, Num2, Num3, Num4, Num5, Num6, Num7, Num8, Num9, Num0
, Enter, Space, Esc, Alt, Ctrl, Shift
, Up, Down, Left, Right
}
```
