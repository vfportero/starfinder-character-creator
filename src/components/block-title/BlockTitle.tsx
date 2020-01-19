import React from 'react';
import './BlockTitle.css';

interface BlockTitleModel {
  Title: string;
}

const BlockTitle: React.FC<BlockTitleModel> = (model) => {

  return (
    <div className='block-title'>  
        {model.Title}
    </div>
  );
}

export default BlockTitle;
