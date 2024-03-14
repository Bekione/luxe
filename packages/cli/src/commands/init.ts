import { promises as fs } from 'node:fs'
import path from 'node:path'
import { promisify } from 'node:util'
import { exec } from 'child_process'

import { Command } from 'commander'
import prompts from 'prompts'
import { z } from 'zod'
import ora from 'ora'

import { logger } from '@/utils/logger'
import { ROOT_EXEC, LUXE_FILE } from '@/utils/const'
import { requiredPackages } from '@/utils/required-packages'
import { getPackageManager } from '@/utils/get-package-manager'

const execAsync = promisify(exec)

const initPromptsSchemaValidations = z.object({
  components: z.string()
})

class InitCommand extends Command {
  components: string = ''

  constructor() {
    super()

    return this
      .name('init')
      .description('the command to start the Luxe environment')
      .action(this.execute)
  }

  private async execute() {
    const answers = await prompts({
      name: 'components',
      message: 'Where do you want to save the components?',
      type: 'text',
      instructions: false,
      validate: (value: string) => {
        if (!value.length) {
          return 'The field is required'
        }

        return true
      }
    })

    const _validations = initPromptsSchemaValidations.safeParse({
      components: answers.components
    })

    if (!_validations.success) {
      return process.exit(0)
    }

    const { components } = _validations.data

    this.components = components

    await this.createComponentsDir()
    await this.installRequiredLibraries()

    await this.createLuxeFile()
  }

  private async createComponentsDir() {
    await fs.mkdir(path.relative(ROOT_EXEC, this.components), {
      recursive: true
    })
  }

  private async createLuxeFile() {
    const config = {
      components: this.components
    }

    await fs.writeFile(
      path.relative(ROOT_EXEC, LUXE_FILE),
      JSON.stringify(config, null, 2)
    )

    logger.break()
    logger.success('The Luxe file has been created successfully.')
  }

  private async installRequiredLibraries() {
    const packageManager = await getPackageManager(ROOT_EXEC)

    const _requiredPackages: Record<string, string[]> = {
      ...requiredPackages
    }

    const loadingInstallDependencies = ora('Installing dependencies...').start()

    for (const type in _requiredPackages) {
      const libraries = _requiredPackages[type]
      const setLibraries = libraries.join(' ')

      const cmdInstall = `${packageManager} i ${setLibraries} ${type === 'development' ? '-D' : ''}`
      await execAsync(cmdInstall)
    }

    loadingInstallDependencies.succeed('Dependencies installed successfully.')
  }
}

export const init = new InitCommand()
