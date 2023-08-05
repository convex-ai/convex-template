import { PrismaClient } from '@prisma/client'
import { beforeEach } from 'vitest'
import { mockDeep, mockReset } from 'vitest-mock-extended'

declare global {
  var prisma: PrismaClient | undefined;
}
// 2
beforeEach(() => {
  mockReset(prisma)
})

// 3
const prisma = mockDeep<PrismaClient>()
global.prisma = prisma

console.log('prisma mock', prisma)
export default prisma
