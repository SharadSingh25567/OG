import { parse } from "csv-parse/sync";
import fs from 'fs';
import { json } from "stream/consumers";


export class dataProvider{

gettestdatafromjson(filepath){

let data=JSON.parse(fs.readFileSync(filepath, 'utf8'));
return data;
}

gettestdatafromcsv(filepath){

    let data=parse(fs.readFileSync(filepath), {columns:true, skip_empty_lines:true});
    return data;
}

}