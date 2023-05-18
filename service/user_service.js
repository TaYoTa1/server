const { Prisma, PrismaClient } = require("@prisma/client")

const prisma_client = new PrismaClient
class UserService{
    async GetAllUsers()
    {
       return prisma_client.user.findMany({});
    }    
    
}
async function AdUser(data) {
    const {Id, email, password } = data
    try {
      const user = await prisma_client.user.create({
        where: { id: Id },
        update: {
            id,   
            firstName,
            lastName,
            email,
            numberPhone,
            position,
            jobPlace,
            aboutPC
        },
        create: {
            id,   
            firstName,
            lastName,
            email,
            numberPhone,
            position,
            jobPlace,
            aboutPC
        },
        select: { id: true, email: true }
      })
      return user
    } catch(e) {
      onError(e)
    }
  }
  /*
  id,   
  firstName,
  lastName,
  email,
  numberPhone,
  position,
  jobPlace,
  aboutPC
  */
module.exports = new UserService;