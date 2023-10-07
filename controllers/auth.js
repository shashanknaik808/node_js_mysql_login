exports.register = (req, res) => {
    console.log(req.body);
    res.json("Form sumbitted");
}