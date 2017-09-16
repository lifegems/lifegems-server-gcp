// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');

// Your Google Cloud Platform project ID
const projectId = 'chrome-plateau-178520';

// Instantiates a client
const datastore = Datastore({
  projectId: projectId
});

// The Cloud Datastore key for the new entity
var schedule = {
  id: 4,
  code: 'WTALL'
}

var CP_NUM = 557;
var YEAR = 2000;
var KIND = 'ScheduleCheckpoint';

var checkpoints = [
   { name: `${YEAR}`, code: `${YEAR}WT`, children: [
      { name: "January 1",    code: "JAN1" },
      { name: "January 15",   code: "JAN15" },
      { name: "February 1",   code: "FEB1" },
      { name: "February 15",  code: "FEB15" },
      { name: "March 1",      code: "MAR1" },
      { name: "March 15",     code: "MAR15" },
      { name: "April 1",      code: "APR1" },
      { name: "April 15",     code: "APR15" },
      { name: "May 1",        code: "MAY1" },
      { name: "May 15",       code: "MAY15" },
      { name: "June 1",       code: "JUN1" },
      { name: "June 15",      code: "JUN15" },
      { name: "July 1",       code: "JUL1" },
      { name: "July 15",      code: "JUL15" },
      { name: "August 1",     code: "AUG1" },
      { name: "August 15",    code: "AUG15" },
      { name: "September 1",  code: "SEP1" },
      { name: "September 15", code: "SEP15" },
      { name: "October 1",    code: "OCT1" },
      { name: "October 15",   code: "OCT15" },
      { name: "November 1",   code: "NOV1" },
      { name: "November 15",  code: "NOV15" },
      { name: "December 1",   code: "DEC1" },
      { name: "December 15",  code: "DEC15" }
   ] }
];

function createRow(cp, parentCode) {
   var saveData = {
      key: datastore.key(KIND),
      data: {
         CheckpointID: CP_NUM,
         CheckpointCode: parentCode + "." + cp.code,
         CheckpointName: cp.name,
         ParentCheckpointCode: parentCode,
         ScheduleID: schedule.id,
      }
   }
   return saveData;
}


checkpoints.forEach(function(cp) {
   var saveData = createRow(cp, schedule.code);
   // console.log(saveData);
   datastore.save(saveData, function(err) {
      if (err) console.log(err);
      console.log("Saved", cp.name);
   });
   CP_NUM++;
   cp.children.forEach(child => {
      var saveData = createRow(child, schedule.code + "." + cp.code);
      // console.log(saveData);
      datastore.save(saveData, function(err) {
         if (err) console.log(err);
         console.log("Saved", child.name);
      });
      CP_NUM++;
   });
});