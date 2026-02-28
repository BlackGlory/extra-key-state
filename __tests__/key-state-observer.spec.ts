import { describe, test, expect, vi } from 'vitest'
import { userEvent } from '@testing-library/user-event'
import { KeyStateObserver } from '@src/key-state-observer.js'
import { Key } from '@src/key.js'
import { KeyState } from '@src/key-state.js'

describe('KeyStateObserver', () => {
  test('default state', () => {
    const element = document.documentElement
    const observer = new KeyStateObserver([element])

    const result = observer.getKeyState(Key.Space)

    expect(result).toBe(KeyState.Up)
  })

  test('handle keydown event', async () => {
    const user = userEvent.setup()
    const element = document.documentElement
    const onBeforeKeyEvent = vi.fn()
    const observer = new KeyStateObserver([element], { onBeforeKeyEvent })

    // https://testing-library.com/docs/user-event/keyboard
    await user.keyboard('{ >}')
    const result = observer.getKeyState(Key.Space)

    expect(result).toBe(KeyState.Down)
    expect(onBeforeKeyEvent).toBeCalledTimes(1)
  })

  test('handle keyup event', async () => {
    const user = userEvent.setup()
    const element = document.documentElement
    const onBeforeKeyEvent = vi.fn()
    const observer = new KeyStateObserver([element], { onBeforeKeyEvent })

    // https://testing-library.com/docs/user-event/keyboard
    await user.keyboard('{ >}')
    await user.keyboard('{/ }')
    const result = observer.getKeyState(Key.Space)

    expect(result).toBe(KeyState.Up)
    expect(onBeforeKeyEvent).toBeCalledTimes(2)
  })
})
