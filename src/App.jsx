import { useState } from 'react'
import QRCode from 'react-qr-code'

function App() {
  const [state, setState] = useState({
    qrcode: '',
    input: '',
    loading: false,
  })

  const changeHandler = (e) => {
    setState({
      ...state,
      input: e.target.value,
    })
  }

  const handleGenerator = () => {
    setState({
      ...state,
      qrcode: state.input,
      input: '',
    })
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">QR CODE GENERATOR</h1>
      <div className="flex items-center">
        <input
          type="text"
          name=""
          placeholder="Enter the value"
          value={state.input}
          onChange={changeHandler}
          className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
        />
        <button
          disabled={!state.input || state.input.length === 0}
          onClick={handleGenerator}
          className="px-6 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none"
        >
          Generate
        </button>
      </div>
      <div className="mt-8">
        {state.qrcode && (
          <QRCode
            id="qr-code-value"
            value={state.qrcode}
            className="border border-gray-300 rounded mt-4"
          />
        )}
      </div>
    </div>
  )
}

export default App
