const Page = require("./Page")

// @ponicode
describe("handleToggleClick", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Pierre Edouard", "Pierre Edouard"], ["George", "Jean-Philippe", "Pierre Edouard"], ["Anas", "George", "Anas"]]
        inst = new Page.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleToggleClick()
        }
    
        expect(callFunction).not.toThrow()
    })
})
