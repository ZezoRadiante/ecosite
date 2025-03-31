import React from 'react';
const ProjectsDecorations: React.FC = () => {
  return <>
      {/* Top decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-eco-100/50 to-transparent z-10"></div>
      <div className="absolute top-10 left-10 w-24 h-24 bg-eco-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-eco-300/10 rounded-full blur-3xl"></div>
      
      {/* Bottom decorative elements */}
      
      <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-eco-100/20 rounded-full blur-3xl"></div>
    </>;
};
export default ProjectsDecorations;