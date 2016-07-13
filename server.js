'use strict';
const express = require('express');
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const PORT = process.env.PORT || 3000;
const hljs = require('highlight.js');
const styleForGitHub = fs.readFileSync('node_modules/highlight.js/styles/github.css', 'utf8');
const MARKDOWN_PATTERN = /\.md$/;

marked.setOptions({
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  }
});

function serveMarkdown(request, response, next) {
  const name = request.params.name || 'README.md';
  const filePath = path.join('event', name);

  if (!MARKDOWN_PATTERN.test(filePath)) {
    return next();
  }

  console.log('serving ', filePath);

  fs.readFile(filePath, 'utf8', function(error, content) {
    if (error) {
      console.error(error);
      return response.status(400).end();
    }

    const data = marked(content) + '<style>' + styleForGitHub + '</style>';
    response.set('Content-Type', 'text/html');
    response.send(data);
  })
}

const app = express()
  .get('/event', serveMarkdown)
  .get('/event/:name', serveMarkdown)
  .use('/event', express.static('event'))

app.listen(PORT, function() {
  console.log('Listening on port', PORT);
});
