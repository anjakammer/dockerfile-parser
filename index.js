const parser = require('dockerfile-ast')
const fs = require('fs')

const path = process.env.DOCKERFILE_PATH || 'Dockerfile'
const key = process.env.KEY || 'EXPOSE'

const content = fs.readFileSync(path, 'utf8')
let dockerfile = parser.DockerfileParser.parse(content)

let port = ''
let instructions = dockerfile.getInstructions()
for (let instruction of instructions) {
  if (instruction.getKeyword() === key) {
    port = instruction.getArgumentsContent()
  }
}

console.log(`{"port":"${port}"}`)
