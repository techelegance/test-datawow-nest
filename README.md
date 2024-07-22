## Installation

```bash
#ติดตั้ง database
$ cd db
$ docker comepose up -d
$ cd ../

#ติดตั้ง package
$ yarn install

#รันเพื่อเริ่มต้นการใช้งาน Prisma Migrate กับฐานข้อมูล
$ npx prisma migrate dev --name "init"

#รันเพื่อการ seeding ข้อมูล ลงในฐานข้อมูล โดยใช้ Prisma ORM
$ npx prisma db seed
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

http://localhost:3000/api

## Test

```bash
# e2e tests
$ yarn run test:e2e
```

## Package ที่ใช้

```bash
$ prisma @prisma/client #สามารถจัดการฐานข้อมูลได้ง่ายและมีประสิทธิภาพ รองรับฐานข้อมูล MySQL, PostgreSQL, SQLite และ MariaDBMySQL, PostgreSQL, SQLite, Mongodb และ MariaDB

$ @nestjs/jwt #ใช้ตรวจสอบ JWT ว่าถูกต้องหรือไม่ รวมถึงตรวจสอบลายเซ็น ตรวจสอบเวลาหมดอายุ และตรวจสอบ claims และใช้ Guard ในการตรวจสอบ permission ได้ง่าย

$ @nestjs/swagger #ช่วยให้สร้างเอกสาร API ที่สวยงาม เข้าใจง่ายกรณีที่ไม่ต้องการใช้ postman

$ Jest #เป็นไลบรารี js สำหรับเขียน Unit Test และ e2e Test ช่วยให้ทดสอบโค้ดได้อย่างง่ายดาย รวดเร็ว และมีประสิทธิภาพ
```
