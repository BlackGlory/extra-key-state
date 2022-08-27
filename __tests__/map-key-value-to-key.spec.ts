import { mapKeyValueToKey } from '@src/map-key-value-to-key'
import { Key } from '@src/key'

describe('mapKeyValueToKey', () => {
  test('known key value', () => {
    const keyValue = ' '

    const result = mapKeyValueToKey(keyValue)

    expect(result).toBe(Key.Space)
  })

  test('unknown key value', () => {
    const keyValue = 'Hello'

    const result = mapKeyValueToKey(keyValue)

    expect(result).toBe(undefined)
  })
})
