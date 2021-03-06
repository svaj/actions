import {NodePackageManager} from 'src/packagemanagers/types'

export interface MonoRepo {
  rootPath: string
  projectPaths: string[]
  packageManager: NodePackageManager
}

export enum MonoRepoType {
  lerna = 'lerna',
  yarn1 = 'yarn1',
  yarn2 = 'yarn2',

  // TODO add support for these
  rush = 'rush',
  bolt = 'bolt', // https://github.com/boltpkg/bolt
  pnpm = 'pnpm',
  oao = 'oao',
  nx = 'nx', // https://github.com/nrwl/nx
}
