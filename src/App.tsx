import React, { useEffect } from 'react';
import axios from 'axios';
import { type FullGestureState, useGesture } from '@use-gesture/react';
import pako from 'pako';

// axios.get<string>(url, { decompress: false })
axios.get('https://s3.sa-east-1.amazonaws.com/com.cashbells/json/2023/03/27/1679956707828-VIVT3-60m-S94C-V.json.gz', { responseType: 'arraybuffer', decompress: false, })
  .then(({ data }) => {
    const a = pako.inflate(data, { to: 'string' });
    console.log('a', a)
  });

type DragHandler = Omit<FullGestureState<"drag">, "event">
  & { event: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent }

export const App = () => {

  const bind = useGesture({
    onDrag: handleDrag,
  });


  function handleDrag({ offset: [x, _] }: DragHandler) {
    console.log('x', x)

  }

  return (
    <div>
      <svg width={640} height={480} >
        <rect width='100%' height='100%' fill='silver' />
        <circle cx={200} cy={200} r={50} fill="red" />
        <rect width='100%' height='100%' style={{ touchAction: 'none' }} fill='transparent' {...bind()} />
      </svg>
    </div>
  );
};
