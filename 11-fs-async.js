const { readFile, writeFile } = require(`fs`)
console.log(`start`)

readFile(`./first.txt`, `utf8`, (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile(`./second.txt`, `utf-8`, (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        console.log(first, `///`, second)
        writeFile(`./result-async.txt`, `Here is the result: ${first}, ${second}`, { flag: `a` },
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(`done with the task`)

            }
        )
    })
})
console.log(`starting the next one`)