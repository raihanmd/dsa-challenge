// https://leetcode.com/problems/time-based-key-value-store/submissions/1920246129/
class TimeMap {
  private keyStore

  constructor() {
    this.keyStore = new Map()
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.keyStore.has(key)) {
      this.keyStore.set(key, [])
    }

    this.keyStore.get(key).push([timestamp, value])
  }

  get(key: string, timestamp: number): string {
    const values = this.keyStore.get(key) || []
    let l = 0
    let r = values.length - 1
    let result = ""

    while (l <= r) {
      let mid = l + Math.round(r - l)
      if (values[mid][0] <= timestamp) {
        result = values[mid][1]
        l = mid + 1
      } else {
        r = mid - 1
      }
    }

    return result
  }
}

