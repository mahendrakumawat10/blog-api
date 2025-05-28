const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post(
    "/create",
    (req, res) => {
        const result = postController.createPost(req.body);
        result.then(
            (success) => {
                res.send(success)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }
)

router.get(
    "/get",
    (req, res) => {
        const result = postController.get();
        result.then(
            (success) => {
                res.send(success)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }
)
router.get(
    "/get/:id",
    (req, res) => {
        const result = postController.get(req.params.id);
        result.then(
            (success) => {
                res.send(success)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }
)

router.put(
    "/update/:id",
    (req, res) => {
        const result = postController.update(req.params.id, req.body);
        result.then(
            (success) => {
                res.send(success)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }
)


router.delete(
    "/delete/:id",
    (req, res) => {
        const result = postController.delete(req.params.id);
        result.then(
            (success) => {
                res.send(success)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }
)




module.exports = router;
