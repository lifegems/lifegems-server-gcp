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
  id: 1,
  code: 'BIBLECHRONO'
}

var CP_NUM = 2128;
var KIND = 'ScheduleCheckpoint';

function saveCheckpoints(checkpoints) {
   checkpoints.forEach(function(cp, i) {
      var childCode = createChildCode(cp.name);
      var saveData = createRow(cp, schedule.code, childCode);
      // console.log(saveData.data);
      datastore.save(saveData, function(err) {
         if (err) console.log(err);
         console.log("Saved", cp.name);
      });
      CP_NUM++;
      cp.sections.forEach((child, index) => {
         var subChildCode = getChildCode(index);
         var saveData = createRow(child, schedule.code + "." + createChildCode(cp.name), subChildCode);
         // console.log(saveData.data);
         datastore.save(saveData, function(err) {
            if (err) console.log(err);
            console.log("Saved", child.name);
         });
         CP_NUM++;
      });
   });
}

function createChildCode(name) {
   name = name.replace(/\s/g, '');
   return name.toUpperCase();
}

function getChildCode(rowIndex) {
   switch(rowIndex) {
      case 0: return 'ONE';
      case 1: return 'TWO';
      case 2: return 'THREE';
      case 3: return 'FOUR';
      case 4: return 'FIVE';
      case 5: return 'SIX';
      case 6: return 'SEVEN';
      case 7: return 'EIGHT';
      case 8: return 'NINE';
      case 9: return 'TEN';
      case 10: return 'ELEVEN';
      case 11: return 'TWELVE';
      case 12: return 'THIRTEEN';
      case 13: return 'FOURTEEN';
      case 14: return 'FIFTEEN';
      case 15: return 'SIXTEEN';
      default: return '==========LONG===============';
   }
}

function createRow(cp, parentCode, childCode) {
   var saveData = {
      key: datastore.key(KIND),
      data: {
         CheckpointID: CP_NUM,
         CheckpointCode: parentCode + "." + childCode,
         CheckpointName: cp.name,
         ParentCheckpointCode: parentCode,
         ScheduleID: schedule.id,
      }
   }
   return saveData;
}


