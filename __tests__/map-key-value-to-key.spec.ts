import { describe, test, expect } from 'vitest'
import { mapKeyValueToKey } from '@src/map-key-value-to-key.js'
import { Key } from '@src/key.js'

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
