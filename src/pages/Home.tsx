import { useImmerReducer } from 'use-immer'
import UrlInput from '../components/UrlInput'

interface State {
  method: string
  url: string
}
enum ActionType {
  C_METHOD,
  C_URL,
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

const reducer = (draft: State, action: Action) => {
  switch (action.type) {
    case ActionType.C_METHOD:
      draft.method = action.method
      break
    case ActionType.C_URL:
      draft.url = action.url
      break
  }
}
function Home() {
  const [data, dispatch] = useImmerReducer(reducer, { method: 'GET', url: '' })
  return (
    <>
      <UrlInput
        method={data.method}
        onChangeMethod={(v) => dispatch({ type: ActionType.C_METHOD, method: v.target.value })}
        url={data.url}
        onChangeUrl={(v) => dispatch({ type: ActionType.C_URL, url: v.target.value })}
        send={(v) => alert(data)}
      />
    </>
  )
}
export default Home
