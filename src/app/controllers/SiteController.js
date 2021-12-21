class SiteController {

    //[GET] /
    index(rep, res, next) {
        res.render('client/home')
    }
}
module.exports = new SiteController;