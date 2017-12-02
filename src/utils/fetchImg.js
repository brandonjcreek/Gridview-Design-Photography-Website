const AWS = require('aws-sdk');

//AWS.config.update({ accessKeyId: 'AKIAI2IY3UWFQXC6Q24Q', secretAccessKey: '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', region: 'us-east-1' });

var s3 = new AWS.S3();

const params = {
    Bucket: 'gridview-test-bucket',
    Delimiter: '/',
    Prefix: 'test_folder/'
}
let imgURLS = [];
s3.listObjects(params, function (err, data) {
    var bucketContents = data.Contents;
    for (var i = 0; i < bucketContents.length; i++) {
        var urlParams = { Bucket: 'gridview-test-bucket', Key: bucketContents[i].Key };
        s3.getSignedUrl('getObject', urlParams, function (err, url) {
            console.log(url);
        });
    }
});

