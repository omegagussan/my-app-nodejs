module.exports = function (app) {
    return {
        trustParameterTypes: function (req, res) {
            //
            // First we extract the Data from GET ...?id=MYDBID&id=MALICIOUSID
            var data = req.query || req.body;

            console.log('Type is not a String: ', typeof(data.id));
            console.log('Id is instance of array: ', data.id instanceof Array);
            data.id.trim();

            setTimeout(function () {
                data.id.trim();
            }, 0);

            // @todo Show Threat of Mutuating APP-State e.g. by letting App safe Array instead of String in MongoDB
        }
    }
}