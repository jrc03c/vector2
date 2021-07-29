class Vector2 {
  x = 0
  y = 0

  constructor(x, y) {
    const self = this
    self.x = x
    self.y = y
  }

  add(v) {
    const self = this
    self.x += v.x
    self.y += v.y
    return self
  }

  subtract(v) {
    const self = this
    self.x -= v.x
    self.y -= v.y
    return self
  }

  dot(v) {
    const self = this
    return self.x * v.x + self.y * v.y
  }

  get magnitude() {
    const self = this
    return Math.sqrt(Math.pow(self.x, 2) + Math.pow(self.y, 2))
  }

  set magnitude(m) {
    const self = this
    self.normalize().scale(m)
  }

  scale(s) {
    const self = this
    self.x *= s
    self.y *= s
    return self
  }

  normalize() {
    const self = this
    return self.scale(1 / self.magnitude)
  }

  copy() {
    const self = this
    return new Vector2(self.x, self.y)
  }

  clone() {
    const self = this
    return self.copy()
  }

  static add(a, b) {
    return a.copy().add(b)
  }

  static subtract(a, b) {
    return a.copy().subtract(b)
  }

  static dot(a, b) {
    return a.copy().dot(b)
  }

  static scale(v, s) {
    return v.copy().scale(s)
  }

  static normalize(v) {
    return v.copy().normalize()
  }

  static copy(v) {
    return v.copy()
  }

  static clone(v) {
    return v.copy()
  }
}

if (typeof module !== "undefined") {
  module.exports = Vector2
}

if (typeof window !== "undefined") {
  window.Vector2 = Vector2
}
