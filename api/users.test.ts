import {
    getAllUsers,
    getUserById,
    createNewUser,
    editUserById,
} from './users';

describe('Users API', () => {
    it('should return all users', () => {
        const allUsers = getAllUsers();

        expect(allUsers).toBe([
            {
                id: 'test-user-1',
                name: 'Alex',
                role: 'admin',
            },
            {
                id: 'test-user-2',
                name: 'Ivan',
                role: 'user',
            }
        ]);
    });

    it('should return user by id', () => {
        const user = getUserById('test-user-1');

        expect(user).toBe({
            id: 'test-user-1',
            name: 'Alex',
            role: 'admin',
        });
    });

    it('should create and return new user', () => {
        const newUser = createNewUser({
            name: 'Andrey',
        });

        expect(newUser).toBe({
            id: 'test-user-3',
            name: 'Andrey',
            role: 'user',
        });
    });

    it('should edit and return updated user', () => {
        const newUser = editUserById('test-user-3', {
            name: 'Dmitrii'
        });

        expect(newUser).toBe({
            id: 'test-user-3',
            name: 'Dmitrii',
            role: 'user',
        });
    });
});
