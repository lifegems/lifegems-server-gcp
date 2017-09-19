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
      case 16: return 'SEVENTEEN';
      case 17: return 'EIGHTEEN';
      case 18: return 'NINETEEN';
      case 19: return 'TWENTY';
      case 20: return 'TWENTYONE';
      case 21: return 'TWENTYTWO';
      case 22: return 'TWENTYTHREE';
      case 23: return 'TWENTYFOUR';
      case 24: return 'TWENTYFIVE';
      case 25: return 'TWENTYSIX';
      case 26: return 'TWENTYSEVEN';
      case 27: return 'TWENTYEIGHT';
      case 28: return 'TWENTYNINE';
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
         { name: "Jeremiah 7" },
         { name: "Jeremiah 8:1-3" },
         { name: "Jeremiah 11:1-17" },
         { name: "Jeremiah 15:10-21" },
         { name: "Jeremiah 22:18-23" },
         { name: "Jeremiah 35" },
      ]
   },
   {
      name: "Day 214",
      sections: [
         { name: "2 Kings 24:1-4" },
         { name: "2 Chronicles 36:6,7" },
         { name: "Jeremiah 36" },
         { name: "Jeremiah 25" },
         { name: "Jeremiah 45" },
      ]
   },
   {
      name: "Day 215",
      sections: [
         { name: "Jeremiah 46" },
         { name: "Daniel 1" },
         { name: "2 Kings 24:7" },
         { name: "Daniel 2" },
      ]
   },
   {
      name: "Day 216",
      sections: [
         { name: "2 Kings 24:5-7" },
         { name: "2 Chronicles 36:8" },
         { name: "2 Kings 24:8,9" },
         { name: "2 Chronicles 36:9" },
         { name: "1 Chronicles 3:10-16" },
         { name: "Daniel 3" },
         { name: "Jeremiah 9:16-21" },
         { name: "Jeremiah 10:17-25" },
         { name: "Jeremiah 12:7-17" },
         { name: "Jeremiah 19:14,15" },
         { name: "Jeremiah 20" },
      ]
   },
   {
      name: "Day 217",
      sections: [
         { name: "Jeremiah 22:24-30" },
         { name: "Jereemiah 23:1-8" },
         { name: "2 Kings 24:10-17" },
         { name: "2 Chronicles 36:10" },
         { name: "Jeremiah 49:1-33" },
         { name: "Obadiah" },
      ]
   },
   {
      name: "Day 218",
      sections: [
         { name: "Jeremiah 14" },
         { name: "Jeremiah 15:1-9" },
         { name: "Jeremiah 18" },
         { name: "Jeremiah 19:1-13" },
         { name: "Jeremiah 24" },
      ]
   },
   {
      name: "Day 219",
      sections: [
         { name: "Jeremiah 29" },
         { name: "2 Kings 24:18-20" },
         { name: "2 Chronicles 36:11-14" },
         { name: "Jeremiah 49:34-39" },
         { name: "Jeremiah 50" },
      ]
   },
   {
      name: "Day 220",
      sections: [
         { name: "Jeremiah 51" },
         { name: "Jeremiah 11:18-23" },
         { name: "Jeremiah 12:1-6" },
      ]
   },
   {
      name: "Day 221",
      sections: [
         { name: "Jeremiah 23:9-40" },
         { name: "Jeremiah 27" },
         { name: "Jeremiah 28" },
      ]
   },
   {
      name: "Day 222",
      sections: [
         { name: "Ezekiel 1" },
         { name: "Ezekiel 2" },
         { name: "Ezekiel 3" },
         { name: "Ezekiel 4" },
      ]
   },
   {
      name: "Day 223",
      sections: [
         { name: "Ezekiel 5" },
         { name: "Ezekiel 6" },
         { name: "Ezekiel 7" },
         { name: "Ezekiel 8" },
         { name: "Ezekiel 9" },
      ]
   },
   {
      name: "Day 224",
      sections: [
         { name: "Ezekiel 10" },
         { name: "Ezekiel 11" },
         { name: "Ezekiel 12" },
         { name: "Ezekiel 13" },
      ]
   },
   {
      name: "Day 225",
      sections: [
         { name: "Ezekiel 14" },
         { name: "Ezekiel 15" },
         { name: "Ezekiel 16" },
      ]
   },
   {
      name: "Day 226",
      sections: [
         { name: "Ezekiel 17" },
         { name: "Ezekiel 18" },
         { name: "Ezekiel 19" },
         { name: "Ezekiel 20:1-29" },
      ]
   },
   {
      name: "Day 227",
      sections: [
         { name: "Ezekiel 20:30-49" },
         { name: "Ezekiel 21" },
         { name: "Ezekiel 22" },
      ]
   },
   {
      name: "Day 228",
      sections: [
         { name: "Ezekiel 23" },
         { name: "Jeremiah 21" },
         { name: "Ezekiel 24" },
      ]
   },
   {
      name: "Day 229",
      sections: [
         { name: "Ezekiel 25" },
         { name: "Jeremiah 37" },
         { name: "Jeremiah 38" },
         { name: "Ezekiel 29:1-16" },
         { name: "Ezekiel 30:20-26" },
      ]
   },
   {
      name: "Day 230",
      sections: [
         { name: "Ezekiel 31" },
         { name: "Jeremiah 32" },
         { name: "Jeremiah 33" },
      ]
   },
   {
      name: "Day 231",
      sections: [
         { name: "Jeremiah 34" },
         { name: "2 Kings 25:1-21" },
         { name: "2 Chronicles 36:15-21" },
         { name: "Jeremiah 39" },
      ]
   },
   {
      name: "Day 232",
      sections: [
         { name: "Jeremiah 52:1-30" },
         { name: "Psalm 74" },
         { name: "Psalm 79" },
         { name: "Psalm 85" },
      ]
   },
   {
      name: "Day 233",
      sections: [
         { name: "Psalm 102" },
         { name: "Psalm 120" },
         { name: "Psalm 137" },
         { name: "Lamentations 1" },
         { name: "Lamentations 2" },
      ]
   },
   {
      name: "Day 234",
      sections: [
         { name: "Lamentations 3" },
         { name: "Lamentations 4" },
      ]
   },
   {
      name: "Day 235",
      sections: [
         { name: "Lamentations 5" },
         { name: "2 Kings 25:22-26" },
         { name: "Jeremiah 40" },
         { name: "Jeremiah 41" },
         { name: "Jeremiah 42" },
      ]
   },
   {
      name: "Day 236",
      sections: [
         { name: "Psalm 80" },
         { name: "Psalm 116" },
         { name: "Jeremiah 43" },
         { name: "Jeremiah 44" },
      ]
   },
   {
      name: "Day 237",
      sections: [
         { name: "Jeremiah 30" },
         { name: "Jeremiah 31" },
         { name: "Ezekiel 26" },
      ]
   },
   {
      name: "Day 238",
      sections: [
         { name: "Ezekiel 27" },
         { name: "Ezekiel 28" },
         { name: "Ezekiel 33:21-33" },
      ]
   },
   {
      name: "Day 239",
      sections: [
         { name: "Ezekiel 34" },
         { name: "Ezekiel 35" },
         { name: "Ezekiel 36" },
      ]
   },
   {
      name: "Day 240",
      sections: [
         { name: "Ezekiel 37" },
         { name: "Ezekiel 38" },
         { name: "Ezekiel 39" },
      ]
   },
   {
      name: "Day 241",
      sections: [
         { name: "Ezekiel 32" },
         { name: "Ezekiel 33:1-20" },
         { name: "Ezekiel 40:1-27" },
      ]
   },
   {
      name: "Day 242",
      sections: [
         { name: "Ezekiel 40:28" },
         { name: "Ezekiel 41" },
         { name: "Ezekiel 42" },
         { name: "Ezekiel 43" },
      ]
   },
   {
      name: "Day 243",
      sections: [
         { name: "Ezekiel 44" },
         { name: "Ezekiel 45" },
         { name: "Ezekiel 46" },
      ]
   },
   {
      name: "Day 244",
      sections: [
         { name: "Ezekiel 47" },
         { name: "Ezekiel 48" },
         { name: "Ezekiel 29:17-21" },
         { name: "Ezekiel 30:1-19" },
      ]
   },
   {
      name: "Day 245",
      sections: [
         { name: "Daniel 4" },
         { name: "2 Kings 25:27-30" },
         { name: "Jeremiah 52:31-34" },
         { name: "Daniel 7" },
      ]
   },
   {
      name: "Day 246",
      sections: [
         { name: "Daniel 8" },
         { name: "Daniel 5" },
         { name: "2 Chronicles 36:22,23" },
         { name: "Daniel 9" },
      ]
   },
   {
      name: "Day 247",
      sections: [
         { name: "Ezra 1:1-4" },
         { name: "Daniel 6" },
         { name: "Ezra 1:5-11" },
         { name: "Ezra 2:1-20" },
         { name: "Nehemiah 7:4-25" },
      ]
   },
   {
      name: "Day 248",
      sections: [
         { name: "Ezra 2:21-70" },
         { name: "Nehemiah 7:26-73" },
      ]
   },
   {
      name: "Day 249",
      sections: [
         { name: "Ezra 3" },
         { name: "Psalm 92" },
         { name: "Psalm 126" },
         { name: "Daniel 10" },
         { name: "Daniel 11:1-35" },
      ]
   },
   {
      name: "Day 250",
      sections: [
         { name: "Daniel 11:36-45" },
         { name: "Daniel 12" },
         { name: "Psalm 93" },
         { name: "Psalm 94" },
         { name: "Psalm 95" },
         { name: "Psalm 96" },
      ]
   },
   {
      name: "Day 251",
      sections: [
         { name: "Psalm 97" },
         { name: "Psalm 99" },
         { name: "Psalm 100" },
         { name: "Ezra 4:1-5" },
         { name: "Ezra 4:24" },
         { name: "Haggai 1" },
         { name: "Haggai 2" },
      ]
   },
   {
      name: "Day 252",
      sections: [
         { name: "Zechariah 1" },
         { name: "Zechariah 2" },
         { name: "Zechariah 3" },
         { name: "Zechariah 4" },
         { name: "Zechariah 5" },
         { name: "Zechariah 6" },
      ]
   },
   {
      name: "Day 253",
      sections: [
         { name: "Zechariah 7" },
         { name: "Zechariah 8" },
         { name: "Ezra 5" },
         { name: "Ezra 6:1-18" },
      ]
   },
   {
      name: "Day 254",
      sections: [
         { name: "Psalm 118" },
         { name: "Psalm 129" },
         { name: "Psalm 148" },
         { name: "Psalm 149" },
         { name: "Psalm 150" },
         { name: "Ezra 6:19-22" },
         { name: "Zechariah 9" },
      ]
   },
   {
      name: "Day 255",
      sections: [
         { name: "Zechariah 10" },
         { name: "Zechariah 11" },
         { name: "Zechariah 12" },
         { name: "Zechariah 13" },
         { name: "Zechariah 14" },
      ]
   },
   {
      name: "Day 256",
      sections: [
         { name: "Esther 1" },
         { name: "Esther 2" },
         { name: "Esther 3" },
         { name: "Esther 4" },
      ]
   },
   {
      name: "Day 257",
      sections: [
         { name: "Esther 5" },
         { name: "Esther 6" },
         { name: "Esther 7" },
         { name: "Esther 8" },
         { name: "Esther 9:1-17" },
      ]
   },
   {
      name: "Day 258",
      sections: [
         { name: "Esther 9:18-" },
         { name: "Esther 10:1-3" },
         { name: "Ezra 4:6-23" },
         { name: "Psalm 105" },
      ]
   },
   {
      name: "Day 259",
      sections: [
         { name: "Psalm 106" },
         { name: "Ezra 7" },
         { name: "Ezra 8:1-14" },
      ]
   },
   {
      name: "Day 260",
      sections: [
         { name: "Ezra 8:15-" },
         { name: "Ezra 9" },
         { name: "Ezra 10:1-44" },
         { name: "1 Chronicles 3:17-24" },
      ]
   },
   {
      name: "Day 261",
      sections: [
         { name: "Nehemiah 1" },
         { name: "Nehemiah 2" },
         { name: "Nehemiah 3" },
         { name: "Nehemiah 4" },
      ]
   },
   {
      name: "Day 262",
      sections: [
         { name: "Nehemiah 5" },
         { name: "Nehemiah 6" },
         { name: "Nehemiah 7:1-3" },
         { name: "Psalm 107" },
      ]
   },
   {
      name: "Day 263",
      sections: [
         { name: "Psalm 111" },
         { name: "Psalm 112" },
         { name: "Psalm 117" },
         { name: "Psalm 119:1-72" },
      ]
   },
   {
      name: "Day 264",
      sections: [
         { name: "Psalm 119:73-176" },
      ]
   },
   {
      name: "Day 265",
      sections: [
         { name: "Psalm 121" },
         { name: "Psalm 123" },
         { name: "Psalm 128" },
         { name: "Psalm 130" },
         { name: "Psalm 135" },
         { name: "Psalm 136" },
      ]
   },
   {
      name: "Day 266",
      sections: [
         { name: "Nehemiah 8" },
         { name: "Nehemiah 9" },
         { name: "Psalm 146" },
      ]
   },
   {
      name: "Day 267",
      sections: [
         { name: "Nehemiah 10" },
         { name: "Nehemiah 11" },
         { name: "Psalm 147" },
      ]
   },
   {
      name: "Day 268",
      sections: [
         { name: "1 Chronicles 9:1b-34" },
         { name: "Nehemiah 12" },
         { name: "Psalm 98" },
         { name: "Psalm 134" },
      ]
   },
   {
      name: "Day 269",
      sections: [
         { name: "Nehemiah 13" },
         { name: "Psalm 50" },
      ]
   },
   {
      name: "Day 270",
      sections: [
         { name: "Malachi 1" },
         { name: "Malachi 2" },
         { name: "Malachi 3" },
         { name: "Malachi 4" },
      ]
   },
   {
      name: "Day 271",
      sections: [
         { name: "Luke 1" },
      ]
   },
   {
      name: "Day 272",
      sections: [
         { name: "Matthew 1:18-25" },
         { name: "Luke 2:1-20" },
         { name: "Matthew 1:1-17" },
         { name: "Luke 3:23-38" },
         { name: "Luke 2:21-40" },
      ]
   },
   {
      name: "Day 273",
      sections: [
         { name: "Matthew 2" },
         { name: "Luke 2:41-52" },
         { name: "Mark 1:1-8" },
         { name: "Matthew 3:1-12" },
         { name: "John 1:1-18" },
      ]
   },
   {
      name: "Day 274",
      sections: [
         { name: "John 1:19-28" },
         { name: "Mark 1:9-11" },
         { name: "Matthew 3:13-17" },
         { name: "Luke 3:21,22" },
         { name: "John 1:29-34" },
         { name: "Mark 1:12,13" },
         { name: "Matthew 4:1-11" },
         { name: "Luke 4:1-13" },
         { name: "John 1:35-51" },
         { name: "Mark 1:16-20" },
         { name: "Matthew 4:18-20" },
         { name: "Luke 5:1-11" },
      ]
   },
   {
      name: "Day 275",
      sections: [
         { name: "John 2" },
         { name: "John 3" },
         { name: "John 4:1-26" },
      ]
   },
   {
      name: "Day 276",
      sections: [
         { name: "John 4:27-42" },
         { name: "Mark 1:14-15" },
         { name: "Matthew 4:12-17" },
         { name: "Luke 4:14,15" },
         { name: "John 4:43-46a" },
         { name: "Luke 4:16-30" },
         { name: "Mark 1:21-28" },
         { name: "Luke 4:31-37" },
         { name: "Mark 1:29-39" },
         { name: "Matthew 8:14-17" },
         { name: "Luke 1:38-44" },
         { name: "Mark 1:40-45" },
         { name: "Matthew 8:1-4" },
         { name: "Luke 5:12-16" },
      ]
   },
   {
      name: "Day 277",
      sections: [
         { name: "Mark 2:1-12" },
         { name: "Matthew 9:1-8" },
         { name: "Luke 5:17-26" },
         { name: "Mark 2:13-17" },
         { name: "Matthew 9:9-13" },
         { name: "Luke 5:27-32" },
         { name: "Mark 2:18-22" },
         { name: "Matthew 9:14-17" },
         { name: "Luke 5:33-39" },
         { name: "Mark 2:23-28" },
         { name: "Matthew 12:1-8" },
         { name: "Luke 6:1-5" },
      ]
   },
   {
      name: "Day 278",
      sections: [
         { name: "Mark 3:1-6" },
         { name: "Matthew 12:9-14" },
         { name: "Luke 6:6-11" },
         { name: "Mark 3:7-12" },
         { name: "Matthew 12:14-21" },
         { name: "Mark 3:13-19" },
         { name: "Luke 6:12-16" },
         { name: "Matthew 4:23-25" },
         { name: "Matthew 5:1-20" },
      ]
   },
   {
      name: "Day 279",
      sections: [
         { name: "Matthew 5:21-48" },
         { name: "Matthew 6" },
         { name: "Matthew 7" },
      ]
   },
   {
      name: "Day 280",
      sections: [
         { name: "Luke 6:17-49" },
         { name: "Matthew 11:1-19" },
         { name: "Luke 7:36-50" },
         { name: "Luke 8:1-3" },
         { name: "Matthew 3:20-30" },
         { name: "Matthew 12:22-45" },
         { name: "Luke 11:14-26" },
      ]
   },
   {
      name: "Day 281",
      sections: [
         { name: "Luke 7:18-35" },
         { name: "Matthew 11:1-19" },
         { name: "Luke 7:36-50" },
         { name: "Luke 8:1-3" },
         { name: "Mark 3:20-30" },
         { name: "Matthew 12:22-45" },
         { name: "Luke 11:14-26" },
      ]
   },
   {
      name: "Day 282",
      sections: [
         { name: "Mark 3:31-35" },
         { name: "Matthew 12:46-50" },
         { name: "Luke 8:19-21" },
         { name: "Mark 4:1-20" },
         { name: "Luke 8:19-21" },
         { name: "Mark 4:1-20" },
         { name: "Matthew 13:1-23" },
         { name: "Luke 8:4-18" },
         { name: "Mark 4:21-29" },
      ]
   },
   {
      name: "Day 283",
      sections: [
         { name: "Mark 4:30-34" },
         { name: "Matthew 1:46-50" },
         { name: "Luke 13:18-21" },
         { name: "Matthew 13:24-30" },
         { name: "Matthew 13:36-52" },
         { name: "Mark 4:35-41" },
         { name: "Matthew 8:23-27" },
         { name: "Luke 8:22-25" },
         { name: "Mark 5:1-20" },
         { name: "Matthew 8:28-34" },
         { name: "Luke 8:26-39" },
      ]
   },
   {
      name: "Day 284",
      sections: [
         { name: "Mark 5:21-43" },
         { name: "Matthew 9:18-26" },
         { name: "Luke 8:40-56" },
         { name: "Matthew 9:27-34" },
         { name: "Mark 6:1-6a" },
         { name: "Matthew 13:53-58" },
         { name: "John 5:1-15" },
      ]
   },
   {
      name: "Day 285",
      sections: [
         { name: "John 5:16-47" },
         { name: "Mark 6:6b-11" },
         { name: "Matthew 9:35-38" },
         { name: "Matthew 10" },
         { name: "Luke 9:1-5" },
      ]
   },
   {
      name: "Day 286",
      sections: [
         { name: "Mark 6:14-29" },
         { name: "Matthew 14:1-12" },
         { name: "Luke 9:7-9" },
         { name: "Mark 6:12,13" },
         { name: "Luke 9:6" },
         { name: "Mark 6:30-44" },
         { name: "Matthew 14:13-21" },
         { name: "Luke 9:10-17" },
         { name: "John 6:1-15" },
      ]
   },
   {
      name: "Day 287",
      sections: [
         { name: "Mark 6:45-56" },
         { name: "Matthew 14:22-36" },
         { name: "John 6:16-59" },
      ]
   },
   {
      name: "Day 288",
      sections: [
         { name: "Mark 7:1-23" },
         { name: "Matthew 15:1-20" },
         { name: "Mark 7:24-30" },
         { name: "Matthew 15:21-28" },
         { name: "Mark 7:31-37" },
         { name: "Matthew 15:29-31" },
         { name: "Mark 8:1-10" },
         { name: "Matthew 15:32-39" },
      ]
   },
   {
      name: "Day 289",
      sections: [
         { name: "Mark 8:11-13" },
         { name: "Matthew 16:1-4" },
         { name: "Mark 8:14-21" },
         { name: "Matthew 16:5-12" },
         { name: "Mark 8:22-30" },
         { name: "Matthew 16:13-20" },
         { name: "Luke 9:18-21" },
         { name: "John 6:60-71" },
         { name: "Mark 8:31-38" },
         { name: "Mark 9:1" },
         { name: "Matthew 16:21-28" },
         { name: "Luke 9:22-27" },
      ]
   },
   {
      name: "Day 290",
      sections: [
         { name: "Mark 9:2-13" },
         { name: "Matthew 17:1-13" },
         { name: "Luke 9:28-36" },
         { name: "Mark 9:14-32" },
         { name: "Matthew 17:14-23" },
         { name: "Luke 9:37-45" },
         { name: "Mark 9:33-37" },
         { name: "Matthew 18:1-5" },
         { name: "Luke 9:46-48" },
      ]
   },
   {
      name: "Day 291",
      sections: [
         { name: "Matthew 17:24-27" },
         { name: "Mark 9:38-41" },
         { name: "Luke 9:49,50" },
         { name: "Mark 9:42-50" },
         { name: "Matthew 18:6-9" },
         { name: "Matthew 18:10-35" },
         { name: "Mark 10:1" },
         { name: "Matthew 19:1,2" },
         { name: "Luke 9:51-62" },
         { name: "Matthew 8:18-22" },
         { name: "Luke 10:1-20" },
         { name: "Matthew 11:20-24" },
      ]
   },
   {
      name: "Day 292",
      sections: [
         { name: "Luke 10:21-24" },
         { name: "Matthew 11:25-30" },
         { name: "Luke 10:38-42" },
         { name: "Luke 11:1-13" },
         { name: "Luke 11:27-54" },
         { name: "Luke 12:1-21" },
      ]
   },
   {
      name: "Day 293",
      sections: [
         { name: "Luke 12:22-59" },
         { name: "Luke 13:1-17" },
         { name: "Luke 13:22-35" },
         { name: "Luke 14:1-24" },
      ]
   },
   {
      name: "Day 294",
      sections: [
         { name: "Luke 14:25-35" },
         { name: "Luke 15" },
         { name: "Luke 16:1-17" },
         { name: "Luke 16:19-31" },
         { name: "Luke 17:1-19" },
      ]
   },
   {
      name: "Day 295",
      sections: [
         { name: "Luke 17:20-37" },
         { name: "Luke 18:1-14" },
         { name: "John 7" },
      ]
   },
   {
      name: "Day 296",
      sections: [
         { name: "John 8" },
         { name: "John 9" },
      ]
   },
   {
      name: "Day 297",
      sections: [
         { name: "John 9:35-41" },
         { name: "John 10:1-21" },
         { name: "Mark 10:2-12" },
         { name: "Matthew 19:3-12" },
         { name: "Luke 16:18" },
         { name: "Mark 10:13-16" },
         { name: "Matthew 19:13-15" },
         { name: "Luke 18:15-17" },
         { name: "Mark 10:17-22" },
         { name: "Matthew 19:16-22" },
         { name: "Luke 18:18-23" },
      ]
   },
   {
      name: "Day 298",
      sections: [
         { name: "Mark 10:23-31" },
         { name: "Matthew 19:23-30" },
         { name: "Luke 18:24-30" },
         { name: "Matthew 20:1-16" },
         { name: "John 10:22-42" },
         { name: "John 11:1-16" },
      ]
   },
   {
      name: "Day 299",
      sections: [
         { name: "John 11:17-57" },
         { name: "Mark 10:32-45" },
         { name: "Matthew 20:17-28" },
         { name: "Luke 18:31-34" },
         { name: "Mark 10:46-52" },
         { name: "Matthew 20:29-34" },
         { name: "Luke 18:35-43" },
      ]
   },
   {
      name: "Day 300",
      sections: [
         { name: "Luke 19:1-10" },
         { name: "Mark 11:1-11" },
         { name: "Matthew 21:1-11" },
         { name: "Luke 19:28-44" },
         { name: "John 12:12-19" },
         { name: "Mark 11:12-26" },
         { name: "Matthew 21:12-22" },
         { name: "Luke 19:45-48" },
      ]
   },
   {
      name: "Day 301",
      sections: [
         { name: "Mark 11:27-33" },
         { name: "Matthew 21:23-27" },
         { name: "Luke 20:1-8" },
         { name: "Matthew 21:28-32" },
         { name: "Mark 12:1-12" },
         { name: "Matthew 21:33-46" },
         { name: "Luke 20:9-19" },
         { name: "Matthew 22:1-14" },
         { name: "Mark 12:13-17" },
         { name: "Matthew 22:15-22" },
         { name: "Luke 20:20-26" },
      ]
   },
   {
      name: "Day 302",
      sections: [
         { name: "Mark 12:18-27" },
         { name: "Matthew 22:23-33" },
         { name: "Luke 20:27-40" },
         { name: "Mark 12:28-34" },
         { name: "Matthew 22:34-40" },
         { name: "Luke 10:25-37" },
         { name: "Mark 12:35-37a" },
         { name: "Matthew 22:41-46" },
         { name: "Luke 20:41-44" },
         { name: "Matthew 23:1-36" },
         { name: "Mark 12:37b-40" },
         { name: "Luke 20:45-47" },
      ]
   },
   {
      name: "Day 303",
      sections: [
         { name: "Matthew 23:37-39" },
         { name: "Mark 12:41-44" },
         { name: "Luke 21:1-4" },
         { name: "Mark 13:1-23" },
         { name: "Matthew 24:1-28" },
         { name: "Luke 21:5-24" },
      ]
   },
   {
      name: "Day 304",
      sections: [
         { name: "Mark 13:24-31" },
         { name: "Matthew 24:29-35" },
         { name: "Luke 21:25-38" },
         { name: "Mark 13:32-37" },
         { name: "Matthew 24:36-51" },
         { name: "Matthew 25:1-30" },
         { name: "Luke 19:11-27" },
      ]
   },
   {
      name: "Day 305",
      sections: [
         { name: "Matthew 25:31-46" },
         { name: "John 12:20-50" },
         { name: "Mark 14:1-11" },
         { name: "Matthew 26:1-16" },
         { name: "Luke 22:1-6" },
         { name: "John 12:1-11" },
      ]
   },
   {
      name: "Day 306",
      sections: [
         { name: "Mark 14:12-17" },
         { name: "Matthew 26:17-20" },
         { name: "Luke 22:7-14" },
         { name: "John 13:1-20" },
         { name: "Mark 14:18-21" },
         { name: "Matthew 26:21-25" },
         { name: "Luke 22:21-23" },
         { name: "John 13:21-30" },
         { name: "Luke 22:24-30" },
      ]
   },
   {
      name: "Day 307",
      sections: [
         { name: "Mark 14:22-26" },
         { name: "Matthew 26:26-29" },
         { name: "Luke 22:15-20" },
         { name: "John 13:31-35" },
         { name: "Mark 14:27-31" },
         { name: "Matthew 26:30-35" },
         { name: "Luke 22:31-38" },
         { name: "John 13:36-38" },
         { name: "John 14" },
         { name: "John 15:1-16" },
      ]
   },
   {
      name: "Day 308",
      sections: [
         { name: "John 15:17-27" },
         { name: "John 16" },
         { name: "John 17" },
         { name: "Mark 14:32-42" },
         { name: "Matthew 26:36-46" },
         { name: "Luke 22:39-46" },
      ]
   },
   {
      name: "Day 309",
      sections: [
        { name: "Mark 14:43-52" },
        { name: "Matthew 26:47-56" },
        { name: "Luke 22:47-53" },
        { name: "John 18:1-11" },
        { name: "Mark 14:53-72" },
        { name: "Matthew 26:57-75" },
        { name: "Luke 22:54-71" },
        { name: "John 18:12-27" },
      ]
   },
   {
      name: "Day 310",
      sections: [
        { name: "Matthew 27:1-10" },
        { name: "Luke 23:1-12" },
        { name: "Mark 15:1-5" },
        { name: "Matthew 27:11-14" },
        { name: "John 18:28-38" },
      ]
   },
   {
      name: "Day 311",
      sections: [
        { name: "Mark 15:6-15" },
        { name: "Matthew 27:15-26" },
        { name: "Luke 23:13-25" },
        { name: "John 18:39,40" },
        { name: "John 19:1-17" },
        { name: "Mark 15:16-20a" },
        { name: "Matthew 27:27-31" },
        { name: "Luke 23:26-32" },
        { name: "Mark 15:20b,21" },
        { name: "Matthew 27:32" },
      ]
   },
   {
      name: "Day 312",
      sections: [
        { name: "Mark 15:22-41" },
        { name: "Matthew 27:33-56" },
        { name: "Luke 23:33-49" },
        { name: "John 19:18-37" },
      ]
   },
   {
      name: "Day 313",
      sections: [
        { name: "Mark 15:42-47" },
        { name: "Matthew 27:57-61" },
        { name: "Luke 23:5-56" },
        { name: "John 19:38-42" },
        { name: "Matthew 27:62-66" },
        { name: "Mark 16:1-8" },
        { name: "Matthew 28:1-8" },
        { name: "Luke 24:1-12" },
        { name: "John 20:1-13" },
        { name: "Matthew 28:9,10" },
        { name: "John 20:14-18" },
      ]
   },
   {
      name: "Day 314",
      sections: [
        { name: "Matthew 28:11-15" },
        { name: "Luke 24:13-43" },
        { name: "John 20:19-31" },
        { name: "Matthew 28:16-20" },
        { name: "John 21" },
        { name: "Luke 24:44-53" },
      ]
   },
   {
      name: "Day 315",
      sections: [
        { name: "Mark 16:9-20" },
        { name: "Acts 1" },
        { name: "Acts 2" },
      ]
   },
   {
      name: "Day 316",
      sections: [
        { name: "Acts 3" },
        { name: "Acts 4" },
        { name: "Acts 5:1-16" },
      ]
   },
   {
      name: "Day 317",
      sections: [
         { name: "Acts 5:17-" },
         { name: "Acts 6" },
         { name: "Acts 7:1-53" },
      ]
   },
   {
      name: "Day 318",
      sections: [
         { name: "Acts 7:54-60" },
         { name: "Acts 8" },
         { name: "Acts 9:1-31" },
      ]
   },
   {
      name: "Day 319",
      sections: [
         { name: "Acts 9:32-43" },
         { name: "Acts 10" },
         { name: "Acts 11:1-18" },
      ]
   },
   {
      name: "Day 320",
      sections: [
         { name: "James 1" },
         { name: "James 2" },
         { name: "James 3" },
      ]
   },
   {
      name: "Day 321",
      sections: [
         { name: "James 4" },
         { name: "James 5" },
         { name: "Acts 11:19-30" },
         { name: "Acts 12:1-25" },
      ]
   },
   {
      name: "Day 322",
      sections: [
         { name: "Acts 13" },
         { name: "Acts 14" },
      ]
   },
   {
      name: "Day 323",
      sections: [
         { name: "Galatians 1" },
         { name: "Galatians 2" },
         { name: "Galatians 3" },
         { name: "Galatians 4:1-7" },
      ]
   },
   {
      name: "Day 324",
      sections: [
         { name: "Galatians 4:8-31" },
         { name: "Galatians 5" },
         { name: "Galatians 6" },
      ]
   },
   {
      name: "Day 325",
      sections: [
         { name: "Acts 15" },
         { name: "Acts 16" },
      ]
   },
   {
      name: "Day 326",
      sections: [
         { name: "Acts 17" },
         { name: "Acts 18:1-17" },
         { name: "1 Thessalonians 1" },
         { name: "1 Thessalonians 2:1-16" },
      ]
   },
   {
      name: "Day 327",
      sections: [
         { name: "1 Thessalonians 2:17-20" },
         { name: "1 Thessalonians 3" },
         { name: "1 Thessalonians 4" },
         { name: "1 Thessalonians 5" },
         { name: "2 Thessalonians 1" },
      ]
   },
   {
      name: "Day 328",
      sections: [
         { name: "2 Thessalonians 2" },
         { name: "2 Thessalonians 3" },
         { name: "Acts 18:18-28" },
         { name: "Acts 19" },
      ]
   },
   {
      name: "Day 329",
      sections: [
         { name: "1 Corinthians 1" },
         { name: "1 Corinthians 2" },
         { name: "1 Corinthians 3" },
         { name: "1 Corinthians 4" },
      ]
   },
   {
      name: "Day 330",
      sections: [
         { name: "1 Corinthians 5" },
         { name: "1 Corinthians 6" },
         { name: "1 Corinthians 7" },
      ]
   },
   {
      name: "Day 331",
      sections: [
         { name: "1 Corinthians 8" },
         { name: "1 Corinthians 9" },
         { name: "1 Corinthians 10" },
         { name: "1 Corinthians 11:1" },
      ]
   },
   {
      name: "Day 332",
      sections: [
         { name: "1 Corinthians 11:2-34" },
         { name: "1 Corinthians 12" },
         { name: "1 Corinthians 13:1-13" },
      ]
   },
   {
      name: "Day 333",
      sections: [
         { name: "1 Corinthians 14" },
         { name: "1 Corinthians 15:1-34" },
      ]
   },
   {
      name: "Day 334",
      sections: [
         { name: "1 Corinthians 15:35-58" },
         { name: "1 Corinthians 16" },
         { name: "Acts 20;1-6" },
         { name: "2 Corinthians 1" },
         { name: "2 Corinthians 2:1-4" },
      ]
   },
   {
      name: "Day 335",
      sections: [
         { name: "2 Corinthians 2:5-17" },
         { name: "2 Corinthians 3" },
         { name: "2 Corinthians 4" },
         { name: "2 Corinthians 5" },
         { name: "2 Corinthians 6" },
      ]
   },
   {
      name: "Day 336",
      sections: [
         { name: "2 Corinthians 7" },
         { name: "2 Corinthians 8" },
         { name: "2 Corinthians 9" },
         { name: "2 Corinthians 10" },
      ]
   },
   {
      name: "Day 337",
      sections: [
         { name: "2 Corinthians 11:1-15" },
         { name: "2 Corinthians 12" },
         { name: "2 Corinthians 13" },
         { name: "Romans 1" },
      ]
   },
   {
      name: "Day 338",
      sections: [
         { name: "Romans 2" },
         { name: "Romans 3" },
         { name: "Romans 4" },
      ]
   },
   {
      name: "Day 339",
      sections: [
         { name: "Romans 5" },
         { name: "Romans 6" },
         { name: "Romans 7" },
         { name: "Romans 8:1-17" },
      ]
   },
   {
      name: "Day 340",
      sections: [
         { name: "Romans 8:18-39" },
         { name: "Romans 9" },
         { name: "Romans 10" },
         { name: "Romans 11:1-10" },
      ]
   },
   {
      name: "Day 341",
      sections: [
         { name: "Romans 11:11-36" },
         { name: "Romans 12" },
         { name: "Romans 13" },
         { name: "Romans 14" },
      ]
   },
   {
      name: "Day 342",
      sections: [
         { name: "Romans 15" },
         { name: "Romans 16" },
         { name: "Acts 20:7-38" },
      ]
   },
   {
      name: "Day 343",
      sections: [
         { name: "Acts 21" },
         { name: "Acts 22" },
         { name: "Acts 23:1-11" },
      ]
   },
   {
      name: "Day 344",
      sections: [
         { name: "Acts 23:12-35" },
         { name: "Acts 24" },
         { name: "Acts 25:1-22" },
      ]
   },
   {
      name: "Day 345",
      sections: [
         { name: "Acts 25:23-27" },
         { name: "Acts 26" },
         { name: "Acts 27" },
         { name: "Acts 28:1-10" },
      ]
   },
   {
      name: "Day 346",
      sections: [
         { name: "Acts 28:11-31" },
         { name: "Ephesians 1" },
         { name: "Ephesians 2" },
         { name: "Ephesians 3" },
      ]
   },
   {
      name: "Day 347",
      sections: [
         { name: "Ephesians 4" },
         { name: "Ephesians 5" },
         { name: "Ephesians 6" },
      ]
   },
   {
      name: "Day 348",
      sections: [
         { name: "Colossians 1" },
         { name: "Colossians 2" },
         { name: "Colossians 3" },
         { name: "Colossians 4" },
      ]
   },
   {
      name: "Day 349",
      sections: [
         { name: "Philemon 1" },
         { name: "Philippians 1" },
         { name: "Philippians 2" },
      ]
   },
   {
      name: "Day 350",
      sections: [
         { name: "Philippians 3" },
         { name: "Philippians 4" },
         { name: "1 Timothy 1" },
         { name: "1 Timothy 2" },
      ]
   },
   {
      name: "Day 351",
      sections: [
         { name: "1 Timothy 3" },
         { name: "1 Timothy 4" },
         { name: "1 Timothy 5" },
         { name: "1 Timothy 6" },
      ]
   },
   {
      name: "Day 352",
      sections: [
         { name: "Titus 1" },
         { name: "Titus 2" },
         { name: "Titus 3" },
         { name: "1 Peter 1" },
         { name: "1 Peter 2:1-12" },
      ]
   },
   {
      name: "Day 353",
      sections: [
         { name: "1 Peter 2:13-25" },
         { name: "1 Peter 3" },
         { name: "1 Peter 4" },
         { name: "1 Peter 5" },
         { name: "Jude 1" },
      ]
   },
   {
      name: "Day 354",
      sections: [
         { name: "2 Peter 1" },
         { name: "2 Peter 2" },
         { name: "2 Peter 3" },
         { name: "2 Timothy 1" },
      ]
   },
   {
      name: "Day 355",
      sections: [
         { name: "2 Timothy 2" },
         { name: "2 Timothy 3" },
         { name: "2 Timothy 4" },
         { name: "Hebrews 1" },
      ]
   },
   {
      name: "Day 356",
      sections: [
         { name: "Hebrews 2" },
         { name: "Hebrews 3" },
         { name: "Hebrews 4" },
         { name: "Hebrews 5" },
         { name: "Hebrews 6" },
      ]
   },
   {
      name: "Day 357",
      sections: [
         { name: "Hebrews 7" },
         { name: "Hebrews 8" },
         { name: "Hebrews 9" },
         { name: "Hebrews 10:1-18" },
      ]
   },
   {
      name: "Day 358",
      sections: [
         { name: "Hebrews 10:19-39" },
         { name: "Hebrews 11" },
         { name: "Hebrews 12" },
      ]
   },
   {
      name: "Day 359",
      sections: [
         { name: "Hebrews 13" },
         { name: "1 John 1" },
         { name: "1 John 2" },
         { name: "1 John 3" },
      ]
   },
   {
      name: "Day 360",
      sections: [
         { name: "1 John 4" },
         { name: "1 John 5" },
         { name: "2 John 1" },
         { name: "3 John 1" },
         { name: "Revelation 1" },
      ]
   },
   {
      name: "Day 361",
      sections: [
         { name: "Revelation 2" },
         { name: "Revelation 3" },
         { name: "Revelation 4" },
         { name: "Revelation 5" },
      ]
   },
   {
      name: "Day 362",
      sections: [
         { name: "Revelation 6" },
         { name: "Revelation 7" },
         { name: "Revelation 8" },
         { name: "Revelation 9" },
         { name: "Revelation 10" },
      ]
   },
   {
      name: "Day 363",
      sections: [
         { name: "Revelation 11" },
         { name: "Revelation 12" },
         { name: "Revelation 13" },
         { name: "Revelation 14" },
      ]
   },
   {
      name: "Day 364",
      sections: [
         { name: "Revelation 15" },
         { name: "Revelation 16" },
         { name: "Revelation 17" },
         { name: "Revelation 18" },
      ]
   },
   {
      name: "Day 365",
      sections: [
         { name: "Revelation 19" },
         { name: "Revelation 20" },
         { name: "Revelation 21" },
         { name: "Revelation 22" },
      ]
   },
];

saveCheckpoints(checkpoints);