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
  id: 2,
  code: 'BIBLECOVER'
}

var CP_NUM = 582;
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
         { name: "Genesis 6" },
         { name: "Genesis 7" },
      ]
   },
   {
      name: "Day 3",
      sections: [
         { name: "Genesis 8" },
         { name: "Genesis 9" },
         { name: "Genesis 10" },
         { name: "Genesis 11" },
      ]
   },
   {
      name: "Day 4",
      sections: [
         { name: "Genesis 12" },
         { name: "Genesis 13" },
         { name: "Genesis 14" },
         { name: "Genesis 15" },
      ]
   },
   {
      name: "Day 5",
      sections: [
         { name: "Genesis 16" },
         { name: "Genesis 17" },
         { name: "Genesis 18" },
      ]
   },
   {
      name: "Day 6",
      sections: [
         { name: "Genesis 19" },
         { name: "Genesis 20" },
      ]
   },
   {
      name: "Day 7",
      sections: [
         { name: "Genesis 21" },
         { name: "Genesis 22" },
         { name: "Genesis 23" },
      ]
   },
   {
      name: "Day 8",
      sections: [
         { name: "Genesis 24" },
         { name: "Genesis 25" },
      ]
   },
   {
      name: "Day 9",
      sections: [
         { name: "Genesis 26" },
         { name: "Genesis 27" },
         { name: "Genesis 28" },
      ]
   },
   {
      name: "Day 10",
      sections: [
         { name: "Genesis 29" },
         { name: "Genesis 30" },
      ]
   },
   {
      name: "Day 11",
      sections: [
         { name: "Genesis 31" },
         { name: "Genesis 32" },
      ]
   },
   {
      name: "Day 12",
      sections: [
         { name: "Genesis 33" },
         { name: "Genesis 34" },
         { name: "Genesis 35" },
      ]
   },
   {
      name: "Day 13",
      sections: [
         { name: "Genesis 36" },
         { name: "Genesis 37" },
         { name: "Genesis 38" },
      ]
   },
   {
      name: "Day 14",
      sections: [
         { name: "Genesis 39" },
         { name: "Genesis 40" },
         { name: "Genesis 41" },
      ]
   },
   {
      name: "Day 15",
      sections: [
         { name: "Genesis 42" },
         { name: "Genesis 43" },
         { name: "Genesis 44" },
      ]
   },
   {
      name: "Day 16",
      sections: [
         { name: "Genesis 45" },
         { name: "Genesis 46" },
         { name: "Genesis 47" },
      ]
   },
   {
      name: "Day 17",
      sections: [
         { name: "Genesis 48" },
         { name: "Genesis 49" },
         { name: "Genesis 50" },
      ]
   },
   {
      name: "Day 18",
      sections: [
         { name: "Exodus 1" },
         { name: "Exodus 2" },
         { name: "Exodus 3" },
      ]
   },
   {
      name: "Day 19",
      sections: [
         { name: "Exodus 4" },
         { name: "Exodus 5" },
         { name: "Exodus 6" },
      ]
   },
   {
      name: "Day 20",
      sections: [
         { name: "Exodus 7" },
         { name: "Exodus 8" },
         { name: "Exodus 9" },
      ]
   },
   {
      name: "Day 21",
      sections: [
         { name: "Exodus 10" },
         { name: "Exodus 11" },
         { name: "Exodus 12" },
      ]
   },
   {
      name: "Day 22",
      sections: [
         { name: "Exodus 13" },
         { name: "Exodus 14" },
         { name: "Exodus 15" },
      ]
   },
   {
      name: "Day 23",
      sections: [
         { name: "Exodus 16" },
         { name: "Exodus 17" },
         { name: "Exodus 18" },
      ]
   },
   {
      name: "Day 24",
      sections: [
         { name: "Exodus 19" },
         { name: "Exodus 20" },
         { name: "Exodus 21" },
      ]
   },
   {
      name: "Day 25",
      sections: [
         { name: "Exodus 22" },
         { name: "Exodus 23" },
         { name: "Exodus 24" },
      ]
   },
   {
      name: "Day 26",
      sections: [
         { name: "Exodus 25" },
         { name: "Exodus 26" },
         { name: "Exodus 27" },
      ]
   },
   {
      name: "Day 27",
      sections: [
         { name: "Exodus 28" },
         { name: "Exodus 29" },
      ]
   },
   {
      name: "Day 28",
      sections: [
         { name: "Exodus 30" },
         { name: "Exodus 31" },
         { name: "Exodus 32" },
      ]
   },
   {
      name: "Day 29",
      sections: [
         { name: "Exodus 33" },
         { name: "Exodus 34" },
         { name: "Exodus 35" },
      ]
   },
   {
      name: "Day 30",
      sections: [
         { name: "Exodus 36" },
         { name: "Exodus 37" },
         { name: "Exodus 38" },
      ]
   },
   {
      name: "Day 31",
      sections: [
         { name: "Exodus 39" },
         { name: "Exodus 40" },
      ]
   },
   {
      name: "Day 32",
      sections: [
         { name: "Leviticus 1" },
         { name: "Leviticus 2" },
         { name: "Leviticus 3" },
         { name: "Leviticus 4" },
      ]
   },
   {
      name: "Day 33",
      sections: [
         { name: "Leviticus 5" },
         { name: "Leviticus 6" },
         { name: "Leviticus 7" },
      ]
   },
   {
      name: "Day 34",
      sections: [
         { name: "Leviticus 8" },
         { name: "Leviticus 9" },
      ]
   },
   {
      name: "Day 35",
      sections: [
         { name: "Leviticus 10" },
         { name: "Leviticus 11" },
         { name: "Leviticus 12" },
      ]
   },
   {
      name: "Day 36",
      sections: [
         { name: "Leviticus 13" },
      ]
   },
   {
      name: "Day 37",
      sections: [
         { name: "Leviticus 14" },
         { name: "Leviticus 15" },
      ]
   },
   {
      name: "Day 38",
      sections: [
         { name: "Leviticus 16" },
         { name: "Leviticus 17" },
         { name: "Leviticus 18" },
      ]
   },
   {
      name: "Day 39",
      sections: [
         { name: "Leviticus 19" },
         { name: "Leviticus 20" },
         { name: "Leviticus 21" },
      ]
   },
   {
      name: "Day 40",
      sections: [
         { name: "Leviticus 22" },
         { name: "Leviticus 23" },
      ]
   },
   {
      name: "Day 41",
      sections: [
         { name: "Leviticus 24" },
         { name: "Leviticus 25" },
      ]
   },
   {
      name: "Day 42",
      sections: [
         { name: "Leviticus 26" },
         { name: "Leviticus 27" },
      ]
   },
   {
      name: "Day 43",
      sections: [
         { name: "Numbers 1" },
         { name: "Numbers 2" },
      ]
   },
   {
      name: "Day 44",
      sections: [
         { name: "Numbers 3" },
         { name: "Numbers 4" },
      ]
   },
   {
      name: "Day 45",
      sections: [
         { name: "Numbers 5" },
         { name: "Numbers 6" },
      ]
   },
   {
      name: "Day 46",
      sections: [
         { name: "Numbers 7" },
      ]
   },
   {
      name: "Day 47",
      sections: [
         { name: "Numbers 8" },
         { name: "Numbers 9" },
         { name: "Numbers 10" },
      ]
   },
   {
      name: "Day 48",
      sections: [
         { name: "Numbers 11" },
         { name: "Numbers 12" },
         { name: "Numbers 13" },
      ]
   },
   {
      name: "Day 49",
      sections: [
         { name: "Numbers 14" },
         { name: "Numbers 15" },
      ]
   },
   {
      name: "Day 50",
      sections: [
         { name: "Numbers 16" },
         { name: "Numbers 17" },
         { name: "Numbers 18" },
      ]
   },
   {
      name: "Day 51",
      sections: [
         { name: "Numbers 19" },
         { name: "Numbers 20" },
         { name: "Numbers 21" },
      ]
   },
   {
      name: "Day 52",
      sections: [
         { name: "Numbers 22" },
         { name: "Numbers 23" },
         { name: "Numbers 24" },
      ]
   },
   {
      name: "Day 53",
      sections: [
         { name: "Numbers 25" },
         { name: "Numbers 26" },
      ]
   },
   {
      name: "Day 54",
      sections: [
         { name: "Numbers 27" },
         { name: "Numbers 28" },
         { name: "Numbers 29" },
      ]
   },
   {
      name: "Day 55",
      sections: [
         { name: "Numbers 30" },
         { name: "Numbers 31" },
      ]
   },
   {
      name: "Day 56",
      sections: [
         { name: "Numbers 32" },
         { name: "Numbers 33" },
      ]
   },
   {
      name: "Day 57",
      sections: [
         { name: "Numbers 34" },
         { name: "Numbers 35" },
         { name: "Numbers 36" },
      ]
   },
   {
      name: "Day 58",
      sections: [
         { name: "Deuteronomy 1" },
         { name: "Deuteronomy 2" },
      ]
   },
   {
      name: "Day 59",
      sections: [
         { name: "Deuteronomy 3" },
         { name: "Deuteronomy 4" },
      ]
   },
   {
      name: "Day 60",
      sections: [
         { name: "Deuteronomy 5" },
         { name: "Deuteronomy 6" },
         { name: "Deuteronomy 7" },
      ]
   },
   {
      name: "Day 61",
      sections: [
         { name: "Deuteronomy 8" },
         { name: "Deuteronomy 9" },
         { name: "Deuteronomy 10" },
      ]
   },
   {
      name: "Day 62",
      sections: [
         { name: "Deuteronomy 11" },
         { name: "Deuteronomy 12" },
         { name: "Deuteronomy 13" },
      ]
   },
   {
      name: "Day 63",
      sections: [
         { name: "Deuteronomy 14" },
         { name: "Deuteronomy 15" },
         { name: "Deuteronomy 16" },
         { name: "Deuteronomy 17" },
      ]
   },
   {
      name: "Day 64",
      sections: [
         { name: "Deuteronomy 18" },
         { name: "Deuteronomy 19" },
         { name: "Deuteronomy 20" },
      ]
   },
   {
      name: "Day 65",
      sections: [
         { name: "Deuteronomy 21" },
         { name: "Deuteronomy 22" },
         { name: "Deuteronomy 23" },
      ]
   },
   {
      name: "Day 66",
      sections: [
         { name: "Deuteronomy 24" },
         { name: "Deuteronomy 25" },
         { name: "Deuteronomy 26" },
      ]
   },
   {
      name: "Day 67",
      sections: [
         { name: "Deuteronomy 27" },
         { name: "Deuteronomy 28" },
      ]
   },
   {
      name: "Day 68",
      sections: [
         { name: "Deuteronomy 29" },
         { name: "Deuteronomy 30" },
         { name: "Deuteronomy 31" },
      ]
   },
   {
      name: "Day 69",
      sections: [
         { name: "Deuteronomy 32" },
         { name: "Deuteronomy 33" },
         { name: "Deuteronomy 34" },
      ]
   },
   {
      name: "Day 70",
      sections: [
         { name: "Joshua 1" },
         { name: "Joshua 2" },
         { name: "Joshua 3" },
         { name: "Joshua 4" },
      ]
   },
   {
      name: "Day 71",
      sections: [
         { name: "Joshua 5" },
         { name: "Joshua 6" },
         { name: "Joshua 7" },
      ]
   },
   {
      name: "Day 72",
      sections: [
         { name: "Joshua 8" },
         { name: "Joshua 9" },
      ]
   },
   {
      name: "Day 73",
      sections: [
         { name: "Joshua 10" },
         { name: "Joshua 11" },
      ]
   },
   {
      name: "Day 74",
      sections: [
         { name: "Joshua 12" },
         { name: "Joshua 13" },
         { name: "Joshua 14" },
      ]
   },
   {
      name: "Day 75",
      sections: [
         { name: "Joshua 15" },
         { name: "Joshua 16" },
         { name: "Joshua 17" },
      ]
   },
   {
      name: "Day 76",
      sections: [
         { name: "Joshua 18" },
         { name: "Joshua 19" },
         { name: "Joshua 20" },
      ]
   },
   {
      name: "Day 77",
      sections: [
         { name: "Joshua 21" },
         { name: "Joshua 22" },
      ]
   },
   {
      name: "Day 78",
      sections: [
         { name: "Joshua 23" },
         { name: "Joshua 24" },
      ]
   },
   {
      name: "Day 79",
      sections: [
         { name: "Judges 1" },
         { name: "Judges 2" },
         { name: "Judges 3" },
      ]
   },
   {
      name: "Day 80",
      sections: [
         { name: "Judges 4" },
         { name: "Judges 5" },
         { name: "Judges 6" },
      ]
   },
   {
      name: "Day 81",
      sections: [
         { name: "Judges 7" },
         { name: "Judges 8" },
      ]
   },
   {
      name: "Day 82",
      sections: [
         { name: "Judges 9" },
         { name: "Judges 10" },
      ]
   },
   {
      name: "Day 83",
      sections: [
         { name: "Judges 11" },
         { name: "Judges 12" },
         { name: "Judges 13" },
      ]
   },
   {
      name: "Day 84",
      sections: [
         { name: "Judges 14" },
         { name: "Judges 15" },
         { name: "Judges 16" },
      ]
   },
   {
      name: "Day 85",
      sections: [
         { name: "Judges 17" },
         { name: "Judges 18" },
         { name: "Judges 19" },
      ]
   },
   {
      name: "Day 86",
      sections: [
         { name: "Judges 20" },
         { name: "Judges 21" },
      ]
   },
   {
      name: "Day 87",
      sections: [
         { name: "Ruth 1" },
         { name: "Ruth 2" },
         { name: "Ruth 3" },
         { name: "Ruth 4" },
      ]
   },
   {
      name: "Day 88",
      sections: [
         { name: "1 Samuel 1" },
         { name: "1 Samuel 2" },
         { name: "1 Samuel 3" },
      ]
   },
   {
      name: "Day 89",
      sections: [
         { name: "1 Samuel 4" },
         { name: "1 Samuel 5" },
         { name: "1 Samuel 6" },
         { name: "1 Samuel 7" },
      ]
   },
   {
      name: "Day 90",
      sections: [
         { name: "1 Samuel 8" },
         { name: "1 Samuel 9" },
         { name: "1 Samuel 10" },
      ]
   },
   {
      name: "Day 91",
      sections: [
         { name: "1 Samuel 11" },
         { name: "1 Samuel 12" },
         { name: "1 Samuel 13" },
      ]
   },
   {
      name: "Day 92",
      sections: [
         { name: "1 Samuel 14" },
         { name: "1 Samuel 15" },
      ]
   },
   {
      name: "Day 93",
      sections: [
         { name: "1 Samuel 16" },
         { name: "1 Samuel 17" },
      ]
   },
   {
      name: "Day 94",
      sections: [
         { name: "1 Samuel 18" },
         { name: "1 Samuel 19" },
         { name: "1 Samuel 20" },
      ]
   },
   {
      name: "Day 95",
      sections: [
         { name: "1 Samuel 21" },
         { name: "1 Samuel 22" },
         { name: "1 Samuel 23" },
         { name: "1 Samuel 24" },
      ]
   },
   {
      name: "Day 96",
      sections: [
         { name: "1 Samuel 25" },
         { name: "1 Samuel 26" },
         { name: "1 Samuel 27" },
      ]
   },
   {
      name: "Day 97",
      sections: [
         { name: "1 Samuel 28" },
         { name: "1 Samuel 29" },
         { name: "1 Samuel 30" },
         { name: "1 Samuel 31" },
      ]
   },
   {
      name: "Day 98",
      sections: [
         { name: "2 Samuel 1" },
         { name: "2 Samuel 2" },
         { name: "2 Samuel 3" },
      ]
   },
   {
      name: "Day 99",
      sections: [
         { name: "2 Samuel 4" },
         { name: "2 Samuel 5" },
         { name: "2 Samuel 6" },
         { name: "2 Samuel 7" },
      ]
   },
   {
      name: "Day 100",
      sections: [
         { name: "2 Samuel 8" },
         { name: "2 Samuel 9" },
         { name: "2 Samuel 10" },
         { name: "2 Samuel 11" },
      ]
   },
   {
      name: "Day 101",
      sections: [
         { name: "2 Samuel 12" },
         { name: "2 Samuel 13" },
      ]
   },
   {
      name: "Day 102",
      sections: [
         { name: "2 Samuel 14" },
         { name: "2 Samuel 15" },
      ]
   },
   {
      name: "Day 103",
      sections: [
         { name: "2 Samuel 16" },
         { name: "2 Samuel 17" },
      ]
   },
   {
      name: "Day 104",
      sections: [
         { name: "2 Samuel 18" },
         { name: "2 Samuel 19" },
      ]
   },
   {
      name: "Day 105",
      sections: [
         { name: "2 Samuel 20" },
         { name: "2 Samuel 21" },
         { name: "2 Samuel 22" },
      ]
   },
   {
      name: "Day 106",
      sections: [
         { name: "2 Samuel 23" },
         { name: "2 Samuel 24" },
      ]
   },
   {
      name: "Day 107",
      sections: [
         { name: "1 Kings 1" },
      ]
   },
   {
      name: "Day 108",
      sections: [
         { name: "1 Kings 2" },
         { name: "1 Kings 3" },
      ]
   },
   {
      name: "Day 109",
      sections: [
         { name: "1 Kings 4" },
         { name: "1 Kings 5" },
         { name: "1 Kings 6" },
      ]
   },
   {
      name: "Day 110",
      sections: [
         { name: "1 Kings 7" },
      ]
   },
   {
      name: "Day 111",
      sections: [
         { name: "1 Kings 8" },
      ]
   },
   {
      name: "Day 112",
      sections: [
         { name: "1 Kings 9" },
         { name: "1 Kings 10" },
      ]
   },
   {
      name: "Day 113",
      sections: [
         { name: "1 Kings 11" },
         { name: "1 Kings 12" },
      ]
   },
   {
      name: "Day 114",
      sections: [
         { name: "1 Kings 13" },
         { name: "1 Kings 14" },
      ]
   },
   {
      name: "Day 115",
      sections: [
         { name: "1 Kings 15" },
         { name: "1 Kings 16" },
         { name: "1 Kings 17" },
      ]
   },
   {
      name: "Day 116",
      sections: [
         { name: "1 Kings 18" },
         { name: "1 Kings 19" },
      ]
   },
   {
      name: "Day 117",
      sections: [
         { name: "1 Kings 20" },
         { name: "1 Kings 21" },
      ]
   },
   {
      name: "Day 118",
      sections: [
         { name: "1 Kings 22" },
         { name: "2 Kings 1" },
      ]
   },
   {
      name: "Day 119",
      sections: [
         { name: "2 Kings 2" },
         { name: "2 Kings 3" },
         { name: "2 Kings 4" },
      ]
   },
   {
      name: "Day 120",
      sections: [
         { name: "2 Kings 5" },
         { name: "2 Kings 6" },
         { name: "2 Kings 7" },
      ]
   },
   {
      name: "Day 121",
      sections: [
         { name: "2 Kings 8" },
         { name: "2 Kings 9" },
      ]
   },
   {
      name: "Day 122",
      sections: [
         { name: "2 Kings 10" },
         { name: "2 Kings 11" },
         { name: "2 Kings 12" },
      ]
   },
   {
      name: "Day 123",
      sections: [
         { name: "2 Kings 13" },
         { name: "2 Kings 14" },
      ]
   },
   {
      name: "Day 124",
      sections: [
         { name: "2 Kings 15" },
         { name: "2 Kings 16" },
      ]
   },
   {
      name: "Day 125",
      sections: [
         { name: "2 Kings 17" },
         { name: "2 Kings 18" },
      ]
   },
   {
      name: "Day 126",
      sections: [
         { name: "2 Kings 19" },
         { name: "2 Kings 20" },
         { name: "2 Kings 21" },
      ]
   },
   {
      name: "Day 127",
      sections: [
         { name: "2 Kings 22" },
         { name: "2 Kings 23" },
         { name: "2 Kings 24" },
         { name: "2 Kings 25" },
      ]
   },
   {
      name: "Day 128",
      sections: [
         { name: "1 Chronicles 1" },
      ]
   },
   {
      name: "Day 129",
      sections: [
         { name: "1 Chronicles 2" },
         { name: "1 Chronicles 3" },
         { name: "1 Chronicles 4" },
      ]
   },
   {
      name: "Day 130",
      sections: [
         { name: "1 Chronicles 5" },
         { name: "1 Chronicles 6" },
      ]
   },
   {
      name: "Day 131",
      sections: [
         { name: "1 Chronicles 7" },
         { name: "1 Chronicles 8" },
         { name: "1 Chronicles 9" },
      ]
   },
   {
      name: "Day 132",
      sections: [
         { name: "1 Chronicles 10" },
         { name: "1 Chronicles 11" },
         { name: "1 Chronicles 12" },
      ]
   },
   {
      name: "Day 133",
      sections: [
         { name: "1 Chronicles 13" },
         { name: "1 Chronicles 14" },
         { name: "1 Chronicles 15" },
         { name: "1 Chronicles 16" },
      ]
   },
   {
      name: "Day 134",
      sections: [
         { name: "1 Chronicles 17" },
         { name: "1 Chronicles 18" },
         { name: "1 Chronicles 19" },
      ]
   },
   {
      name: "Day 135",
      sections: [
         { name: "1 Chronicles 20" },
         { name: "1 Chronicles 21" },
         { name: "1 Chronicles 22" },
         { name: "1 Chronicles 23" },
      ]
   },
   {
      name: "Day 136",
      sections: [
         { name: "1 Chronicles 24" },
         { name: "1 Chronicles 25" },
         { name: "1 Chronicles 26" },
      ]
   },
   {
      name: "Day 137",
      sections: [
         { name: "1 Chronicles 27" },
         { name: "1 Chronicles 28" },
         { name: "1 Chronicles 29" },
      ]
   },
   {
      name: "Day 138",
      sections: [
         { name: "2 Chronicles 1" },
         { name: "2 Chronicles 2" },
         { name: "2 Chronicles 3" },
         { name: "2 Chronicles 4" },
      ]
   },
   {
      name: "Day 139",
      sections: [
         { name: "2 Chronicles 5" },
         { name: "2 Chronicles 6" },
         { name: "2 Chronicles 7" },
      ]
   },
   {
      name: "Day 140",
      sections: [
         { name: "2 Chronicles 8" },
         { name: "2 Chronicles 9" },
         { name: "2 Chronicles 10" },
      ]
   },
   {
      name: "Day 141",
      sections: [
         { name: "2 Chronicles 11" },
         { name: "2 Chronicles 12" },
         { name: "2 Chronicles 13" },
         { name: "2 Chronicles 14" },
      ]
   },
   {
      name: "Day 142",
      sections: [
         { name: "2 Chronicles 15" },
         { name: "2 Chronicles 16" },
         { name: "2 Chronicles 17" },
         { name: "2 Chronicles 18" },
      ]
   },
   {
      name: "Day 143",
      sections: [
         { name: "2 Chronicles 19" },
         { name: "2 Chronicles 20" },
         { name: "2 Chronicles 21" },
         { name: "2 Chronicles 22" },
      ]
   },
   {
      name: "Day 144",
      sections: [
         { name: "2 Chronicles 23" },
         { name: "2 Chronicles 24" },
         { name: "2 Chronicles 25" },
      ]
   },
   {
      name: "Day 145",
      sections: [
         { name: "2 Chronicles 26" },
         { name: "2 Chronicles 27" },
         { name: "2 Chronicles 28" },
      ]
   },
   {
      name: "Day 146",
      sections: [
         { name: "2 Chronicles 29" },
         { name: "2 Chronicles 30" },
      ]
   },
   {
      name: "Day 147",
      sections: [
         { name: "2 Chronicles 31" },
         { name: "2 Chronicles 32" },
         { name: "2 Chronicles 33" },
      ]
   },
   {
      name: "Day 148",
      sections: [
         { name: "2 Chronicles 34" },
         { name: "2 Chronicles 35" },
      ]
   },
   {
      name: "Day 149",
      sections: [
         { name: "2 Chronicles 36" },
         { name: "Ezra 1" },
         { name: "Ezra 2" },
      ]
   },
   {
      name: "Day 150",
      sections: [
         { name: "Ezra 3" },
         { name: "Ezra 4" },
         { name: "Ezra 5" },
      ]
   },
   {
      name: "Day 151",
      sections: [
         { name: "Ezra 6" },
         { name: "Ezra 7" },
         { name: "Ezra 8" },
      ]
   },
   {
      name: "Day 152",
      sections: [
         { name: "Ezra 9" },
         { name: "Ezra 10" },
      ]
   },
   {
      name: "Day 153",
      sections: [
         { name: "Nehemiah 1" },
         { name: "Nehemiah 2" },
         { name: "Nehemiah 3" },
      ]
   },
   {
      name: "Day 154",
      sections: [
         { name: "Nehemiah 4" },
         { name: "Nehemiah 5" },
         { name: "Nehemiah 6" },
      ]
   },
   {
      name: "Day 155",
      sections: [
         { name: "Nehemiah 7" },
         { name: "Nehemiah 8" },
      ]
   },
   {
      name: "Day 156",
      sections: [
         { name: "Nehemiah 9" },
         { name: "Nehemiah 10" },
      ]
   },
   {
      name: "Day 157",
      sections: [
         { name: "Nehemiah 11" },
         { name: "Nehemiah 12" },
         { name: "Nehemiah 13" },
      ]
   },
   {
      name: "Day 158",
      sections: [
         { name: "Esther 1" },
         { name: "Esther 2" },
         { name: "Esther 3" },
      ]
   },
   {
      name: "Day 159",
      sections: [
         { name: "Esther 4" },
         { name: "Esther 5" },
         { name: "Esther 6" },
         { name: "Esther 7" },
      ]
   },
   {
      name: "Day 160",
      sections: [
         { name: "Esther 8" },
         { name: "Esther 9" },
         { name: "Esther 10" },
      ]
   },
   {
      name: "Day 161",
      sections: [
         { name: "Job 1" },
         { name: "Job 2" },
         { name: "Job 3" },
         { name: "Job 4" },
         { name: "Job 5" },
      ]
   },
   {
      name: "Day 162",
      sections: [
         { name: "Job 6" },
         { name: "Job 7" },
         { name: "Job 8" },
         { name: "Job 9" },
         { name: "Job 10" },

      ],
   },
   {
      name: "Day 163",
      sections: [
         { name: "Job 11" },
         { name: "Job 12" },
         { name: "Job 13" },
         { name: "Job 14" },
         { name: "Job 15" },
      ]
   },
   {
      name: "Day 164",
      sections: [
         { name: "Job 16" },
         { name: "Job 17" },
         { name: "Job 18" },
         { name: "Job 19" },
         { name: "Job 20" },
         { name: "Job 21" },
      ]
   },
   {
      name: "Day 165",
      sections: [
         { name: "Job 22" },
         { name: "Job 23" },
         { name: "Job 24" },
         { name: "Job 25" },
         { name: "Job 26" },
         { name: "Job 27" },
         { name: "Job 28" },
      ]
   },
   {
      name: "Day 166",
      sections: [
         { name: "Job 29" },
         { name: "Job 30" },
         { name: "Job 31" },
         { name: "Job 32" },
         { name: "Job 33" },
      ]
   },
   {
      name: "Day 167",
      sections: [
         { name: "Job 34" },
         { name: "Job 35" },
         { name: "Job 36" },
         { name: "Job 37" },
      ]
   },
   {
      name: "Day 168",
      sections: [
         { name: "Job 38" },
         { name: "Job 39" },
         { name: "Job 40" },
         { name: "Job 41" },
         { name: "Job 42" },
      ]
   },
   {
      name: "Day 169",
      sections: [
         { name: "Psalm 1" },
         { name: "Psalm 2" },
         { name: "Psalm 3" },
         { name: "Psalm 4" },
         { name: "Psalm 5" },
         { name: "Psalm 6" },
         { name: "Psalm 7" },
         { name: "Psalm 8" },
         { name: "Psalm 9" },
      ]
   },
   {
      name: "Day 170",
      sections: [
         { name: "Psalm 10" },
         { name: "Psalm 11" },
         { name: "Psalm 12" },
         { name: "Psalm 13" },
         { name: "Psalm 14" },
         { name: "Psalm 15" },
         { name: "Psalm 16" },
         { name: "Psalm 17" },
      ]
   },
   {
      name: "Day 171",
      sections: [
         { name: "Psalm 18" },
         { name: "Psalm 19" },
         { name: "Psalm 20" },
         { name: "Psalm 21" },
         { name: "Psalm 22" },
      ]
   },
   {
      name: "Day 172",
      sections: [
         { name: "Psalm 23" },
         { name: "Psalm 24" },
         { name: "Psalm 25" },
         { name: "Psalm 26" },
         { name: "Psalm 27" },
         { name: "Psalm 28" },
         { name: "Psalm 29" },
         { name: "Psalm 30" },
         { name: "Psalm 31" },
      ]
   },
   {
      name: "Day 173",
      sections: [
         { name: "Psalm 32" },
         { name: "Psalm 33" },
         { name: "Psalm 34" },
         { name: "Psalm 35" },
         { name: "Psalm 36" },
         { name: "Psalm 37" },
      ]
   },
   {
      name: "Day 174",
      sections: [
         { name: "Psalm 38" },
         { name: "Psalm 39" },
         { name: "Psalm 40" },
         { name: "Psalm 41" },
         { name: "Psalm 42" },
         { name: "Psalm 43" },
         { name: "Psalm 44" },
      ]
   },
   {
      name: "Day 175",
      sections: [
         { name: "Psalm 45" },
         { name: "Psalm 46" },
         { name: "Psalm 47" },
         { name: "Psalm 48" },
         { name: "Psalm 49" },
         { name: "Psalm 50" },
         { name: "Psalm 51" },
      ]
   },
   {
      name: "Day 176",
      sections: [
         { name: "Psalm 52" },
         { name: "Psalm 53" },
         { name: "Psalm 54" },
         { name: "Psalm 55" },
         { name: "Psalm 56" },
         { name: "Psalm 57" },
         { name: "Psalm 58" },
         { name: "Psalm 59" },
      ]
   },
   {
      name: "Day 177",
      sections: [
         { name: "Psalm 60" },
         { name: "Psalm 61" },
         { name: "Psalm 62" },
         { name: "Psalm 63" },
         { name: "Psalm 64" },
         { name: "Psalm 65" },
         { name: "Psalm 66" },
         { name: "Psalm 67" },
      ]
   },
   {
      name: "Day 178",
      sections: [
         { name: "Psalm 68" },
         { name: "Psalm 69" },
         { name: "Psalm 70" },
         { name: "Psalm 71" },
      ]
   },
   {
      name: "Day 179",
      sections: [
         { name: "Psalm 72" },
         { name: "Psalm 73" },
         { name: "Psalm 74" },
         { name: "Psalm 75" },
         { name: "Psalm 76" },
         { name: "Psalm 77" },
      ]
   },
   {
      name: "Day 180",
      sections: [
         { name: "Psalm 78" },
         { name: "Psalm 79" },
         { name: "Psalm 80" },
         { name: "Psalm 81" },
      ]
   },
   {
      name: "Day 181",
      sections: [
         { name: "Psalm 82" },
         { name: "Psalm 83" },
         { name: "Psalm 84" },
         { name: "Psalm 85" },
         { name: "Psalm 86" },
         { name: "Psalm 87" },
         { name: "Psalm 88" },
         { name: "Psalm 89" },
      ]
   },
   {
      name: "Day 182",
      sections: [
         { name: "Psalm 90" },
         { name: "Psalm 91" },
         { name: "Psalm 92" },
         { name: "Psalm 93" },
         { name: "Psalm 94" },
         { name: "Psalm 95" },
         { name: "Psalm 96" },
         { name: "Psalm 97" },
      ]
   },
   {
      name: "Day 183",
      sections: [
         { name: "Psalm 98" },
         { name: "Psalm 99" },
         { name: "Psalm 100" },
         { name: "Psalm 101" },
         { name: "Psalm 102" },
         { name: "Psalm 103" },
         { name: "Psalm 104" },
      ]
   },
   {
      name: "Day 184",
      sections: [
         { name: "Psalm 105" },
         { name: "Psalm 106" },
         { name: "Psalm 107" },
      ]
   },
   {
      name: "Day 185",
      sections: [
         { name: "Psalm 108" },
         { name: "Psalm 109" },
         { name: "Psalm 110" },
         { name: "Psalm 111" },
         { name: "Psalm 112" },
         { name: "Psalm 113" },
         { name: "Psalm 114" },
         { name: "Psalm 115" },
         { name: "Psalm 116" },
      ]
   },
   {
      name: "Day 186",
      sections: [
         { name: "Psalm 117" },
         { name: "Psalm 118" },
         { name: "Psalm 119:1-72" },
      ]
   },
   {
      name: "Day 187",
      sections: [
         { name: "Psalm 119:73-176" },
      ]
   },
   {
      name: "Day 188",
      sections: [
         { name: "Psalm 120" },
         { name: "Psalm 121" },
         { name: "Psalm 122" },
         { name: "Psalm 123" },
         { name: "Psalm 124" },
         { name: "Psalm 125" },
         { name: "Psalm 126" },
         { name: "Psalm 127" },
         { name: "Psalm 128" },
         { name: "Psalm 129" },
         { name: "Psalm 130" },
         { name: "Psalm 131" },
         { name: "Psalm 132" },
         { name: "Psalm 133" },
         { name: "Psalm 134" },
         { name: "Psalm 135" },
      ]
   },
   {
      name: "Day 189",
      sections: [
         { name: "Psalm 136" },
         { name: "Psalm 137" },
         { name: "Psalm 138" },
         { name: "Psalm 139" },
         { name: "Psalm 140" },
         { name: "Psalm 141" },
         { name: "Psalm 142" },
      ]
   },
   {
      name: "Day 190",
      sections: [
         { name: "Psalm 143" },
         { name: "Psalm 144" },
         { name: "Psalm 145" },
         { name: "Psalm 146" },
         { name: "Psalm 147" },
         { name: "Psalm 148" },
         { name: "Psalm 149" },
         { name: "Psalm 150" },
      ]
   },
   {
      name: "Day 191",
      sections: [
         { name: "Proverbs 1" },
         { name: "Proverbs 2" },
         { name: "Proverbs 3" },
         { name: "Proverbs 4" },
      ]
   },
   {
      name: "Day 192",
      sections: [
         { name: "Proverbs 5" },
         { name: "Proverbs 6" },
         { name: "Proverbs 7" },
         { name: "Proverbs 8" },
      ]
   },
   {
      name: "Day 193",
      sections: [
         { name: "Proverbs 9" },
         { name: "Proverbs 10" },
         { name: "Proverbs 11" },
         { name: "Proverbs 12" },
         { name: "Proverbs 13" },
      ]
   },
   {
      name: "Day 194",
      sections: [
         { name: "Proverbs 14" },
         { name: "Proverbs 15" },
         { name: "Proverbs 16" },
         { name: "Proverbs 17" },
      ]
   },
   {
      name: "Day 195",
      sections: [
         { name: "Proverbs 18" },
         { name: "Proverbs 19" },
         { name: "Proverbs 20" },
         { name: "Proverbs 21" },
      ]
   },
   {
      name: "Day 196",
      sections: [
         { name: "Proverbs 22" },
         { name: "Proverbs 23" },
         { name: "Proverbs 24" },
      ]
   },
   {
      name: "Day 197",
      sections: [
         { name: "Proverbs 25" },
         { name: "Proverbs 26" },
         { name: "Proverbs 27" },
         { name: "Proverbs 28" },
      ]
   },
   {
      name: "Day 198",
      sections: [
         { name: "Proverbs 29" },
         { name: "Proverbs 30" },
         { name: "Proverbs 31" },
      ]
   },
   {
      name: "Day 199",
      sections: [
         { name: "Ecclesiastes 1" },
         { name: "Ecclesiastes 2" },
         { name: "Ecclesiastes 3" },
         { name: "Ecclesiastes 4" },
         { name: "Ecclesiastes 5" },
         { name: "Ecclesiastes 6" },
      ]
   },
   {
      name: "Day 200",
      sections: [
         { name: "Ecclesiastes 7" },
         { name: "Ecclesiastes 8" },
         { name: "Ecclesiastes 9" },
         { name: "Ecclesiastes 10" },
         { name: "Ecclesiastes 11" },
         { name: "Ecclesiastes 12" },
      ]
   },
   {
      name: "Day 201",
      sections: [
         { name: "Song of Solomon 1" },
         { name: "Song of Solomon 2" },
         { name: "Song of Solomon 3" },
         { name: "Song of Solomon 4" },
         { name: "Song of Solomon 5" },
         { name: "Song of Solomon 6" },
         { name: "Song of Solomon 7" },
         { name: "Song of Solomon 8" },
      ]
   },
   {
      name: "Day 202",
      sections: [
         { name: "Isaiah 1" },
         { name: "Isaiah 2" },
         { name: "Isaiah 3" },
         { name: "Isaiah 4" },
      ]
   },
   {
      name: "Day 203",
      sections: [
         { name: "Isaiah 5" },
         { name: "Isaiah 6" },
         { name: "Isaiah 7" },
         { name: "Isaiah 8" },
      ]
   },
   {
      name: "Day 204",
      sections: [
         { name: "Isaiah 9" },
         { name: "Isaiah 10" },
         { name: "Isaiah 11" },
         { name: "Isaiah 12" },
      ]
   },
   {
      name: "Day 205",
      sections: [
         { name: "Isaiah 13" },
         { name: "Isaiah 14" },
         { name: "Isaiah 15" },
         { name: "Isaiah 16" },
      ]
   },
   {
      name: "Day 206",
      sections: [
         { name: "Isaiah 17" },
         { name: "Isaiah 18" },
         { name: "Isaiah 19" },
         { name: "Isaiah 20" },
         { name: "Isaiah 21" },
      ]
   },
   {
      name: "Day 207",
      sections: [
         { name: "Isaiah 22" },
         { name: "Isaiah 23" },
         { name: "Isaiah 24" },
         { name: "Isaiah 25" },
      ]
   },
   {
      name: "Day 208",
      sections: [
         { name: "Isaiah 26" },
         { name: "Isaiah 27" },
         { name: "Isaiah 28" },
      ]
   },
   {
      name: "Day 209",
      sections: [
         { name: "Isaiah 29" },
         { name: "Isaiah 30" },
         { name: "Isaiah 31" },
      ]
   },
   {
      name: "Day 210",
      sections: [
         { name: "Isaiah 32" },
         { name: "Isaiah 33" },
         { name: "Isaiah 34" },
         { name: "Isaiah 35" },
      ]
   },
   {
      name: "Day 211",
      sections: [
         { name: "Isaiah 36" },
         { name: "Isaiah 37" },
         { name: "Isaiah 38" },
      ]
   },
   {
      name: "Day 212",
      sections: [
         { name: "Isaiah 39" },
         { name: "Isaiah 40" },
         { name: "Isaiah 41" },
         { name: "Isaiah 42" },
      ]
   },
   {
      name: "Day 213",
      sections: [
         { name: "Isaiah 43" },
         { name: "Isaiah 44" },
         { name: "Isaiah 45" },
         { name: "Isaiah 46" },
         { name: "Isaiah 47" },
      ]
   },
   {
      name: "Day 214",
      sections: [
         { name: "Isaiah 48" },
         { name: "Isaiah 49" },
         { name: "Isaiah 50" },
         { name: "Isaiah 51" },
      ]
   },
   {
      name: "Day 215",
      sections: [
         { name: "Isaiah 52" },
         { name: "Isaiah 53" },
         { name: "Isaiah 54" },
         { name: "Isaiah 55" },
         { name: "Isaiah 56" },
      ]
   },
   {
      name: "Day 216",
      sections: [
         { name: "Isaiah 57" },
         { name: "Isaiah 58" },
         { name: "Isaiah 59" },
      ]
   },
   {
      name: "Day 217",
      sections: [
         { name: "Isaiah 60" },
         { name: "Isaiah 61" },
         { name: "Isaiah 62" },
         { name: "Isaiah 63" },
      ]
   },
   {
      name: "Day 218",
      sections: [
         { name: "Isaiah 64" },
         { name: "Isaiah 65" },
         { name: "Isaiah 66" },
      ]
   },
   {
      name: "Day 219",
      sections: [
         { name: "Jeremiah 1" },
         { name: "Jeremiah 2" },
         { name: "Jeremiah 3" },
      ]
   },
   {
      name: "Day 220",
      sections: [
         { name: "Jeremiah 4" },
         { name: "Jeremiah 5" },
         { name: "Jeremiah 6" },
      ]
   },
   {
      name: "Day 221",
      sections: [
         { name: "Jeremiah 7" },
         { name: "Jeremiah 8" },
         { name: "Jeremiah 9" },
      ]
   },
   {
      name: "Day 222",
      sections: [
         { name: "Jeremiah 10" },
         { name: "Jeremiah 11" },
         { name: "Jeremiah 12" },
      ]
   },
   {
      name: "Day 223",
      sections: [
         { name: "Jeremiah 13" },
         { name: "Jeremiah 14" },
         { name: "Jeremiah 15" },
      ]
   },
   {
      name: "Day 224",
      sections: [
         { name: "Jeremiah 16" },
         { name: "Jeremiah 17" },
         { name: "Jeremiah 18" },
      ]
   },
   {
      name: "Day 225",
      sections: [
         { name: "Jeremiah 19" },
         { name: "Jeremiah 20" },
         { name: "Jeremiah 21" },
         { name: "Jeremiah 22" },
      ]
   },
   {
      name: "Day 226",
      sections: [
         { name: "Jeremiah 23" },
         { name: "Jeremiah 24" },
         { name: "Jeremiah 25:1-16" },
      ]
   },
   {
      name: "Day 227",
      sections: [
         { name: "Jeremiah 25:17-38" },
         { name: "Jeremiah 26" },
         { name: "Jeremiah 27" },
      ]
   },
   {
      name: "Day 228",
      sections: [
         { name: "Jeremiah 28" },
         { name: "Jeremiah 29" },
         { name: "Jeremiah 30" },
      ]
   },
   {
      name: "Day 229",
      sections: [
         { name: "Jeremiah 31" },
         { name: "Jeremiah 32" },
      ]
   },
   {
      name: "Day 230",
      sections: [
         { name: "Jeremiah 33" },
         { name: "Jeremiah 34" },
         { name: "Jeremiah 35" },
      ]
   },
   {
      name: "Day 231",
      sections: [
         { name: "Jeremiah 36" },
         { name: "Jeremiah 37" },
         { name: "Jeremiah 38" },
      ]
   },
   {
      name: "Day 232",
      sections: [
         { name: "Jeremiah 39" },
         { name: "Jeremiah 40" },
         { name: "Jeremiah 41" },
      ]
   },
   {
      name: "Day 233",
      sections: [
         { name: "Jeremiah 42" },
         { name: "Jeremiah 43" },
         { name: "Jeremiah 44" },
      ]
   },
   {
      name: "Day 234",
      sections: [
         { name: "Jeremiah 45" },
         { name: "Jeremiah 46" },
         { name: "Jeremiah 47" },
         { name: "Jeremiah 48" },
      ]
   },
   {
      name: "Day 235",
      sections: [
         { name: "Jeremiah 49" },
         { name: "Jeremiah 50" },
      ]
   },
   {
      name: "Day 236",
      sections: [
         { name: "Jeremiah 51" },
         { name: "Jeremiah 52" },
      ]
   },
   {
      name: "Day 237",
      sections: [
         { name: "Lamentations 1" },
         { name: "Lamentations 2" },
      ]
   },
   {
      name: "Day 238",
      sections: [
         { name: "Lamentations 3" },
         { name: "Lamentations 4" },
         { name: "Lamentations 5" },
      ]
   },
   {
      name: "Day 239",
      sections: [
         { name: "Ezekiel 1" },
         { name: "Ezekiel 2" },
         { name: "Ezekiel 3" },
         { name: "Ezekiel 4" },
      ]
   },
   {
      name: "Day 240",
      sections: [
         { name: "Ezekiel 5" },
         { name: "Ezekiel 6" },
         { name: "Ezekiel 7" },
         { name: "Ezekiel 8" },
      ]
   },
   {
      name: "Day 241",
      sections: [
         { name: "Ezekiel 9" },
         { name: "Ezekiel 10" },
         { name: "Ezekiel 11" },
         { name: "Ezekiel 12" },
      ]
   },
   {
      name: "Day 242",
      sections: [
         { name: "Ezekiel 13" },
         { name: "Ezekiel 14" },
         { name: "Ezekiel 15" },
      ]
   },
   {
      name: "Day 243",
      sections: [
         { name: "Ezekiel 16" },
      ]
   },
   {
      name: "Day 244",
      sections: [
         { name: "Ezekiel 17" },
         { name: "Ezekiel 18" },
         { name: "Ezekiel 19" },
      ]
   },
   {
      name: "Day 245",
      sections: [
         { name: "Ezekiel 20" },
         { name: "Ezekiel 21" },
      ]
   },
   {
      name: "Day 246",
      sections: [
         { name: "Ezekiel 22" },
         { name: "Ezekiel 23" },
      ]
   },
   {
      name: "Day 247",
      sections: [
         { name: "Ezekiel 24" },
         { name: "Ezekiel 25" },
         { name: "Ezekiel 26" },
      ]
   },
   {
      name: "Day 248",
      sections: [
         { name: "Ezekiel 27" },
         { name: "Ezekiel 28" },
      ]
   },
   {
      name: "Day 249",
      sections: [
         { name: "Ezekiel 29" },
         { name: "Ezekiel 30" },
         { name: "Ezekiel 31" },
      ]
   },
   {
      name: "Day 250",
      sections: [
         { name: "Ezekiel 32" },
         { name: "Ezekiel 33" },
      ]
   },
   {
      name: "Day 251",
      sections: [
         { name: "Ezekiel 34" },
         { name: "Ezekiel 35" },
         { name: "Ezekiel 36" },
      ]
   },
   {
      name: "Day 252",
      sections: [
         { name: "Ezekiel 37" },
         { name: "Ezekiel 38" },
      ]
   },
   {
      name: "Day 253",
      sections: [
         { name: "Ezekiel 39" },
         { name: "Ezekiel 40" },
      ]
   },
   {
      name: "Day 254",
      sections: [
         { name: "Ezekiel 41" },
         { name: "Ezekiel 42" },
         { name: "Ezekiel 43" },
      ]
   },
   {
      name: "Day 255",
      sections: [
         { name: "Ezekiel 44" },
         { name: "Ezekiel 45" },
      ]
   },
   {
      name: "Day 256",
      sections: [
         { name: "Ezekiel 46" },
         { name: "Ezekiel 47" },
         { name: "Ezekiel 48" },
      ]
   },
   {
      name: "Day 257",
      sections: [
         { name: "Daniel 1" },
         { name: "Daniel 2" },
      ]
   },
   {
      name: "Day 258",
      sections: [
         { name: "Daniel 3" },
         { name: "Daniel 4" },
      ]
   },
   {
      name: "Day 259",
      sections: [
         { name: "Daniel 5" },
         { name: "Daniel 6" },
      ]
   },
   {
      name: "Day 260",
      sections: [
         { name: "Daniel 7" },
         { name: "Daniel 8" },
      ]
   },
   {
      name: "Day 261",
      sections: [
         { name: "Daniel 9" },
         { name: "Daniel 10" },
      ]
   },
   {
      name: "Day 262",
      sections: [
         { name: "Daniel 11" },
         { name: "Daniel 12" },
      ]
   },
   {
      name: "Day 263",
      sections: [
         { name: "Hosea 1" },
         { name: "Hosea 2" },
         { name: "Hosea 3" },
         { name: "Hosea 4" },
         { name: "Hosea 5" },
         { name: "Hosea 6" },
      ]
   },
   {
      name: "Day 264",
      sections: [
         { name: "Hosea 7" },
         { name: "Hosea 8" },
         { name: "Hosea 9" },
         { name: "Hosea 10" },
         { name: "Hosea 11" },
         { name: "Hosea 12" },
      ]
   },
   {
      name: "Day 265",
      sections: [
         { name: "Hosea 13" },
         { name: "Hosea 14" },
         { name: "Joel" },
      ]
   },
   {
      name: "Day 266",
      sections: [
         { name: "Amos 1" },
         { name: "Amos 2" },
         { name: "Amos 3" },
         { name: "Amos 4" },
         { name: "Amos 5" },
      ]
   },
   {
      name: "Day 267",
      sections: [
         { name: "Amos 6" },
         { name: "Amos 7" },
         { name: "Amos 8" },
         { name: "Amos 9" },
         { name: "Obadiah" },
      ]
   },
   {
      name: "Day 268",
      sections: [
         { name: "Jonah 1" },
         { name: "Jonah 2" },
         { name: "Jonah 3" },
         { name: "Jonah 4" },
         { name: "Micah 1" },
         { name: "Micah 2" },
      ]
   },
   {
      name: "Day 269",
      sections: [
         { name: "Micah 3" },
         { name: "Micah 4" },
         { name: "Micah 5" },
         { name: "Micah 6" },
         { name: "Micah 7" },
      ]
   },
   {
      name: "Day 270",
      sections: [
         { name: "Nahum" },
         { name: "Habakkuk" },
      ]
   },
   {
      name: "Day 271",
      sections: [
         { name: "Zephaniah" },
         { name: "Haggai" },
      ]
   },
   {
      name: "Day 272",
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
      name: "Day 273",
      sections: [
         { name: "Zechariah 7" },
         { name: "Zechariah 8" },
         { name: "Zechariah 9" },
         { name: "Zechariah 10" },
      ]
   },
   {
      name: "Day 274",
      sections: [
         { name: "Zechariah 11" },
         { name: "Zechariah 12" },
         { name: "Zechariah 13" },
         { name: "Zechariah 14" },
      ]
   },
   {
      name: "Day 275",
      sections: [
         { name: "Malachi 1" },
         { name: "Malachi 2" },
         { name: "Malachi 3" },
         { name: "Malachi 4" },
      ]
   },
   {
      name: "Day 276",
      sections: [
         { name: "Matthew 1" },
         { name: "Matthew 2" },
         { name: "Matthew 3" },
         { name: "Matthew 4" },
      ]
   },
   {
      name: "Day 277",
      sections: [
         { name: "Matthew 5" },
         { name: "Matthew 6" },
      ]
   },
   {
      name: "Day 278",
      sections: [
         { name: "Matthew 7" },
         { name: "Matthew 8" },
         { name: "Matthew 9" },
      ]
   },
   {
      name: "Day 279",
      sections: [
         { name: "Matthew 10" },
         { name: "Matthew 11" },
         { name: "Matthew 12" },
      ]
   },
   {
      name: "Day 280",
      sections: [
         { name: "Matthew 13" },
         { name: "Matthew 14" },
      ]
   },
   {
      name: "Day 281",
      sections: [
         { name: "Matthew 15" },
         { name: "Matthew 16" },
         { name: "Matthew 17" },
      ]
   },
   {
      name: "Day 282",
      sections: [
         { name: "Matthew 18" },
         { name: "Matthew 19" },
         { name: "Matthew 20" },
      ]
   },
   {
      name: "Day 283",
      sections: [
         { name: "Matthew 21" },
         { name: "Matthew 22" },
      ]
   },
   {
      name: "Day 284",
      sections: [
         { name: "Matthew 23" },
         { name: "Matthew 24" },
      ]
   },
   {
      name: "Day 285",
      sections: [
         { name: "Matthew 25" },
         { name: "Matthew 26" },
      ]
   },
   {
      name: "Day 286",
      sections: [
         { name: "Matthew 27" },
         { name: "Matthew 28" },
      ]
   },
   {
      name: "Day 287",
      sections: [
         { name: "Mark 1" },
         { name: "Mark 2" },
         { name: "Mark 3" },
      ]
   },
   {
      name: "Day 288",
      sections: [
         { name: "Mark 4" },
         { name: "Mark 5" },
      ]
   },
   {
      name: "Day 289",
      sections: [
         { name: "Mark 6" },
         { name: "Mark 7" },
      ]
   },
   {
      name: "Day 290",
      sections: [
         { name: "Mark 8" },
         { name: "Mark 9" },
      ]
   },
   {
      name: "Day 291",
      sections: [
         { name: "Mark 10" },
         { name: "Mark 11" },
      ]
   },
   {
      name: "Day 292",
      sections: [
         { name: "Mark 12" },
         { name: "Mark 13" },
      ]
   },
   {
      name: "Day 293",
      sections: [
         { name: "Mark 14" },
         { name: "Mark 15" },
         { name: "Mark 16" },
      ]
   },
   {
      name: "Day 294",
      sections: [
         { name: "Luke 1" },
      ]
   },
   {
      name: "Day 295",
      sections: [
         { name: "Luke 2" },
         { name: "Luke 3" },
      ]
   },
   {
      name: "Day 296",
      sections: [
         { name: "Luke 4" },
         { name: "Luke 5" },
      ]
   },
   {
      name: "Day 297",
      sections: [
         { name: "Luke 6" },
         { name: "Luke 7" },
      ]
   },
   {
      name: "Day 298",
      sections: [
         { name: "Luke 8" },
      ]
   },
   {
      name: "Day 299",
      sections: [
         { name: "Luke 9" },
      ]
   },
   {
      name: "Day 300",
      sections: [
         { name: "Luke 10" },
         { name: "Luke 11" },
      ]
   },
   {
      name: "Day 301",
      sections: [
         { name: "Luke 12" },
         { name: "Luke 13" },
      ]
   },
   {
      name: "Day 302",
      sections: [
         { name: "Luke 14" },
         { name: "Luke 15" },
         { name: "Luke 16" },
      ]
   },
   {
      name: "Day 303",
      sections: [
         { name: "Luke 17" },
         { name: "Luke 18" },
      ]
   },
   {
      name: "Day 304",
      sections: [
         { name: "Luke 19" },
         { name: "Luke 20" },
      ]
   },
   {
      name: "Day 305",
      sections: [
         { name: "Luke 21" },
         { name: "Luke 22" },
      ]
   },
   {
      name: "Day 306",
      sections: [
         { name: "Luke 23" },
         { name: "Luke 24" },
      ]
   },
   {
      name: "Day 307",
      sections: [
         { name: "John 1" },
         { name: "John 2" },
         { name: "John 3" },
      ]
   },
   {
      name: "Day 308",
      sections: [
         { name: "John 4" },
         { name: "John 5" },
      ]
   },
   {
      name: "Day 309",
      sections: [
         { name: "John 6" },
         { name: "John 7" },
      ]
   },
   {
      name: "Day 310",
      sections: [
         { name: "John 8" },
         { name: "John 9" },
      ]
   },
   {
      name: "Day 311",
      sections: [
         { name: "John 10" },
         { name: "John 11" },
      ]
   },
   {
      name: "Day 312",
      sections: [
         { name: "John 12" },
         { name: "John 13" },
      ]
   },
   {
      name: "Day 313",
      sections: [
         { name: "John 14" },
         { name: "John 15" },
         { name: "John 16" },
      ]
   },
   {
      name: "Day 314",
      sections: [
         { name: "John 17" },
         { name: "John 18" },
      ]
   },
   {
      name: "Day 315",
      sections: [
         { name: "John 19" },
         { name: "John 20" },
         { name: "John 21" },
      ]
   },
   {
      name: "Day 316",
      sections: [
         { name: "Acts 1" },
         { name: "Acts 2" },
         { name: "Acts 3" },
      ]
   },
   {
      name: "Day 317",
      sections: [
         { name: "Acts 4" },
         { name: "Acts 5" },
         { name: "Acts 6" },
      ]
   },
   {
      name: "Day 318",
      sections: [
         { name: "Acts 7" },
         { name: "Acts 8" },
      ]
   },
   {
      name: "Day 319",
      sections: [
         { name: "Acts 9" },
         { name: "Acts 10" },
      ]
   },
   {
      name: "Day 320",
      sections: [
         { name: "Acts 11" },
         { name: "Acts 12" },
         { name: "Acts 13" },
      ]
   },
   {
      name: "Day 321",
      sections: [
         { name: "Acts 14" },
         { name: "Acts 15" },
         { name: "Acts 16" },
      ]
   },
   {
      name: "Day 322",
      sections: [
         { name: "Acts 17" },
         { name: "Acts 18" },
      ]
   },
   {
      name: "Day 323",
      sections: [
         { name: "Acts 19" },
         { name: "Acts 20" },
      ]
   },
   {
      name: "Day 324",
      sections: [
         { name: "Acts 21" },
         { name: "Acts 22" },
      ]
   },
   {
      name: "Day 325",
      sections: [
         { name: "Acts 23" },
         { name: "Acts 24" },
         { name: "Acts 25" },
      ]
   },
   {
      name: "Day 326",
      sections: [
         { name: "Acts 26" },
         { name: "Acts 27" },
         { name: "Acts 28" },
      ]
   },
   {
      name: "Day 327",
      sections: [
         { name: "Romans 1" },
         { name: "Romans 2" },
         { name: "Romans 3" },
      ]
   },
   {
      name: "Day 328",
      sections: [
         { name: "Romans 4" },
         { name: "Romans 5" },
         { name: "Romans 6" },
         { name: "Romans 7" },
      ]
   },
   {
      name: "Day 329",
      sections: [
         { name: "Romans 8" },
         { name: "Romans 9" },
         { name: "Romans 10" },
      ]
   },
   {
      name: "Day 330",
      sections: [
         { name: "Romans 11" },
         { name: "Romans 12" },
         { name: "Romans 13" },
         { name: "Romans 14" },
      ]
   },
   {
      name: "Day 331",
      sections: [
         { name: "Romans 15" },
         { name: "Romans 16" },
      ]
   },
   {
      name: "Day 332",
      sections: [
         { name: "1 Corinthians 1" },
         { name: "1 Corinthians 2" },
         { name: "1 Corinthians 3" },
         { name: "1 Corinthians 4" },
      ]
   },
   {
      name: "Day 333",
      sections: [
         { name: "1 Corinthians 5" },
         { name: "1 Corinthians 6" },
         { name: "1 Corinthians 7" },
         { name: "1 Corinthians 8" },
      ]
   },
   {
      name: "Day 334",
      sections: [
         { name: "1 Corinthians 9" },
         { name: "1 Corinthians 10" },
         { name: "1 Corinthians 11" },
      ]
   },
   {
      name: "Day 335",
      sections: [
         { name: "1 Corinthians 12" },
         { name: "1 Corinthians 13" },
         { name: "1 Corinthians 14" },
      ]
   },
   {
      name: "Day 336",
      sections: [
         { name: "1 Corinthians 15" },
         { name: "1 Corinthians 16" },
      ]
   },
   {
      name: "Day 337",
      sections: [
         { name: "2 Corinthians 1" },
         { name: "2 Corinthians 2" },
         { name: "2 Corinthians 3" },
         { name: "2 Corinthians 4" },
      ]
   },
   {
      name: "Day 338",
      sections: [
         { name: "2 Corinthians 5" },
         { name: "2 Corinthians 6" },
         { name: "2 Corinthians 7" },
         { name: "2 Corinthians 8" },
      ]
   },
   {
      name: "Day 339",
      sections: [
         { name: "2 Corinthians 9" },
         { name: "2 Corinthians 10" },
         { name: "2 Corinthians 11" },
         { name: "2 Corinthians 12" },
         { name: "2 Corinthians 13" },
      ]
   },
   {
      name: "Day 340",
      sections: [
         { name: "Galatians 1" },
         { name: "Galatians 2" },
         { name: "Galatians 3" },
         { name: "Galatians 4" },
      ]
   },
   {
      name: "Day 341",
      sections: [
         { name: "Galatians 5" },
         { name: "Galatians 6" },
         { name: "Ephesians 1" },
         { name: "Ephesians 2" },
      ]
   },
   {
      name: "Day 342",
      sections: [
         { name: "Ephesians 3" },
         { name: "Ephesians 4" },
         { name: "Ephesians 5" },
         { name: "Ephesians 6" },
      ]
   },
   {
      name: "Day 343",
      sections: [
         { name: "Philippians 1" },
         { name: "Philippians 2" },
         { name: "Philippians 3" },
         { name: "Philippians 4" },
      ]
   },
   {
      name: "Day 344",
      sections: [
         { name: "Colossians 1" },
         { name: "Colossians 2" },
         { name: "Colossians 3" },
         { name: "Colossians 4" },
      ]
   },
   {
      name: "Day 345",
      sections: [
         { name: "1 Thessalonians 1" },
         { name: "1 Thessalonians 2" },
         { name: "1 Thessalonians 3" },
         { name: "1 Thessalonians 4" },
      ]
   },
   {
      name: "Day 346",
      sections: [
         { name: "1 Thessalonians 5" },
         { name: "2 Thessalonians 1" },
         { name: "2 Thessalonians 2" },
         { name: "2 Thessalonians 3" },
      ]
   },
   {
      name: "Day 347",
      sections: [
         { name: "1 Timothy 1" },
         { name: "1 Timothy 2" },
         { name: "1 Timothy 3" },
         { name: "1 Timothy 4" },
      ]
   },
   {
      name: "Day 348",
      sections: [
         { name: "1 Timothy 5" },
         { name: "1 Timothy 6" },
      ]
   },
   {
      name: "Day 349",
      sections: [
         { name: "2 Timothy 1" },
         { name: "2 Timothy 2" },
         { name: "2 Timothy 3" },
      ]
   },
   {
      name: "Day 350",
      sections: [
         { name: "Titus 1" },
         { name: "Titus 2" },
         { name: "Titus 3" },
         { name: "Philemon" },
      ]
   },
   {
      name: "Day 351",
      sections: [
         { name: "Hebrews 1" },
         { name: "Hebrews 2" },
         { name: "Hebrews 3" },
         { name: "Hebrews 4" },
         { name: "Hebrews 5" },
      ]
   },
   {
      name: "Day 352",
      sections: [
         { name: "Hebrews 6" },
         { name: "Hebrews 7" },
         { name: "Hebrews 8" },
         { name: "Hebrews 9" },
      ]
   },
   {
      name: "Day 353",
      sections: [
         { name: "Hebrews 10" },
         { name: "Hebrews 11" },
      ]
   },
   {
      name: "Day 354",
      sections: [
         { name: "Hebrews 12" },
         { name: "Hebrews 13" },
      ]
   },
   {
      name: "Day 355",
      sections: [
         { name: "James 1" },
         { name: "James 2" },
         { name: "James 3" },
         { name: "James 4" },
         { name: "James 5" },
      ]
   },
   {
      name: "Day 356",
      sections: [
         { name: "1 Peter 1" },
         { name: "1 Peter 2" },
         { name: "1 Peter 3" },
         { name: "1 Peter 4" },
      ]
   },
   {
      name: "Day 357",
      sections: [
         { name: "1 Peter 5" },
         { name: "1 Peter 1" },
         { name: "2 Peter 2" },
         { name: "2 Peter 3" },
      ]
   },
   {
      name: "Day 358",
      sections: [
         { name: "1 John 1" },
         { name: "1 John 2" },
         { name: "1 John 3" },
         { name: "1 John 4" },
         { name: "1 John 5" },
      ]
   },
   {
      name: "Day 359",
      sections: [
         { name: "2 John" },
         { name: "3 John" },
         { name: "Jude" },
      ]
   },
   {
      name: "Day 360",
      sections: [
         { name: "Revelation 1" },
         { name: "Revelation 2" },
         { name: "Revelation 3" },
      ]
   },
   {
      name: "Day 361",
      sections: [
         { name: "Revelation 4" },
         { name: "Revelation 5" },
         { name: "Revelation 6" },
         { name: "Revelation 7" },
         { name: "Revelation 8" },
      ]
   },
   {
      name: "Day 362",
      sections: [
         { name: "Revelation 9" },
         { name: "Revelation 10" },
         { name: "Revelation 11" },
         { name: "Revelation 12" },
      ]
   },
   {
      name: "Day 363",
      sections: [
         { name: "Revelation 13" },
         { name: "Revelation 14" },
         { name: "Revelation 15" },
         { name: "Revelation 16" },
      ]
   },
   {
      name: "Day 364",
      sections: [
         { name: "Revelation 17" },
         { name: "Revelation 18" },
         { name: "Revelation 19" },
      ]
   },
   {
      name: "Day 365",
      sections: [
         { name: "Revelation 20" },
         { name: "Revelation 21" },
         { name: "Revelation 22" },
      ]
   },
];

saveCheckpoints(checkpoints);