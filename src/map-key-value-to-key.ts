import { Key } from './key'

export function mapKeyValueToKey(keyValue: string): Key | undefined {
  switch (keyValue) {
    case 'a': case 'A': return Key.A
    case 'b': case 'B': return Key.B
    case 'c': case 'C': return Key.C
    case 'd': case 'D': return Key.D
    case 'e': case 'E': return Key.E
    case 'f': case 'F': return Key.F
    case 'g': case 'G': return Key.G
    case 'h': case 'H': return Key.H
    case 'i': case 'I': return Key.I
    case 'j': case 'J': return Key.J
    case 'k': case 'K': return Key.K
    case 'l': case 'L': return Key.L
    case 'm': case 'M': return Key.M
    case 'n': case 'N': return Key.N
    case 'o': case 'O': return Key.O
    case 'p': case 'P': return Key.P
    case 'q': case 'Q': return Key.Q
    case 'r': case 'R': return Key.R
    case 's': case 'S': return Key.S
    case 't': case 'T': return Key.T
    case 'u': case 'U': return Key.U
    case 'v': case 'V': return Key.V
    case 'w': case 'W': return Key.W
    case 'x': case 'X': return Key.X
    case 'y': case 'Y': return Key.Y
    case 'z': case 'Z': return Key.Z
    case '1': return Key.Num1
    case '2': return Key.Num2
    case '3': return Key.Num3
    case '4': return Key.Num4
    case '5': return Key.Num5
    case '6': return Key.Num6
    case '7': return Key.Num7
    case '8': return Key.Num8
    case '9': return Key.Num9
    case '0': return Key.Num0
    case 'Enter': return Key.Enter
    case ' ': return Key.Space
    case 'Escape': return Key.Esc
    case 'Alt': return Key.Alt
    case 'Control': return Key.Ctrl
    case 'Shift': return Key.Shift
    case 'ArrowUp': return Key.Up
    case 'ArrowDown': return Key.Down
    case 'ArrowLeft': return Key.Left
    case 'ArrowRight': return Key.Right
    default: return undefined
  }
}
