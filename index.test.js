const Vector2 = require(".")

test("adds vectors", () => {
  const a = new Vector2(3, 4)
  const b = new Vector2(-2, -7)
  const c = Vector2.add(a, b)
  expect(c.x).toBe(1)
  expect(c.y).toBe(-3)
})
