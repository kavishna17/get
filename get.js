var http=require('http');
var url=require('url');
http.createServer(onRequest).listen(8080);
function onRequest(req,res)
{
    var a=url.parse(req.url,true);
    var q=a.query;
    var name=q.name;
    var password=q.password;
    var phonenumber=q.phonenumber;
    var lan=q.langauage;
    var gen=q.gender;
   
    res.write("<html><body><table border='1'>");
    res.write("<tr><td>NAME:</td><td>"+name+"</td></tr>")
    res.write("<tr><td>PASSWORD:</td><td>"+password+"</td></tr>")
    res.write("<tr><td>PHONENUMBER:</td><td>"+phonenumber+"</td></tr>")
    res.write("<tr><td>LANGAUAGE:</td><td>"+lan+"</td></tr>")
    res.write("<tr><td>GENDER:</td><td>"+gen+"</td></tr>")
   
    res.write("</table></body></html>");
    res.end();
}
 
console.log("server started");
    

