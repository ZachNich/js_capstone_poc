import React, { Component, useState } from 'react';
import { ReactCodeJar } from 'react-codejar';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import './App.css';

let strFunction = ''

const App = () => {
    const [code, setCode] = useState('function findThreeAndFiveMultiples(num) { /*write your solution here*/ }');
    
    const highlight = editor => {
        let code = Prism.highlight(editor.textContent, Prism.languages.javascript, 'javascript');
        editor.innerHTML = code;
        strFunction = editor.textContent;
    }

    return (
        <>
            <div className="container">
                <h2>Code Habit</h2>
                <h3>Made by Zach "Attack" Nicholson</h3>
                <p>Write a function so that it returns the sum of all the multiples of 3 or 5 below the number passed into it. Note: If the number is a multiple of both 3 and 5, only count it once.</p>
            </div>
              <ReactCodeJar
                  code={code} // Initial code value
                  onUpdate={setCode} // Update the text
                  highlight={highlight} // Highlight function, receive the editor
              />
                <button type="button" onClick={() => {
                      let testArg = strFunction.match(/\(([^)]+)\)/)[1];
                      let start = strFunction.indexOf('{') + 1
                      let end = strFunction.lastIndexOf('}')
                      let funcStr = strFunction.substring(start, end)
                      let testFunction = new Function(testArg, funcStr);
                      if (testFunction(10) === 23 &&
                          testFunction(100) === 2318 &&
                          testFunction(999) === 232169 &&
                          testFunction(0) === 0 &
                          testFunction (15) === 45) { console.log('All tests passed. Good work!') }
                      else { (console.log('Tests failed! Try again.')) }
                  }}>Submit!</button>
        </>
    )
}

export default { App }