<!DOCTYPE html><html><head><title></title><meta http-equiv="content-type" content="text/html; charset=utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0"><script type="text/javascript" src="https://apis.google.com/js/api.js"></script><script type="text/javascript" src="https://oauth.googleusercontent.com/gadgets/js/core:rpc:shindig.random:shindig.sha1.js?c=2"></script><script src='https://ssl.gstatic.com/accounts/o/1074358075-postmessagerelay.js'></script></head><body  ></body></html>
Error saving setting with name: consoleHistory, value length: 5314803. Error: Failed to set the 'consoleHistory' property on 'Storage': Setting the value of 'consoleHistory' exceeded the quota.
Ten largest settings: 
Setting: 'consoleHistory', size: 5232961
Setting: 'previouslyViewedFiles', size: 4720
Setting: 'savedURLs', size: 2656
Setting: 'breakpoints', size: 227
Setting: 'domBreakpoints', size: 2
Setting: 'eventListenerBreakpoints', size: 2
Setting: 'experiments', size: 2
Setting: 'fileSystemMapping', size: 2
Setting: 'workspaceExcludedFolders', size: 2
Uncaught SyntaxError: Unexpected token <(…)
Uncaught CustomError: Error in protected function: Cannot read property 'type' of undefined

-
https://accounts.google.com/o/oauth2/postmessageRelay?parent=https%3A%2F%2Fdocs.google.com
