import {
    getAllRoles,
    getRoleById,
    createNewRole,
} from "./roles";

describe('Roles API', () => {
    it('should get all roles', () => {
        const roles = getAllRoles();

        expect(roles).toBe([
            {
                id: 'test-role-1',
                title: 'Admin',
            },
            {
                id: 'test-role-2',
                title: 'User',
            }
        ]);
    });

    it('should return role by id', () => {
        const role = getRoleById('test-role-1');

        expect(role).toBe({
            id: 'test-role-1',
            title: 'Admin',
        });
    });

    it('should create and return new role', () => {
        const role = createNewRole({
            title: 'Moderator'
        });

        expect(role).toBe({
            id: 'test-role-3',
            title: 'Moderator',
        });
    });
});
