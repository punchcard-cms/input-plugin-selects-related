import test from 'ava';
import script from '../lib/script';

// Invalid input
test('validate correct input', t => {
  const input = {
    all: [],
  };

  t.true(script(input), 'script should return true');
});
