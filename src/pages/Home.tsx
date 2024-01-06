import { AutoComplete, Button, Form, Select, Space, Tabs, Typography } from 'antd'

interface State {
  method: string
  url: string
  headers?: { key: string; value: string }[]
  params?: { key: string; value: string }[]
}
const Home: React.FC = () => {
  const [form] = Form.useForm<State>()
  const initialValues: State = { method: 'GET', url: '' }
  return (
    <Form form={form} initialValues={initialValues}>
      <div style={{ display: 'flex', alignItems: 'center', width: '1000px' }}>
        <Form.Item name='method'>
          <Select
            title='method'
            placeholder='选择请求方式'
            options={[{ value: 'GET' }, { value: 'POST' }]}
          />
        </Form.Item>
        <Form.Item name='url' style={{ flexGrow: 1 }}>
          <AutoComplete options={[{ value: 'http://localhost' }, { value: 'https://localhost' }]} />
        </Form.Item>
        <Form.Item>
          <Button onClick={() => console.log(JSON.stringify(form.getFieldsValue()))}>发送</Button>
        </Form.Item>
      </div>
      <Tabs
        items={[
          {
            key: 'headers',
            label: 'Headers',
            children: (
              <Form.List name='headers'>
                {(fields, { add }) => (
                  <>
                    <Space.Compact direction='vertical' style={{ width: '100%' }}>
                      {fields.map(({ key, name, ...restField }) => (
                        <Space.Compact key={key} style={{ width: '100%' }}>
                          <Form.Item {...restField} name={[name, 'key']} style={{ width: '25%' }}>
                            <AutoComplete placeholder='Key' />
                          </Form.Item>
                          <Form.Item {...restField} name={[name, 'value']} style={{ width: '75%' }}>
                            <AutoComplete placeholder='Value' />
                          </Form.Item>
                        </Space.Compact>
                      ))}
                    </Space.Compact>
                    <Form.Item>
                      <Button type='dashed' onClick={() => add()} block>
                        Add field
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            ),
          },
          {
            key: 'params',
            label: 'Params',
            children: (
              <Form.List name='params'>
                {(fields, { add }) => (
                  <>
                    <Space.Compact direction='vertical' style={{ width: '100%' }}>
                      {fields.map(({ key, name, ...restField }) => (
                        <Space.Compact key={key} style={{ width: '100%' }}>
                          <Form.Item {...restField} name={[name, 'Key']} style={{ width: '25%' }}>
                            <AutoComplete placeholder='Key' />
                          </Form.Item>
                          <Form.Item {...restField} name={[name, 'Value']} style={{ width: '75%' }}>
                            <AutoComplete placeholder='value' />
                          </Form.Item>
                        </Space.Compact>
                      ))}
                    </Space.Compact>
                    <Form.Item>
                      <Button type='dashed' onClick={() => add()} block>
                        Add field
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            ),
          },
          { key: 'body', label: 'Body', children: <></> },
        ]}
      />
      <Form.Item noStyle shouldUpdate>
        {() => (
          <Typography>
            <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
          </Typography>
        )}
      </Form.Item>
    </Form>
  )
}
export default Home
