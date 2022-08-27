import { isntUndefined } from '@blackglory/prelude'
import { Key } from './key'
import { KeyState } from './key-state'
import { mapKeyValueToKey } from './map-key-value-to-key'

export class KeyStateObserver {
  private keyToKeyState: Map<Key, KeyState> = new Map()

  constructor(private element: HTMLElement) {
    element.addEventListener('keydown', this.handleKeyDown)
    element.addEventListener('keyup', this.handleKeyUp)
  }

  getKeyState(key: Key): KeyState {
    return this.keyToKeyState.get(key)
        ?? KeyState.Up
  }

  close(): void {
    this.element.removeEventListener('keydown', this.handleKeyDown)
    this.element.removeEventListener('keyup', this.handleKeyUp)
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    const key = mapKeyValueToKey(event.key)
    if (isntUndefined(key)) {
      this.keyToKeyState.set(key, KeyState.Down)
    }
  }

  private handleKeyUp = (event: KeyboardEvent) => {
    const key = mapKeyValueToKey(event.key)
    if (isntUndefined(key)) {
      this.keyToKeyState.set(key, KeyState.Up)
    }
  }
}
