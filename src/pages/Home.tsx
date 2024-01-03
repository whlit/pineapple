import { useImmerReducer } from 'use-immer'
import UrlInput from '../components/UrlInput'
import Map, { KV } from '../components/Map'

interface State {
  method: string
  url: string
  headers: KV[]
}
enum ActionType {
  C_METHOD,
  C_URL,
  A_HEADER,
}
type Action =
  | {
      type: ActionType.C_METHOD
      method: State['method']
    }
  | {
      type: ActionType.C_URL
      url: State['url']
    }
  | {
      type: ActionType.A_HEADER
    }

const reducer = (draft: State, action: Action) => {
  switch (action.type) {
    case ActionType.C_METHOD:
      draft.method = action.method
      break
    case ActionType.C_URL:
      draft.url = action.url
      break
    case ActionType.A_HEADER:
      draft.headers.push({ key: '', value: '' })
      break
  }
}
function Home() {
  const initData: State = { method: 'GET', url: '', headers: [] }
  const [data, dispatch] = useImmerReducer(reducer, initData)
  return (
    <>
      <UrlInput
        method={data.method}
        onChangeMethod={(v) => dispatch({ type: ActionType.C_METHOD, method: v.target.value })}
        url={data.url}
        onChangeUrl={(v) => dispatch({ type: ActionType.C_URL, url: v.target.value })}
        send={() => alert(data)}
      />
      <Map data={data.headers} addLine={() => dispatch({ type: ActionType.A_HEADER })} />
    </>
  )
}
export default Home
