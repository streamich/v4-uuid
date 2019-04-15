import uuid from '..';

test('generates correct length string', () => {
  const res = uuid();
  expect(typeof res).toBe('string');
  expect(res.length).toBe(36);
});

test('looks like UUID', () => {
  const res = uuid();
  const parts = res.split('-');

  expect(parts.length).toBe(5);
  for (const part of parts) expect(/^[a-z0-9]+$/.test(part)).toBe(true);
});

test('consecutive results are different', () => {
  expect(uuid()).not.toBe(uuid());
});
