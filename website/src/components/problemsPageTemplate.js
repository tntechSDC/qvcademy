import React from 'react';

const ProblemsPageTemplate = ({ title, content, module}) => {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
        <p className="text-gray-700 text-lg mb-6">{content}</p>
        <p className="text-gray-500 italic">Module Needed: {module}</p>
      </div>
    );
};
  
export default ProblemsPageTemplate;