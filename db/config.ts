import { column, defineDb } from 'astro:db';

const Items = {
  columns: {
    id: column.text({ primaryKey: true }),
  }
}

// https://astro.build/db/config
export default defineDb({
  tables: {}
});
