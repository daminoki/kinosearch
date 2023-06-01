import React from 'react';
import SvgSprite from 'react-svg-sprite';

function SvgList() {
  return (
    <SvgSprite
      symbols={[
        {
          name: 'arrow',
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"/></svg>'
        }
      ]}
    />
  );
}

export default SvgList;