module.exports = function(app, Notes){
    //addNote
    app.post('/notes', function(req, res){
        console.log(req.body);
        var note = new Notes({
            title: req.body.title,
            body: req.body.body,
        });
        note.save(function(err){
            if(err) console.log(err);
            else console.log('Note saved');
        });
        res.send(note);
    });

	//findAllNotes
	app.get('/notes', function(req, res){
        Notes.find(function(err,notes){
            if(err) console.log(err);
            else res.send(notes);
        });
    });
    //findByID
    app.get('/notes/:id', function(req, res){
        Notes.findById(req.params.id, function(err,note){
            if(err) console.log(err);
            else res.send(note);
        });
    });

    //updateNote
    app.put('/notes/:id', function(req, res){
        Notes.findById(req.params.id, function(err, note){
            note.title = req.body.title;
            note.body = req.body.body;
            note.save(function(err){
                if(err) console.log(err);
                else{
                    console.log('Note updated');
                    res.send(note);
                } 
            })
        });
    });
    //deleteNote
    app.delete('/notes/:id', function(req, res){
        Notes.findById(req.params.id, function(err, note){
            note.remove(function(err){
                if(err) console.log(err);
                else{
                    console.log('Note deleted');
                    res.send('Note deleted');
                } 
            })
        });
    });
 }
