function UrlInput({
  method,
  onChangeMethod,
  url,
  onChangeUrl,
  send,
}: {
  method: string
  onChangeMethod: React.ChangeEventHandler<HTMLSelectElement>
  url: string
  onChangeUrl: React.ChangeEventHandler<HTMLInputElement>
  send: React.MouseEventHandler<Element>
}) {
  const options = [
    { key: 'GET', label: 'GET' },
    { key: 'POST', label: 'POST' },
  ]
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', width: '1000px' }}>
        <div
          style={{
            border: '1px solid #dfe1e5',
            borderRadius: '5px',
            flexGrow: 1,
            display: 'flex',
          }}>
          <select
            name='method'
            title='method'
            style={{ border: '0', margin: '8px', outline: 'none' }}
            value={method}
            onChange={onChangeMethod}>
            {options.map((option) => (
              <option value={option.key}>{option.label}</option>
            ))}
          </select>
          <input
            name='url'
            title='url'
            style={{ border: '0', margin: '8px 2px', flexGrow: 1 }}
            placeholder='url'
            value={url}
            onChange={onChangeUrl}
          />
        </div>
        <button style={{ marginLeft: '3px' }} onClick={send}>
          发送
        </button>
      </div>
    </>
  )
}
export default UrlInput
