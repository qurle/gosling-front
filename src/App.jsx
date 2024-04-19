import React from 'react'
import { AppAuth } from "src/routing/app-auth-provider"
import { RouterProvider } from "src/routing/router-provider"

import '@vkontakte/vkui/dist/vkui.css';

function App() {
  const [count, setCount] = React.useState(0)

  return (
      <AppAuth>
          <RouterProvider />
      </AppAuth>
  )
}

export default App
