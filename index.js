var recipes=new Object();
function updateObjectWithKeyAndValue(object, key, value){
  var obj2=Object.assign({},object,{[key]:value});
  return obj2;
}
