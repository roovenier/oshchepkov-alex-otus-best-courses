import {
    getCommentsByLessonId,
    createNewComment,
} from "./comments";

describe('Comments API', () => {
    it('should return comments by lesson id', () => {
        const comments = getCommentsByLessonId('test-lesson-1');

        expect(comments).toBe([
            {
                id: 'test-comment-1',
                text: 'This is some comment text',
                createdAt: 1704379311162,
                author: {
                    id: '123',
                    name: 'Alex',
                }
            },
            {
                id: 'test-comment-2',
                text: 'This is some comment text 2',
                createdAt: 1704379333425,
                author: {
                    id: '123',
                    name: 'Alex',
                }
            }
        ]);
    });

    it('should create a new comment', () => {
        const newComment = createNewComment({
            text: 'This is some new comment text',
            authorId: '123',
        });

        expect(newComment).toBe({
            id: 'test-comment-3',
            text: 'This is some new comment text',
            createdAt: 1704380242843,
            author: {
                id: '123',
                name: 'Alex',
            }
        });
    });
});
