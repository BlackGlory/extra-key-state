import userEvent from '@testing-library/user-event'
import { KeyStateObserver } from '@src/key-state-observer'
import { Key } from '@src/key'
import { KeyState } from '@src/key-state'

describe('KeyStateObserver', () => {
  test('default state', () => {
    const element = document.documentElement
    const observer = new KeyStateObserver(element)

    const result = observer.getKeyState(Key.Space)

    expect(result).toBe(KeyState.Up)
  })

  test('handle keydown event', async () => {
    const user = userEvent.setup()
    const element = document.documentElement
    const observer = new KeyStateObserver(element)
    
    // https://testing-library.com/docs/user-event/keyboard
    await user.keyboard('{ >}')
    const result = observer.getKeyState(Key.Space)

    expect(result).toBe(KeyState.Down)
  })

  test('handle keyup event', async () => {
    const user = userEvent.setup()
    const element = document.documentElement
    const observer = new KeyStateObserver(element)

    // https://testing-library.com/docs/user-event/keyboard
    user.keyboard('{ }')
    const result = observer.getKeyState(Key.Space)

    expect(result).toBe(KeyState.Up)
  })
})
