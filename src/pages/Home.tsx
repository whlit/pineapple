import { useImmerReducer } from 'use-immer'
import { AutoComplete, Button, Select } from 'antd'

interface State {
  method: string
  url: string
}
enum ActionType {
  U_METHOD,
  U_URL,
}
type Action =
  | {
      type: ActionType.U_METHOD
      method: State['method']
    }
  | {
      type: ActionType.U_URL
      url: State['url']
    }

const reducer = (draft: State, action: Action) => {
  switch (action.type) {
    case ActionType.U_METHOD:
      draft.method = action.method
      break
    case ActionType.U_URL:
      draft.url = action.url
      break
  }
}
const Home: React.FC = () => {
  const initData: State = { method: 'GET', url: '' }
  const [data, dispatch] = useImmerReducer(reducer, initData)
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', width: '1000px' }}>
        <Select value={data.method} options={[]} />
        <AutoComplete
          style={{ border: '0', margin: '8px 2px', flexGrow: 1 }}
          value={data.url}
          onChange={(v) => dispatch({ type: ActionType.U_URL, url: v })}
          options={[{ value: 'http://localhost' }, { value: 'https://localhost' }]}
        />
        <Button style={{ marginLeft: '3px' }} onClick={() => console.log(JSON.stringify(data))}>
          发送
        </Button>
      </div>
    </>
  )
}
export default Home
