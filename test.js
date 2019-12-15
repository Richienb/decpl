import test from "ava"
import decpl from "."

test("main", (t) => {
    t.is(decpl(5555), 0)
    t.is(decpl(5555), 0)
    t.is(decpl(555.5), 1)
    t.is(decpl(555.5), 1)
    t.is(decpl(0.0000005), 7)
    t.is(decpl(5e-7), 7)
    t.is(decpl(0.00000055), 8)
    t.is(decpl(5.5e-7), 8)
})
