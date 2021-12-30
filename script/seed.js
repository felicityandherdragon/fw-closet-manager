'use strict';

const {
  db,
  models: { User, ClothingItem },
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  //Seed users
  const users = await Promise.all([
    User.create({ email: 'felicity@mail.com' }),
    User.create({
      email: 'anna@mail.com',
    }),
    User.create({
      email: 'felicityandherdragon@gmail.com',
    }),
  ]);

  const felicity = users[0];
  const anna = users[1];
  const tester = users[2];

  //Seed clothing items
  const inventory = await Promise.all([
    ClothingItem.create({
      color: ['burgundy'],
      category: ['sweater'],
      brand: 'Sezane',
      itemName: 'A pretty burgendy sweater',
      purchasedOn: new Date('November 11').toString(),
      imageSrc:
        'https://closet-manager-s3-bucket.s3.us-east-2.amazonaws.com/burgundy-sweater.jpeg',
      season: 'Winter',
      userId: felicity.id,
    }),
    ClothingItem.create({
      color: ['white'],
      category: ['sweater'],
      brand: 'Sezane',
      itemName: 'A delicate white sweater',
      purchasedOn: new Date('November 11').toString(),
      imageSrc:
        'https://closet-manager-s3-bucket.s3.us-east-2.amazonaws.com/white-sweater.jpeg',
      season: 'Winter',
      userId: anna.id,
    }),
    ClothingItem.create({
      color: ['khaki'],
      category: ['coat'],
      brand: 'Sezane',
      itemName: 'Scott Trench Coat',
      purchasedOn: new Date('December 24').toString(),
      imageSrc:
        'https://closet-manager-s3-bucket.s3.us-east-2.amazonaws.com/khaki-trench-coat.jpeg',
      season: 'Autumn',
      userId: tester.id,
    }),
  ]);
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = runSeed;
