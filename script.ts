import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // list all users
  const users = await prisma.user.findMany()
  console.log(users)

  // create a new user
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'well pinho',
  //     email: 'test@outlook.com'
  //   }
  // })

  // console.log(user)

  // update an user
  // const userUpdated = await prisma.user.update({
  //   where: {
  //     id: 5
  //   },
  //   data: {
  //     email: 'new-test@outlook.com'
  //   }
  // })

  // console.log(userUpdated)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
