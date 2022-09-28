import './App.css';
import React from 'react';
import { marked } from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Footer';

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();


function App() {

  const [text, setText] = React.useState("# heading element (H1 size)\n## sub heading element (H2 size)\n\n- List item 1\n- List item 2\n- List item 3\n \n[My Website](https://rlreactportfolio.herokuapp.com)\n \nThis is a inline: \`<div></div>\`\nThis is a block of code:\n\`\`\`\nlet X = 1\nlet Y = 2\nlet Z = X + Y\n\`\`\` \n> Block Quotes! \n \n**This is Bold Text!**\n \n![React](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png?20220125121207)\n");
  
  return (
    <div className="App">
    <h1 className='h1 mb-4 ssb'>My Markdown Previewer</h1>
    <textarea id='editor' name='text' rows="12" className='textarea form-control font-monospace' value={text} onChange={(e)=> setText(e.target.value)}>
    </textarea>
    <h3 className='h3 mt-4 mb-4 ssb'>Output:</h3>
    <Preview markdown={text} />
    <Footer />
    </div>
  );
}

function Preview({ markdown }) {
  return (
    <div id="preview"
    dangerouslySetInnerHTML={{
      __html: marked(markdown, {renderer: renderer}),
    }}>
    </div>
  );
  
};

export default App;
