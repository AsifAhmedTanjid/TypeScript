//enum - store constants ; dusplicate value is not allowed

//numberic enum
enum RequestType{
    ReadData=1,
    DeleteData,
    SaveData,
}
console.log(RequestType);

//string enum
enum RequestType2 {
    readData="Read_Data",
    deleteData="Delete_Data",
    saveData="save_Data",
}
console.log(RequestType2);
console.log(RequestType2.deleteData);
console.log(RequestType.SaveData);
console.log(RequestType2["readData"]);

//heterogenous enum
enum RequestType3 {
    readData="Read_Data",
    deleteData="Delete_Data",
    saveData="save_Data",
    id=101
}
console.log(RequestType3["id"],RequestType3.id);
