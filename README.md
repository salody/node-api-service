###  create a new migration to define the database schema:
    
0.16版本的对于ts的支持有问题，先用0.15    
https://github.com/tgriesser/knex/issues/2998
```
使用ts
knex migrate:make --migrations-directory . -x ts movies

使用js
knex migrate:make movies
```


