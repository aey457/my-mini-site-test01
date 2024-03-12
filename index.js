// import express from "express";
// import {resolve} from "path";
// import jsonData from "./singers.json" assert {type: "json"};
// const {singers} = jsonData; 
//以上是ESM的寫法
//以下是commonJS的寫法
const express = require("express");
const path = require("path");
const jsonData = require("./singers.json");
const {singers} = jsonData;

const app = express();

app.get("/", (req, res)=> {
    res.send("網站首頁")
});

//http://localhost:3000/singer/3.html

app.get("/singer/:id.html", (req, res)=> {
    const {id} = req.params;
//陣列singers裡面的東西給他叫singer
    let result = singers.find(singer => parseInt(id) === singer.id);
        // if(parseInt(id) === singer.id);
        // console.log(result);

    //res.send(`id = ${req.params.id})
    // res.json(result)
    if(result){
        res.status(200).json(result);
    }else{
        res.status(404).json({error: "找不到"});
    }
});
app.get("/netflix", (req, res) => {
    res.redirect("https://www.netflix.com/tw/");
});

app.get("/download", (req, res) => {
    res.download(path.resolve(__dirname, "singers.json"));
});

app.get("/content", (req, res) => {
    res.sendFile(path.resolve("test.html"));
});

app.listen(3001, ()=> {
    ;console.log("伺服器已啟動於http://localhost:3001");
})