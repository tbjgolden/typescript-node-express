"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const sudoku_1 = require("./sudoku");
const PORT = 8000;
const app = express_1.default();
app.use(body_parser_1.default.text({ type: "*/*" }));
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
    <!DOCTYPE html>
    <html>
      <body>
        <h1>Sudoku checker</h1>
        <textarea id="input" style="min-width:30ch;min-height:11em;line-height:1">[
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [3, 1, 2, 8, 4, 5, 9, 6, 7],
  [6, 9, 7, 3, 1, 2, 8, 4, 5],
  [8, 4, 5, 6, 9, 7, 3, 1, 2],
  [2, 3, 1, 5, 7, 4, 6, 9, 8],
  [9, 6, 8, 2, 3, 1, 5, 7, 4],
  [5, 7, 4, 9, 6, 8, 2, 3, 1]
]</textarea>
        <button id="button">Check</button>
        <pre><code id="output"></code></pre>
        <script>
          var buttonEl = document.getElementById("button");
          var inputEl = document.getElementById("input");
          var outputEl = document.getElementById("output");

          buttonEl.addEventListener('click', function () {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/sudoku');
            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                outputEl.textContent = xhr.responseText;
              }
            };
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(inputEl.value);
            outputEl.textContent = "...";
          });
        </script>
      </body>
    </html>
  `);
});
app.post('/sudoku', (req, res) => {
    try {
        res.send(sudoku_1.isSudokuValid(JSON.parse(req.body)));
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map