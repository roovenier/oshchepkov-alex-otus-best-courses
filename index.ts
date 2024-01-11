import fastify from 'fastify';
import fastifyView from '@fastify/view';
import handlebars from 'handlebars';

const app = fastify();

app.register(fastifyView, {
  engine: {
    handlebars,
  },
});

app.get('/template', (req, reply) => {
  reply.view('/templates/index.hbs', { title: 'Test' });
});

app.get('/api/users/', () => {});
app.get('/api/users/:userId/', () => {});
app.post('/api/users/', () => {});
app.put('/api/users/:userId/', () => {});

app.get('/api/courses/', () => {});
app.get('/api/courses/:courseId/', () => {});
app.post('/api/courses/', () => {});
app.put('/api/courses/:courseId/', () => {});

app.get('/api/lessons/:lessonId/', () => {});
app.post('/api/lessons/', () => {});
app.put('/api/lessons/:lessonId/', () => {});
app.delete('/api/lessons/:lessonId/', () => {});

app.get('/api/comments/:lessonId/', () => {});
app.post('/api/comments/', () => {});

app.get('/api/roles/', () => {});
app.get('/api/roles/:roleId/', () => {});
app.post('/api/roles/', () => {});

app.post('/api/login', () => {});
app.get('/api/logout', () => {});

app.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
