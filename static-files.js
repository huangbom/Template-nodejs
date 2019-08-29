const path = require('path');
const mime = require('mime');
const fs = require('mz/fs');

// urlPrefix: /static/
// dir: /static
// path: /static/user.html
function staticFiles(urlPrefix, dir) {
    return async (ctx, next) => {
        let rpath = ctx.request.path;
        if (rpath.startsWith(urlPrefix)) {
            let fp = path.join(dir, rpath.substring(urlPrefix.length)); // user.html
            if (await fs.exists(fp)) {
                ctx.response.type = mime.lookup(rpath);
                ctx.response.body = await fs.readFile(fp);
            } else {
                ctx.response.status = 404;
            }
        } else {
            await next();
        }
    };
}

module.exports = staticFiles;
