import { Column, CreateDateColumn, PrimaryColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

class Category {
    @PrimaryColumn()
    id?: string

    @Column()
    name: string

    @Column()
    description: string

    @CreateDateColumn()
    created_ad: Date

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Category }
