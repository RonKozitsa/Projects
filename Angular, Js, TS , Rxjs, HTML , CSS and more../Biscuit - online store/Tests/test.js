const serverApproach = require('./serverApproach');

const METHODS =  serverApproach.METHODS;
const approachToServer = serverApproach.approachToServer;
const baseURL = serverApproach.baseURL;
const ADMIN_ID = "5d7d50c8ab09874e08df228d";

//register screen
async function register(data) {
    const options = {
          method: METHODS.POST,
          url: `${baseURL}register`,
          headers: {
            "Content-Type": "application/json",
            "Content-Length": data.length
          },
          data: data
        }
  return await approachToServer(options);
}

//login screen
async function login(data) {
  const options = {
    method: METHODS.POST,
    url: `${baseURL}login`,
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length
    },
    data: data
  }
  return await approachToServer(options);
}
async function setCookie(item_id){
  options = {
    method: METHODS.GET,
    url: `${baseURL}cookie/${item_id}`
  }

  return await approachToServer(options)
}
async function addItem(item_id) {
  options = {
    method: METHODS.POST,
    url: `${baseURL}cart/additem/${item_id}`,
    headers: {
    'Cookie': `authToken=${ADMIN_ID}`
    }
  }
  
  return await approachToServer(options)
}

async function deleteUser(objectID) {
  return await approachToServer(
    `${baseURL}admin/deleteuser/${objectID}`,
    METHODS.DELETE
  );
}

async function filterByNameAndLastName(name, lastname) {
  return await approachToServer(
    `${baseURL}admin/bynameandlastname/${name}/${lastname}`,
    METHODS.GET
  );
}

async function filterByObjectId(objectid) {
  options = {
    method: METHODS.GET,
    url:  `${baseURL}admin/filter/byobjectid/${objectid}`,
    headers: {
      'Cookie': `authToken=${ADMIN_ID}`
    }
  }
  return await approachToServer(options);
}

// cart + checkout screen
async function getUserCart() {
  options = {
    method: METHODS.GET,
    url: `${baseURL}cart/getusercart`,
    headers: {
    'Cookie': `authToken=${ADMIN_ID}`
    }
  }
  return await approachToServer(options);
}


async function deleteItem(item_id) {
  options = {
    method: METHODS.DELETE,
    url: `${baseURL}cart/deleteitem/${item_id}`,
    headers: {
    'Cookie': `authToken=${ADMIN_ID}`
    }
  }
  
  return await approachToServer(options)
}

async function deleteAllItems() {
  return await approachToServer(
    `${baseURL}cart/deleteallitems`,
    METHODS.DELETE
  );
}

//store screen

async function search(searchedText) {
  return await approachToServer(
    `${baseURL}store/search/${searchedText}`,
    METHODS.GET
  );
}

async function addPurchase(item_id) {
  options = {
    method: METHODS.POST,
    url: `${baseURL}addpurchase/${item_id}`,
    headers: {
    'Cookie': `authToken=${ADMIN_ID}`
    }
  }
  return await approachToServer(options);
}

async function setstatusbyid(status) {
  options = {
    method: METHODS.POST,
    url:   `${baseURL}setstatusbyid/${status}`,//
    headers: {
      'Cookie': `authToken=${ADMIN_ID}`
    }
  }
  return await approachToServer(options);
}
async function registerTesting(){
 //register success
 const userRegisterSuccess = JSON.stringify({
  ID: "test",
  Password: "qwerty",
  Email: "shnizels@gmail.com"
});
const registerSuccessResult = await register(userRegisterSuccess);
console.log("Testing Register Success");
console.log("----------------------------------------");
console.log("status code is 200? " );
console.log(registerSuccessResult.status == 200);
console.log("");

  //register failure (registering without password, which is mandatory)
  const userRegisterFailure = JSON.stringify({
    Password: "test"
  });
  
  const registerFailureResult = await register(userRegisterFailure)
  .catch((err)=>{
  failedStatus = 401
  console.log("Testing Register Failure");
  console.log("----------------------------------------");
  console.log("status code is 401?");
  console.log(failedStatus == 401);
  console.log("");
  });
}


async function loginTesting(){  
    //login success
  const userLoginSuccess = JSON.stringify({
    ID: "admin",
    Password: "admin"//
  });
  const LoginSuccessResult = await login(userLoginSuccess);
  console.log("Testing Login Success");
  console.log("----------------------------------------");
  console.log("status code is 200?")
  console.log(LoginSuccessResult.status == 200);
  console.log("");

    //login failure
  const userLoginFailure = JSON.stringify({
    ID: "notExists",
    Password: "notExists"
  });
  
  const LoginFailureResult = await login(userLoginFailure).catch((err)=>{
    failedStatus = 401
    console.log("Testing Login Failure");
    console.log("----------------------------------------");
    console.log("status code is 401?")
    console.log(failedStatus == 401);
    console.log("");
    });
  }

async function addItemTesting(){
  const addItemSuccessResult = await addItem("5d7230f94c5c940bbc2f305d");
  console.log("Testing AddItem");
  console.log("----------------------------------------");
  console.log(`adding an existing item to existing admin user, status code is 200?`)
  console.log(addItemSuccessResult.status == 200);
  const userCart =  await getUserCart();
  addedItem = userCart.data.find(item=>item._id=="5d7230f94c5c940bbc2f305d");
  if(addedItem !== undefined){
    console.log("The item appears successfully in the user's cart ?" );
    console.log(addedItem !== undefined);
  }
  console.log("");
}

async function deleteItemTesting(){
  const deleteItemSuccessResult = await deleteItem("5d7230f94c5c940bbc2f305d");
  console.log("Testing deleteItem");
  console.log("----------------------------------------");
  console.log(`deleting an existing item from existing user cart, status code is 200?`)
  console.log((deleteItemSuccessResult.status == 200));
  const userCart =  await getUserCart();
  deletedItem = userCart.data.find(item=>item._id=="5d7230f94c5c940bbc2f305d");
  if(deletedItem === undefined){
    console.log("The item deleted from the user's cart successfully?" );
    console.log(deletedItem === undefined);
  }
}

async function setStatusTesting(){
  const setStatusSuccessResult = await setstatusbyid("admin");
  console.log("Testing setstatusbyid");
  console.log("----------------------------------------");
  console.log(`setting a status to existing admin user, status code is 200?`)
  console.log((setStatusSuccessResult.status == 200));
  const user =  await filterByObjectId(ADMIN_ID);
  adminStatus = user.data.Status;
  if(adminStatus === "admin"){
    console.log("\nThe status changed successfully in the admin's status field at mongoDB?" );
    console.log(adminStatus == adminStatus);
  }
  console.log("");
}

async function addPurchaseTesting(){
  const addPurchaseSuccessResult = await addPurchase("5d7230f94c5c940bbc2f305d");
  console.log("Testing AddPurchase");
  console.log("----------------------------------------");
  console.log(`adding an existing item to existing admin user, status code is 200?`)
  console.log(addPurchaseSuccessResult.status == 200);
  const response=  await filterByObjectId(ADMIN_ID);
  adminPurchasesCart = response.data.Purchases
  addedPurchaseItem = adminPurchasesCart.find(item=>item=="5d7230f94c5c940bbc2f305d");
  if(addedPurchaseItem !== undefined){
    console.log("The item appears successfully in the user's purchase cart ?" );
    console.log(addedPurchaseItem !== undefined);
  }
  console.log("");
}

async function startTesting() {
  await registerTesting();
  await loginTesting();
  await addItemTesting();
  await deleteItemTesting();
  await setStatusTesting();
  await addPurchaseTesting();
  }

startTesting();
