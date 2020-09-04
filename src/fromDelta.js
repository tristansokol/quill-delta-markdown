exports = module.exports = function (ops) {
  const converters = {
    header: {
      1: (lines) => {
        lines[lines.length - 1] = `# ${lines[lines.length - 1]}`
      }
    }
  }
  // console.log(ops)
  let output = [];
  for (let i = 0; i < ops.length; i++) {
    let op = ops[i]
    if (Object.keys(op).length === 1 && Object.keys(op).includes('insert')) {
      output.push(op.insert)
    } else {
      if (op.attributes) {
        for (const attr in op.attributes) {
          if (attr in converters && op.attributes[attr] in converters[attr]) {
            converters[attr][op.attributes[attr]](output)
          }



        }
      }

    }


  }
  return output.join('\n') + `\n`
}
