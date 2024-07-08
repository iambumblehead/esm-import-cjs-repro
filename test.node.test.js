import assert from 'node:assert'
import test from 'node:test'

test('should import babelGeneratedDoubleDefault, cjs deep', async () => {
  const esmmain1 = await import ('./src/esmmain1.js')

  assert.ok('babelGeneratedDoubleDefaultResult' in esmmain1.default)
})
