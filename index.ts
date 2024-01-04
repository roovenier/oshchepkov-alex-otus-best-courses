import fastify from 'fastify';
import fastifyView from '@fastify/view';
import handlebars from 'handlebars';

const app = fastify();

app.register(fastifyView, {
    engine: {
        handlebars,
    },
});

app.get("/template", (req, reply) => {
    reply.view("/templates/index.hbs", { title: 'Test' });
});

app.get('/api/users/', (request, reply) => {});
app.get('/api/users/:userId/', (request, reply) => {});
app.post('/api/users/', (request, reply) => {});
app.put('/api/users/:userId/', (request, reply) => {});

app.get('/api/courses/', (request, reply) => {});
app.get('/api/courses/:courseId/', (request, reply) => {});
app.post('/api/courses/', (request, reply) => {});
app.put('/api/courses/:courseId/', (request, reply) => {});

app.get('/api/lessons/:lessonId/', (request, reply) => {});
app.post('/api/lessons/', (request, reply) => {});
app.put('/api/lessons/:lessonId/', (request, reply) => {});
app.delete('/api/lessons/:lessonId/', (request, reply) => {});

app.get('/api/comments/:lessonId/', (request, reply) => {});
app.post('/api/comments/', (request, reply) => {});

app.get('/api/roles/', (request, reply) => {});
app.get('/api/roles/:roleId/', (request, reply) => {});
app.post('/api/roles/', (request, reply) => {});

app.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    
    console.log(`Server listening at ${address}`)
})
