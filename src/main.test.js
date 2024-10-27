import { fileURLToPath } from 'node:url'

import test from 'ava'
import spawn from 'nano-spawn'

const PRETTIER_CONFIG = fileURLToPath(
  new URL('../../.prettierrc.js', import.meta.url),
)

test('Smoke test', async (t) => {
  const { exitCode, stdout, stderr } = await spawn(
    'prettier',
    ['--stdin-filepath', 'test.js', '--config', PRETTIER_CONFIG],
    { stdin: { string: 'test;' } },
  )

  t.is(exitCode, undefined)
  t.is(stdout, 'test')
  t.is(stderr, '')
})
