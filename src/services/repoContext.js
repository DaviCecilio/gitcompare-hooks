import React, { createContext, useState } from 'react'

export const ReposContext = createContext()

export default function ReposContextProvider({ children }) {
  const [repos, setRepos] = useState([])

  return <ReposContext.Provider value={{ repos, setRepos }}>{children}</ReposContext.Provider>
}
