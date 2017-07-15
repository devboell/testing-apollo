import simpleMerge from '../index'

test('test simpleMerge', () => {
  const obj1 = { foo: 'foo' }
  const obj2 = { bar: 'bar' }
  const expected = {
    foo: 'foo',
    bar: 'bar',
  }

  expect(simpleMerge(obj1, obj2)).toEqual(expected)
})
