const {Router} = require('express');
const ToDo = require("../moduls/todo.moduls");

const route = Router();

route.get("/todos" , async(req, res)=>{
    try{
        const todo = await ToDo.findAll({
            attributes:["id", "title", "description", "status"]
        });
        res.json(todo);

    }catch(error){
        res.status(400).json(error);
    }

} );


route.post("/todos", async (req, res) => {
  try {
    const newTodo = req.body;
    const result = await ToDo.create(newTodo);

    res.status(201).json({
        satus:"succes",
        result
    })
    
  } catch (error) {
    res.status(400).json(error);
  }
});


route.put("/todos/:id", async (req, res) => {
  try {
    
    const {id} = req.params;
    const body = req.body;

    await ToDo.update(body,{
        where: {id}
    });

    res.status(200).send({
      status: "Succes",
      
    });


  } catch (error) {
    res.status(400).json(error);
  }
});


route.delete("/todos/:id", async (req, res) => {
  try {
    
    const {id} = req.params;
    await ToDo.destroy({
        where:{id}
    });

     res.status(200).send({
       status: "Succes",
     });

  } catch (error) {
    res.status(400).json(error);
  }
});




module.exports = route;