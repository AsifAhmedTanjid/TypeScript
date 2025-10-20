//enum - store constants ; dusplicate value is not allowed
//numberic enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["ReadData"] = 1] = "ReadData";
    RequestType[RequestType["DeleteData"] = 2] = "DeleteData";
    RequestType[RequestType["SaveData"] = 3] = "SaveData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
//string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read_Data";
    RequestType2["deleteData"] = "Delete_Data";
    RequestType2["saveData"] = "save_Data";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2);
console.log(RequestType2.deleteData);
console.log(RequestType.SaveData);
console.log(RequestType2["readData"]);
//heterogenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "Read_Data";
    RequestType3["deleteData"] = "Delete_Data";
    RequestType3["saveData"] = "save_Data";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3["id"], RequestType3.id);
