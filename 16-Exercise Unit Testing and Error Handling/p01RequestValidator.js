function requestValidator(obj){
    let validMethods = ['POST', 'GET', 'DELETE', 'CONNECT'];
    let uriPattern = new RegExp(/^(?:\*|[A-Za-z\.\d]+)$/gm);
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let messagePattern = /^[^\<\>\\\&\'\"]*$/gm;
    if (obj.method == undefined || !validMethods.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`)
    }
    if (obj.uri == undefined || !uriPattern.test(obj.uri)) {
        throw new Error(`Invalid request header: Invalid URI`);
    }
    if (obj.version == undefined || !validVersions.includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }
    if (obj.message == undefined || !messagePattern.test(obj.message)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }
    let match = messagePattern.test(obj.message);
    console.log(match);
    return obj;
}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  })

requestValidator({
  method: 'OPTIONS',
  uri: 'git.master',
  version: 'HTTP/1.1',
  message: '-recursive'
})