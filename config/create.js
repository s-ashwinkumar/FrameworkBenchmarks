use hello_world
db.world.drop()
for (var i = 1; i <= 10000; i++) {
  db.world.save( { _id: i, id: i, randomNumber: (Math.floor(Math.random() * 10000) + 1) })
}

// http://docs.mongodb.org/manual/applications/optimization/
db.world.ensureIndex({_id: 1})

db.fortune.drop()

db.fortune.save( {_id: 1, id: 1, message: 'fortune: No such file or directory'} );
db.fortune.save( {_id: 2, id: 2, message: "A computer scientist is someone who fixes things that aren't broken."} );
db.fortune.save( {_id: 3, id: 3, message: 'After enough decimal places, nobody gives a damn.'} );
db.fortune.save( {_id: 4, id: 4, message: 'A bad random number generator: 1, 1, 1, 1, 1, 4.33e+67, 1, 1, 1'} );
db.fortune.save( {_id: 5, id: 5, message: 'A computer program does what you tell it to do, not what you want it to do.'} );
db.fortune.save( {_id: 6, id: 6, message: 'Emacs is a nice operating system, but I prefer UNIX. — Tom Christaensen'} );
db.fortune.save( {_id: 7, id: 7, message: 'Any program that runs right is obsolete.'} );
db.fortune.save( {_id: 8, id: 8, message: 'A list is only as strong as its weakest link. — Donald Knuth'} );
db.fortune.save( {_id: 9, id: 9, message: 'Feature: A bug with seniority.'} );
db.fortune.save( {_id: 10, id: 10, message: 'Computers make very fast, very accurate mistakes.'} );
db.fortune.save( {_id: 11, id: 11, message: '<script>alert("This should not be displayed in a browser alert box.");</script>'} );
db.fortune.save( {_id: 12, id: 12, message: 'フレームワークのベンチマーク'} );

db.fortune.ensureIndex({_id: 1})


// Capitalization matters apparently
use hello_world
db.World.drop()
for (var i = 1; i <= 10000; i++) {
  db.World.save( { _id: i, id: i, randomNumber: (Math.floor(Math.random() * 10000) + 1) })
}

// http://docs.mongodb.org/manual/applications/optimization/
db.World.ensureIndex({_id: 1})

db.Fortune.drop()

db.Fortune.save( {_id: 1, id: 1, message: 'fortune: No such file or directory'} );
db.Fortune.save( {_id: 2, id: 2, message: "A computer scientist is someone who fixes things that aren't broken."} );
db.Fortune.save( {_id: 3, id: 3, message: 'After enough decimal places, nobody gives a damn.'} );
db.Fortune.save( {_id: 4, id: 4, message: 'A bad random number generator: 1, 1, 1, 1, 1, 4.33e+67, 1, 1, 1'} );
db.Fortune.save( {_id: 5, id: 5, message: 'A computer program does what you tell it to do, not what you want it to do.'} );
db.Fortune.save( {_id: 6, id: 6, message: 'Emacs is a nice operating system, but I prefer UNIX. — Tom Christaensen'} );
db.Fortune.save( {_id: 7, id: 7, message: 'Any program that runs right is obsolete.'} );
db.Fortune.save( {_id: 8, id: 8, message: 'A list is only as strong as its weakest link. — Donald Knuth'} );
db.Fortune.save( {_id: 9, id: 9, message: 'Feature: A bug with seniority.'} );
db.Fortune.save( {_id: 10, id: 10, message: 'Computers make very fast, very accurate mistakes.'} );
db.Fortune.save( {_id: 11, id: 11, message: '<script>alert("This should not be displayed in a browser alert box.");</script>'} );
db.Fortune.save( {_id: 12, id: 12, message: 'フレームワークのベンチマーク'} );

db.Fortune.ensureIndex({_id: 1})
