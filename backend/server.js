import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Configure the express server
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

// Connect the database
try {
  mongoose.connect(
    "mongodb+srv://neupaneprabesh83:jjDGTb96i8k6dixZ@cluster0.7kxqmds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("Database connected successfully");
} catch (error) {
  console.log("Database doesn't connected successfully");
}

app.get("/", (req, res) => {
  res.send("Hello from blog server 123 p test ");
});

//Blog Schema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, unique:true },
  description: { type: String, required: true },
  authorName: { type: String, required: true },
  categoryName: { type: String, required: false },
  timeToRead: { type: Number, required: true },
});

//Table
const Blog = mongoose.model("Blog", blogSchema);


//Writer Schema
const writerSchema = new mongoose.Schema({
  fullName: { type: String, required: true, unique:false },
  email: { type: String, required: true, unique:true },
  phone: { type: Number, required: true,unique:true },
  address: { type: String, required: false },
  age: { type: Number, required: false },
});

//Table
const Writer = mongoose.model("Writer", writerSchema);



//Feature Schema
const featureSchema = new mongoose.Schema({
  title: { type: String, required: true, unique:true },
  description: { type: String, required: true },
});

//Table
const Feature = mongoose.model("Feature", featureSchema);


// Routes

//1.Create
app.post("/create-feature", async (req, res)=> {
  try {
    
      
     const featureExist = await Feature.findOne({title: req.body.title});
    if(featureExist){
      return res.status(409).json({
        success:false,
        msg: "Title already exist, please choose another title",
        data: null,
      });
    }
    const createdfeature = await Feature.create(req.body);
    return res.status(200).json({
      success:true,
      msg:"Feature created successfully",
      data:createdfeature,
    });
  } catch (error) {
    return res.status(500).json({
      success:false,
      msg:"Something went wrong",
      data:null,
      error
    });
  }
});


//2.Fetch all features
app.get("/get-all-feature", async (req, res)=>{
  try {
    const allFeature = await Feature.find();
    return res.status(200).json({
      success:true,
      msg:"All feature fetched successfully",
      data:allFeature,
    });
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      msg:"Something went wrong",
      data:null,
      error
    });
  }
});


//3.Fetch one
app.get("/get-single-feature/:id", async (req, res) => {
  try {
    const singleFeature = await Feature.findById(req.params.id);

    if(!singleFeature){
      return res.status(404).json({
        success:false,
        msg:"Single feature not found",
        data:null,
      });
    }

    return res.status(200).json({
      success:true,
      msg:"Successfully fetched",
      data: singleFeature,
    });
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      msg:"Something went wrong",
      data:null,
      error
    });
  }
});


//4. Update feature
app.patch("/update-feature/:id",async (req, res)=>{
  try {
    const updateFeature = await Feature.findByIdAndUpdate(req.params.id, req.body, {new:true});

    
    if(!updateFeature){
      return res.status(404).json({
        success:false,
        msg:"Something went wrong,Feature not found",
        data:null,
      });
    }
    
    return res.status(200).json({
      success:true,
      msg: "Update success",
      data: updateFeature,
    });
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      msg:"Something went wrong",
      data:null,
      error
    });
  }
});



// 5. Delete feature
app.delete("/delete-feature/:id", async(req, res)=>{
  try {
    const deleteFeature = await Feature.findByIdAndDelete(req.params.id);

    if(!deleteFeature){
      return res.status(404).json({
        success:false,
        msg:"Something went wrong, not found",
        data:null,
      });
    }

    return res.status(200).json({
      success:true,
      msg: "Delete success",
      data: deleteFeature,
    });
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      msg:"Fail to delete",
      data:null,
      error
    });
  }
});





// Routes  (CRUD)==> (create,readall,update,delete)

//1. Create a new blog
app.post("/create-blog", async (req, res) => {
  try {
    // console.log(req,"this is req");
    // console.log(req.body, "this is body");


    //Check the title already taken or not
    const blogExist = await Blog.findOne({title: req.body.title});
    if(blogExist){
      return res.status(409).json({
        success:false,
        msg: "Title already exist, please choose another title",
        data: null,
      });
    }

    const createdBlog = await Blog.create(req.body);
    return res.status(200).json({
      success:true,
      msg:"Blog created successfully",
      data:createdBlog,
    });
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      msg:"Something went wrong",
      data:null,
      error:error
    });
  }
});

