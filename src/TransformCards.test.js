import TransformsCards from "./TransformCards";

describe("setMatched()", () => {
  test("sets the matched attribute to true on the objects where the word matches", () => {
    const input = [
      { word: "foo", matched: false },
      { word: "foo", matched: false },
      { word: "bar", matched: false }
    ]

    const result = [
      { word: "foo", matched: true },
      { word: "foo", matched: true },
      { word: "bar", matched: false }
    ]

    expect(TransformsCards.setMatched(input, "foo")).toEqual(result)
  })
})
describe("numberOfMatched()", () => {
  test("returns the count of objects where matched === true", () => {
    const cards = [{ matched: true }, { matched: true }, { matched: false }]

    expect(TransformsCards.numberOfMatched(cards)).toEqual(2)
  })
})