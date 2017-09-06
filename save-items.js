// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');

// Your Google Cloud Platform project ID
const projectId = 'chrome-plateau-178520';

// Instantiates a client
const datastore = Datastore({
  projectId: projectId
});

// The Cloud Datastore key for the new entity
const key = datastore.key(['BibleBook', datastore.int('5629499534213120')]);

var checkpoints = [
  {name: "Matthew 21:19-25:46",   parent: 4, schedule: 3},
  {name: "Mark 11:20-13:37",      parent: 4, schedule: 3},
  {name: "Luke 20:1-21:38",       parent: 4, schedule: 3},
  {name: "Matthew 26:1-5, 14-16", parent: 5, schedule: 3},
  {name: "Mark 14:1, 2, 10, 11",  parent: 5, schedule: 3},
  {name: "Luke 22:1-6",           parent: 5, schedule: 3},
  {name: "Matthew 26:17-19",      parent: 6, schedule: 3},
  {name: "Mark 14:12-16",         parent: 6, schedule: 3},
  {name: "Luke 22:7-13",          parent: 6, schedule: 3},
  {name: "Matthew 26:20-35",      parent: 7, schedule: 3},
  {name: "Mark 14:17-31",         parent: 7, schedule: 3},
  {name: "Luke 22:14-38",         parent: 7, schedule: 3},
  {name: "John 13:1-17:26",       parent: 7, schedule: 3},
  {name: "Matthew 26:36-75",      parent: 7, schedule: 3},
  {name: "Mark 14:32-72",         parent: 7, schedule: 3},
  {name: "Luke 22:39-65",         parent: 7, schedule: 3},
  {name: "John 18:1-27",          parent: 7, schedule: 3},
  {name: "Matthew 27:1-61",       parent: 7, schedule: 3},
  {name: "Mark 15:1-47",          parent: 7, schedule: 3},
  {name: "Luke 22:66-23:56",      parent: 7, schedule: 3},
  {name: "John 18:28-19:42",      parent: 7, schedule: 3},
  {name: "Matthew 27:62-66",      parent: 8, schedule: 3},
  {name: "Mark 16:1",             parent: 9, schedule: 3},
  {name: "Matthew 28:1-15",       parent: 9, schedule: 3},
  {name: "Mark 16:2-8",           parent: 9, schedule: 3},
  {name: "Luke 24:1-49",          parent: 9, schedule: 3},
  {name: "John 20:1-25",          parent: 9, schedule: 3}
];

var CP_NUM = 22;
var KIND = 'ScheduleCheckpoint';
checkpoints.forEach(function(cp) {
   var saveData = {
      key: datastore.key(KIND),
      data: {
         CheckpointID: CP_NUM,
         CheckpointName: cp.name,
         ScheduleID: cp.schedule,
         ParentID: cp.parent
      }
   }
   datastore.save(saveData, function(err) {
      console.log("Saved", cp.name);
   });
   CP_NUM++;
});