import React from 'react';
import './BlockTitle.css';

interface BlockTitle {
  Title: string;
}

const BlockTitle: React.FC<BlockTitle> = (model) => {

  return (
    <div className='block-title'>  
        {model.Title}
    </div>
  );
}

export default BlockTitle;
