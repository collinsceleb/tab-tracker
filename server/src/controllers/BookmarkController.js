/* eslint-disable no-unused-vars */
const {Bookmark} = require('../models')

module.exports = {
    async index(req, res) {
        try {
            const { songId, userId } = req.query
            const bookmark = await Bookmark.findOne({
                where: {
                    songId: songId,
                    userId: userId
                }
            })
            res.send(bookmark)
        } catch (error) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the Bookmarks'
            })
        }
    },
    async post(req, res) {
        try {
            // const {SongId, UserId} = req.body
            const songId = req.params.songId
            const userId = req.params.userId
            const bookmark = await Bookmark.findOne(req.body, {
                where: {
                    SongId: req.body.songId,
                    UserId: req.body.userId
                }
            })
            if (bookmark) {
                return res.status(400).send({
                    error: "You have already set this as a bookmark"
                })
            }
            const newBookmark = await Bookmark.create(req.body, {
                where: {
                    SongId: songId,
                    UserId: userId
                }
            })
            res.send(newBookmark)
        } catch (error) {
            res.status(500).send({
                error: 'An error has occured trying to create the bookmark'
            })
        }
    },

    async delete(req, res) {
        try {
            const bookmarkId = req.params.bookmarkId
            console.log('bookmarkId', bookmarkId)
            const bookmark = await Bookmark.findByPk(bookmarkId)
            await bookmark.destroy()
            res.send(bookmark)
        } catch (error) {
            res.status(500).send({
                error: 'An error has occured trying to delete the bookmark'
            })
        }
    }
}