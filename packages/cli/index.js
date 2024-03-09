// @NOTE - POC

import { promises as fs, existsSync } from 'node:fs'
import path from 'node:path'

import prompts from 'prompts'
import ora from 'ora'
import chalk from 'chalk'

const HOST = 'https://api.github.com'
const TEMPLATE = 'repos/guhrodriguess/luxe/contents/src/app/_components/ui'
const RAW = 'https://raw.githubusercontent.com/guhrodriguess/luxe/main/src/app/_components/ui'
const COMPONENTS_DIR = path.resolve('ui')

async function getAllCategories() {
  const response = await fetch(path.join(HOST, TEMPLATE))
  const data = await response.json()

  const categories = data.map(component => {
    return {
      title: component.name,
      value: path.join(TEMPLATE, component.name)
    }
  })

  return categories
}

async function getAllComponents(category) {
  const response = await fetch(path.join(HOST, category))
  const data = await response.json()

  const components = data.map(component => {
    if (component.name === 'index.ts') return

    return {
      title: component.name,
      value: path.join(TEMPLATE, component.name)
    }
  }).filter(Boolean)

  return components
}

async function createComponent(categoryName, selectedComponents) {
  const data = []

  for (const component of selectedComponents) {
    const componentName = component.split('/').slice(-1).join('')

    const responseCode = await fetch(path.join(RAW, categoryName, componentName))
    const code = await responseCode.text()

    data.push({
      name: componentName,
      code
    })
  }

  return data
}

async function main() {
  const categories = await getAllCategories()

  const { category } = await prompts({
    name: 'category',
    type: 'select',
    choices: categories,
    message: 'Choose a category:',
    instructions: false
  })

  if (!category) {
    process.exit(0)
  }

  let components = await getAllComponents(category)

  const { selectedComponents } = await prompts({
    name: 'selectedComponents',
    type: 'multiselect',
    choices: components,
    message: 'Choose a component:',
    instructions: false
  })

  const categoryName = category.split('/').slice(-1).join()

  components = await createComponent(categoryName, selectedComponents)

  const loading = ora('Adding components to your project...').start()

  const isComponentsDirExists = existsSync(COMPONENTS_DIR)

  if (!isComponentsDirExists) {
    await fs.mkdir(COMPONENTS_DIR)
  }

  for (const component of components) {
    await fs.writeFile(path.resolve(COMPONENTS_DIR, component.name), component.code, 'utf-8')
  }

  const formattedComponent = components.map(component =>
    chalk.blue(path.parse(component.name).name)
  ).join(', ')

  loading.succeed(`Components added successfully: ${formattedComponent}`)
}

main()