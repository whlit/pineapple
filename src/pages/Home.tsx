import { useImmerReducer } from 'use-immer'
import UrlInput from '../components/UrlInput'
import Map, { KV } from '../components/Map'

interface State {
  method: string
  url: string
  urlOptions: string[]
  headers: KV[]
}
enum ActionType {
  U_METHOD,
  U_URL,
  A_HEADER,
}
type Action =
  | {
      type: ActionType.U_METHOD
      method: State['method']
    }
  | {
      type: ActionType.U_URL
      url: State['url']
      urlOptions: State['urlOptions']
    }
  | {
      type: ActionType.A_HEADER
    }

const reducer = (draft: State, action: Action) => {
  switch (action.type) {
    case ActionType.U_METHOD:
      draft.method = action.method
      break
    case ActionType.U_URL:
      draft.url = action.url
      draft.urlOptions = action.urlOptions
      break
    case ActionType.A_HEADER:
      draft.headers.push({ key: '', value: '' })
      break
  }
}
function Home() {
  const initData: State = { method: 'GET', url: '', urlOptions: [], headers: [] }
  const [data, dispatch] = useImmerReducer(reducer, initData)
  return (
    <>
      <UrlInput
        method={data.method}
        onChangeMethod={(v) => dispatch({ type: ActionType.U_METHOD, method: v.target.value })}
        url={data.url}
        onChangeUrl={(v) => dispatch({ type: ActionType.U_URL, url: v, urlOptions: [] })}
        send={() => alert(data)}
        expects={['http://', 'https://', 'http://localhost']}
      />
      <Map data={data.headers} addLine={() => dispatch({ type: ActionType.A_HEADER })} />
    </>
  )
}
export default Home
