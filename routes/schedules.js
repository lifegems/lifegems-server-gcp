var datastore = require('../config/datastore');
var router = require('express').Router();

router.get('/schedules', function(req, res) {
   console.log('  GET 200', req.originalUrl);
   const query = datastore.createQuery('Schedule').limit(100).order('ScheduleID');
   datastore.runQuery(query, function(err, rows) {
      var schedules = rows.map(function(row) {
         return {
            id: row.ScheduleID,
            name: row.ScheduleName
         }
      });
      res.send(schedules);
   });
});

router.get('/schedules/:id', function(req, res) {
   console.log('  GET 200', req.originalUrl);
   const id = req.params.id;
   const query = datastore.createQuery('ScheduleCheckpoint').filter('ScheduleID', parseInt(id));
   datastore.runQuery(query, function(err, rows) {
      rows = rows
         .sort((a,b) => (a.CheckpointID == b.CheckpointID) ? 0 : +(a.CheckpointID > b.CheckpointID) || -1)
         .map(r => {
            return {
               id: r.CheckpointID,
               name: r.CheckpointName,
               parent: r.ParentID,
               schedule: r.ScheduleID,
               sections: []
            }
         });
      var sections = rows.filter(r => r.parent == 0);
      sections.forEach(section => {
         section.sections = rows.filter(r => r.parent == section.id);
      });
      res.send(sections);
   });
});

module.exports = router;