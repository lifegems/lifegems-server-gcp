var datastore = require('../config/datastore');
var router = require('express').Router();

router.get('/schedules', (req, res) => {
   console.log('  GET 200', req.originalUrl);
   const query = datastore.createQuery('Schedule').limit(100).order('ScheduleID');
   datastore.runQuery(query, (err, rows) => {
      var schedules = rows.map((row) => {
         return {
            id: row.ScheduleID,
            code: row.ScheduleCode,
            name: row.ScheduleName,
            version: row.Version,
         }
      });
      res.send(schedules);
   });
});

router.get('/schedules/:id', (req, res) => {
   console.log('  GET 200', req.originalUrl);
   const query = datastore.createQuery('Schedule').filter('ScheduleID', parseInt(req.params.id)).limit(1);
   datastore.runQuery(query, (err, rows) => {
      var schedule = {
         id: rows[0].ScheduleID,
         code: rows[0].ScheduleCode,
         name: rows[0].ScheduleName,
         version: rows[0].Version,
      };
      res.send(schedule);
   });
});

router.get('/checkpoints', function(req, res) {
   const id = req.query.scheduleId;
   const parent = req.query.parent;
   if (!id) {
      console.log('  GET 400', req.originalUrl, "No schedule specified.");
      res.status(400).send('Invalid Request');
      return false;
   }
   console.log('  GET 200', req.originalUrl);
   const query = datastore.createQuery('ScheduleCheckpoint').filter('ScheduleID', parseInt(id));
   datastore.runQuery(query, function(err, rows) {
      rows = transformQuery(rows);
      var checkpointLevel = getSectionCheckpointLevel(rows);
      var startSections = (parent) ? rows.filter(r => r.parent == parent) : rows.filter(r => (r.code.match(/\./g) || []).length == checkpointLevel);
      var sections = nestSections(startSections, rows);
      sections.forEach(s => s.sections = nestSections(s.sections, rows));
      res.send(sections);
   });
});

function getSectionCheckpointLevel(sections) {
   var levels = sections.map(s => (s.code.match(/\./g) || []).length)
   return levels.reduce((a, b) => Math.min(a,b));
}

function nestSections(sections, allRows) {
   return sections.map(s => Object.assign(s, {
      sections: allRows.filter(r => r.parent == s.code)
   }));
}

function transformQuery(rows) {
   return rows
      .sort((a,b) => (a.CheckpointID == b.CheckpointID) ? 0 : +(a.CheckpointID > b.CheckpointID) || -1)
      .map(r => {
         return {
            id: r.CheckpointID,
            code: r.CheckpointCode,
            name: r.CheckpointName,
            parent: r.ParentCheckpointCode,
            schedule: r.ScheduleID,
            sections: []
         }
      });
}

module.exports = router;