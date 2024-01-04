import { useState } from 'react'

const AutoCompleteInput = ({
  value,
  onChange,
}: {
  value: string
  onChange: (newValue: string) => void
  options: string[]
}) => {
  const [oldValue, setOldValue] = useState('')
  const option = 'http://localhost:8080'
  return (
    <>
      <input
        name='test'
        title='test'
        value={value}
        onChange={(v) => {
          const newValue = v.target.value
          if (oldValue === newValue || oldValue.startsWith(newValue)) {
            onChange(newValue)
          } else if (newValue.length > 0 && option.startsWith(newValue)) {
            onChange(option)
            setTimeout(() => {
              v.target.setSelectionRange(newValue.length, option.length)
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
export default AutoCompleteInput
