import React from "react"
import { appLocalStorage } from "src/libs"
import { useAuthStore } from "src/store/auth"

export function useAuth() {
  const [isAppReady, setIsReady] = React.useState(false)
  const setAuthed = useAuthStore((state) => state.setAuthed)

  React.useEffect(() => {
    function Auth() {
      if (!appLocalStorage.token) {
        setAuthed(false)
      } else {
        setAuthed(true)
      }
      setIsReady(true)
    }
    Auth()
  }, [])

  return { isAppReady }
}
