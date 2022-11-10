import { hash } from 'bcryptjs'
import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../errors/AppError'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { UsersRepository } from '../../repositories/implementations/UsersRepository'

@injectable()
class CreateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: UsersRepository
    ) {}
    async execute({
        name,
        email,
        password,
        driver_license
    }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email)

        if (userAlreadyExists) {
            throw new AppError(`User ${name} already exists`)
        }

        const passwordHash = await hash(password, 8)

        await this.usersRepository.create({
            name,
            email,
            password: passwordHash,
            driver_license
        })
    }
}

export { CreateUserUseCase }
