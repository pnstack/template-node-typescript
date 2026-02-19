import React from 'react'
import { Text, Box } from 'ink'

interface AppProps {
  name: string
}

const App: React.FC<AppProps> = ({ name }) => {
  return (
    <Box borderStyle="single" padding={1} flexDirection="column">
      <Text color="green">
        Hello, <Text bold>{name}</Text>!
      </Text>
      <Text color="blue">Welcome to the Ink-based TUI example.</Text>
    </Box>
  )
}

export default App
