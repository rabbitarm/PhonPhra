/*
  MonoDB :: Triggers Treats and Tricks - Auto-Increment a Running ID Field
  https://www.mongodb.com/developer/products/atlas/triggers-tricks-auto-increment-fields/
*/

exports = async function(changeEvent) {

  var docId = changeEvent.fullDocument._id;

  const countercollection = context.services.get("Cluster0").db(changeEvent.ns.db).collection("prayerCounter");
  const prayercollection = context.services.get("Cluster0").db(changeEvent.ns.db).collection(changeEvent.ns.coll);

  var counter = await countercollection.findOneAndUpdate({_id: changeEvent.ns },{ $inc: { seq_value: 1 }}, { returnNewDocument: true, upsert : true});
  var updateRes = await prayercollection.updateOne({_id : docId},{ $set : {number : counter.seq_value}});

  console.log(`Updated ${JSON.stringify(changeEvent.ns)} with counter ${counter.seq_value} result : ${JSON.stringify(updateRes)}`);

};