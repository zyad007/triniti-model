import chalk from "chalk";
// const chalk = require('chalk')
import getFileData from "./getFileData"

const trainIntent = async (manager: any, intent: string, docsLocation: string, answersLocation: string): Promise<Boolean> => {
    const docs = getFileData(docsLocation)
    const answers = getFileData(answersLocation)

    if(!docs.length || !answers.length) {
        console.log(chalk.red(intent + " intent training failed. Check the data and answers files to make sure they exist and contain data"));
        return false
    }
    docs.forEach((doc) => {
        manager.addDocument('en', doc, intent)
    })
    answers.forEach((answer) => {
        manager.addAnswer('en', intent, answer)
    })
    console.log(chalk.yellow(intent + " intent has been trained successfully."));

    return true
}

export default trainIntent