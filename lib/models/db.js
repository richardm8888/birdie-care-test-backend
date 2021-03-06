"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME
});
connection.connect(function (err) {
    if (err)
        throw err;
});
exports.default = connection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL2RiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTdCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssWUFBWSxFQUFFO0lBQ3ZDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztDQUM5QjtBQUdELElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztJQUNwQyxJQUFJLEVBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO0lBQzlCLElBQUksRUFBTyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87SUFDOUIsUUFBUSxFQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVztJQUNsQyxRQUFRLEVBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTO0NBQ25DLENBQUMsQ0FBQztBQUVILFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBUyxHQUFVO0lBQ2xDLElBQUksR0FBRztRQUFFLE1BQU0sR0FBRyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG15c3FsID0gcmVxdWlyZSgnbXlzcWwnKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcbn1cblxuLy9sb2NhbCBteXNxbCBkYiBjb25uZWN0aW9uXG52YXIgY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xuICAgIGhvc3QgICAgIDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcbiAgICB1c2VyICAgICA6IHByb2Nlc3MuZW52LkRCX1VTRVIsXG4gICAgcGFzc3dvcmQgOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcbiAgICBkYXRhYmFzZSA6IHByb2Nlc3MuZW52LkRCX0RCTkFNRVxufSk7XG5cbmNvbm5lY3Rpb24uY29ubmVjdChmdW5jdGlvbihlcnI6IEVycm9yKSB7XG4gICAgaWYgKGVycikgdGhyb3cgZXJyO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Rpb247XG4iXX0=