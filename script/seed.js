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
  ]);

  const felicity = users[0];
  const anna = users[1];

  //Seed clothing items
  const inventory = await Promise.all([
    ClothingItem.create({
      color: 'burgundy',
      category: 'sweater',
      brand: 'Sezane',
      purchasedOn: new Date('November 11').toString(),
      image:
        'https://closet-manager-s3-bucket.s3.us-east-2.amazonaws.com/d9xfiiiwncyts0jlatuw.jpeg',
      season: 'Winter',
      userId: felicity.id,
    }),
    ClothingItem.create({
      color: 'blue',
      category: 'shirt',
      brand: 'Sezane',
      purchasedOn: new Date('November 11').toString(),
      image:
        'https://closet-manager-s3-bucket.s3.us-east-2.amazonaws.com/wetahbd1uhb4jpimhu3n.jpeg',
      season: 'Winter',
      userId: anna.id,
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
