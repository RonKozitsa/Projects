const config = require('./calcExpress');
const fetch = require('node-fetch');

const baseURL = `http://localhost:${config.PORT}/`;
const METHODS = config.METHODS;

async function approachToServer(url, method){
    const result = await fetch(url, { method: method });    
    const resultStatus = result.status;
    const resultText = await result.text();    
    const textAsObject = JSON.parse(resultText);
    return { resultStatus,  textAsObject };
}

async function startSession(){
    return await approachToServer(`${baseURL}start`, METHODS.GET);
}

async function add(uniqueString, num){
    return await approachToServer(`${baseURL}calc/${uniqueString}/add/${num}`, METHODS.POST);
}

async function sub(uniqueString, num){
    return await approachToServer(`${baseURL}calc/${uniqueString}/sub/${num}`, METHODS.POST);
}

async function divide(uniqueString, num){
    return await approachToServer(`${baseURL}calc/${uniqueString}/divide/${num}`, METHODS.PUT);
}

async function multiply(uniqueString, num){
    return await approachToServer(`${baseURL}calc/${uniqueString}/multiply/${num}`, METHODS.PUT);
}

async function reset(uniqueString){
    return await approachToServer(`${baseURL}calc/${uniqueString}/reset`, METHODS.POST);
}

async function getM(uniqueString){
    return await approachToServer(`${baseURL}calc/${uniqueString}/M`, METHODS.GET);
}

async function deleteSession(uniqueString){
    return await approachToServer(`${baseURL}calc/${uniqueString}/del`, METHODS.DELETE);
}

async function generateStatus500WithWeirdOpOrWithDivideByZero(uniqueString,op, num, method){
    return await approachToServer(`${baseURL}calc/${uniqueString}/${op}/${num}`, method);
}

async function startTesting(){
    //start 3 sessions
    const session1 = await startSession();
    const session2 = await startSession();
    const session3 = await startSession();

    //get ID's
    const session1_ID = session1.textAsObject.id;
    const session2_ID = session2.textAsObject.id;
    const session3_ID = session3.textAsObject.id;

    let session1_M = session2_M = session3_M = 0;

    /*  we want to get only TRUE values */

    //add and sub values

    await add(session1_ID,3);
    await sub(session2_ID,7);
    await add(session3_ID,7);
    session1_M = await getM(session1_ID).then(x => x.textAsObject.m);
    session2_M = await getM(session2_ID).then(x => x.textAsObject.m);    
    session3_M = await getM(session3_ID).then(x => x.textAsObject.m);
    console.log(session1_M === 3);
    console.log(session2_M === -7);
    console.log(session3_M === 7);

    //multiply divide and reset
    await multiply(session1_ID,2);
    await divide(session2_ID,2);
    await reset(session3_ID);
    session1_M = await getM(session1_ID).then(x => x.textAsObject.m);
    session2_M = await getM(session2_ID).then(x => x.textAsObject.m);    
    session3_M = await getM(session3_ID).then(x => x.textAsObject.m);
    console.log(session1_M === 6);
    console.log(session2_M === -3.5);
    console.log(session3_M === 0);

    //start another session 
    const session4 = await startSession();
    const session4_ID = session4.textAsObject.id;


    //GENERATE status 500
    const response500_bad_op = await generateStatus500WithWeirdOpOrWithDivideByZero(session1_ID,'blabla',2,METHODS.POST);
    const response500_divide_by_zero = await generateStatus500WithWeirdOpOrWithDivideByZero(session2_ID,'divide',0,METHODS.PUT);
    const response500_wrong_op_to_method_post = await generateStatus500WithWeirdOpOrWithDivideByZero(session3_ID,'add',2,METHODS.PUT);
    const response500_invalid_num = await generateStatus500WithWeirdOpOrWithDivideByZero(session4_ID,'add','a',METHODS.POST);
    console.log(response500_bad_op.resultStatus === 500);
    console.log(response500_divide_by_zero.resultStatus === 500);
    console.log(response500_wrong_op_to_method_post.resultStatus === 500);
    console.log(response500_invalid_num.resultStatus === 500);
    
    
    //GET M and make sure it stayed the same
    session1_M = await getM(session1_ID).then(x => x.textAsObject.m);
    session2_M = await getM(session2_ID).then(x => x.textAsObject.m);    
    session3_M = await getM(session3_ID).then(x => x.textAsObject.m);
    session4_M = await getM(session4_ID).then(x => x.textAsObject.m);
    console.log(session1_M === 6);
    console.log(session2_M === -3.5);
    console.log(session3_M === 0);
    console.log(session4_M === 0);
    
    // RESET sessions 1,2 and DELETE sessions 3,4 
    await reset(session1_ID,2);
    await reset(session2_ID,2);
    await deleteSession(session3_ID);
    await deleteSession(session4_ID);
    session1_M = await getM(session1_ID).then(x => x.textAsObject.m);
    session2_M = await getM(session2_ID).then(x => x.textAsObject.m);    
    session3_M = await getM(session3_ID).then(x => x.textAsObject.m);
    session4_M = await getM(session4_ID).then(x => x.textAsObject.m);
    console.log(session1_M === 0);
    console.log(session2_M === 0);
    console.log(session3_M == undefined);
    console.log(session4_M == undefined);

    //GENERATE status 404
    const no_such_id_404 = await getM(session3_ID).then(x => x.resultStatus);
    console.log(Number(no_such_id_404) === 404);
    
    //DELETE ALL SESSIONS 
    await deleteSession(session1_ID);
    await deleteSession(session2_ID);
    session1_M = await getM(session1_ID).then(x => x.textAsObject.m);
    session2_M = await getM(session2_ID).then(x => x.textAsObject.m);    
    console.log(session1_M == undefined);
    console.log(session2_M == undefined);

    console.log('Finished testing - All results should be true');
    
}

startTesting();

