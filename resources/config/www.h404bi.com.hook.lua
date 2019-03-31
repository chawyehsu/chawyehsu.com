local signature = ngx.req.get_headers()["X-Hub-Signature"]
local key = "" -- GitHub webhook token
if signature == nil then
  return ngx.exit(404)
end

-- HTTP header check
ngx.req.read_body()
local t = {}
for k, v in string.gmatch(signature, "(%w+)=(%w+)") do
  t[k] = v
end

local str = require "resty.string"
local digest = ngx.hmac_sha1(key, ngx.req.get_body_data())
if not str.to_hex(digest) == t["sha1"] then
  return ngx.exit(404)
end

-- Perform update
local rv = io.popen("/bin/bash /data/scripts/www.h404bi.com.pull.sh")
ngx.say(rv:read("*all"))
ngx.exit(200)
