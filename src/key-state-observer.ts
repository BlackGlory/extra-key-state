import { isntUndefined } from '@blackglory/prelude'
import { Key } from './key.js'
import { KeyState } from './key-state.js'
import { mapKeyValueToKey } from './map-key-value-to-key.js'

export class KeyStateObserver {
  private keyToKeyState: Map<Key, KeyState> = new Map()
  private elements: HTMLElement[]

  constructor(...elements: HTMLElement[]) {
    for (const element of elements) {
      element.addEventListener('keydown', this.handleKeyDown)
      element.addEventListener('keyup', this.handleKeyUp)
    }

    this.elements = elements
  }

  getKeyState(key: Key): KeyState {
    return this.keyToKeyState.get(key)
        ?? KeyState.Up
  }

  close(): void {
    for (const element of this.elements) {
      element.removeEventListener('keydown', this.handleKeyDown)
      element.removeEventListener('keyup', this.handleKeyUp)
    }
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    event.stopPropagation()
    event.preventDefault()

    const key = mapKeyValueToKey(event.key)
    if (isntUndefined(key)) {
      this.keyToKeyState.set(key, KeyState.Down)
    }
  }

  private handleKeyUp = (event: KeyboardEvent) => {
    event.stopPropagation()
    event.preventDefault()

    const key = mapKeyValueToKey(event.key)
    if (isntUndefined(key)) {
      this.keyToKeyState.set(key, KeyState.Up)
    }
  }
}
