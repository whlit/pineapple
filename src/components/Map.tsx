import { useState } from 'react'

export interface KV {
  key: string
  value: string | number
}
function Map({ data, addLine }: { data: KV[]; addLine: React.MouseEventHandler }) {
  const [over, setOver] = useState(false)
  return (
    <>
      {data.map((item) => (
        <div style={{ display: 'flex' }}>
          <input value={item.key} style={{ marginRight: '2px' }} />
          :
          <input value={item.value} style={{ flexGrow: 1, marginLeft: '2px' }} />
        </div>
      ))}
      <div
        style={{
          width: '100%',
          height: '20px',
          border: over ? '1px solid #dfe1e5' : '1px solid transparent',
          borderRadius: '4px',
        }}
        onClick={addLine}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}>
        {over ? '+' : ''}
      </div>
    </>
  )
}

export default Map
