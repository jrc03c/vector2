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

test("gets and sets magnitudes of vectors", () => {
  expect(new Vector2(3, 4).magnitude).toBe(5)
  expect(new Vector2(-3, 4).magnitude).toBe(5)
  expect(new Vector2(3, -4).magnitude).toBe(5)
  expect(new Vector2(-3, -4).magnitude).toBe(5)

  const a = new Vector2(17, -3)
  a.magnitude = 5
  expect(a.magnitude).toBe(5)
  expect(Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2))).toBe(5)
})

test("scales vectors", () => {
  const a = new Vector2(Math.random(), Math.random())
  const s = Math.random() * 100 - 50
  const b = Vector2.scale(a, s)
  expect(b.magnitude).toBeCloseTo(a.magnitude * Math.abs(s))
  expect(b.x).toBe(a.x * s)
  expect(b.y).toBe(a.y * s)

  const c = new Vector2(3, 4)
  c.scale(-5)
  expect(c.x).toBe(-15)
  expect(c.y).toBe(-20)
})
