import assert from 'node:assert'
import test from 'node:test'
import esmock from 'esmock'

test('should import babelGeneratedDoubleDefault, cjs deep', async () => {
  const esmmain1 = await import ('./src/esmmain1.js')

  assert.ok('babelGeneratedDoubleDefaultResult' in esmmain1.default)
})

test('should import ts when using tsx', async () => {
  const main = await esmock('./src/main-ts.ts', {
    path: {
      basename: () => 'hellow'
    }
  })

  assert.strictEqual(main.pathbasenamewrap(), 'hellow')  
})