// 2. Get all blogs
app.get("/get-all-blogs", async (req, res) => {
  try {
    const allBlogs = await Blog.find();
    return res.status(200).json({
      success:true,
      msg:"All blogs fetched successfully",
      data:allBlogs,
    });
  } catch (error) {
    console.log("Opps Something went wrong"); //for developer
    return res.status(500).json({
      success:false,
      msg:"Something went wrong",
      data:null,
    });
  }
});

// 3. Get single blog
app.get("/get-single-blog/:id", async (req, res) => {
  
  try {
    const singleBlog = await Blog.findById(req.params.id);
    if(!singleBlog){
      return res.status(404).json({
        success:false,
        msg:"Single blog not found",
        data:null,
      });
    }
    return res.status(200).json({
      success:true,
      msg:"Successfully fetched",
      data: singleBlog,

    })
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg:"Something went wrong",
      data:null,
      error
    });
  }
});

// 4. Update a blog
app.patch("/update-blog/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {new:true});

    return res.status(200).json({
      success:true,
      msg: "Update success",
      data: updatedBlog,
    });

    
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg:"Something went wrong",
      data:null,
      error
    });
  }
});

// app.put("/update-blog/:id", async(req, res) => {});

// 5.Delete a blog
app.delete("/delete-blog/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if(!deletedBlog){
      return res.status(404).json({
        success:false,
        msg:"Blog not found",
        data:null,
      });
    }
    return res.status(200).json({
      success:true,
      msg:"Blog deleted successfully",
      data:deletedBlog,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg:"Something went wrong",
      data:null,
      error
    });
    
  }
});


//Writer Routes
//1.create
app.post("/create-writer", async (req,res) =>{
  try {
    //check email taken or not
    const emailExist = await Writer.findOne({email: req.body.email});
    if(emailExist){
      return res.status(409).json({
        success:false,
        msg: "Email already exist, please choose another email",
        data: null,
      });
      }

       
      // phone taken or not
      const phoneExist = await Writer.findOne({phone: req.body.phone});
      if(phoneExist){
        return res.status(409).json({
          success:false,
          msg: "Phone already exist, please choose another phone",
          data: null,
        });
        }

    const writer = await Writer.create(req.body);
    return res.status(200).json({
      success:true,
      msg:"Created successfully",
      data:writer,
    });
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      msg:"Create failed",
      data:null,
      error
    });
  }
});

//2. Fetch all

app.get("/get-all-writer", async(req, res)=>{
 try {
  const allWriters = await Writer.find();
  return res.status(200).json({
    success:true,
    msg:"All writers fetch successfully",
    data:allWriters,
  });
 } catch (error) {
  return res.status(500).json({
    success:false,
    msg:"Something went wrong",
    data:null,
    error
  });
 }
  
});

// 3. Fetch one 

app.get("/get-single-writer/:id", async(req, res)=>{
  try {
    const singleWriter = await Writer.findById(req.params.id);

    if(!singleWriter){
      return res.status(404).json({
        success:false,
        msg:"Something went wrong, not found",
        data:null,
      });
    }

    return res.status(200).json({
      success:true,
      msg:"Successfully fetched",
      data: singleWriter,
    });

    
  } catch (error) {
    return res.status(500).json({
      success:false,
      msg:"Something went wrong",
      data:null,
      error
    });
  }
});



//4. Update writer

app.patch("/update-writer/:id", async(req, res) => {
  try {
    const updateWriter = await Writer.findByIdAndUpdate(req.params.id, req.body, {new:true});

    if(!updateWriter){
      return res.status(404).json({
        success:false,
        msg:"Something went wrong, not found",
        data:null,
      });
    }

    return res.status(200).json({
      success:true,
      msg: "Update success",
      data: updateWriter,
    });
   
  } catch (error) {

    return res.status(500).json({
      success:false,
      msg:"Fail to update",
      data:null,
      error
    });
  }
});

//5. Delete write

app.delete("/delete-writer/:id", async (req, res)=> {
  try {
    const deleteWriter = await Writer.findByIdAndDelete(req.params.id);

    if(!deleteWriter){
      return res.status(404).json({
        success:false,
        msg:"Something went wrong, not found",
        data:null,
      });

    }

  return res.status(200).json({
    success:true,
    msg: "Delete success",
    data: deleteWriter,
  });
  } catch (error) {

    return res.status(500).json({
      success:false,
      msg:"Fail to delete",
      data:null,
      error
    });
    
  }

});



app.listen(4000, () => {
  console.log("Blog server is running at port 4000");
});
