'use strict';const _0x1a6d02=_0x1930;(function(_0x14a407,_0x43c568){const _0x46927d=_0x1930,_0x3cc85a=_0x14a407();while(!![]){try{const _0x2db115=-parseInt(_0x46927d(0x1a2))/0x1*(parseInt(_0x46927d(0x1d2))/0x2)+-parseInt(_0x46927d(0x224))/0x3+parseInt(_0x46927d(0x1f3))/0x4*(-parseInt(_0x46927d(0x1df))/0x5)+-parseInt(_0x46927d(0x1b0))/0x6+-parseInt(_0x46927d(0x1db))/0x7*(parseInt(_0x46927d(0x1d9))/0x8)+parseInt(_0x46927d(0x1bd))/0x9*(-parseInt(_0x46927d(0x192))/0xa)+-parseInt(_0x46927d(0x14d))/0xb*(-parseInt(_0x46927d(0x212))/0xc);if(_0x2db115===_0x43c568)break;else _0x3cc85a['push'](_0x3cc85a['shift']());}catch(_0xd71f6c){_0x3cc85a['push'](_0x3cc85a['shift']());}}}(_0x5c7e,0xf28b9));process[_0x1a6d02(0x21a)][_0x1a6d02(0x1c5)]='1';import'./config.js';import'./api.js';import{createRequire}from'module';import _0x1fbb96,{join}from'path';import{fileURLToPath,pathToFileURL}from'url';import{platform}from'process';import{readdirSync,statSync,unlinkSync,existsSync,readFileSync,watch}from'fs';import _0x4a4be8 from'yargs';import{spawn}from'child_process';import _0x21d358 from'lodash';import _0x3982d7 from'chalk';import _0x2ea2b6 from'syntax-error';import{format}from'util';import _0x37b645 from'pino';import _0x2f60a4 from'pino';import{Boom}from'@hapi/boom';import{makeWASocket,protoType,serialize}from'./src/libraries/simple.js';import{Low,JSONFile}from'lowdb';import _0x4def9f from'./src/libraries/store.js';const {DisconnectReason,useMultiFileAuthState,fetchLatestBaileysVersion,makeCacheableSignalKeyStore,jidNormalizedUser,PHONENUMBER_MCC}=await import(_0x1a6d02(0x1ba));import _0x389d8d from'readline';import _0x567955 from'node-cache';const {chain}=_0x21d358,PORT=process[_0x1a6d02(0x21a)]['PORT']||process['env']['SERVER_PORT']||0xbb8;let stopped=_0x1a6d02(0x1f7);protoType(),serialize();const msgRetryCounterMap=new Map(),msgRetryCounterCache=new _0x567955({'stdTTL':0x0,'checkperiod':0x0}),userDevicesCache=new _0x567955({'stdTTL':0x0,'checkperiod':0x0});global[_0x1a6d02(0x1cf)]=function filename(_0x5efa99=import.meta[_0x1a6d02(0x18f)],_0x30dd8e=platform!==_0x1a6d02(0x1c1)){const _0xc2f855=_0x1a6d02;return _0x30dd8e?/file:\/\/\//[_0xc2f855(0x198)](_0x5efa99)?fileURLToPath(_0x5efa99):_0x5efa99:pathToFileURL(_0x5efa99)['toString']();},global['__dirname']=function dirname(_0x19942b){const _0x15c7e2=_0x1a6d02;return _0x1fbb96[_0x15c7e2(0x205)](global['__filename'](_0x19942b,!![]));},global[_0x1a6d02(0x222)]=function require(_0x35dae2=import.meta['url']){return createRequire(_0x35dae2);},global[_0x1a6d02(0x1bf)]=(_0x164aa5,_0x7d848c='/',_0x25b9aa={},_0x3e6e4e)=>(_0x164aa5 in global[_0x1a6d02(0x1e6)]?global['APIs'][_0x164aa5]:_0x164aa5)+_0x7d848c+(_0x25b9aa||_0x3e6e4e?'?'+new URLSearchParams(Object[_0x1a6d02(0x165)]({..._0x25b9aa,..._0x3e6e4e?{[_0x3e6e4e]:global[_0x1a6d02(0x1f6)][_0x164aa5 in global['APIs']?global[_0x1a6d02(0x1e6)][_0x164aa5]:_0x164aa5]}:{}})):''),global['timestamp']={'start':new Date()},global[_0x1a6d02(0x1c2)]=[],global[_0x1a6d02(0x210)]=[];const __dirname=global[_0x1a6d02(0x142)](import.meta[_0x1a6d02(0x18f)]);global[_0x1a6d02(0x180)]=new Object(_0x4a4be8(process['argv']['slice'](0x2))[_0x1a6d02(0x218)](![])[_0x1a6d02(0x1eb)]()),global['prefix']=new RegExp('^['+(opts[_0x1a6d02(0x216)]||_0x1a6d02(0x155))[_0x1a6d02(0x197)](/[|\\{}()[\]^$+*?.\-\^]/g,_0x1a6d02(0x196))+']'),global['db']=new Low(/https?:\/\//['test'](opts['db']||'')?new cloudDBAdapter(opts['db']):new JSONFile((opts['_'][0x0]?opts['_'][0x0]+'_':'')+_0x1a6d02(0x1c8))),global[_0x1a6d02(0x1ce)]=async function loadDatabase(){const _0x5265a2=_0x1a6d02;if(global['db'][_0x5265a2(0x1ec)])return new Promise(_0x55064a=>setInterval(async function(){const _0x35d0c2=_0x5265a2;!global['db'][_0x35d0c2(0x1ec)]&&(clearInterval(this),_0x55064a(global['db']['data']==null?global[_0x35d0c2(0x1ce)]():global['db'][_0x35d0c2(0x1e4)]));},0x1*0x3e8));if(global['db'][_0x5265a2(0x1e4)]!==null)return;global['db']['READ']=!![],await global['db']['read']()['catch'](console[_0x5265a2(0x203)]),global['db']['READ']=null,global['db'][_0x5265a2(0x1e4)]={'users':{},'chats':{},'stats':{},'msgs':{},'sticker':{},'settings':{},...global['db'][_0x5265a2(0x1e4)]||{}},global['db'][_0x5265a2(0x169)]=chain(global['db'][_0x5265a2(0x1e4)]);},loadDatabase(),global[_0x1a6d02(0x1dd)]=new Low(new JSONFile(_0x1fbb96[_0x1a6d02(0x1de)](__dirname,'/db/chatgpt.json'))),global[_0x1a6d02(0x207)]=async function loadChatgptDB(){const _0x293c47=_0x1a6d02;if(global[_0x293c47(0x1dd)][_0x293c47(0x1ec)])return new Promise(_0x196279=>setInterval(async function(){const _0x4b4ac1=_0x293c47;!global[_0x4b4ac1(0x1dd)]['READ']&&(clearInterval(this),_0x196279(global[_0x4b4ac1(0x1dd)][_0x4b4ac1(0x1e4)]===null?global[_0x4b4ac1(0x207)]():global[_0x4b4ac1(0x1dd)][_0x4b4ac1(0x1e4)]));},0x1*0x3e8));if(global[_0x293c47(0x1dd)][_0x293c47(0x1e4)]!==null)return;global['chatgpt']['READ']=!![],await global['chatgpt'][_0x293c47(0x18c)]()[_0x293c47(0x21c)](console[_0x293c47(0x203)]),global['chatgpt'][_0x293c47(0x1ec)]=null,global[_0x293c47(0x1dd)][_0x293c47(0x1e4)]={'users':{},...global['chatgpt'][_0x293c47(0x1e4)]||{}},global[_0x293c47(0x1dd)][_0x293c47(0x169)]=_0x21d358[_0x293c47(0x169)](global[_0x293c47(0x1dd)]['data']);},loadChatgptDB();function _0x1930(_0x85c9a0,_0x4f0138){const _0x5c7e44=_0x5c7e();return _0x1930=function(_0x19300f,_0x5be3b9){_0x19300f=_0x19300f-0x142;let _0x55176d=_0x5c7e44[_0x19300f];return _0x55176d;},_0x1930(_0x85c9a0,_0x4f0138);}const {state,saveCreds}=await useMultiFileAuthState(global['authFile']),{version}=await fetchLatestBaileysVersion();let phoneNumber=global['botnumber'];const methodCodeQR=process[_0x1a6d02(0x1a1)][_0x1a6d02(0x15d)]('qr'),methodCode=!!phoneNumber||process[_0x1a6d02(0x1a1)][_0x1a6d02(0x15d)](_0x1a6d02(0x1d3)),MethodMobile=process[_0x1a6d02(0x1a1)]['includes'](_0x1a6d02(0x150)),rl=_0x389d8d[_0x1a6d02(0x194)]({'input':process[_0x1a6d02(0x1c6)],'output':process[_0x1a6d02(0x1ad)]}),question=_0x1f9b2c=>new Promise(_0x13d0c0=>rl['question'](_0x1f9b2c,_0x13d0c0));let opcion;methodCodeQR&&(opcion='1');if(!methodCodeQR&&!methodCode&&!fs[_0x1a6d02(0x17d)]('./'+authFile+_0x1a6d02(0x185)))do{option=await question(_0x1a6d02(0x18b)),!/^[1-2]$/[_0x1a6d02(0x198)](opcion)&&console[_0x1a6d02(0x1b3)](_0x1a6d02(0x1fe));}while(opcion!=='1'&&opcion!=='2'||fs['existsSync']('./'+authFile+'/creds.json'));console[_0x1a6d02(0x1dc)]=()=>{};const connectionOptions={'logger':_0x2f60a4({'level':_0x1a6d02(0x18e)}),'printQRInTerminal':opcion==='1'||methodCodeQR,'mobile':MethodMobile,'browser':opcion==='1'?['BumbleBee-Bot',_0x1a6d02(0x1d0),_0x1a6d02(0x156)]:methodCodeQR?[_0x1a6d02(0x193),_0x1a6d02(0x1d0),_0x1a6d02(0x156)]:['Ubuntu','Chrome','20.0.04'],'auth':{'creds':state[_0x1a6d02(0x187)],'keys':makeCacheableSignalKeyStore(state[_0x1a6d02(0x173)],_0x2f60a4({'level':_0x1a6d02(0x20f)})[_0x1a6d02(0x176)]({'level':'fatal'}))},'waWebSocketUrl':_0x1a6d02(0x1ab),'markOnlineOnConnect':!![],'generateHighQualityLinkPreview':!![],'getMessage':async _0x1ff8a1=>{const _0x1f0631=_0x1a6d02;let _0x1a0134=jidNormalizedUser(_0x1ff8a1[_0x1f0631(0x21d)]),_0x3cb466=await _0x4def9f[_0x1f0631(0x215)](_0x1a0134,_0x1ff8a1['id']);return _0x3cb466?.['message']||'';},'patchMessageBeforeSending':async _0x46f0cf=>{const _0x528c95=_0x1a6d02;let _0x29c1b5=0x0;return global['conn'][_0x528c95(0x178)](),_0x29c1b5++,_0x46f0cf;},'msgRetryCounterCache':msgRetryCounterCache,'userDevicesCache':userDevicesCache,'defaultQueryTimeoutMs':undefined,'cachedGroupMetadata':_0x2c643b=>global[_0x1a6d02(0x1e7)][_0x1a6d02(0x17e)][_0x2c643b]??{},'version':version};global[_0x1a6d02(0x1e7)]=makeWASocket(connectionOptions);if(!fs['existsSync']('./'+authFile+'/creds.json')){if(opcion==='2'||methodCode){opcion='2';if(!conn['authState'][_0x1a6d02(0x187)][_0x1a6d02(0x183)]){if(MethodMobile)throw new Error(_0x1a6d02(0x1d1));let numeroTelefono;if(!!phoneNumber)numeroTelefono=phoneNumber[_0x1a6d02(0x197)](/[^0-9]/g,''),!Object[_0x1a6d02(0x173)](PHONENUMBER_MCC)[_0x1a6d02(0x1e3)](_0xe66d8=>numeroTelefono['startsWith'](_0xe66d8))&&(console[_0x1a6d02(0x1b3)](_0x3982d7[_0x1a6d02(0x170)](_0x3982d7[_0x1a6d02(0x1d7)][_0x1a6d02(0x1b4)]('Start\x20with\x20the\x20country\x20code\x20of\x20your\x20WhatsApp\x20number.\x0aExample:\x20+5219992095479\x0a'))),process[_0x1a6d02(0x225)](0x0));else{while(!![]){phoneNumber=await question(_0x3982d7[_0x1a6d02(0x170)](_0x3982d7[_0x1a6d02(0x1d7)][_0x1a6d02(0x1c7)]('Please\x20enter\x20your\x20WhatsApp\x20number.\x0aExample:\x20+5219992095479\x0a'))),numeroTelefono=numeroTelefono[_0x1a6d02(0x197)](/[^0-9]/g,'');if(numeroTelefono[_0x1a6d02(0x1ff)](/^\d+$/)&&Object[_0x1a6d02(0x173)](PHONENUMBER_MCC)[_0x1a6d02(0x1e3)](_0x3007a3=>numeroTelefono[_0x1a6d02(0x14f)](_0x3007a3)))break;else console[_0x1a6d02(0x1b3)](_0x3982d7[_0x1a6d02(0x170)](_0x3982d7[_0x1a6d02(0x1d7)]['redBright'](_0x1a6d02(0x189))));}rl[_0x1a6d02(0x1f7)]();}setTimeout(async()=>{const _0x65ad2a=_0x1a6d02;let _0x1445d4=await conn[_0x65ad2a(0x1f8)](numeroTelefono);_0x1445d4=_0x1445d4?.[_0x65ad2a(0x1ff)](/.{1,4}/g)?.[_0x65ad2a(0x1de)]('-')||_0x1445d4,console[_0x65ad2a(0x1b3)](_0x3982d7[_0x65ad2a(0x1c3)]('[\x20ℹ️\x20]\x20enter\x20the\x20pairing\x20code\x20on\x20WhatsApp.')),console[_0x65ad2a(0x1b3)](_0x3982d7['black'](_0x3982d7['bgGreen'](_0x65ad2a(0x1ed))),_0x3982d7['black'](_0x3982d7[_0x65ad2a(0x16e)](code)));},0xbb8);}}}conn[_0x1a6d02(0x148)]=![],conn[_0x1a6d02(0x1ae)]=![],conn['logger'][_0x1a6d02(0x1dc)](_0x1a6d02(0x17f));!opts['test']&&(global['db']&&setInterval(async()=>{const _0xa5b0ee=_0x1a6d02;if(global['db'][_0xa5b0ee(0x1e4)])await global['db'][_0xa5b0ee(0x217)]();if(opts[_0xa5b0ee(0x20c)]&&(global[_0xa5b0ee(0x158)]||{})[_0xa5b0ee(0x181)])tmp=[os[_0xa5b0ee(0x1d8)](),_0xa5b0ee(0x15a),'jadibts'],tmp['forEach'](_0x303805=>cp['spawn'](_0xa5b0ee(0x181),[_0x303805,_0xa5b0ee(0x19e),'3','-type','f','-delete']));},0x1e*0x3e8));if(opts[_0x1a6d02(0x190)])(await import(_0x1a6d02(0x1a4)))[_0x1a6d02(0x204)](global[_0x1a6d02(0x1e7)],PORT);function clearTmp(){const _0x1d21fd=_0x1a6d02,_0x30f848=[join(__dirname,_0x1d21fd(0x157))],_0x476d64=[];return _0x30f848['forEach'](_0xa99869=>readdirSync(_0xa99869)[_0x1d21fd(0x19d)](_0x60fd21=>_0x476d64[_0x1d21fd(0x15f)](join(_0xa99869,_0x60fd21)))),_0x476d64[_0x1d21fd(0x15e)](_0x513901=>{const _0xf1f5e0=_0x1d21fd,_0x1c9b81=statSync(_0x513901);if(_0x1c9b81[_0xf1f5e0(0x146)]()&&Date[_0xf1f5e0(0x1f4)]()-_0x1c9b81[_0xf1f5e0(0x1b9)]>=0x3e8*0x3c*0x3)return unlinkSync(_0x513901);return![];});}function _0x5c7e(){const _0xe562d5=['Error\x20deleting\x20file\x20','removeAllListeners','__require','watch','4175028IptAhl','exit','green','-frames:v','__dirname','send','callUpdate','freeze','isFile','Bumblebee\x20is\x20one\x20of\x20the\x20most\x20loyal\x20Autobots.','isInit','participantsUpdate','race','syntax\x20error\x20while\x20loading\x20\x27','Bumblebee\x20often\x20uses\x20his\x20horn\x20to\x20communicate\x20when\x20his\x20voice\x20box\x20is\x20damaged.','4682623oIzyDK','He\x20is\x20one\x20of\x20the\x20original\x20Transformers\x20from\x20the\x20\x2780s\x20cartoon\x20series\x20and\x20has\x20been\x20a\x20fan\x20favorite\x20ever\x20since.','startsWith','mobile','-hide_banner','sSubject','then','user','*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\x5c-.@','2.0.0','./src/tmp','support','connectionLost','tmp','connectionReplaced','\x20folder\x20and\x20scan\x20again.','includes','map','push','floor','creds.update','-loglevel','https://github.com/Khalid-official\x20*🐝@user\x20HAS\x20BEEN\x20DEMOTED\x20FROM\x20ADMINSHIP,\x20SO\x20SHAMFULL😢*','off','entries','--version','convert','padStart','chain','In\x20the\x20movie,\x20Bumblebee\x20is\x20shown\x20to\x20have\x20a\x20deep\x20bond\x20with\x20Charlie.','[\x20⚠\x20]\x20Connection\x20replaced,\x20a\x20new\x20session\x20has\x20been\x20opened.\x20Please\x20close\x20the\x20current\x20session\x20first.','reloadHandler','https://github.com/Khalid-official\x20*THE\x20DESCRIPTION\x20HAS\x20BEEN\x20MODIFIED*\x0a\x0a*NEW\x20DESCRIPTION:*\x20@desc','white','message.delete','bgBlack','messages.upsert','./BumbleSession','keys','groups.update','sDesc','child','\x20💖','uploadPreKeysToServerIfRequired','[\x20ℹ️\x20]\x20Connected\x20successfully.','\x20Second(s)\x20','spromote','rename','existsSync','chats','[\x20ℹ️\x20]\x20STARTING...\x0a','opts','find','credsUpdate','registered','timedOut','/creds.json','restartRequired','creds','\x20Hour(s)\x20','Please\x20enter\x20your\x20WhatsApp\x20number.\x0aExample:\x20+5219992095479.\x0a','deleted\x20plugin\x20-\x20\x27','[\x20ℹ️\x20]\x20Select\x20an\x20option:\x0a1.\x20With\x20QR\x20code\x0a2.\x20With\x208-digit\x20text\x20code\x0a--->\x20','read','[\x20⚠\x20]\x20Unknown\x20disconnection\x20reason.\x20','silent','url','server','Bumblebee\x27s\x20voice\x20box\x20was\x20damaged\x20in\x20the\x20first\x20film,\x20which\x20is\x20why\x20he\x20uses\x20radio\x20signals\x20to\x20communicate.','4718380qNcaek','BumbleBee-Bot','createInterface','Bumblebee\x20has\x20a\x20strong\x20sense\x20of\x20justice.','\x5c$&','replace','test','Bumblebee\x20has\x20a\x20special\x20ability\x20to\x20disguise\x20himself\x20as\x20a\x20different\x20vehicle\x20to\x20blend\x20in\x20with\x20human\x20society.','all','\x20deleted\x20successfully','@g.us','forEach','-amin','authFile','badSession','argv','1dtjCWT','sdemote','./server.js','https://github.com/Khalid-official\x20*🐝THE\x20GROUP\x20PHOTO\x20HAS\x20BEEN\x20CHANGED🐝!!*','isDirectory','-filter_complex','./jadibts/','[\x20⚠\x20]\x20Connection\x20timed\x20out,\x20reconnecting...','statusCode','wss://web.whatsapp.com/ws/chat?ED=CAIICA','warn','stdout','well','handler','9760614tSNfuN','plugins','loggedOut','log','redBright','uptime','?update=','reset','unlink','mtimeMs','baileys','ffprobe','call','36bqoCFq','error\x20require\x20plugin\x20\x27','API','bind','win32','videoList','yellow','\x20Minute(s)\x20','NODE_TLS_REJECT_UNAUTHORIZED','stdin','yellowBright','database.json','uncaughtException','sRevoke','[\x20⚠\x20]\x20Connection\x20replaced,\x20Please\x20wait\x20a\x20moment,\x20I\x27m\x20going\x20to\x20restart...\x0aIf\x20errors\x20appear,\x20restart\x20with:\x20npm\x20start','color','connection.update','loadDatabase','__filename','Safari','No\x20se\x20puede\x20usar\x20un\x20código\x20de\x20emparejamiento\x20con\x20la\x20API\x20móvil','3149774DMdpwp','code','reload','endsWith','open','bold','tmpdir','274936CqSxPA','onCall','35AbYUBY','info','chatgpt','join','50fVRHfD','module','length','filter','some','data','Bumblebee\x20can\x20transform\x20into\x20a\x20Camaro\x20or\x20a\x20Volkswagen\x20Beetle.','APIs','conn','Bumblebee\x27s\x20car\x20form\x20is\x20often\x20seen\x20as\x20a\x20symbol\x20of\x20freedom\x20and\x20youthfulness.','red','unlinkSync','parse','READ','Your\x20match\x20code:\x20','magick','webp','./handler.js','pre-key-','File\x20deleted:\x20','6596xUlCbX','now','https://github.com/Khalid-official\x20*🐝GROUP\x20NAME\x20HAS\x20BEEN\x20CHANGED🐝*\x0a*🐝NEW\x20NAME🐝:*\x20@subject','APIKeys','close','requestPairingCode','connect','deleteUpdate','In\x20the\x20Transformers\x20universe,\x20Bumblebee\x20has\x20been\x20shown\x20to\x20have\x20excellent\x20combat\x20skills\x20despite\x20his\x20small\x20size.','creds.json','https://github.com/Khalid-official\x20*🐝@user\x20HAS\x20BEEN\x20PROMOTED\x20TO\x20ADMINSHIP,\x20ENJOY\x20YOUR\x20RANKING\x20FHAM🥂*','[\x20❗\x20]\x20Please\x20select\x20only\x201\x20or\x202.\x0a','match','File\x20','sort','\x20not\x20deleted','error','default','dirname','output','loadChatgptDB','group-participants.update','./BumbleSession/','onDelete','logger','autocleartmp','In\x20\x27Bumblebee,\x27\x20he\x20is\x20depicted\x20as\x20having\x20a\x20more\x20emotional\x20and\x20vulnerable\x20side\x20compared\x20to\x20other\x20Transformers.','https://github.com/Khalid-official\x20*🐝GROUP\x20LINK\x20HAS\x20BEEN\x20REVOKED🐝!!*\x0a*NEW\x20LINK:*\x20@revoke','fatal','videoListXXX','isChats','216AzdKxl','🐝\x20','[\x20⚠\x20]\x20Connection\x20closed,\x20please\x20delete\x20the\x20','loadMessage','prefix','write','exitProcess','ffmpeg','env','toString','catch','remoteJid','groupsUpdate','connectionClosed'];_0x5c7e=function(){return _0xe562d5;};return _0x5c7e();}const dirToWatchccc=_0x1fbb96[_0x1a6d02(0x1de)](__dirname,'./');function deleteCoreFiles(_0x22f55e){const _0x444245=_0x1a6d02,_0x2dcae3=/^core\.\d+$/i,_0x3c3c7f=_0x1fbb96['basename'](_0x22f55e);_0x2dcae3[_0x444245(0x198)](_0x3c3c7f)&&fs[_0x444245(0x1b8)](_0x22f55e,_0x34505b=>{const _0x3cecf0=_0x444245;_0x34505b?console[_0x3cecf0(0x203)](_0x3cecf0(0x220)+_0x22f55e+':',_0x34505b):console[_0x3cecf0(0x1b3)](_0x3cecf0(0x1f2)+_0x22f55e);});}fs[_0x1a6d02(0x223)](dirToWatchccc,(_0x109739,_0x3fe3ae)=>{const _0x262ddc=_0x1a6d02;if(_0x109739===_0x262ddc(0x17c)){const _0x2a4c05=_0x1fbb96[_0x262ddc(0x1de)](dirToWatchccc,_0x3fe3ae);fs['stat'](_0x2a4c05,(_0x9ff5cb,_0x31657d)=>{const _0x4139b9=_0x262ddc;!_0x9ff5cb&&_0x31657d[_0x4139b9(0x146)]()&&deleteCoreFiles(_0x2a4c05);});}});function purgeSession(){const _0x3fb51d=_0x1a6d02;let _0x5c5abc=[],_0x2d9558=readdirSync(_0x3fb51d(0x172)),_0xc0c6cd=_0x2d9558[_0x3fb51d(0x1e2)](_0x53249f=>{const _0x167839=_0x3fb51d;return _0x53249f[_0x167839(0x14f)](_0x167839(0x1f1));});_0x5c5abc=[..._0x5c5abc,..._0xc0c6cd],_0xc0c6cd[_0x3fb51d(0x19d)](_0x2856c7=>{unlinkSync('./BumbleSession/'+_0x2856c7);});}function purgeSessionSB(){const _0x14aea9=_0x1a6d02;try{let _0x525c13=readdirSync(_0x14aea9(0x1a8)),_0x484ebe=[];_0x525c13['forEach'](_0x3dfb64=>{const _0x42b0a6=_0x14aea9;if(statSync(_0x42b0a6(0x1a8)+_0x3dfb64)[_0x42b0a6(0x1a6)]()){let _0x2780aa=readdirSync(_0x42b0a6(0x1a8)+_0x3dfb64)[_0x42b0a6(0x1e2)](_0x53fb54=>{const _0x29df41=_0x42b0a6;return _0x53fb54[_0x29df41(0x14f)](_0x29df41(0x1f1));});_0x484ebe=[..._0x484ebe,..._0x2780aa],_0x2780aa[_0x42b0a6(0x19d)](_0x4629e4=>{const _0x42f146=_0x42b0a6;unlinkSync(_0x42f146(0x1a8)+_0x3dfb64+'/'+_0x4629e4);});}});if(_0x484ebe[_0x14aea9(0x1e1)]===0x0)return;}catch(_0x2bb059){console[_0x14aea9(0x1b3)](_0x3982d7['bold']['red']('[\x20ℹ️\x20]\x20Something\x20went\x20wrong\x20during\x20deletion,\x20files\x20not\x20deleted'));}}function purgeOldFiles(){const _0x3151ad=_0x1a6d02,_0x2f9655=[_0x3151ad(0x209),_0x3151ad(0x1a8)],_0x1c3e8f=Date['now']()-0x3c*0x3c*0x3e8;_0x2f9655['forEach'](_0x2d6169=>{readdirSync(_0x2d6169,(_0x3c2664,_0x31c74d)=>{const _0x12773c=_0x1930;if(_0x3c2664)throw _0x3c2664;_0x31c74d[_0x12773c(0x19d)](_0x11ca10=>{const _0x22d5bb=_0x12773c,_0xa0c90=_0x1fbb96[_0x22d5bb(0x1de)](_0x2d6169,_0x11ca10);stat(_0xa0c90,(_0xf2cd7c,_0x574079)=>{const _0x3d6652=_0x22d5bb;if(_0xf2cd7c)throw _0xf2cd7c;_0x574079[_0x3d6652(0x146)]()&&_0x574079['mtimeMs']<_0x1c3e8f&&_0x11ca10!==_0x3d6652(0x1fc)?unlinkSync(_0xa0c90,_0x4a5862=>{const _0x31315a=_0x3d6652;if(_0x4a5862)throw _0x4a5862;console[_0x31315a(0x1b3)](_0x3982d7[_0x31315a(0x1d7)][_0x31315a(0x226)](_0x31315a(0x200)+_0x11ca10+_0x31315a(0x19b)));}):console[_0x3d6652(0x1b3)](_0x3982d7[_0x3d6652(0x1d7)][_0x3d6652(0x1e9)]('File\x20'+_0x11ca10+_0x3d6652(0x202)+_0xf2cd7c));});});});});}async function connectionUpdate(_0x58acff){const _0x3e6146=_0x1a6d02,{connection:_0x234066,lastDisconnect:_0x41a299,isNewLogin:_0xeca0bc}=_0x58acff;stopped=_0x234066;if(_0xeca0bc)conn[_0x3e6146(0x148)]=!![];const _0x11fce2=_0x41a299?.[_0x3e6146(0x203)]?.[_0x3e6146(0x206)]?.['statusCode']||_0x41a299?.[_0x3e6146(0x203)]?.[_0x3e6146(0x206)]?.['payload']?.[_0x3e6146(0x1aa)];_0x11fce2&&_0x11fce2!==DisconnectReason['loggedOut']&&conn?.['ws']['socket']==null&&(await global['reloadHandler'](!![])[_0x3e6146(0x21c)](console['error']),global['timestamp'][_0x3e6146(0x1f9)]=new Date());if(global['db']['data']==null)loadDatabase();(_0x58acff['qr']!=0x0&&_0x58acff['qr']!=undefined||methodCodeQR)&&((opcion=='1'||methodCodeQR)&&console[_0x3e6146(0x1b3)](_0x3982d7['yellow']('[\x20ℹ️\x20]\x20Scan\x20the\x20QR\x20code.')));_0x234066==_0x3e6146(0x1d6)&&console[_0x3e6146(0x1b3)](_0x3982d7['yellow'](_0x3e6146(0x179)));let _0x582b7a=new Boom(_0x41a299?.['error'])?.[_0x3e6146(0x206)]?.[_0x3e6146(0x1aa)];_0x582b7a==0x195&&(await fs[_0x3e6146(0x1ea)]('./BumbleSession/'+_0x3e6146(0x1fc)),console[_0x3
