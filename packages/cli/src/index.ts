#!/usr/bin/env node

import { program } from 'commander'

import { name, description, version } from '../package.json'

import { init } from '@/commands/init'

export function main() {
  program
    .name(name)
    .description(description)
    .version(version)
    .addCommand(init)

  program.parse(process.argv)
}

main()