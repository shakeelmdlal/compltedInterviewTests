const express = require('express');
const TodoData = require('./TodoData.json')
const jsonFile = require('jsonfile')

const app = express();

let fileObj = TodoData;

app.get('/dataonload', (req, res) => {
    res.json(TodoData);
})

app.get("/add", (req, res) => {
    console.log("without query", req.query)
    if (JSON.stringify(req.query) === '{}') {
        console.log('no query')
     res.json(TodoData)
    } else {
        console.log('with query', req.query.todo)
        const getTodo = req.query.todo;
        const fileObj1 = [];
        fileObj1.push(getTodo, ...fileObj)
        jsonFile.writeFile('./TodoData.json', fileObj1, function (err) {
            if (err) throw err;
            else res.json(fileObj1)
        });
    }

    //  console.log('s', fileObj1)
    // res.json(fileObj1)
});

app.get('/modify', (req, res) => {

    // let modifiedArrayItem = [...TodoData];
    // const findTodo = TodoData.findIndex(item => item === oldTodo)
    // modifiedArrayItem[findTodo] = modifyTodo;
    res.json('modify')
});

app.get('/delete', (req, res) => {
    const idx = req.query.idx;
    console.log('index', idx)
    const newTodoList = [...fileObj]
    newTodoList.splice(idx, 1);
    jsonFile.writeFile('./TodoData.json', newTodoList, function (err) {
        if (err) throw err;
        else res.json(newTodoList)
    });
    // res.json(newTodoList)
})

const port = process.env.PORT | 5000;
app.listen(port, () => console.log(`server started on port ${port}`));