var checkpoints = [
   {
      name: "Day 1",
      sections: [
         { name: "Genesis 1" },
         { name: "Genesis 2" },
         { name: "Genesis 3" },
      ]
   },
   {
      name: "Day 2",
      sections: [
         { name: "Genesis 4" },
         { name: "Genesis 5" },
         { name: "1 Chronicles 1:1-4" },
         { name: "Genesis 6" },
      ]
   },
   {
      name: "Day 3",
      sections: [
         { name: "Genesis 7" },
         { name: "Genesis 8" },
         { name: "Genesis 9" },
      ]
   },
   {
      name: "Day 4",
      sections: [
         { name: "Genesis 10:1-5" },
         { name: "1 Chronicles 1:5-7" },
         { name: "Genesis 10:6-20" },
         { name: "1 Chronicles 1:8-16" },
         { name: "Genesis 10:21-11:26" },
         { name: "1 Chronicles 1:17-27" },
      ]
   },
   {
      name: "Day 5",
      sections: [
         { name: "Genesis 11:27-32" },
         { name: "Genesis 12" },
         { name: "Genesis 13" },
         { name: "Genesis 14" },
         { name: "Genesis 15" },
      ]
   },
   {
      name: "Day 6",
      sections: [
         { name: "Genesis 16" },
         { name: "Genesis 17" },
         { name: "Genesis 18" },
      ]
   },
   {
      name: "Day 7",
      sections: [
         { name: "Genesis 19" },
         { name: "Genesis 20" },
         { name: "Genesis 21" },
         { name: "Genesis 25:12-18" },
         { name: "1 Chronicles 1:28-31" },
      ]
   },
   {
      name: "Day 8",
      sections: [
         { name: "Genesis 22" },
         { name: "Genesis 23" },
         { name: "Genesis 24" },
      ]
   },
   {
      name: "Day 9",
      sections: [
         { name: "Genesis 25:1-4" },
         { name: "1 Chronicles 1:32-34" },
         { name: "Genesis 25:5-11" },
         { name: "Genesis 25:19-34" },
         { name: "Genesis 26" },
      ]
   },
   {
      name: "Day 10",
      sections: [
         { name: "Genesis 27" },
         { name: "Genesis 28:1-9" },
         { name: "Genesis 36" },
         { name: "1 Chronicles 1:35-54" },
      ]
   },
   {
      name: "Day 11",
      sections: [
         { name: "Genesis 28:10-22" },
         { name: "Genesis 29" },
         { name: "Genesis 30" },
      ]
   },
   {
      name: "Day 12",
      sections: [
         { name: "Genesis 31" },
         { name: "Genesis 32" },
      ]
   },
   {
      name: "Day 13",
      sections: [
         { name: "Genesis 33" },
         { name: "Genesis 34" },
         { name: "Genesis 35" },
         { name: "1 Chronicles 2:1,2" },
      ]
   },
   {
      name: "Day 14",
      sections: [
         { name: "Genesis 37" },
         { name: "Genesis 38" },
         { name: "Genesis 39" },
      ]
   },
   {
      name: "Day 15",
      sections: [
         { name: "Genesis 40" },
         { name: "Genesis 41" },
      ]
   },
   {
      name: "Day 16",
      sections: [
         { name: "Genesis 42" },
         { name: "Genesis 43" },
         { name: "Genesis 44" },
      ]
   },
   {
      name: "Day 17",
      sections: [
         { name: "Genesis 45" },
         { name: "Genesis 46:1-9" },
         { name: "1 Chronicles 5:1-6" },
         { name: "Genesis 46:10-12" },
         { name: "1 Chronicles 2:18-55" },
      ]
   },
   {
      name: "Day 18",
      sections: [
         { name: "1 Chronicles 4:1-23" },
         { name: "Genesis 46:13" },
         { name: "1 Chronicles 7:1-5" },
         { name: "Genesis 46:14-18" },
         { name: "1 Chronicles 7:30-40" },
         { name: "Genesis 46:19-25" },
         { name: "1 Chronicles 7:6-12" },
         { name: "Genesis 46:26-34" },
         { name: "Genesis 47:1-12" },
      ]
   },
   {
      name: "Day 19",
      sections: [
         { name: "Genesis 47:13-31" },
         { name: "Genesis 48" },
         { name: "Genesis 49" },
         { name: "Genesis 50" },
      ]
   },
   {
      name: "Day 20",
      sections: [
         { name: "Job 1" },
         { name: "Job 2" },
         { name: "Job 3" },
      ]
   },
   {
      name: "Day 21",
      sections: [
         { name: "Job 4" },
         { name: "Job 5" },
         { name: "Job 6" },
         { name: "Job 7" },
      ]
   },
   {
      name: "Day 22",
      sections: [
         { name: "Job 8" },
         { name: "Job 9" },
         { name: "Job 10" },
      ]
   },
   {
      name: "Day 23",
      sections: [
         { name: "Job 11" },
         { name: "Job 12" },
         { name: "Job 13" },
         { name: "Job 14" },
      ]
   },
   {
      name: "Day 24",
      sections: [
         { name: "Job 15" },
         { name: "Job 16" },
         { name: "Job 17" },
         { name: "Job 18" },
      ]
   },
   {
      name: "Day 25",
      sections: [
         { name: "Job 19" },
         { name: "Job 20" },
         { name: "Job 21" },
      ]
   },
   {
      name: "Day 26",
      sections: [
         { name: "Job 22" },
         { name: "Job 23" },
         { name: "Job 24" },
         { name: "Job 25" },
         { name: "Job 26" },
      ]
   },
   {
      name: "Day 27",
      sections: [
         { name: "Job 27" },
         { name: "Job 28" },
         { name: "Job 29" },
      ]
   },
   {
      name: "Day 28",
      sections: [
         { name: "Job 30" },
         { name: "Job 31" },
      ]
   },
   {
      name: "Day 29",
      sections: [
         { name: "Job 32" },
         { name: "Job 33" },
         { name: "Job 34" },
      ]
   },
   {
      name: "Day 30",
      sections: [
         { name: "Job 35" },
         { name: "Job 36" },
         { name: "Job 37" },
      ]
   },
   {
      name: "Day 31",
      sections: [
         { name: "Job 38" },
         { name: "Job 39" },
      ]
   },
   {
      name: "Day 32",
      sections: [
         { name: "Job 40" },
         { name: "Job 41" },
         { name: "Job 42" },
      ]
   },
   {
      name: "Day 33",
      sections: [
         { name: "Exodus 1" },
         { name: "Exodus 2" },
         { name: "Exodus 3" },
         { name: "Exodus 4:1-17" },
      ]
   },
   {
      name: "Day 34",
      sections: [
         { name: "Exodus 4:18-31" },
         { name: "Exodus 5" },
         { name: "Exodus 6:1-27" },
         { name: "1 Chronicles 6:1-4a" },
         { name: "Exodus 6:28-30" },
         { name: "Exodus 7:1-13" },
      ]
   },
   {
      name: "Day 35",
      sections: [
         { name: "Exodus 7:14-25" },
         { name: "Exodus 8" },
         { name: "Exodus 9" },
      ]
   },
   {
      name: "Day 36",
      sections: [
         { name: "Exodus 10" },
         { name: "Exodus 11" },
         { name: "Exodus 12" },
      ]
   },
   {
      name: "Day 37",
      sections: [
         { name: "Exodus 13" },
         { name: "Exodus 14" },
         { name: "Exodus 15" },
      ]
   },
   {
      name: "Day 38",
      sections: [
         { name: "Exodus 16" },
         { name: "Exodus 17" },
         { name: "Exodus 18" },
      ]
   },
   {
      name: "Day 39",
      sections: [
         { name: "Exodus 19" },
         { name: "Exodus 20" },
         { name: "Exodus 21" },
      ]
   },
   {
      name: "Day 40",
      sections: [
         { name: "Exodus 22" },
         { name: "Exodus 23" },
         { name: "Exodus 24" },
      ]
   },
   {
      name: "Day 41",
      sections: [
         { name: "Exodus 25" },
         { name: "Exodus 26" },
         { name: "Exodus 27" },
      ]
   },
   {
      name: "Day 42",
      sections: [
         { name: "Exodus 28" },
         { name: "Exodus 29" },
      ]
   },
   {
      name: "Day 43",
      sections: [
         { name: "Exodus 31" },
         { name: "Exodus 32" },
         { name: "Exodus 33:1-6" },
      ]
   },
   {
      name: "Day 44",
      sections: [
         { name: "Exodus 33:7-23" },
         { name: "Exodus 34" },
         { name: "Exodus 35" },
         { name: "Exodus 36:1-7" },
      ]
   },
   {
      name: "Day 45",
      sections: [
         { name: "Exodus 36:8-38" },
         { name: "Exodus 37" },
         { name: "Exodus 38" },
      ]
   },
   {
      name: "Day 46",
      sections: [
         { name: "Exodus 39" },
         { name: "Exodus 40" },
      ]
   },
   {
      name: "Day 47",
      sections: [
         { name: "Leviticus 1" },
         { name: "Leviticus 2" },
         { name: "Leviticus 3" },
         { name: "Leviticus 4" },
      ]
   },
   {
      name: "Day 48",
      sections: [
         { name: "Leviticus 5" },
         { name: "Leviticus 6" },
         { name: "Leviticus 7" },
      ]
   },
   {
      name: "Day 49",
      sections: [
         { name: "Leviticus 8" },
         { name: "Leviticus 9" },
         { name: "Leviticus 10" },
      ]
   },
   {
      name: "Day 50",
      sections: [
         { name: "Leviticus 11" },
         { name: "Leviticus 12" },
         { name: "Leviticus 13:1-46" },
      ]
   },
   {
      name: "Day 51",
      sections: [
         { name: "Leviticus 13:47-59" },
         { name: "Leviticus 14" },
         { name: "Leviticus 15" },
      ]
   },
   {
      name: "Day 52",
      sections: [
         { name: "Leviticus 16" },
         { name: "Leviticus 17" },
         { name: "Leviticus 18" },
      ]
   },
   {
      name: "Day 53",
      sections: [
         { name: "Leviticus 19" },
         { name: "Leviticus 20" },
         { name: "Leviticus 21" },
      ]
   },
   {
      name: "Day 54",
      sections: [
         { name: "Leviticus 22" },
         { name: "Leviticus 23" },
      ]
   },
   {
      name: "Day 55",
      sections: [
         { name: "Leviticus 24" },
         { name: "Leviticus 25" },
      ]
   },
   {
      name: "Day 56",
      sections: [
         { name: "Leviticus 26" },
         { name: "Leviticus 27" },
      ]
   },
   {
      name: "Day 57",
      sections: [
         { name: "Numbers 1" },
         { name: "Numbers 2" },
      ]
   },
   {
      name: "Day 58",
      sections: [
         { name: "Numbers 3" },
         { name: "Numbers 4:1-33" },
      ]
   },
   {
      name: "Day 59",
      sections: [
         { name: "Numbers 4:34-49" },
         { name: "Numbers 5" },
         { name: "Numbers 6:1-27" },
      ]
   },
   {
      name: "Day 60",
      sections: [
         { name: "Numbers 7" },
      ]
   },
   {
      name: "Day 61",
      sections: [
         { name: "Numbers 8" },
         { name: "Numbers 9" },
         { name: "Numbers 10" },
      ]
   },
   {
      name: "Day 62",
      sections: [
         { name: "Numbers 11" },
         { name: "Numbers 12" },
         { name: "Numbers 13" },
      ]
   },
   {
      name: "Day 63",
      sections: [
         { name: "Numbers 14" },
         { name: "Numbers 15" },
      ]
   },
   {
      name: "Day 64",
      sections: [
         { name: "Numbers 16" },
         { name: "Numbers 17" },
         { name: "Numbers 18" },
      ]
   },
   {
      name: "Day 65",
      sections: [
         { name: "Numbers 19" },
         { name: "Numbers 20" },
         { name: "Numbers 21" },
      ]
   },
   {
      name: "Day 66",
      sections: [
         { name: "Numbers 22" },
         { name: "Numbers 23" },
         { name: "Numbers 24" },
      ]
   },
   {
      name: "Day 67",
      sections: [
         { name: "Numbers 25" },
         { name: "Numbers 26:1-34" },
         { name: "1 Chronicles 7:13-19" },
         { name: "Numbers 26:35-37" },
         { name: "1 Chronicles 7:20-29" },
         { name: "Numbers 26:38-65" },
      ]
   },
   {
      name: "Day 68",
      sections: [
         { name: "Numbers 27" },
         { name: "Numbers 28" },
         { name: "Numbers 29" },
      ]
   },
   {
      name: "Day 69",
      sections: [
         { name: "Numbers 30" },
         { name: "Numbers 31" },
      ]
   },
   {
      name: "Day 70",
      sections: [
         { name: "Numbers 32" },
         { name: "Numbers 33" },
      ]
   },
   {
      name: "Day 71",
      sections: [
         { name: "Numbers 34" },
         { name: "Numbers 35" },
         { name: "Numbers 36" },
      ]
   },
   {
      name: "Day 72",
      sections: [
         { name: "Deuteronomy 1" },
         { name: "Deuteronomy 2" },
         { name: "Deuteronomy 3:1-11" },
      ]
   },
   {
      name: "Day 73",
      sections: [
         { name: "Deuteronomy 3:12-29" },
         { name: "Deuteronomy 4" },
         { name: "Deuteronomy 5" },
      ]
   },
   {
      name: "Day 74",
      sections: [
         { name: "Deuteronomy 6" },
         { name: "Deuteronomy 7" },
         { name: "Deuteronomy 8" },
      ]
   },
   {
      name: "Day 75",
      sections: [
         { name: "Deuteronomy 9" },
         { name: "Deuteronomy 10" },
         { name: "Deuteronomy 11" },
      ]
   },
   {
      name: "Day 76",
      sections: [
         { name: "Deuteronomy 12" },
         { name: "Deuteronomy 13" },
         { name: "Deuteronomy 14" },
      ]
   },
   {
      name: "Day 77",
      sections: [
         { name: "Deuteronomy 15" },
         { name: "Deuteronomy 16" },
         { name: "Deuteronomy 17" },
         { name: "Deuteronomy 18" },
      ]
   },
   {
      name: "Day 78",
      sections: [
         { name: "Deuteronomy 19" },
         { name: "Deuteronomy 20" },
         { name: "Deuteronomy 21" },
         { name: "Deuteronomy 22" },
      ]
   },
   {
      name: "Day 79",
      sections: [
         { name: "Deuteronomy 23" },
         { name: "Deuteronomy 24" },
         { name: "Deuteronomy 25" },
         { name: "Deuteronomy 26" },
      ]
   },
   {
      name: "Day 80",
      sections: [
         { name: "Deuteronomy 27" },
         { name: "Deuteronomy 28" },
      ]
   },
   {
      name: "Day 81",
      sections: [
         { name: "Deuteronomy 29" },
         { name: "Deuteronomy 30" },
         { name: "Deuteronomy 31:1-29" },
      ]
   },
   {
      name: "Day 82",
      sections: [
         { name: "Deuteronomy 31:30" },
         { name: "Deuteronomy 32" },
         { name: "Psalm 90" },
      ]
   },
   {
      name: "Day 83",
      sections: [
         { name: "Deuteronomy 33" },
         { name: "Deuteronomy 34" },
         { name: "Joshua 1" },
         { name: "Joshua 2" },
      ]
   },
   {
      name: "Day 84",
      sections: [
         { name: "Joshua 3" },
         { name: "Joshua 4" },
         { name: "Joshua 5" },
         { name: "Joshua 6" },
      ]
   },
   {
      name: "Day 85",
      sections: [
         { name: "Joshua 7" },
         { name: "Joshua 8" },
         { name: "Joshua 9" },
      ]
   },
   {
      name: "Day 86",
      sections: [
         { name: "Joshua 10" },
         { name: "Joshua 11" },
         { name: "Joshua 12" },
      ]
   },
   {
      name: "Day 87",
      sections: [
         { name: "Joshua 13" },
         { name: "Joshua 14" },
         { name: "Joshua 15" },
      ]
   },
   {
      name: "Day 88",
      sections: [
         { name: "Joshua 16" },
         { name: "Joshua 17" },
         { name: "Joshua 18" },
         { name: "Joshua 19:1-9" },
         { name: "1 Chronicles 4:24-33" },
         { name: "Joshua 19:10-31" },
      ]
   },
   {
      name: "Day 89",
      sections: [
         { name: "Joshua 19:32-51" },
         { name: "Joshua 20" },
         { name: "Joshua 21" },
         { name: "1 Chronicles 6:54-81" },
      ]
   },
   {
      name: "Day 90",
      sections: [
         { name: "Joshua 22" },
         { name: "Joshua 23" },
         { name: "Joshua 24" },
      ]
   },
   {
      name: "Day 91",
      sections: [
         { name: "Judges 1" },
         { name: "Judges 2" },
         { name: "Judges 3:1-6" },
         { name: "Judges 17" },
      ]
   },
   {
      name: "Day 92",
      sections: [
         { name: "Judges 18" },
         { name: "Judges 3:7-31" },
         { name: "Judges 4" },
      ]
   },
   {
      name: "Day 93",
      sections: [
         { name: "Judges 5" },
         { name: "Judges 6" },
         { name: "Judges 7" },
      ]
   },
   {
      name: "Day 94",
      sections: [
         { name: "Judges 8" },
         { name: "Judges 9" },
      ]
   },
   {
      name: "Day 95",
      sections: [
         { name: "Judges 10" },
         { name: "Judges 11" },
         { name: "Judges 12" },
         { name: "Judges 13" },
      ]
   },
   {
      name: "Day 96",
      sections: [
         { name: "Judges 19" },
         { name: "Judges 20" },
      ]
   },
   {
      name: "Day 97",
      sections: [
         { name: "Judges 21" },
         { name: "1 Chronicles 6:4b-15" },
         { name: "Ruth 1" },
         { name: "Ruth 2" },
      ]
   },
   {
      name: "Day 98",
      sections: [
         { name: "Ruth 3" },
         { name: "Ruth 4" },
         { name: "1 Chronicles 2:3-16" },
         { name: "1 Samuel 1" },
      ]
   },
   {
      name: "Day 99",
      sections: [
         { name: "1 Samuel 2:1-10" },
         { name: "Psalm 113" },
         { name: "1 Samuel 2:11-21" },
         { name: "Judges 14" },
         { name: "Judges 15" },
         { name: "Judges 16:1-22" },
      ]
   },
   {
      name: "Day 100",
      sections: [
         { name: "Judges 16:23-31" },
         { name: "1 Samuel 2:22-36" },
         { name: "1 Samuel 3" },
         { name: "1 Samuel 4" },
         { name: "1 Samuel 5" },
      ]
   },
   {
      name: "Day 101",
      sections: [
         { name: "1 Samuel 6" },
         { name: "1 Samuel 7" },
         { name: "1 Samuel 8" },
         { name: "1 Samuel 9" },
      ]
   },
   {
      name: "Day 102",
      sections: [
         { name: "1 Samuel 10" },
         { name: "1 Samuel 11" },
         { name: "1 Samuel 12" },
         { name: "1 Samuel 13:1-22" },
      ]
   },
   {
      name: "Day 103",
      sections: [
         { name: "1 Samuel 13:23" },
         { name: "1 Samuel 14" },
         { name: "1 Chronicles 8" },
         { name: "1 Chronicles 9:1a" },
      ]
   },
   {
      name: "Day 104",
      sections: [
         { name: "1 Chronicles 9:35-44" },
         { name: "1 Chronicles 5:7-10" },
         { name: "1 Chronicles 5:18-22" },
         { name: "1 Samuel 15" },
         { name: "1 Samuel 16" },
         { name: "Psalm 110" },
      ]
   },
   {
      name: "Day 105",
      sections: [
         { name: "1 Samuel 17" },
         { name: "1 Samuel 18" },
         { name: "Psalm 144" },
      ]
   },
   {
      name: "Day 106",
      sections: [
         { name: "1 Samuel 19" },
         { name: "1 Samuel 20" },
         { name: "Psalm 59" },
         { name: "Psalm 133" },
      ]
   },
   {
      name: "Day 107",
      sections: [
         { name: "1 Samuel 21" },
         { name: "Psalm 34" },
         { name: "Psalm 56" },
         { name: "1 Samuel 22:1-5" },
         { name: "Psalm 57" },
         { name: "Psalm 142" },
         { name: "1 Chronicles 12:8-18" },
      ]
   },
   {
      name: "Day 108",
      sections: [
         { name: "1 Samuel 22:6-23" },
         { name: "Psalm 52" },
         { name: "1 Samuel 23" },
         { name: "Psalm 54" },
         { name: "Psalm 63" },
      ]
   },
   {
      name: "Day 109",
      sections: [
         { name: "Psalm 13" },
         { name: "Psalm 22" },
         { name: "1 Samuel 24" },
      ]
   },
   {
      name: "Day 110",
      sections: [
         { name: "Psalm 7" },
         { name: "Psalm 17" },
         { name: "Psalm 35" },
      ]
   },
   {
      name: "Day 111",
      sections: [
         { name: "1 Samuel 25" },
         { name: "Psalm 14" },
         { name: "Psalm 53" },
      ]
   },
   {
      name: "Day 112",
      sections: [
         { name: "2 Samuel 25" },
         { name: "Psalm 18" },
         { name: "1 Samuel 26" },
      ]
   },
   {
      name: "Day 113",
      sections: [
         { name: "1 Samuel 27" },
         { name: "Psalm 31" },
         { name: "1 Chronicles 12:1-7" },
         { name: "1 Samuel 28:1,2" },
         { name: "1 Samuel 28:1,2" },
         { name: "1 Samuel 29" },
         { name: "1 Chronicles 12:19-22" },
         { name: "Psalm 5" },
         { name: "Psalm 40" },
      ]
   },
   {
      name: "Day 114",
      sections: [
         { name: "Psalm 69" },
         { name: "Psalm 86" },
         { name: "Psalm 131" },
         { name: "1 Samuel 28:3-25" },
      ]
   },
   {
      name: "Day 115",
      sections: [
         { name: "1 Samuel 30" },
         { name: "1 Samuel 31" },
         { name: "1 Chronicles 10" },
         { name: "2 Samuel 4:4" },
         { name: "2 Samuel 1" },
      ]
   },
   {
      name: "Day 116",
      sections: [
         { name: "2 Samuel 2" },
         { name: "2 Samuel 3:1-5" },
         { name: "1 Chronicles 3:1-4a" },
         { name: "2 Samuel 3:6-39" },
         { name: "2 Samuel 4:1-3" },
         { name: "2 Samuel 4:5-12" },
         { name: "2 Samuel 5:1-5" },
         { name: "1 Chronicles 11:1-3" },
      ]
   },
   {
      name: "Day 117",
      sections: [
         { name: "1 Chronicles 12:23-40" },
         { name: "Psalm 2" },
         { name: "Psalm 78" },
      ]
   },
   {
      name: "Day 118",
      sections: [
         { name: "2 Samuel 5:6-10" },
         { name: "1 Chronicles 11:4-9" },
         { name: "2 Samuel 5:17-21" },
         { name: "1 Chronicles 14:8-12" },
         { name: "2 Samuel 23:13-19" },
         { name: "1 Chronicles 11:15-21" },
         { name: "2 Samuel 5:22-25" },
         { name: "1 Chronicles 14:13-17" },
         { name: "2 Samuel 5:11,12" },
         { name: "1 Chronicles 14:1,2" },
         { name: "1 Chronicles 13" },
         { name: "2 Samuel 6:1-11" },
         { name: "Psalm 101" },
         { name: "Psalm 16" },
      ]
   },
   {
      name: "Day 119",
      sections: [
         { name: "2 Samuel 6:12-23" },
         { name: "1 Chronicles 15" },
         { name: "1 Chronicles 16" },
         { name: "Psalm 15" },
         { name: "Psalm 30" },
         { name: "Psalm 122" },
      ]
   },
   {
      name: "Day 120",
      sections: [
         { name: "Psalm 19" },
         { name: "Psalm 24" },
         { name: "Psalm 65" },
         { name: "Psalm 68" },
         { name: "2 Samuel 8:1" },
         { name: "1 Chronicles 18:1" },
         { name: "2 Samuel 21:15-18" },
         { name: "1 Chronicles 20:4" },
      ]
   },
   {
      name: "Day 121",
      sections: [
         { name: "2 Samuel 23:8-12" },
         { name: "1 Chronicles 11:10-14" },
         { name: "2 Samuel 21:19-22" },
         { name: "1 Chronicles 20:5-8" },
         { name: "2 Samuel 10" },
         { name: "1 Chronicles 19" },
         { name: "2 Samuel 11:1" },
         { name: "1 Chronicles 20:1a" },
      ]
   },
   {
      name: "Day 122",
      sections: [
         { name: "2 Samuel 11:2" },
         { name: "2 Samuel 12:1-24a" },
         { name: "Psalm 6" },
         { name: "Psalm 32" },
         { name: "Psalm 51" },
      ]
   },
   {
      name: "Day 123",
      sections: [
         { name: "Psalm 103" },
         { name: "2 Samuel 12:26-31" },
         { name: "1 Chronicles 20:1b-3" },
         { name: "Psalm 21" },
         { name: "2 Samuel 12:24b-25" },
         { name: "2 Samuel 8:2" },
         { name: "1 Chronicles 18:2" },
         { name: "2 Samuel 8:3-4" },
         { name: "1 Chronicles 18:3-4" },
         { name: "2 Samuel 8:7-8" },
         { name: "1 Chronicles 18:7-8" },
         { name: "2 Samuel 8:5-6" },
         { name: "1 Chronicles 18:5-6" },
      ]
   },
   {
      name: "Day 124",
      sections: [
         { name: "2 Samuel 8:9-14" },
         { name: "1 Chronicles 18:9-13" },
         { name: "Psalm 44" },
         { name: "Psalm 20" },
         { name: "Psalm 60" },
         { name: "Psalm 108" },
         { name: "Psalm 124" },
      ]
   },
   {
      name: "Day 125",
      sections: [
         { name: "2 Samuel 23:20-39" },
         { name: "1 Chronicles 11:22-47" },
         { name: "2 Samuel 8:15-18" },
         { name: "1 Chronicles 18:14-17" },
         { name: "2 Samuel 7" },
         { name: "1 Chronicles 17" },
      ]
   },
   {
      name: "Day 126",
      sections: [
         { name: "Psalm 138" },
         { name: "Psalm 139" },
         { name: "Psalm 145" },
         { name: "2 Samuel 21:1-14" },
         { name: "2 Samuel 9" },
         { name: "Psalm 8" },
      ]
   },
   {
      name: "Day 127",
      sections: [
         { name: "2 Samuel 5:13-16" },
         { name: "1 Chronicles 14:3-7" },
         { name: "1 Chronicles 3:4b-9" },
         { name: "2 Samuel 13" },
         { name: "2 Samuel 14" },
         { name: "2 Samuel 15:1-6" },
         { name: "Psalm 109" },
      ]
   },
   {
      name: "Day 128",
      sections: [
         { name: "2 Samuel 24" },
         { name: "Psalm 38" },
         { name: "1 Chronicles 21:4-30" },
         { name: "2 Samuel 15:7-36" },
         { name: "Psalm 3" },
      ]
   },
   {
      name: "Day 129",
      sections: [
         { name: "Psalm 4" },
         { name: "Psalm 11" },
         { name: "Psalm 23" },
         { name: "Psalm 26" },
         { name: "2 Samuel 16:1-14" },
         { name: "Psalm 12" },
         { name: "Psalm 36" },
      ]
   },
   {
      name: "Day 130",
      sections: [
         { name: "Psalm 37" },
         { name: "Psalm 9" },
         { name: "Psalm 10" },
         { name: "2 Samuel 15:37" },
         { name: "2 Samuel 16:15" },
         { name: "Psalm 27" },
      ]
   },
   {
      name: "Day 131",
      sections: [
         { name: "2 Samuel 16:16-23" },
         { name: "2 Samuel 17:1-23" },
         { name: "Psalm 28" },
         { name: "Psalm 41" },
         { name: "Psalm 42" },
         { name: "Psalm 43" },
         { name: "Psalm 55" },
         { name: "Psalm 64" },
      ]
   },
   {
      name: "Day 132",
      sections: [
         { name: "2 Samuel 17:24-26" },
         { name: "1 Chronicles 2:17" },
         { name: "2 Samuel 17:27-29" },
         { name: "2 Samuel 18:1-18" },
         { name: "Psalm 58" },
         { name: "Psalm 61" },
         { name: "Psalm 62" },
      ]
   },
   {
      name: "Day 133",
      sections: [
         { name: "2 Samuel 18:19-33" },
         { name: "Psalm 39" },
         { name: "Psalm 70" },
         { name: "Psalm 71" },
         { name: "Psalm 84" },
         { name: "Psalm 143" },
         { name: "2 Samuel 19" },
      ]
   },
   {
      name: "Day 134",
      sections: [
         { name: "2 Samuel 20" },
         { name: "Psalm 140" },
         { name: "Psalm 141" },
         { name: "1 Chronicles 22" },
         { name: "Psalm 1" },
         { name: "Psalm 29" },
         { name: "Psalm 33" },
      ]
   },
   {
      name: "Day 135",
      sections: [
         { name: "1 Chronicles 23:1-23" },
         { name: "1 Chronicles 6:16-30" },
         { name: "1 Chronicles 23:24-32" },
         { name: "1 Chronicles 24:1-31" },
      ]
   },
   {
      name: "Day 136",
      sections: [
         { name: "1 Chronicles 25" },
         { name: "1 Chronicles 6:31-53" },
         { name: "1 Chronicles 26" },
      ]
   },
   {
      name: "Day 137",
      sections: [
         { name: "1 Chronicles 27" },
         { name: "1 Chronicles 28" },
         { name: "1 Chronicles 29:1-22" },
         { name: "1 Kings 1:1-27" },
      ]
   },
   {
      name: "Day 138",
      sections: [
         { name: "1 Kings 1:28-40" },
         { name: "Psalm 25" },
         { name: "1 Kings 1:41-53" },
         { name: "1 Kings 2:1-9" },
         { name: "2 Samuel 23:1-7" },
         { name: "1 Kings 2:10,11" },
         { name: "1 Chronicles 29:26-30" },
         { name: "1 Kings 2:12" },
         { name: "1 Chronicles 29:23-25" },
      ]
   },
   {
      name: "Day 139",
      sections: [
         { name: "1 Kings 2:13-46" },
         { name: "1 Kings 3:1-15" },
         { name: "2 Chronicles 1:1-13" },
         { name: "1 Kings 3:16-28" },
         { name: "Psalm 72" },
      ]
   },
   {
      name: "Day 140",
      sections: [
         { name: "Psalm 45" },
         { name: "Song of Solomon 1" },
         { name: "Song of Solomon 2" },
         { name: "Song of Solomon 3" },
         { name: "Song of Solomon 4" },
      ]
   },
   {
      name: "Day 141",
      sections: [
         { name: "Song of Solomon 6" },
         { name: "Song of Solomon 7" },
         { name: "Song of Solomon 8" },
         { name: "Song of Solomon 9" },
         { name: "1 Kings 5:1-12" },
         { name: "2 Chronicles 2:1" },
         { name: "2 Chronicles 2:3-16" },
      ]
   },
   {
      name: "Day 142",
      sections: [
         { name: "1 Kings 5:13-18" },
         { name: "2 Chronicles 2:2" },
         { name: "2 Chronicles 2:17,18" },
         { name: "1 Kings 9:15,16" },
         { name: "1 Kings 9:20-23" },
         { name: "2 Chronicles 8:7-10" },
         { name: "1 Kings 6" },
         { name: "2 Chronicles 3" },
         { name: "Psalm 127" },
         { name: "1 Kings 7:1-12" },
      ]
   },
   {
      name: "Day 143",
      sections: [
         { name: "1 Kings 7:13-51" },
         { name: "2 Chronicles 4:1-22" },
         { name: "2 Chronicles 5:1" },
         { name: "1 Kings 8:1-21" },
         { name: "2 Chronicles 5:2-14" },
      ]
   },
   {
      name: "Day 144",
      sections: [
         { name: "2 Chronicles 6:1-11" },
         { name: "1 Kings 8:22-61" },
         { name: "2 Chronicles 6:12-42" },
         { name: "2 Chronicles 7:1-3" },
      ]
   },
   {
      name: "Day 145",
      sections: [
         { name: "1 Kings 8:62-66" },
         { name: "2 Chronicles 7:4-10" },
         { name: "Psalm 132" },
         { name: "Psalm 33" },
         { name: "1 Kings 9:1-9" },
         { name: "2 Chronicles 7:11-22" },
         { name: "1 Kings 9:10-14" },
         { name: "2 Chronicles 8:1-3" },
         { name: "1 Kings 9:24" },
         { name: "2 Chronicles 8:11" },
         { name: "1 Kings 9:25" },
         { name: "2 Chronicles 8:12-16" },
         { name: "1 Kings 9:17-19" },
         { name: "2 Chronicles 8:4-6" },
         { name: "1 Kings 9:26-28" },
         { name: "2 Chronicles 8:17,18" },
         { name: "1 Kings 10:22" },
         { name: "2 Chronicles 9:21" },
      ]
   },
   {
      name: "Day 146",
      sections: [
         { name: "1 Kings 10:1-13" },
         { name: "2 Chronicles 9:1-12" },
         { name: "1 Kings 4:1-19" },
         { name: "1 Kings 4:29-34" },
         { name: "Proverbs 1" },
      ]
   },
   {
      name: "Day 147",
      sections: [
         { name: "Proverbs 2" },
         { name: "Proverbs 3" },
         { name: "Proverbs 4" },
      ]
   },
   {
      name: "Day 148",
      sections: [
         { name: "Proverbs 5" },
         { name: "Proverbs 6" },
         { name: "Proverbs 7" },
      ]
   },
   {
      name: "Day 149",
      sections: [
         { name: "Proverbs 8" },
         { name: "Proverbs 9" },
         { name: "Proverbs 10" },
      ]
   },
   {
      name: "Day 150",
      sections: [
         { name: "Proverbs 11" },
         { name: "Proverbs 12" },
         { name: "Proverbs 13" },
      ]
   },
   {
      name: "Day 151",
      sections: [
         { name: "Proverbs 14" },
         { name: "Proverbs 15" },
      ]
   },
   {
      name: "Day 152",
      sections: [
         { name: "Proverbs 16" },
         { name: "Proverbs 17" },
         { name: "Proverbs 18" },
      ]
   },
   {
      name: "Day 153",
      sections: [
         { name: "Proverbs 19" },
         { name: "Proverbs 20" },
         { name: "Proverbs 21" },
      ]
   },
   {
      name: "Day 154",
      sections: [
         { name: "Proverbs 22" },
         { name: "Proverbs 23" },
         { name: "Proverbs 24" },
      ]
   },
   {
      name: "Day 155",
      sections: [
         { name: "Proverbs 25" },
         { name: "Proverbs 26" },
         { name: "Proverbs 27" },
      ]
   },
   {
      name: "Day 156",
      sections: [
         { name: "Proverbs 28" },
         { name: "Proverbs 29" },
         { name: "Proverbs 30" },
      ]
   },
   {
      name: "Day 157",
      sections: [
         { name: "Proverbs 31" },
         { name: "1 Kings 4:20-28" },
         { name: "1 Kings 10:14-21" },
         { name: "2 Chronicles 9:13-20" },
         { name: "1 Kings 10:23-25" },
         { name: "2 Chronicles 9:22-24" },
         { name: "1 Kings 10:26-29" },
         { name: "2 Chronicles 1:14-17" },
         { name: "2 Chronicles 9:25-28" },
      ]
   },
   {
      name: "Day 158",
      sections: [
         { name: "1 Kings 11:1-40" },
         { name: "Ecclesiastes 1" },
         { name: "Ecclesiastes 2" },
      ]
   },
   {
      name: "Day 159",
      sections: [
         { name: "Ecclesiastes 3" },
         { name: "Ecclesiastes 4" },
         { name: "Ecclesiastes 5" },
         { name: "Ecclesiastes 6" },
      ]
   },
   {
      name: "Day 160",
      sections: [
         { name: "Ecclesiastes 7" },
         { name: "Ecclesiastes 8" },
         { name: "Ecclesiastes 9" },
         { name: "Ecclesiastes 10" },
      ]
   },
   {
      name: "Day 161",
      sections: [
         { name: "Ecclesiastes 11" },
         { name: "Ecclesiastes 12" },
         { name: "Psalm 73" },
         { name: "Psalm 88" },
         { name: "1 Kings 11:41-43" },
         { name: "1 Kings 12:1-19" },
         { name: "2 Chronicles 10" },
         { name: "1 Kings 12:20-24" },
         { name: "2 Chronicles 11:1-4" },
         { name: "1 Kings 12:25-31" },
         { name: "2 Chronicles 11:13-17" },
         { name: "1 Kings 12:32,33" },
         { name: "1 Kings 13:1-34" },
      ]
   },
   {
      name: "Day 162",
      sections: [
         { name: "1 Kings 12:1-19" },
         { name: "2 Chronicles 10" },
         { name: "1 Kings 12:20-24" },
         { name: "2 Chronicles 11:1-4" },
         { name: "1 Kings 12:25-31" },
         { name: "2 Chronicles 11:13-17" },
         { name: "1 Kings 12:32,33" },
         { name: "1 Kings 13:1-34" },
      ]
   },
   {
      name: "Day 163",
      sections: [
         { name: "1 Kings 14:1-18" },
         { name: "2 Chronicles 11:5-12" },
         { name: "2 Chronicles 11:18-23" },
         { name: "1 Kings 14:22-28" },
         { name: "2 Chronicles 12:1-12" },
         { name: "Psalm 89" },
      ]
   },
   {
      name: "Day 164",
      sections: [
         { name: "1 Kings 14:29-31" },
         { name: "2 Chronicles 12:15,16" },
         { name: "1 Kings 15:1-8" },
         { name: "2 Chronicles 13:1-22" },
         { name: "2 Chronicles 14:1" },
         { name: "1 Kings 15:9-11" },
         { name: "2 Chronicles 14:2-7" },
         { name: "1 Kings 14:19,20" },
         { name: "1 Kings 15:25-31" },
         { name: "2 Chronicles 14:8-15" },
         { name: "2 Chronicles 15:1-7" },
         { name: "1 Kings 15:12-15" },
         { name: "2 Chronicles 15:8-19" },
      ]
   },
   {
      name: "Day 165",
      sections: [
         { name: "1 Kings 15:33,34" },
         { name: "1 Kings 15:16" },
         { name: "1 Kings 15:32" },
         { name: "1 Kings 15:17-22" },
         { name: "2 Chronicles 16:1-10" },
         { name: "1 Kings 16:1-33" },
         { name: "1 Kings 15:23,24" },
         { name: "2 Chronicles 16:11-14" },
         { name: "1 Kings 22:41-46" },
         { name: "2 Chronicles 20:31-34" },
         { name: "2 Chronicles 17" },
         { name: "2 Chronicles 18:1" },
         { name: "1 Kings 16:34" },
      ]
   },
   {
      name: "Day 166",
      sections: [
         { name: "1 Kings 17" },
         { name: "1 Kings 18" },
         { name: "1 Kings 19" },
      ]
   },
   {
      name: "Day 167",
      sections: [
         { name: "Psalm 104" },
         { name: "Psalm 114" },
         { name: "Psalm 115" },
         { name: "1 Kings 20" },
      ]
   },
   {
      name: "Day 168",
      sections: [
         { name: "1 Kings 21" },
         { name: "1 Kings 22:51-53" },
         { name: "1 Kings 22:1-35" },
         { name: "2 Chronicles 18:2-34" },
      ]
   },
   {
      name: "Day 169",
      sections: [
         { name: "1 Kings 22:36-40" },
         { name: "2 Kings 1:1" },
         { name: "2 Chronicles 19" },
         { name: "1 Kings 20:1-30" },
         { name: "Psalm 46" },
         { name: "Psalm 47" },
         { name: "Psalm 48" },
      ]
   },
   {
      name: "Day 170",
      sections: [
         { name: "Psalm 49" },
         { name: "Psalm 83" },
         { name: "Psalm 91" },
         { name: "1 Kings 22:47-49" },
         { name: "2 Chronicles 20:35-37" },
         { name: "2 Kings 1:2-18" },
         { name: "2 Kings 3:1-3" },
      ]
   },
   {
      name: "Day 171",
      sections: [
         { name: "2 Kings 2" },
         { name: "2 Kings 3:4-27" },
         { name: "1 Kings 22:50" },
         { name: "2 Chronicles 21:1-3" },
         { name: "2 Kings 8:16-25" },
         { name: "2 Chronicles 21:4-20" },
         { name: "2 Chronicles 22:1-6" },
         { name: "2 Kings 8:26-29" },
      ]
   },
   {
      name: "Day 172",
      sections: [
         { name: "2 Kings 9" },
         { name: "2 Chronicles 22:7-9" },
         { name: "2 Kings 10:1-27" },
         { name: "2 Kings 11:1-3" },
         { name: "2 Chronicles 22:10-12" },
      ]
   },
   {
      name: "Day 173",
      sections: [
         { name: "2 Kings 11:4-21" },
         { name: "2 Chronicles 23" },
         { name: "2 Kings 12:1-16" },
         { name: "2 Chronicles 24:1-16" },
         { name: "2 Kings 10:28-36" },
         { name: "2 Kings 13:1-3" },
         { name: "2 Kings 13:22,23" },
      ]
   },
   {
      name: "Day 174",
      sections: [
         { name: "2 Chronicles 24:17-25a" },
         { name: "2 Kings 12:17,18" },
         { name: "2 Kings 4" },
         { name: "2 Kings 13:4-8" },
         { name: "2 Kings 8:1-6" },
         { name: "2 Kings 13:9-11" },
         { name: "2 Kings 12:19-21" },
         { name: "2 Chronicles 24:25b-27" },
         { name: "2 Kings 14:1-6" },
         { name: "2 Chronicles 25:1-10" },
      ]
   },
   {
      name: "Day 175",
      sections: [
         { name: "2 Kings 14:7-14" },
         { name: "2 Chronicles 25:11-24" },
         { name: "2 Kings 5" },
         { name: "2 Kings 6" },
         { name: "2 Kings 7:1,2" },
      ]
   },
   {
      name: "Day 176",
      sections: [
         { name: "2 Kings 7:3-20" },
         { name: "2 Kings 8:7-15" },
         { name: "2 Kings 13:14-21" },
         { name: "2 Kings 13:24,25" },
         { name: "2 Kings 13:12,13" },
         { name: "2 Kings 14:15,16" },
         { name: "2 Kings 14:23" },
         { name: "2 Kings 14:17-20" },
         { name: "2 Chronicles 25:25-28" },
         { name: "2 Kings 14:21,22" },
         { name: "2 Kings 15:1-5" },
         { name: "2 Chronicles 26:1-21" },
         { name: "Amos 1" },
      ]
   },
   {
      name: "Day 177",
      sections: [
         { name: "Amos 2" },
         { name: "Amos 3" },
         { name: "Amos 4" },
         { name: "Amos 5" },
         { name: "Joel" },
      ]
   },
   {
      name: "Day 178",
      sections: [
         { name: "Amos 6" },
         { name: "Amos 7" },
         { name: "Amos 8" },
         { name: "Amos 9" },
         { name: "Hosea 1" },
         { name: "Hosea 2" },
         { name: "Hosea 3" },
      ]
   },
   {
      name: "Day 179",
      sections: [
         { name: "Hosea 4" },
         { name: "Hosea 5" },
         { name: "2 Kings 14:24-28" },
         { name: "Jonah" },
         { name: "2 Kings 14:29" },
         { name: "2 Kings 15:8-16" },
         { name: "Isaiah 1" },
         { name: "Isaiah 2" },
         { name: "Isaiah 3" },
         { name: "Isaiah 4" },
      ]
   },
   {
      name: "Day 180",
      sections: [
         { name: "2 Kings 15:17-20" },
         { name: "1 Chronicles 5:23-26" },
         { name: "2 Kings 15:6,7" },
         { name: "2 Chronicles 26:22,23" },
         { name: "2 Kings 15:21-29" },
         { name: "Isaiah 6" },
         { name: "2 Kings 15:32-38" },
         { name: "2 Chronicles 27" },
         { name: "1 Chronicles 5:11-17" },
         { name: "2 Kings 16:1-9" },
         { name: "2 Chronicles 28:1-21" },
      ]
   },
   {
      name: "Day 181",
      sections: [
         { name: "Isaiah 7" },
         { name: "Isaiah 8" },
         { name: "Isaiah 9" },
         { name: "Isaiah 17" },
      ]
   },
   {
      name: "Day 182",
      sections: [
         { name: "Hosea 6" },
         { name: "Hosea 7" },
         { name: "2 Kings 16:10-18" },
         { name: "2 Chronicles 28:22-25" },
         { name: "2 Kings 15:30,31" },
         { name: "2 Kings 17:1,2" },
         { name: "Hosea 8" },
         { name: "Hosea 9" },
      ]
   },
   {
      name: "Day 183",
      sections: [
         { name: "Hosea 10" },
         { name: "Hosea 11" },
         { name: "Hosea 12" },
         { name: "Hosea 13" },
         { name: "Hosea 14" },
         { name: "Micah 1:1-7" },
      ]
   },
   {
      name: "Day 184",
      sections: [
         { name: "2 Kings 17:3-23" },
         { name: "2 Kings 18:9-12" },
         { name: "2 Kings 17:24-41" },
         { name: "Isaiah 5" },
         { name: "2 Kings 16:19-20" },
         { name: "2 Chronicles 28:26,27" },
         { name: "2 Kings 18:1,2" },
         { name: "2 Chronicles 29:1" },
         { name: "1 Chronicles 4:34-43" },
      ]
   },
   {
      name: "Day 185",
      sections: [
         { name: "Isaiah 13" },
         { name: "Isaiah 14" },
         { name: "Isaiah 15" },
         { name: "Isaiah 16" },
      ]
   },
   {
      name: "Day 186",
      sections: [
         { name: "2 Chronicles 29:3-36" },
         { name: "2 Chronicles 30" },
         { name: "2 Chronicles 31:1" },
         { name: "Psalm 66" },
         { name: "Psalm 67" },
      ]
   },
   {
      name: "Day 187",
      sections: [
         { name: "2 Chronicles 31:2-21" },
         { name: "Isaiah 18" },
         { name: "Isaiah 19" },
         { name: "Isaiah 20" },
         { name: "Isaiah 21" },
      ]
   },
   {
      name: "Day 188",
      sections: [
         { name: "Isaiah 22" },
         { name: "Isaiah 23" },
         { name: "2 Kings 18:7b,8" },
         { name: "Micah 1:8-16" },
         { name: "Micah 2" },
         { name: "Micah 3:1-12" },
      ]
   },
   {
      name: "Day 189",
      sections: [
         { name: "Micah 4" },
         { name: "Micah 5" },
         { name: "Micah 6" },
         { name: "Micah 7" },
      ]
   },
   {
      name: "Day 190",
      sections: [
         { name: "2 Kings 18:13-37" },
         { name: "2 Kings 19:1-37" },
         { name: "2 Chronicles 32:1-23" },
      ]
   },
   {
      name: "Day 191",
      sections: [
         { name: "Psalm 75" },
         { name: "Psalm 76" },
         { name: "Psalm 77" },
      ]
   },
   {
      name: "Day 192",
      sections: [
         { name: "Psalm 87" },
         { name: "Psalm 125" },
         { name: "Isaiah 11" },
      ]
   },
   {
      name: "Day 193",
      sections: [
         { name: "Isaiah 10" },
         { name: "Isaiah 12" },
         { name: "Isaiah 28" },
      ]
   },
   {
      name: "Day 194",
      sections: [
         { name: "Isaiah 29" },
         { name: "Isaiah 30" },
         { name: "Isaiah 31" },
         { name: "Isaiah 32" },
      ]
   },
   {
      name: "Day 195",
      sections: [
         { name: "Isaiah 33" },
         { name: "Isaiah 34" },
         { name: "Isaiah 35" },
         { name: "Isaiah 36" },
         { name: "Isaiah 37:1-13" },
      ]
   },
   {
      name: "Day 196",
      sections: [
         { name: "Isaiah 37:14-38" },
         { name: "Isaiah 38:1-22" },
         { name: "2 Kings 20:1-11" },
         { name: "2 Chronicles 32:24-26" },
         { name: "2 Kings 20:12-19" },
         { name: "2 Chronicles:27-31" },
         { name: "Isaiah 39" },
      ]
   },
   {
      name: "Day 197",
      sections: [
         { name: "2 Kings 18:3-7a" },
         { name: "2 Chronicles 29:2" },
         { name: "2 Kings 20:20,21" },
         { name: "2 Chronicles 32:32,33" },
         { name: "Isaiah 24" },
         { name: "Isaiah 25" },
         { name: "Isaiah 26" },
         { name: "Isaiah 27" },
      ]
   },
   {
      name: "Day 198",
      sections: [
         { name: "Isaiah 40" },
         { name: "Isaiah 41" },
         { name: "Isaiah 42" },
      ]
   },
   {
      name: "Day 199",
      sections: [
         { name: "Isaiah 43" },
         { name: "Isaiah 44" },
         { name: "Isaiah 45" },
         { name: "Isaiah 46" },
      ]
   },
   {
      name: "Day 200",
      sections: [
         { name: "Isaiah 47" },
         { name: "Isaiah 48" },
         { name: "Isaiah 49" },
         { name: "Isaiah 50" },
      ]
   },
   {
      name: "Day 201",
      sections: [
         { name: "Isaiah 51" },
         { name: "Isaiah 52" },
         { name: "Isaiah 53" },
         { name: "Isaiah 54" },
         { name: "Isaiah 55" },
      ]
   },
   {
      name: "Day 202",
      sections: [
         { name: "Isaiah 56" },
         { name: "Isaiah 57" },
         { name: "Isaiah 58" },
         { name: "Isaiah 59" },
         { name: "Isaiah 60" },
      ]
   },
   {
      name: "Day 203",
      sections: [
         { name: "Isaiah 61" },
         { name: "Isaiah 62" },
         { name: "Isaiah 63" },
         { name: "Isaiah 64" },
         { name: "Isaiah 65" },
      ]
   },
   {
      name: "Day 204",
      sections: [
         { name: "Isaiah 66" },
         { name: "2 Kings 21:1-17" },
         { name: "2 Chronicles 33:1-9" },
         { name: "Psalm 82" },
         { name: "2 Chronicles 33:10-19" },
         { name: "2 Kings 21:18-26" },
         { name: "2 Chronicles 33:20-25" },
         { name: "2 Kings 22:1,2" },
         { name: "2 Chronicles 34:1-3" },
      ]
   },
   {
      name: "Day 205",
      sections: [
         { name: "Zephaniah 1" },
         { name: "Zephaniah 2" },
         { name: "Zephaniah 2" },
         { name: "2 Chronicles 34:4-7" },
         { name: "Jeremiah 1" },
      ]
   },
   {
      name: "Day 206",
      sections: [
         { name: "Jeremiah 2" },
         { name: "Jeremiah 3" },
         { name: "Jeremiah 4" },
      ]
   },
   {
      name: "Day 207",
      sections: [
         { name: "Jeremiah 5" },
         { name: "Jeremiah 6" },
         { name: "Jeremiah 13" },
      ]
   },
   {
      name: "Day 208",
      sections: [
         { name: "Jeremiah 16" },
         { name: "Jeremiah 17" },
         { name: "2 Kings 22:3-20" },
         { name: "2 Chronicles 34:8-33" },
      ]
   },
   {
      name: "Day 209",
      sections: [
         { name: "Nahum 1" },
         { name: "Nahum 2" },
         { name: "Nahum 3" },
         { name: "2 Kings 23:1-28" },
         { name: "2 Chronicles 35:1-19" },
      ]
   },
   {
      name: "Day 210",
      sections: [
         { name: "Psalm 81" },
         { name: "Jeremiah 47" },
         { name: "Jeremiah 48" },
         { name: "2 Kings 23:29,30" },
         { name: "2 Chronicles 35:20-27" },
         { name: "2 Chronicles 36:1" },
      ]
   },
   {
      name: "Day 211",
      sections: [
         { name: "Jeremiah 22:1-17" },
         { name: "2 Kings 23:31-37" },
         { name: "2 Chronicles 26:2-5" },
         { name: "Habakkuk 1" },
         { name: "Habakkuk 2" },
         { name: "Habakkuk 3" },
      ]
   },
   {
      name: "Day 212",
      sections: [
         { name: "Jeremiah 8:4-22" },
         { name: "Jeremiah 9:1-15" },
         { name: "Jeremiah 9:22-26" },
         { name: "Jeremiah 10:1-16" },
         { name: "Jeremiah 26" },
      ]
   },
   {
      name: "Day 213",
      sections: [
      ]
   },
   {
      name: "Day 214",
      sections: [
      ]
   },
   {
      name: "Day 215",
      sections: [
      ]
   },
   {
      name: "Day 216",
      sections: [
      ]
   },
   {
      name: "Day 217",
      sections: [
      ]
   },
   {
      name: "Day 218",
      sections: [
      ]
   },
   {
      name: "Day 219",
      sections: [
      ]
   },
   {
      name: "Day 220",
      sections: [
      ]
   },
   {
      name: "Day 221",
      sections: [
      ]
   },
   {
      name: "Day 222",
      sections: [
      ]
   },
   {
      name: "Day 223",
      sections: [
      ]
   },
   {
      name: "Day 224",
      sections: [
      ]
   },
   {
      name: "Day 225",
      sections: [
      ]
   },
   {
      name: "Day 226",
      sections: [
      ]
   },
   {
      name: "Day 227",
      sections: [
      ]
   },
   {
      name: "Day 228",
      sections: [
      ]
   },
   {
      name: "Day 229",
      sections: [
      ]
   },
   {
      name: "Day 230",
      sections: [
      ]
   },
   {
      name: "Day 231",
      sections: [
      ]
   },
   {
      name: "Day 232",
      sections: [
      ]
   },
   {
      name: "Day 233",
      sections: [
      ]
   },
   {
      name: "Day 234",
      sections: [
      ]
   },
   {
      name: "Day 235",
      sections: [
      ]
   },
   {
      name: "Day 236",
      sections: [
      ]
   },
   {
      name: "Day 237",
      sections: [
      ]
   },
   {
      name: "Day 238",
      sections: [
      ]
   },
   {
      name: "Day 239",
      sections: [
      ]
   },
   {
      name: "Day 240",
      sections: [
      ]
   },
   {
      name: "Day 241",
      sections: [
      ]
   },
   {
      name: "Day 242",
      sections: [
      ]
   },
   {
      name: "Day 243",
      sections: [
      ]
   },
   {
      name: "Day 244",
      sections: [
      ]
   },
   {
      name: "Day 245",
      sections: [
      ]
   },
   {
      name: "Day 246",
      sections: [
      ]
   },
   {
      name: "Day 247",
      sections: [
      ]
   },
   {
      name: "Day 248",
      sections: [
      ]
   },
   {
      name: "Day 249",
      sections: [
      ]
   },
   {
      name: "Day 250",
      sections: [
      ]
   },
   {
      name: "Day 251",
      sections: [
      ]
   },
   {
      name: "Day 252",
      sections: [
      ]
   },
   {
      name: "Day 253",
      sections: [
      ]
   },
   {
      name: "Day 254",
      sections: [
      ]
   },
   {
      name: "Day 255",
      sections: [
      ]
   },
   {
      name: "Day 256",
      sections: [
      ]
   },
   {
      name: "Day 257",
      sections: [
      ]
   },
   {
      name: "Day 258",
      sections: [
      ]
   },
   {
      name: "Day 259",
      sections: [
      ]
   },
   {
      name: "Day 260",
      sections: [
      ]
   },
   {
      name: "Day 261",
      sections: [
      ]
   },
   {
      name: "Day 262",
      sections: [
      ]
   },
   {
      name: "Day 263",
      sections: [
      ]
   },
   {
      name: "Day 264",
      sections: [
      ]
   },
   {
      name: "Day 265",
      sections: [
      ]
   },
   {
      name: "Day 266",
      sections: [
      ]
   },
   {
      name: "Day 267",
      sections: [
      ]
   },
   {
      name: "Day 268",
      sections: [
      ]
   },
   {
      name: "Day 269",
      sections: [
      ]
   },
   {
      name: "Day 270",
      sections: [
      ]
   },
   {
      name: "Day 271",
      sections: [
      ]
   },
   {
      name: "Day 272",
      sections: [
      ]
   },
   {
      name: "Day 273",
      sections: [
      ]
   },
   {
      name: "Day 274",
      sections: [
      ]
   },
   {
      name: "Day 275",
      sections: [
      ]
   },
   {
      name: "Day 276",
      sections: [
      ]
   },
   {
      name: "Day 277",
      sections: [
      ]
   },
   {
      name: "Day 278",
      sections: [
      ]
   },
   {
      name: "Day 279",
      sections: [
      ]
   },
   {
      name: "Day 280",
      sections: [
      ]
   },
   {
      name: "Day 281",
      sections: [
      ]
   },
   {
      name: "Day 282",
      sections: [
      ]
   },
   {
      name: "Day 283",
      sections: [
      ]
   },
   {
      name: "Day 284",
      sections: [
      ]
   },
   {
      name: "Day 285",
      sections: [
      ]
   },
   {
      name: "Day 286",
      sections: [
      ]
   },
   {
      name: "Day 287",
      sections: [
      ]
   },
   {
      name: "Day 288",
      sections: [
      ]
   },
   {
      name: "Day 289",
      sections: [
      ]
   },
   {
      name: "Day 290",
      sections: [
      ]
   },
   {
      name: "Day 291",
      sections: [
      ]
   },
   {
      name: "Day 292",
      sections: [
      ]
   },
   {
      name: "Day 293",
      sections: [
      ]
   },
   {
      name: "Day 294",
      sections: [
      ]
   },
   {
      name: "Day 295",
      sections: [
      ]
   },
   {
      name: "Day 296",
      sections: [
      ]
   },
   {
      name: "Day 297",
      sections: [
      ]
   },
   {
      name: "Day 298",
      sections: [
      ]
   },
   {
      name: "Day 299",
      sections: [
      ]
   },
   {
      name: "Day 300",
      sections: [
      ]
   },
   {
      name: "Day 301",
      sections: [
      ]
   },
   {
      name: "Day 302",
      sections: [
      ]
   },
   {
      name: "Day 303",
      sections: [
      ]
   },
   {
      name: "Day 304",
      sections: [
      ]
   },
   {
      name: "Day 305",
      sections: [
      ]
   },
   {
      name: "Day 306",
      sections: [
      ]
   },
   {
      name: "Day 307",
      sections: [
      ]
   },
   {
      name: "Day 308",
      sections: [
      ]
   },
   {
      name: "Day 309",
      sections: [
      ]
   },
   {
      name: "Day 310",
      sections: [
      ]
   },
   {
      name: "Day 311",
      sections: [
      ]
   },
   {
      name: "Day 312",
      sections: [
      ]
   },
   {
      name: "Day 313",
      sections: [
      ]
   },
   {
      name: "Day 314",
      sections: [
      ]
   },
   {
      name: "Day 315",
      sections: [
      ]
   },
   {
      name: "Day 316",
      sections: [
      ]
   },
   {
      name: "Day 317",
      sections: [
      ]
   },
   {
      name: "Day 318",
      sections: [
      ]
   },
   {
      name: "Day 319",
      sections: [
      ]
   },
   {
      name: "Day 320",
      sections: [
      ]
   },
   {
      name: "Day 321",
      sections: [
      ]
   },
   {
      name: "Day 322",
      sections: [
      ]
   },
   {
      name: "Day 323",
      sections: [
      ]
   },
   {
      name: "Day 324",
      sections: [
      ]
   },
   {
      name: "Day 325",
      sections: [
      ]
   },
   {
      name: "Day 326",
      sections: [
      ]
   },
   {
      name: "Day 327",
      sections: [
      ]
   },
   {
      name: "Day 328",
      sections: [
      ]
   },
   {
      name: "Day 329",
      sections: [
      ]
   },
   {
      name: "Day 330",
      sections: [
      ]
   },
   {
      name: "Day 331",
      sections: [
      ]
   },
   {
      name: "Day 332",
      sections: [
      ]
   },
   {
      name: "Day 333",
      sections: [
      ]
   },
   {
      name: "Day 334",
      sections: [
      ]
   },
   {
      name: "Day 335",
      sections: [
      ]
   },
   {
      name: "Day 336",
      sections: [
      ]
   },
   {
      name: "Day 337",
      sections: [
      ]
   },
   {
      name: "Day 338",
      sections: [
      ]
   },
   {
      name: "Day 339",
      sections: [
      ]
   },
   {
      name: "Day 340",
      sections: [
      ]
   },
   {
      name: "Day 341",
      sections: [
      ]
   },
   {
      name: "Day 342",
      sections: [
      ]
   },
   {
      name: "Day 343",
      sections: [
      ]
   },
   {
      name: "Day 344",
      sections: [
      ]
   },
   {
      name: "Day 345",
      sections: [
      ]
   },
   {
      name: "Day 346",
      sections: [
      ]
   },
   {
      name: "Day 347",
      sections: [
      ]
   },
   {
      name: "Day 348",
      sections: [
      ]
   },
   {
      name: "Day 349",
      sections: [
      ]
   },
   {
      name: "Day 350",
      sections: [
      ]
   },
   {
      name: "Day 351",
      sections: [
      ]
   },
   {
      name: "Day 352",
      sections: [
      ]
   },
   {
      name: "Day 353",
      sections: [
      ]
   },
   {
      name: "Day 354",
      sections: [
      ]
   },
   {
      name: "Day 355",
      sections: [
      ]
   },
   {
      name: "Day 356",
      sections: [
      ]
   },
   {
      name: "Day 357",
      sections: [
      ]
   },
   {
      name: "Day 358",
      sections: [
      ]
   },
   {
      name: "Day 359",
      sections: [
      ]
   },
   {
      name: "Day 360",
      sections: [
      ]
   },
   {
      name: "Day 361",
      sections: [
      ]
   },
   {
      name: "Day 362",
      sections: [
      ]
   },
   {
      name: "Day 363",
      sections: [
      ]
   },
   {
      name: "Day 364",
      sections: [
      ]
   },
   {
      name: "Day 365",
      sections: [
      ]
   },
];