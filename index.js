const express=require("express");
const app=express();
const cors=require("cors");
const pool =require("./db");

//middleware 

app.use(cors());
app.use(express.json());   // req.body

//routes

// create a review
 
app.post("/reviews", async (req, res) => {
    try {
      const { description } = req.body;
  
      console.log(req.body);
      const newreview = await pool.query(
        "INSERT INTO review (description) VALUES (?)",
  
        [description]
      );
  
      res.json("Review was added");
    } catch (err) {
      console.error(err.message);
    }
  });


  // Update a Review

  app.put("/reviews/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
  
      const updateReview = await pool.query(
        "UPDATE review SET description = ? WHERE review_id = ?",
        [description, id]
      );
  
      res.json("Review was updated");
    } catch (err) {
      console.error(err.message);
    }
  });

// Delete a Review 

app.delete("/reviews/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const deleteReview = await pool.query("DELETE FROM review WHERE review_id = ?", [id]);
  
      res.json("Review was deleted");
    } catch (err) {
      console.error(err.message);
    }
  });

app.listen  (5002,()=> {
console.log("Server is running buddy keep it up !!");
})