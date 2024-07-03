import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet';
import morgan from 'morgan'
import multer from 'multer'
import routers from './routes/auth.js'
import route from './routes/users.js'

import router from './routes/posts.js';
import path from 'path'
const app=express()
dotenv.config();

app.use("/images", express.static(path.join( "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});
app.use("/api/auth", routers);
app.use("/api/users", route);
app.use("/api/posts", router);


app.listen(8000, () => {
  console.log("Backend server is running!");
});