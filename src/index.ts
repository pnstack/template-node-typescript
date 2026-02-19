import { Command } from 'commander'
import { render } from 'ink'
import React from 'react'
import App from './App.js'

const program = new Command()

program
  .name('cli-tui-example')
  .description('A CLI and TUI example using Commander and Ink')
  .version('1.0.0')

program
  .command('greet')
  .description('Greet a user with a TUI')
  .argument('<name>', 'name of the user')
  .action((name) => {
    render(React.createElement(App, { name }))
  })

program
  .command('server')
  .description('Start the HTTP server')
  .action(() => {
    import('http').then((http) => {
      console.log('Starting server on port 8080...')
      http.default
        .createServer(function (req, res) {
          res.write('Hello World!')
          res.end()
        })
        .listen(8080)
    })
  })

program.parse()
