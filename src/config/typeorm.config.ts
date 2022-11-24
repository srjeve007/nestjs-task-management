import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig : TypeOrmModuleOptions= {
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'Shubh@7507',
    database:'task-management',
    autoLoadEntities:true,
    synchronize:true,

    entities: [__dirname + '/../../dist/entity/**/*.entity{.js,.ts}'],

//     logging: true,
  
//   logger: 'file',
//   // migrations: [__dirname + '/../migration/**/*.{.js,.ts}'],
//   // migrations: ["dist/migration/**/*{.js,.ts}"],

//   migrations: ["dist/migration/**/*.js"],
//   migrationsTableName: 'migrations_typeorm',
//   migrationsRun: false,

  
}


 