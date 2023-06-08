import React from 'react';
import SvgSprite from 'react-svg-sprite';

function SvgList() {
  return (
    <SvgSprite
      symbols={[
        {
          name: 'arrow',
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"/></svg>'
        },
        {
          name: 'home-icon',
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#242424" d="M4 21v-9.375L2.2 13L1 11.4L12 3l11 8.4l-1.2 1.575l-1.8-1.35V21H4Zm4-6q-.425 0-.713-.288T7 14q0-.425.288-.713T8 13q.425 0 .713.288T9 14q0 .425-.288.713T8 15Zm4 0q-.425 0-.713-.288T11 14q0-.425.288-.713T12 13q.425 0 .713.288T13 14q0 .425-.288.713T12 15Zm4 0q-.425 0-.713-.288T15 14q0-.425.288-.713T16 13q.425 0 .713.288T17 14q0 .425-.288.713T16 15Z"/></svg>'
        },
        {
          name: 'film-icon',
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#242424" d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1zm17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l5.47 4.1c.27.2.27.6 0 .8L12 14.5z"/></svg>'
        },
        {
          name: 'bookmark-icon',
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21V3h8v2H7v12.95l5-2.15l5 2.15V11h2v10l-7-3l-7 3ZM7 5h6h-6Zm10 4V7h-2V5h2V3h2v2h2v2h-2v2h-2Z"/></svg>'
        },
        {
          name: 'profile-icon',
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.538T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.337T4 12q0 1.475.488 2.775T5.85 17.1ZM12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.012-2.488T12 6q1.475 0 2.488 1.012T15.5 9.5q0 1.475-1.012 2.488T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>'
        }
      ]}
    />
  );
}

export default SvgList;