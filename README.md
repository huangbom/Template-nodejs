# template-nodejs

```
"dependencies": {
    "koa": "2.0.0",
    "koa-bodyparser": "3.2.0",
    "koa-router": "7.0.0",
    "nunjucks": "2.4.2",
    "mime": "1.3.4",
    "mz": "2.4.0"
}
```

## models

### 创建model
```javascript
module.exports = db.defineModel('pets', {
    ownerId: db.ID,
    name: db.STRING(100),
    gender: db.BOOLEAN,
    birth: db.STRING(10),
});
```

use
```javascript
const model = require('./model');

let Pet = model.Pet;
var pet = await Pet.create({
        name: 'John',
        gender: false,
        birth: 'john-' + Date.now() + '@garfield.pet'
    });
```

## controllers

```
module.exports = {
    'GET /api/todos': async (ctx, next) => {
        ctx.rest({
            todos: todos
        });
    },

    'POST /api/todos': async (ctx, next) => {
        var
            t = ctx.request.body,
            todo;
        if (!t.name || !t.name.trim()) {
            throw new APIError('invalid_input', 'Missing name');
        }
        if (!t.description || !t.description.trim()) {
            throw new APIError('invalid_input', 'Missing description');
        }
        todo = {
            id: nextId(),
            name: t.name.trim(),
            description: t.description.trim()
        };
        todos.push(todo);
        ctx.rest(todo);
    },
```

## static

## test
