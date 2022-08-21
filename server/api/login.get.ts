import crypto from 'crypto'

export default defineEventHandler(async (event) => {
    const query = useQuery(event)
    const user = {
        id: crypto.randomBytes(16).toString('hex'),
        name: 'John Doe',
        is_admin: query.admin === 'true',
        is_editor: query.editor === 'true'
    }
    event.res.statusCode = 200
    return user
})