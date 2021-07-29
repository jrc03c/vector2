const Vector2 = require(".")

test("adds vectors", () => {
  const a = new Vector2(3, 4)
  const b = new Vector2(-2, -7)
  const c = Vector2.add(a, b)
  expect(c.x).toBe(1)
  expect(c.y).toBe(-3)

  const d = new Vector2(-6, 12)
  const e = new Vector2(17, 20)
  d.add(e)
  expect(d.x).toBe(11)
  expect(d.y).toBe(32)
})

test("subtracts vectors", () => {
  const a = new Vector2(3, 4)
  const b = new Vector2(-2, -7)
  const c = Vector2.subtract(a, b)
  expect(c.x).toBe(5)
  expect(c.y).toBe(11)

  const d = new Vector2(-6, 12)
  const e = new Vector2(17, 20)
  d.subtract(e)
  expect(d.x).toBe(-23)
  expect(d.y).toBe(-8)
})

test("dots vectors", () => {
  const a = new Vector2(3, 4)
  const b = new Vector2(-2, -7)
  const c = Vector2.dot(a, b)
  expect(c).toBe(3 * -2 + 4 * -7)

  const d = new Vector2(-6, 12)
  const e = new Vector2(17, 20)
  expect(d.dot(e)).toBe(-6 * 17 + 12 * 20)
})
