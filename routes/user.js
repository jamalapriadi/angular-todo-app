var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* get data */
router.get('/',function(req,res,next){
    User.find(function(err, product){
        if(err) return next(err);
        res.json({success:true,message:'Data berhasil diload',data:product});
    });
});

/* single data */
router.get('/:id',function(req,res,next){
    User.findById(req.params.id,function(err,post){
        if(err) return next(err);
        res.json(post);
    });
});

/*save user */
router.post('/',function(req,res,next){
    User.create(req.body,function(err,post){
        if(err) return next(err);
        res.json(post);
    });
});

/* update user */
router.put('/:id',function(req,res,next){
    User.findByIdAndUpdate(req.params.id,req.body,function(err,post){
        if(err) return next(err);
        res.json(post);
    });
});

router.delete('/:id',function(req,res,next){
    User.findByIdAndRemove(req.params.id,req.body,function(err,post){
        if(err) return next(err);
        res.json(post);
    });
});

module.exports = router;