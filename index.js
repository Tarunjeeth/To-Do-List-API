import express from "express";
import bodyParser from "body-parser";

var todo=[{
    taskno:1,
    task:"Do Chores",
    tasktype:"Household"
}];
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/task/:id",(req,res)=>{
    const inputid=parseInt(req.params.id);
    const found=todo.find(i=>i.taskno==inputid);
    res.json(found);
})

app.post("/task/add",(req,res)=>{
    const newtask={
        taskno:todo.length+1,
        task:req.body.text,
        tasktype:req.body.type
    };
    todo.push(newtask);
    res.json(newtask)
})

app.put("/task/:id",(req,res)=>{
    const inputid=parseInt(req.params.id);
    const found=todo.findIndex(i=>i.taskno==inputid);
    const updated={
        taskno:inputid,
        task:req.body.text,
        tasktype:req.body.type
    }
    todo[found]=updated;
    res.json(updated)
})

app.patch("/task/:id",(req,res)=>{
    const inputid=parseInt(req.params.id);
    const found=todo.findIndex(i=>i.taskno==inputid);
    const existing=todo[found]
    const updated={
        taskno:inputid,
        task:req.body.text  ||  existing.task,
        tasktype:req.body.type || existing.tasktype
    }
    todo[found]=updated;
    res.json(updated)
})

app.delete("/task/:id",(req,res)=>{
    const inputid=parseInt(req.params.id);
    const found=todo.findIndex(i=>i.taskno==inputid);
    if (found>-1){
        todo.splice(found,1);
        res.json({success:"Successfully Deleted!"});
    }
})

app.listen((port),()=>{
    console.log(`Successfully connected to port ${port}`);
})