
<script runat="server">
    Platform.Load("Core", "1.1.5");
    HTTPHeader.SetValue("Access-Control-Allow-Methods", "GET, POST");
    HTTPHeader.SetValue("Access-Control-Allow-Origin", "*");
    HTTPHeader.SetValue(
      "Access-Control-Allow-Headers",
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    );
    // TODO: Set your sub-domain for Rest API here
    var subdomain = 'mc-yfyyj2sjhsjhkwc1s8w4zrxx4';
    try{
        var Host = Platform.Request.GetRequestHeader('Host')
        var Authorization = Platform.Request.GetRequestHeader('Authorization')

        var restEndpoint = 'https://'+subdomain+'.rest.marketingcloudapis.com/';
        var validateEmailEndpoint = restEndpoint + 'address/v1/validateEmail'

        var contentType = 'application/json';
        var jbPayloadPart = {
            "email": "help@example.com",
            "validators": [
              "SyntaxValidator",
              "MXValidator",
              "ListDetectiveValidator"
            ]
          };
        var jbPayload = Stringify(jbPayloadPart); 
        var jbHeaderNames = ["Authorization"];
        var jbHeaderValues = [Authorization ]; 
        var jbResultCode, jbResult, jbStry
        try { 
            jbResult = HTTP.Post(validateEmailEndpoint, jbContentType, jbPayload, jbHeaderNames, jbHeaderValues);
            jbResultCode = (jbResult.StatusCode);
            jbStry = (jbResult.Response + '');
        }catch(e) { 
            Platform.Function.RaiseError("Unauthorized: Invalid Access Token",true,"statusCode","3");
        }

        if(jbResultCode == '200') {
            //Auth token valid
            Write('\n' + 'Auth Token Valid... write your logic here..')
        }
        else {
            Platform.Function.RaiseError("Unauthorized: Invalid Access Token",false,"statusCode","3");
        }
    }catch(e) {
        Write(Stringify(e));
    }
</script>