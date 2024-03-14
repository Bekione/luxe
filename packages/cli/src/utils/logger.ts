import chalk from "chalk"

export const logger = {
  error(log: string) {
    console.log(chalk.red(log))
    process.exit(0)
  },
  success(log: string) {
    console.log(chalk.green(log))
  },
  warn(log: string) {
    console.log(chalk.yellow(log))
  },
  break() {
    console.log('')
  }
}
