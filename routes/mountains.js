const db = require('../db');
const express = require('express');
app = express.Router();

app.use(express.static('public'));

const head = `
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The Fourteeners</title>
<link rel="stylesheet" href="./style.css" />
<script src="https://kit.fontawesome.com/dc998fff98.js" crossorigin="anonymous"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">
</head>
`;

const navBar = `
<div id="nav">
<ul id="sourceInfo">
  <li>Project by Stephen Wong at Full Stack Academy</li>
  <li style="float:right"><span>Data Source: <a href="https://www.14ers.com/" target="_blank">14ers.com</a></span></li>
</ul>
<ul>
  <li class="link" style="float:right"><a class="active" href="https://github.com/stephen-wong-tx/dealers_choice_js" target="_blank">About</a></li>
  <li id="icon"><a href="/"><img src="./fourteeners-home-alt.png" alt="The number 14 in front of a mountain range drawing"></a></li>
</ul>
</div>
`;

app.get('/', async(req, res, next) => {
  try{
    const ranges = await db.models.Range.findAll();

    let html = `
    <!DOCTYPE html>
    <html lang="en">
      ${head}
      <body>
        ${navBar}
        <div id="main-content">
        <h1>The Fourtneeners</h1>
        <h2 style="font-size: .8rem">Sequelize & PostgreSQL Version</h2>
        <p class="description"> <strong>Fourteener</strong> fȯr-ˈtēn-ər<br /> A mountain peek with an elevation of at least 14,000 ft (4267 m).</p>
          <div id="entry-list">
            ${ranges.map( range => `
              <div class="entryContainer">
                <h2>${range["Name"]}</h2>
                <div id="button-${range.ID}" class="details-container"><a href="/mountains/${range.ID}">See details</a></div>
              </div>
            `).join("")}        
            
          </div>
        </div>
      </body>
    </html>
    `
    res.send(`
    ${html}
    `
    );
  }
  catch(error) {
    next(error);
  }
})

app.get('/:range', async(req, res, next) => {
  try {
    const range = await db.models.Mountain.findAll(
      {
        where : {
          RangeID: req.params.range
        }
      }
    )
    let randomIdx = () => Math.floor(Math.random() * range.length);
    let sampleMountain = range[randomIdx()];
    
    const hero = `
    <div id="hero" style="background-image: url(${sampleMountain.photo})">
    <h1 class="h3">Range: ${sampleMountain["Mountain Range"].toUpperCase()}</h1>
    </div>
    `;

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        ${head}
        <body id="indiv-body">
          ${navBar}
          ${hero}
            <div id="entry-list">              
              ${range.map( mountain => `
                <div class="entryContainer ${mountain.Difficulty} ${mountain["Mountain Range"]}" id="range${mountain.ID}" difficulty="${mountain.Difficulty}" mountainRange="${mountain['Mountain Range']}">
                  <h2>${mountain["Mountain Peak"]}</h2>
                  <p>Range: ${mountain["Mountain Range"]}</p>
                  <p>Elevation: ${mountain.Elevation_ft}</p>
                  <div id="button-${mountain.ID}" class="details-container"><a href="/mountains/${mountain.RangeID}/${mountain.ID}">See details</a></div>
                </div>
              `).join("")}
            </div>
        </body>
      </html>
    `);
  }
  catch (error) {
    next(error);
  }
})

app.get('/:range/:id', async(req, res, next) => {
  try {
    const mountain = await db.models.Mountain.findOne(
      {
        where : {
          ID: req.params.id
        }
      }
    )
    
    // Comment for Stanley: I had to recreate the below 'head' and 'navBar' variables just to change the CSS stylesheet href to ".././style.css". 
    // Is there a better way to setup my filepaths? I tried a few methods but couldn't get them to work! 
    
    
    let head = `
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>The Fourteeners</title>
      <link rel="stylesheet" href=".././style.css" />
      <script src="https://kit.fontawesome.com/dc998fff98.js" crossorigin="anonymous"></script>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">
      </head>
    `;

    let navBar = `
      <div id="nav">
        <ul id="sourceInfo">
          <li>Project by Stephen Wong at Full Stack Academy</li>
          <li style="float:right"><span>Data Source: <a href="https://www.14ers.com/" target="_blank">14ers.com</a></span></li>
        </ul>
        <ul>
          <li class="link" style="float:right"><a class="active" href="https://github.com/stephen-wong-tx/dealers_choice_js" target="_blank">About</a></li>
          <li id="icon"><a href="/"><img src=".././fourteeners-home-alt.png" alt="The number 14 in front of a mountain range drawing"></a></li>
        </ul>
      </div>
    `;
    
    const hero = `
      <div id="hero" style="background-image: url(${mountain.photo})">
      <h1 class="h3">${mountain["Mountain Peak"].toUpperCase()}</h1>
      </div>
    `;

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        ${head}
        <body id="indiv-body">
          ${navBar}
          ${hero}
            <div id="button-${mountain.ID}" class="details-container">
              <a id="indiv-link" href="/mountains/${req.params.range}"><span><i id="indiv-icon" class="fa fa-long-arrow-left" aria-hidden="true"></i> &nbsp; &nbsp; Go Back</span> </a>
            </div>
            <div id="entry-list">              
              <div class="entryContainer ${mountain.Difficulty} ${mountain["Mountain Range"]}" id="range${mountain.ID}" difficulty="${mountain.Difficulty}" mountainRange="${mountain['Mountain Range']}">
                <h2>${mountain["Mountain Peak"]}</h2>
                <p>Range: ${mountain["Mountain Range"]}</p>
                <p>Elevation: ${mountain.Elevation_ft}</p>
                <p>Standard Route: ${mountain['Standard Route']}</p>
                <p>Elevation Gain: ${mountain['Elevation Gain_ft']}</p>
                <p>Difficulty: ${mountain.DifficultyDescription}</p>
              </div>
            </div>
        </body>
      </html>
    `);
  }
  catch (error) {
    next(error);
  }
})

module.exports = app;