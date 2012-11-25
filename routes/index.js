
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.salonmenu = function (req,res) {
  res.render('salonmenu');
};

exports.spamenu = function (req,res) {
  res.render('spamenu');
};

exports.spamenumassage = function (req,res) {
  res.render('spamenu-massage');
};

exports.spamenubody = function (req,res) {
  res.render('spamenu-body');
};

exports.spamenuwax = function (req,res) {
  res.render('spamenu-wax');
};

exports.spamenufacials = function (req,res) {
  res.render('spamenu-facials');
};

exports.staffredken = function (req,res) {
  res.render('staff-redken');
};

exports.staffstylists = function (req,res) {
  res.render('staff-stylists');
}

exports.staffmasterstylists = function (req,res) {
  res.render('staff-masterstylists');
}

exports.staffspecialists = function (req,res) {
  res.render('staff-specialists');
}

exports.staffestheticians = function (req,res) {
  res.render('staff-estheticians');
}

exports.staffmassage = function (req,res) {
  res.render('staff-massage');
}

exports.staffnails = function (req,res) {
  res.render('staff-nails');
}

exports.bridalpics = function (req,res) {
  res.render('bridal-pics');
}

exports.bridaloffers = function (req,res) {
  res.render('bridal-offers');
}

exports.promotions = function (req,res) {
  res.render('promotions');
}

exports.giftcertificates = function (req,res) {
  res.render('giftcertificates');
}

exports.contact = function(req,res) {
  res.render('contact');
}
