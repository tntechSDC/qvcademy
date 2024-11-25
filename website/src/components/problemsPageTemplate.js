import React from 'react';
import Editor from '@monaco-editor/react';
import ProgrammingNavbar from './programmingNav';

const ProblemsPageTemplate = ({ title, content, module }) => {
  const handleEditorChange = (value, event) => {
    console.log("Current Code:", value);
  };

  return (
    <div className="bg-gradient-to-r from-purple from-30% to-teal to-70% h-screen">
      <ProgrammingNavbar />
      <div className=" pt-24 flex space-x-4">
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="text-3xl font-bold text-pink mb-4">{title}</h1>
          <p className="text-pink text-lg mb-6">{content}</p>
          <p className="text-pink italic">Module Needed: {module}</p>
        </div>
          <Editor
          height="80vh"
          width="120vh"
                defaultLanguage="javascript"
                defaultValue="// Write your code here"
                theme="vs-dark"
                onChange={handleEditorChange}
            />
      </div>
    </div>
    
  );
};
  
export default ProblemsPageTemplate;