import fs from 'fs/promises'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const readData = async(file) => {
    const moodPath = path.join(__dirname, file)
    const data = await fs.readFile(moodPath, 'utf-8')
    return JSON.parse(data)
}

export const writeData = async(file, input) => {
    const moodPath = path.join(__dirname, file)
    const data = await fs.writeFile(moodPath, JSON.stringify(input, null, 2))
}