const render = require('../src/fromDelta')

test.only('# header 1', function () {
  expect(
    render([
      {
        insert: "2020-09-04",
      },
      {
        attributes: {
          header: 1,
        },
        insert: "\n",
      },
    ])
  ).toEqual('# 2020-09-04\n')
})

test('** ** bold', function () {
  expect(
    render([
      {
        insert: "bold",
        attributes: {
          bold: true,
        },
      },
      {

        insert: "\n",
      },
    ])
  ).toEqual('**bold**\n')
})
