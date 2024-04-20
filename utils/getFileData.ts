import fs from "fs"
import path from "path"
import isEmptyOrSpaces from "./isEmptyOrSpaces"

const getFileData = (filePath: string) : String[] => {
    if (fs.existsSync(path.resolve(__dirname, filePath))) {
        const rawFile = fs.readFileSync(path.resolve(__dirname, filePath)).toString()
        const data = rawFile.split('\n').map((d) => d.trim()).filter((d) => !isEmptyOrSpaces(d))
        return data
    } else {
        return []
    }
}

export default getFileData