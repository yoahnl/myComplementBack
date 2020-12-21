let host          = process.env.DATABASE_HOST | "127.0.0.1";
let port          = process.env.DATABASE_PORT | 5432;
let databaseName  = process.env.DATABASE_NAME | "strapi";
let username      = process.env.DATABASE_USERNAME | "strapi";
let password      = process.env.DATABASE_PASSWORD | "";
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', host),
        port: env.int('DATABASE_PORT', port),
        database: env('DATABASE_NAME', databaseName),
        username: env('DATABASE_USERNAME', username),
        password: env('DATABASE_PASSWORD', password),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
