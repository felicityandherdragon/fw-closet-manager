'use strict';

const {
  db,
  models: { User, ClothingItem, Colors, UserColors, ItemColors },
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

  // seed colors
  const seededColors = await Promise.all([
    Colors.create({
      colorName: 'burgundy',
      colorValue: '#800020',
    }),
    Colors.create({
      colorName: 'white',
      colorValue: '#ffffff',
    }),
    Colors.create({
      colorName: 'khaki',
      colorValue: '#F0E68C',
    }),
  ]);

  const burgundy = seededColors[0];
  const white = seededColors[1];
  const khaki = seededColors[2];

  //Seed clothing items
  const inventory = await Promise.all([
    ClothingItem.create({
      color: [{
        colorName: 'burgundy',
        colorValue: '#800020',
      }],
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
      color: [{
        colorName: 'white',
        colorValue: '#ffffff',
      }],
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
      color: [{
        colorName: 'khaki',
        colorValue: '#F0E68C',
      }],
      category: ['coat'],
      brand: 'Sezane',
      itemName: 'Scott Trench Coat',
      purchasedOn: new Date('December 24').toString(),
      imageSrc:
        'https://closet-manager-s3-bucket.s3.us-east-2.amazonaws.com/khaki-trench-coat.jpeg',
      season: 'Autumn',
      userId: tester.id,
    }),
    ClothingItem.create({
      color: [{
        colorName: 'white',
        colorValue: '#ffffff',
      }],
      category: ['shirt'],
      brand: 'Sezane',
      itemName: 'Some white shirt',
      purchasedOn: new Date('January 17').toString(),
      imageSrc:
        'https://closet-manager-s3-bucket.s3.us-east-2.amazonaws.com/shirt-white.jpeg',
      season: 'Spring',
      userId: felicity.id,
    }),
    ClothingItem.create({
      color: [{
        colorName: 'khaki',
        colorValue: '#F0E68C',
      }],
      category: ['coat'],
      brand: 'Sezane',
      itemName: 'Some khaki coat',
      purchasedOn: new Date('January 17').toString(),
      imageSrc:
        'https://closet-manager-s3-bucket.s3.us-east-2.amazonaws.com/khaki-coat.jpeg',
      season: 'Autumn',
      userId: felicity.id,
    }),
  ]);

  await Promise.all([
    ItemColors.create({colorId: burgundy.id, clothingitemId: inventory[0].id}),
    ItemColors.create({colorId: white.id, clothingitemId: inventory[1].id}),
    ItemColors.create({colorId: khaki.id, clothingitemId: inventory[2].id}),
    ItemColors.create({colorId: white.id, clothingitemId: inventory[3].id}),
    ItemColors.create({colorId: khaki.id, clothingitemId: inventory[4].id}),
  ]);

  await Promise.all([
    UserColors.create({frequency: 1, userId: felicity.id, colorId: burgundy.id}),
    UserColors.create({frequency: 1, userId: anna.id, colorId: white.id}),
    UserColors.create({frequency: 1, userId: tester.id, colorId: khaki.id}),
    UserColors.create({frequency: 1, userId: felicity.id, colorId: white.id}),
    UserColors.create({frequency: 1, userId: felicity.id, colorId: khaki.id}),
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
