import { useState } from 'react';

const Square = (props: any) => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <button className="square" onClick={() => { setValue('X'); }}>
      {value}
    </button>
  )
}

export default Square;