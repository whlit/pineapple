import { useState } from 'react'

const AutoInput: React.FC<{
  value: string
  onChange: (newValue: string) => void
  expect: string
  style?: React.CSSProperties
}> = ({ value, onChange, expect, style }) => {
  const [oldValue, setOldValue] = useState('')
  return (
    <>
      <input
        name='test'
        title='test'
        value={value}
        style={style}
        onChange={(v) => {
          const newValue = v.target.value
          if (oldValue === newValue || oldValue.startsWith(newValue)) {
            onChange(newValue)
          } else if (newValue.length > 0 && expect.startsWith(newValue)) {
            onChange(expect)
            setTimeout(() => {
              v.target.setSelectionRange(newValue.length, expect.length)
            }, 5)
          } else {
            onChange(newValue)
          }
          setOldValue(newValue)
        }}
      />
    </>
  )
}
export default AutoInput
