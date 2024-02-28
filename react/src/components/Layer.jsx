import React, { useEffect } from 'react';
import LayerButton from './LayerButton';
import LayerModal from './LayerModal';

function Layer() {

  useEffect(() => {
    document.querySelectorAll('svg').forEach(svg => svg.setAttribute('viewBox', '0 -960 960 960'));
  }, []);

  return (
    <>
      <LayerButton />
      <LayerModal />
    </>
  )

};

export default Layer;